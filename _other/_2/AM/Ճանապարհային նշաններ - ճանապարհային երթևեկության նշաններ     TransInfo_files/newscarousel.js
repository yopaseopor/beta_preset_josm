var init_left = 0;
function initCarusel(id)
{
	_p = $("#slidescontiner").position();
	
	init_left = _p.left;
	//$("#npointer").hide();
	$(id).find('li').each( function(ind,elemLi)
	{
		
		elem = $(elemLi).find('a');
		elem =elem[0];
		var _id=$(elem).attr('id');
		

		var _img = new Image();
		_img.id = "P_"+_id;
		_img.src = $(elem).attr('rel');
		 $(elemLi).addClass('item');
		var _anchor = document.createElement('a');
		_anchor.id = "a"+_img.id
		_anchor.href = $(elem).attr('href');
		
		$("#slidescontiner").append(_anchor);
		$(_anchor).append(_img);
		tpos = $(elemLi).position();
		twidth = $(elem).width();
		
		$("#npointer").css( {top:tpos.top,left:273});
		_img.onload = function()
		{
			try{
			
			_slidescontiner = document.getElementById('slidescontiner');
			_width = _slidescontiner.style.height; 
			_width = parseInt(_width.replace('px',''));
			
			 if(isNaN(_width))
				_width = 0;
			
			// alert(_width);
			 
			_width+=parseInt(_width)+parseInt(this.height);
			
			
			$(_slidescontiner).css('height' , _width);
			
			_anchor = $("#a"+this.id);
			
			this.left = _width-$(this).outerHeight();
			
			_anchor.css("top",_width-$(this).outerHeight());
			//this.title = _anchor.width()+"x"+_anchor.height();
			
			}catch(e) { alert(e.message)}
	   }
	
	  $(elem).click( function(){  
	  
								_naimation(this,1);
								//return false;
								
								})
	  $(elem).hover( function(){ stopAnimationOnThis(this)},function(){ continueAnimationFromThis(this)})
		
							});
	
	//$("#npointer").show();
			caruselPlay();	
			
						
							
}

function stopAnimationOnThis(_this)
{
	_naimation(_this,0);
	if(_interval){
		clearInterval(_interval);
		_interval = null;
	}
}
function continueAnimationFromThis(_this)
{
	_interval = setInterval("start()",8000);
}


function _naimation(_this,_reload)
{
	$('.descs').css('display', 'none');
	$('.item').removeClass('Ncurrent');
	$(_this).parent().addClass('Ncurrent');

	_IMG = "#P_"+_this.id;


	var new_id = _this.id.replace('N','');
	_descDiv = "#D"+new_id;
	$(_descDiv).fadeIn(700);

	pImg = $(_IMG).position();
	pContiner = $("#slidescontiner").position();
	k = -1;
	
	_left = init_left + (k)*pImg.top;
	//alert(init_left+"******"+k+"*******"+pImg.top);
	$("#slidescontiner").stop(false,true).animate({top:_left},700, function(){ 
															a = $(_IMG).parent(); 
															_href = $(a).attr('href'); 
															//if(_reload)
															//	window.location = _href; 
															
															});
	tpos = $(_this).position();
	
	twidth = $(_this).parent().position();
	//alert(tpos.top);
	$("#npointer").stop(false,true).animate( {top:tpos.top},0);
}
var 	_interval = null;
function caruselPlay(id)
{
	try{
	_x = $('.item:first').find('a');//.trigger('click');
	_naimation(_x[0],0);
	}
	catch(e) { /*alert(e+"120");*/ } 
	_interval = setInterval("start()",8000);
};

function start()
{
	try{
	_next = $('.Ncurrent').next();
	
	if(_next.length > 0)
	{
		_x = $(_next).find('a');//.trigger('click');
			_naimation(_x[0],0);
	}else
	{
		_x =$('.item:first').find('a');//.trigger('click');
					_naimation(_x[0],0);
	}
	}
	catch(e) {/*alert(e+"140");*/} 
};
