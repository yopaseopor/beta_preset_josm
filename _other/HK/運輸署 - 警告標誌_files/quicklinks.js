function generateQuicklins(){
	$.getJSON( "/filemanager/template/common/js/quicklinks.json", function( data ) {
		var quicklinks = data.quicklinks;
		if(window.location.href.indexOf('_t.html') != -1){
			var text = true;
		}else{
			var text = false;
		}
		$('#quicklinks').html('');
		for (i = 0; i < quicklinks.length; i++){
			if(text == false){
				var img = $('<img />');
				var li = $('<li></li>');
			} 
			var link = $('<a></a>');
			
			if(text == false) img.attr('src', quicklinks[i].imgUrl);
			if(url.indexOf('en/') != -1){
				link.attr('href', quicklinks[i].enUrl);
				link.attr('title', quicklinks[i].enTitle);
				link.html(quicklinks[i].enTitle);
				if(text == false) img.attr('alt', quicklinks[i].enTitle);
			}else if(url.indexOf('tc/') != -1){
				link.attr('href', quicklinks[i].tcUrl);
				link.attr('title', quicklinks[i].tcTitle);
				link.html(quicklinks[i].tcTitle);
				if(text == false) img.attr('alt', quicklinks[i].tcTitle);
			}else{
				link.attr('href', quicklinks[i].scUrl);
				link.attr('title', quicklinks[i].scTitle);
				link.html(quicklinks[i].scTitle);
				if(text == false) img.attr('alt', quicklinks[i].scTitle);
			}
			if(quicklinks[i].newWindow == 'true'){
				link.attr('target', '_blank');
			}
			
			if(text == false){
				li.append(img);
				li.append(link);
			} 
			
			if(text == true) {
				$('#quicklinks').append(link);
				if(i != quicklinks.length - 1) $('#quicklinks').append(' | ');
			}else{
				if(mobile == false){
					$('#icon_wrap > div > ul > li').eq((quicklinks[i].tab - 1)).find('.icon_sub_wrap ul').append(li);
				}else{
					$('.icon_sub_wrap').eq((quicklinks[i].tab - 1)).find('ul').append(li);
				}
			}
		}
		
	});
}