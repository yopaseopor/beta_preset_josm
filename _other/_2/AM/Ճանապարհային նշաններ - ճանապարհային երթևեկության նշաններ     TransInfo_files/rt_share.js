$(function(){
	({
		get: {
			tw: function(url, cb) {
				var result = 0,
					callback = cb || function(){};
				
				$.ajax({
					url: 'https://cdn.api.twitter.com/1/urls/count.json?url=' + url,
					dataType: "jsonp",
					success: function(data) {
						result = data.count;
						callback(result);
					}
				});
			},
			
			fb: function(url, cb) {
				var result = 0,
					callback = cb || function(){};
				
				$.ajax({
					url: 'https://api.facebook.com/method/links.getStats?urls=' + url + '&format=json',
					dataType: "jsonp",
					success: function(data) {
						callback(data);
					}
				});
			},
			
			ok: function(url, cb) {
				var result = 0;
				
				if(!window.ODKL){
					window.ODKL = {};
				}

				window.ODKL.updateCount = function(idx, number) {
					$(".share-btn__ok").parent().find("span").text(number);
				};
				
				$.ajax({
					url: 'http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid=odklcnt0&ref=' + url,
					dataType: "jsonp",
					success: function(data) {}
				});
			},
			
			vk: function(url, cb) {
				var result = 0;
				
				if(!window.VK){
					window.VK = {};
				}

				window.VK.Share = {
					count: function(idx, number) {
						$(".share-btn__vk").parent().find("span").text(number);
					}
				};
				
				$.ajax({
					url: 'http://vk.com/share.php?act=count&index=1&url=' + url,
					dataType: "jsonp",
					success: function(data) {}
				});
			},
			
			gp: function(url, cb) {
				var result = 0,
					callback = cb || function(){};
				
				if (!window.services) {
                    window.services = {};
                    window.services.gplus = {}
                }
                window.services.gplus.cb = function(number) {
                    window.gplusShares = number;
                };
                $.getScript('http://share.yandex.ru/gpp.xml?url=' + url, function() {
                    result = window.gplusShares;
                    if (result > 0) {
						$(".share-btn__gp").parent().find("span").text(result);
					}
                });
			}
		},
		
		set: {
			fb: function($a, url) {
				$a.click(function() {
					var params = 's=100&p[url]=' + url + '&p[title]=' + document.title + '&p[summary]=' + $("meta[property='og:description']").attr("content") + '&p[images][0]=' + $("meta[property='og:image']").attr("content");
					
					window.open('http://www.facebook.com/sharer.php?m2w&' + params, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
					return false;
				});
			},
			
			tw: function($a, url) {
				$a.click(function() {
					window.open('https://twitter.com/intent/tweet?text=' + document.title + ' ' + '&url=' + url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
					return false;
				});
			},
			
			ok: function($a, url) {
				$a.click(function() {
					window.open('http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=' + url + '&title=' + document.title, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
					return false;
				});
			},
			
			vk: function($a, url) {
				$a.click(function() {
					window.open('http://vk.com/share.php?url=' + url + '&title=' + document.title, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
					return false;
				});
			},
			
			gp: function($a, url) {
				$a.click(function() {
					window.open('https://plus.google.com/share?url=' + url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
					return false;
				});
			},
		},
		
		init: function(p) {
			if(!$(".top-share").length){
				return;
			}
			
			var url       = document.location.href,
				$share    = $(".top-share"),
				$stopElem = p.stopElem.next(),
				$body     = $("body"),
				
				params    = $.extend({
					fly: true
				}, p);
			
			this.get.tw(url, function(result){
				$(".share-btn__tw").parent().find("span").text(result);
			});
			this.set.tw($(".share-btn__tw"), url);
			
			this.get.fb(url, function(result){
				(typeof result[0].share_count != undefined) && $(".share-btn__fb-like").parent().find("span").text(result[0].share_count);
			});
			this.set.fb($(".share-btn__fb-like"), url);
			
			this.get.vk(url);
			this.set.vk($(".share-btn__vk"), url);
			
			this.get.ok(url);
			this.set.ok($(".share-btn__ok"), url);
			
			this.get.gp(url, function(result){
				$(".share-btn__gp").parent().find("span").text(result);
			});
			this.set.gp($(".share-btn__gp"), url);
			
			if(params.fly && $stopElem.length){
				$(window).scroll(function() {
					var st     = $(window).scrollTop(),
						height = $share.outerHeight(),
						stop   = $stopElem.offset().top - 200,
						start  = $share.offset().top + height,
						$elem;
					
					if(st > start && st < stop) {
						if(!$(".replace-share").length) {
							$elem = $('<div />', {
								'class': 'replace-share'
							}).height($share.outerHeight()).appendTo($share);
						}
						
						!$body.hasClass("start-fly-share") && $body.addClass("start-fly-share");
						$body.hasClass("hide-fly-share")  && $body.removeClass("hide-fly-share");
					} else if (st > start && st >= stop) {
						!$body.hasClass("hide-fly-share") && $body.addClass("hide-fly-share");
					} else {
						$body.hasClass("hide-fly-share")  && $body.removeClass("hide-fly-share");
						$body.hasClass("start-fly-share") && $body.removeClass("start-fly-share");
						
						$(".replace-share").length && $(".replace-share").remove();
					}
				});
			}
		}
	}).init({
		fly: $(".not-fly .top-share").length ? false : true,
		stopElem: $("#content .poll").length ? $("#content .poll") : $(".article-body")
	});
});
