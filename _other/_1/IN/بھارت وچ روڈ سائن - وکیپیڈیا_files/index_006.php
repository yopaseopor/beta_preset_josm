
(function (mw, $) {
	"use strict";
	// Private cache & utilities
	var el, w, num,
		/**
		 * @var {RegExp} Matcher for characters that can be mapped.
		 * @example matchers.urdu[0] matches urdu numeral for 0
		 *  can be mapped with e.g. maps.arabic[0].
		 */
		matchers = {},
		msgs = {
			'option-default': {
				en: 'Default',
				ur: 'ڈیفالٹ',
				pnb: 'اصل'
			},
			'option-arabic': {
				en: '123'
			},
			'option-shahmukhi': {
				en: 'Shahmukhi',
				pnb: '۱۲۳'
			},
			'label-url': {
				en: '//www.mediawiki.org/wiki/MediaWiki_talk:Gadget-Numerakri.js',
				ur: '//ur.wikipedia.org/wiki/وکیپیڈیا:اعداد_تبدیلی',
				pnb: '//pnb.wikipedia.org/wiki/وکیپیڈیا:گنتی تبدیلی'
			},
			'label-text': {
				en: 'Convert numerals',
				ur: 'اعداد_تبدیلی',
				pnb: 'گنتی بدلو'
			},
			'label-tooltip': {
				en: 'Convert between Arabic and Urdu numerals',
				ur: 'اردو اور عربی اعداد میں تبدیلی کرو',
				pnb: 'عدداں نوں شاہمکھی چ بدلو'
			}
		},
		maps = {
			// 0 to 9
			shahmukhi: [ '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹' ],
			arabic:     [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
		},
		compatCookie = {
			'-1': 'default',
			'0' : 'arabic',
			'3': 'shahmukhi'
		},
		// For consistency recreate these objects locally in older browsers so that
		// we can use the same constants in fallback code as well.
		NodeFilter = window.NodeFilter || {
			FILTER_ACCEPT: 1,
			FILTER_REJECT: 2,
			FILTER_SKIP: 3
		},
		Node = window.Node || {
			TEXT_NODE: 3
		};

	// Fallback for document.createTreeWalker for older browsers (IE6-8)
	function walkTheDomFallback(node, filter, apply) {
		var val = filter(node);
		switch (val) {
		case NodeFilter.FILTER_ACCEPT:
			apply(node);
			node = node.firstChild;
			break;
		case NodeFilter.FILTER_REJECT:
			node = node.nextSibling;
			break;
		case NodeFilter.FILTER_SKIP:
			node = node.firstChild;
			break;
		}
		while (node) {
			walkTheDomFallback(node, apply);
			node = node.nextSibling;
		}
	}

	function walkTheDom(filter, apply) {
		if (document.createTreeWalker) {
			w = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, filter, false);
			while (el = w.nextNode()) {
				apply(el);
			}
		} else {
			walkTheDomFallback(document.body, filter, apply);
		}
	}

	function msg(key) {
		return msgs[key][mw.config.get('wgUserLanguage')] || msgs[key].en;
	}

	function getMatchers(target) {
		var rChars;
		if (!matchers[target]) {
			rChars = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };
			$.each(maps, function (type, map) {
				if (type !== target) {
					for (var i = 0; i <= 9; i++) {
						rChars[i].push(map[i]);
					}
				}
			});
			rChars = $.map(rChars, function (chars) {
				return new RegExp('(' + $.map(chars, mw.RegExp.escape).join('|') + ')', 'g');
			});
			matchers[target] = rChars;
		}
		return matchers[target];
	}

	/**
	 * @singleton
	 */
	num = window.Numerakri = {
		matchers: matchers,

		/**
		 * @property {string} One of 'default', 'arabic' or 'shahmukhi'.
		 *  default leaves the page unchanged (default).
		 */
		type: 'default',

		/**
		 * @property {jQuery|null} The HTML interface. May or may not be
		 * attached to the document yet.
		 */
		$int: null,

		/**
		 * @param {HTMLElement|TextNode} el
		 */
		filterNode: function (el) {
			var n = el.nodeName && el.nodeName.toLowerCase();
			if (n === 'input' || n === 'textarea' || $(el).hasClass('mw-numerakri-skip')) {
				return NodeFilter.FILTER_REJECT;
			}
			if (el.nodeType === Node.TEXT_NODE) {
				return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		},

		/**
		 * @method
		 * @param {TextNode} el
		 */
		handleTextNode: function (el) {
			var live = el.nodeValue,
				fix = live,
				matchers = getMatchers(num.type),
				i = 0;
			for (; i <= 9; i++) {
				fix = fix.replace(matchers[i], maps[num.type][i]);
			}
			if (live !== fix) {
				el.nodeValue = fix;
			}
		},

		isValidType: function (type) {
			return type === 'default' || !!maps[type];
		},

		/**
		 * Register an additional type.
		 *
		 * @example
		 *  num.addType('arabic', { map: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] });
		 * @param {string} type ID
		 * @param {Object} data Contents:
		 * - {Object} map
		 * - {string|Object} msg [optional] Label for this type or translations of labels,
		 *   keyed by language code. Defaults to ucFirst transformation of ID.
		 */
		addType: function (type, data) {
			if (type && data && $.isArray(data.map)) {
				// Map
				maps[type] = data.map;

				// Messages
				if (data.msg) {
					if ($.isPlainObject(data.msg)) {
						if (!data.msg.en) {
							data.msg.en = $.ucFirst(type);
						}
					} else {
						data.msg = { en: String(data.msg) };
					}
				} else {
					data.msg = { en: $.ucFirst(type) };
				}
				msgs['option-' + type] = data.msg;

				if (this.$select) {
					this.$select.append(
						$('<option>').val(type)
							.text(msg('option-' + type))
							.prop('selected', this.getStoredType() === type)
					);
				}
				return true;
			}
			return false;
		},

		/**
		 * @method
		 * @param {string} type One of 'arabic' or 'devanagari'.
		 * @throws Error
		 */
		setType: function (type) {
			if (!this.isValidType(type)) {
				mw.log('Unknown Numerakri type: ' + type);
				return false;
			}

			this.type = type;

			// Remember for 30 days
			$.cookie('mw-numerakri-type', type, { expires: 30, path: '/' });

			this.convertPage();
		},

		/**
		 * @return {string|undefined}
		 */
		getStoredType: function () {
			// From cookie
			var stored = $.cookie('mw-numerakri-type');

			// From cookie (old version)
			if (!stored) {
				stored = compatCookie[$.cookie('numconvert')];
			}

			return stored;
		},

		/**
		 * Do the conversion.
		 * @method
		 */
		convertPage: function () {
			if (this.type === 'default') {
				// Type 'default' means "don't change the page".
				return;
			}

			switch (this.type) {
			case 'arabic':
				$('ol:lang(ur) li, ol.references, li.references').css('list-style-type', 'decimal');
				break;
			case 'shahmukhi':
				$('ol:lang(pnb) li, ol.references, li.references').css('list-style-type', 'shahmukhi');
				break;
			}

			walkTheDom(this.filterNode, this.handleTextNode);
		},

		setupInterface: function () {
			var $select, stored;
			$select = $('<select>').addClass('mw-numerakri-skip').append(
				$('<option>').val('default').text(msg('option-default')),
				// $.map returns an array
				$.map(maps, function (map, type) {
					return $('<option>').val(type).text(msg('option-' + type));
				})
			);

			stored = num.getStoredType();
			if (stored) {
				// Set initial value from storage
				$select.val(stored);
				num.setType(stored);
			}

			$select.change(function () {
				num.setType(this.value);
			});

			if (num.$select) {
				num.$select.replaceWith($select);
			} else {
				num.$select = $select;
			}
		},

		attachInterface: function () {
			var potlet, $menu;

			if (num.$select === null) {
				num.setupInterface();
			}

			$('#pt-numconvert').remove(); // Just in case
			potlet = mw.util.addPortletLink(
				'p-personal',
				msg('label-url'),
				msg('label-text'),
				'pt-numconvert',
				msg('label-tooltip'),
				null,
				mw.user.isAnon() ? '#pt-createaccount' : '#pt-userpage'
			);

			$menu = $('<div>').addClass('mw-numerakri-menu').append(num.$select);

			$(potlet).append($menu);
		}
	};

	num.setupInterface();

	mw.loader.using('mediawiki.user', function () {
		$(document).ready(num.attachInterface);
	});

})(mediaWiki, jQuery);