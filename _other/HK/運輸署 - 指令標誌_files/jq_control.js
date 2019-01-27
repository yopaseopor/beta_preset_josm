$(document).ready(function(){
	if (typeof(loadFontSize)=="function") {
		loadFontSize();
	}
	$('img[class^="btn_o"]').each(function(){
		var theImgType = $(this).attr('src').toString().match(/\.[a-z][a-z][a-z][a-z]?$/);
		var theExt = $(this).attr('class').toString().match(/btn_[a-zA-Z0-9]*/gi).toString().replace('btn', '');
		$(this).mouseover(function(){
			$(this).attr('src', $(this).attr('src').toString().replace(''+theImgType,''+theExt+theImgType));
	    }).mouseout(function(){
			$(this).attr('src', $(this).attr('src').toString().replace(''+theExt+theImgType,''+theImgType));
	    });
	});

	$('input[class^="btn_o"]').each(function(){
		var theImgType = $(this).attr('src').toString().match(/\.[a-z][a-z][a-z][a-z]?$/);
		var theExt = $(this).attr('class').toString().match(/btn_[a-zA-Z0-9]*/gi).toString().replace('btn', '');
		$(this).mouseover(function(){
			$(this).attr('src', $(this).attr('src').toString().replace(''+theImgType,''+theExt+theImgType));
	    }).mouseout(function(){
			$(this).attr('src', $(this).attr('src').toString().replace(''+theExt+theImgType,''+theImgType));
	    });
	});

	$('img').each(function(){
		if ($(this).attr('title')=='' && $(this).attr('alt')!='') {
			$(this).attr('title', $(this).attr('alt'));
		}
	});

	$('input[type="image"]').each(function(){
		if ($(this).attr('title')=='' && $(this).attr('alt')!='') {
			$(this).attr('title', $(this).attr('alt'));
		}
	});

	// Configure button for sc version
	if (typeof(configureScButtons)=="function") {
		configureScButtons();
	}
	// End of Configure button for sc version

	$("table.tableframe tr:even").not($("table.notableframe tr")).addClass("even");
	if (typeof(configureLeftMenu)=="function") {
		configureLeftMenu();
	}
	if (typeof(configureRevisionDate)=="function") {
		configureRevisionDate();
	}
	if (typeof(updatelink)=="function") {
		updatelink();
	}
	if (typeof($.preloadImages)=="function") {
		$.preloadImages();
	}

	$('#HeaderPageName').html($('#div_generated_pagename').html());
});


function debug(msg){
	if($('div[id="debug"]').length == 0){
		$('body').append('<div id="debug" style="position:absolute; left: 10px; top: 10px; background: #999999; color: #333333;"></div>');
	}$('div[id="debug"]').html(msg);
}