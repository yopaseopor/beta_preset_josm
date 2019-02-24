function ear()
{
	var lr=(window.innerWidth-1340)/2;
	$('#left-ear1').css('left',lr+'px','display');
	$('#right-ear1').css('right',lr+'px');
}

$(document).ready(function(){
    //$('.ModelMainTbl div:last').css('background','none');
    
    var width = screen.width;
  var height = screen.height;

 
 if(width <= 1600   &&  height <=900){
    $('#mainCont').css({
        "background-position":"center -200px",
         
    })
 }
 else{
   $('#mainCont').css({
        "background-position":"center 0",
         
    })
}
    
});

$(document).ready(function(e) {
    var height = $('#headCont').height();
    ear();
	$('#show_all').hide();
    
    

  /*  if(module != 'home')
    {
        
        setTimeout(function(){
                $('html, body').animate({
    scrollTop: height
}, 1000);
            
            
        },2000)
 

    }*/
});

window.onresize = function() {
		ear();
	};

function show_offerList()
{
	var obj = jQuery.parseJSON(ReadCookie('___trans_info_saved_items'))
	if(ReadCookie('___trans_info_saved_items')!='')
	{
		var obj = jQuery.parseJSON(ReadCookie('___trans_info_saved_items'))
		
		$(".saved_items").find("tr:gt(0)").remove();
		$(".offerList_offerList").hide("slow");
		
		$.each( obj, function( key, value ) {
			var newArray = value.name.split(",");
		//console.log(newArray);
		  $('.saved_items').append('<tr class="offerList_lines" style="display: table-row;"> <td colspan="11"><div class="offerList_line"></div></td></tr><tr class="my offerList_last"><td class="offerList_just"><a href='+value.href+'>'+newArray[0]+
		  '</a></td><td class="offerList_shadow"></td><td class="offerList_just">'+newArray[2]+
		  '</td><td class="offerList_shadow"></td><td class="offerList_just"><img src="/img/offers/thumb/'+value.img+
		  '"/></td><td class="offerList_shadow"></td><td class="offerList_just">'+newArray[1]+
		  '</td><td class="offerList_shadow"></td><td class="offerList_just">'+newArray[3]+
		  '</td><td class="offerList_shadow"></td><td class="offerList_just">'+newArray[4]+
		  '</td></tr>')
		});
		$('.saved_items').show("slow");
		$("html, body").animate({
				scrollTop : 400
			}, 1100);
		$('#show_list').hide();
		$('#show_all').show();
	}
	else
	{	
		alert("Plese select at least one item");
	}

}
function show_table()
{	
	$('table.saved_items').hide("slow");
	$('.offerList_offerList').show("slow");
	//$(".offerList_offerList .my").find("tr:gt(0)").hide("slow");
	//$(".offerList_offerList").find("tr:gt(0)").show("slow");
	$('#show_list').show();
	$('#show_all').hide();
	
}
function remove_offerList()
{

	con =confirm("are you sure to delete saved item list?");
	if(con==true)
	{
		name="___trans_info_saved_items";
		document.cookie = name + '=; expires= Thu, 01 Jan 1970 00:00:01 GMT; path=/';
		show_table();
        $('#show_list,#remove_list').hide();
		$('.offerList_offerList').find('a.offerList_added').html("+");
		$('.offerList_offerList').find('a').removeClass('offerList_added');
		
	}
}
$(document).ready(function()
{
    if($('#vk_like').length)
    {
        $('#vk_like').css("clear","none");
    }
    
if($('.newsGal').length != 0)
{
    	$(".newsGal").awShowcase(
	{
		content_width:			648,
		content_height:			375,
		fit_to_parent:			false,
		auto:					false,
		interval:				3000,
		continuous:				false,
		loading:				true,
		tooltip_width:			200,
		tooltip_icon_width:		32,
		tooltip_icon_height:	32,
		tooltip_offsetx:		18,
		tooltip_offsety:		0,
		arrows:					true,
		buttons:				false,
		btn_numbers:			false,
		keybord_keys:			true,
		mousetrace:				false, /* Trace x and y coordinates for the mouse */
		pauseonover:			true,
		stoponclick:			true,
		transition:				'hslide', /* hslide/vslide/fade */
		transition_delay:		300,
		transition_speed:		500,
		show_caption:			'onhover', /* onload/onhover/show */
		thumbnails:				true,
		thumbnails_position:	'outside-last', /* outside-last/outside-first/inside-last/inside-first */
		thumbnails_direction:	'horizontal', /* vertical/horizontal */
		thumbnails_slidex:		2, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
		dynamic_height:			false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
		speed_change:			false, /* Set to true to prevent users from swithing more then one slide at once. */
		viewline:				false /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
	});
    $('.newsGal').show();
}
if($('.Newsshowcase').length != 0)
{
    	$(".Newsshowcase").awShowcase(
	{
		content_width:			428,
		content_height:			245,
		fit_to_parent:			false,
		auto:					false,
		interval:				3000,
		continuous:				false,
		loading:				true,
		tooltip_width:			200,
		tooltip_icon_width:		32,
		tooltip_icon_height:	32,
		tooltip_offsetx:		18,
		tooltip_offsety:		0,
		arrows:					false,
		buttons:				false,
		btn_numbers:			false,
		keybord_keys:			true,
		mousetrace:				false, /* Trace x and y coordinates for the mouse */
		pauseonover:			true,
		stoponclick:			true,
		transition:				'fade', /* hslide/vslide/fade */
		transition_delay:		300,
		transition_speed:		500,
		show_caption:			'show', /* onload/onhover/show */
		thumbnails:				true,
		thumbnails_position:	'outside-last', /* outside-last/outside-first/inside-last/inside-first */
		thumbnails_direction:	'vertical', /* vertical/horizontal */
		thumbnails_slidex:		1, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
		dynamic_height:			false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
		speed_change:			true, /* Set to true to prevent users from swithing more then one slide at once. */
		viewline:				false /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
	});
$(".Newsshowcase").css("visibility","visible");
}


});