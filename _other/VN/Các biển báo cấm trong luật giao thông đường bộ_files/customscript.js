var $ = jQuery.noConflict();
jQuery.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

/*----------------------------------------------------
/* Mark current day in calendar widget
/*--------------------------------------------------*/
jQuery(document).ready(function() {
	if ( jQuery('#calendar_wrap').length ) {
		jQuery('#calendar_wrap #today').each(function() {
			var $this = jQuery(this),
				dayIndex = $this.index();
			$this.closest('#wp-calendar').find('thead tr th').eq(dayIndex).addClass('today');
		});
	}
});

/*----------------------------------------------------
/* Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function() {
	//move-to-top arrow
	jQuery("body").prepend("<div id='move-to-top' class='animate '><i class='fa fa-chevron-up'></i></div>");
	var scrollDes = 'html,body';  
	/*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
	if(navigator.userAgent.match(/opera/i)){
		scrollDes = 'html';
	}
	//show ,hide
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 160) {
			jQuery('#move-to-top').addClass('filling').removeClass('hiding');
		} else {
			jQuery('#move-to-top').removeClass('filling').addClass('hiding');
		}
	});
	// scroll to top when click 
	jQuery('#move-to-top').click(function () {
		jQuery(scrollDes).animate({ 
			scrollTop: 0
		},{
			duration :500
		});
	});
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    var menu_wrapper = jQuery('.secondary-navigation')
    .clone().attr('class', 'mobile-menu')
    .wrap('<div id="mobile-menu-wrapper" />').parent().hide()
    .appendTo('body');

    jQuery('.toggle-mobile-menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery('#mobile-menu-wrapper').show();
        jQuery('body').toggleClass('mobile-menu-active');
    });
    
}).click(function() {
    jQuery('body').removeClass('mobile-menu-active');
});


/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function() { 
	$('#header .menu ul.sub-menu, #header .menu ul.children').hide(); // hides the submenus in mobile menu too
	$('#header .menu li').hover(
		function() {
			$(this).children('ul.sub-menu, ul.children').slideDown('fast');
		}, 
		function() {
			$(this).children('ul.sub-menu, ul.children').hide();
		}
	);
});

/*----------------------------------------------------
/*  Vertical ( widget ) menu
/* ------------------------------------------------- */
jQuery(document).ready(function() { 
	$('.widget_nav_menu ul.sub-menu').hide();
	$('.widget_nav_menu .current-menu-item').last().parents('.menu-item-has-children').addClass('active').children('ul.sub-menu').show();
	$('.widget_nav_menu .menu-item-has-children>a').append('<span class="menu-caret" />');
	$('.menu-caret').click(function(e) {
			e.preventDefault();
			$(this).parent().parent().toggleClass('active').children('ul.sub-menu').slideToggle('fast');
		}
	);
});

/*----------------------------------------------------
/* Social button scripts
/*---------------------------------------------------*/
jQuery(document).ready(function(){
	jQuery.fn.exists = function(callback) {
	  var args = [].slice.call(arguments, 1);
	  if (this.length) {
		callback.call(this, args);
	  }
	  return this;
	};
	(function(d, s) {
	  var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.src = url; js.id = id;
		fjs.parentNode.insertBefore(js, fjs);
	  };
	jQuery('span.facebookbtn, .facebook_like').exists(function() {
	  load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
	});
	jQuery('span.gplusbtn').exists(function() {
	  load('https://apis.google.com/js/plusone.js', 'gplus1js');
	});
	jQuery('span.twitterbtn').exists(function() {
	  load('//platform.twitter.com/widgets.js', 'tweetjs');
	});
	jQuery('span.linkedinbtn').exists(function() {
	  load('//platform.linkedin.com/in.js', 'linkedinjs');
	});
	jQuery('span.pinbtn').exists(function() {
	  load('//assets.pinterest.com/js/pinit.js', 'pinterestjs');
	});
	jQuery('span.stumblebtn').exists(function() {
	  load('//platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
	});
	}(document, 'script'));
});