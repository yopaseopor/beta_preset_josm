$(function() {
	$("#accordion").accordion({
		 heightStyle : "content",
		 collapsible: true,
		 active: 0,
		 create: function( event, ui ) 
		 {
			$("h3:first", $("#accordion")).trigger('click');
		 }
	});
	
	
});