function selectThisf(Elem,eli)
{
	var _Elem = document.getElementById(Elem);
	_Elem.checked =!  _Elem.checked;
	
	if(_Elem.checked)
	{
		
		$('#'+eli).css({color:'#ECD900'});
	}
	else
	{
				$('#'+eli).css({color:'#808080'});
	}
}

function selectThisCH(elem,eli)
{
	if(elem.checked)
	{
		$('#'+eli).addClass("selected_body");
		 
	}else
	{
		$('#'+eli).removeClass("selected_body");
	}
}
function LockState(thisEl)
{
	if(thisEl.checked)
	{
		$("#filed_milage").attr('disabled','disabled');
		$("#filed_state").attr('disabled','disabled');
	}else
	{	
		$("#filed_milage").attr('disabled','')
		$("#filed_state").attr('disabled','')
	}
}
function changeProceStatus(elem)
{
	
	if(elem.checked)
	{
		$("#filed_price").attr('disabled','disabled');
		$("#filed_currency").attr('disabled','disabled');
	}else
	{
		$("#filed_price").attr('disabled','');
		$("#filed_currency").attr('disabled','');

	}
}



var __initOptions3Lavel=function()
{
	$(".unlocker").each( function(e,i)
								  {
									  $(i).click(function()
														  {
															  
															  try{
															  var _subsClassName = "."+this.id;
															  var _subRadios = $(_subsClassName);
															  if(this.checked)
															  {
																  _subRadios.attr('disabled','');
																  
															  }else
															  {
																  _subRadios.attr('disabled','disabled');
															  }
															  
															  }catch(e){alert(e+"Z")}
														   })
								  })
}

function overFlayInit()
{
	
	 $("#overlay").click( function(){ 
 							    
								$("#calcPlace").css({position:"absolute", width:"435px",'z-index':500 , "background":"#141a21", border:"1px solid #28333e", color:"#656565", padding:'5px'});
								$("#calcPlace").fadeIn(250);
								$("#calcPlace").focus();
							    $.get(this.href,function(datta){ caclcInit(datta)}); 
							    return false
							   });
	 
	
 
}
var caclcInit = function (data)
{
	$("#calcPlace").html(data);
	var filed_price_from= $("#filed_price_from option:selected");
	var filed_price_to  = $("#filed_price_to option:selected");

	var inp1 = $("#firstpayment");
	var inp2 = $("#permonth");
	var inp3 = $("#monthcount");
	
	var filed_price_to_s = parseFloat(filed_price_to.html());
	var filed_price_from_s =parseFloat( filed_price_to.html());
	$("#loanCloser").click(function(){ $("#calcPlace").fadeOut(250);});
	$("#loanCloser2").click(function(){ $("#calcPlace").fadeOut(250);});
	
	slider1 = $("#dinp1").slider({min: downpay.min,max: downpay.max, step: downpay.step, slide: function(event, ui) { inp1.val(ui.value);clacLoan(inp1,inp2,inp3) } });
	slider2 = $("#dinp2").slider({min: rate.min,max: rate.max, step: rate.step ,slide: function(event, ui) { inp2.val(ui.value);clacLoan(inp1,inp2,inp3) } });
	slider3 = $("#dinp3").slider({min: 12,max: 7*12,step: 6, slide: function(event, ui) { inp3.val(ui.value);clacLoan(inp1,inp2,inp3) } });
	
	
	slider1.slider("value", inp1.val());
	slider2.slider("value", inp2.val());
	slider3.slider("value", inp3.val());
	clacLoan(inp1,inp2,inp3);			   
	
	inp1.keyup( function(){ slider1.slider("value", this.value); clacLoan(inp1,inp2,inp3) })
	inp2.keyup( function(){ slider2.slider("value", this.value); clacLoan(inp1,inp2,inp3) })
	inp3.keyup( function(){ slider3.slider("value", this.value); clacLoan(inp1,inp2,inp3) })
	
	
}

var priceRanges = new Array(2000,200000);

var downpay = {};
    downpay.min = downpay_min;
    downpay.max = downpay_max;
    downpay.step =downpay_step;
	
var rate = 
{ 
"min" : rate_min,
"max":rate_max,
"step" : rate_step
};

function clacLoan(f,pm,mc)
{
	downpay = parseFloat(f.val()) || 0;
	rate = parseFloat(pm.val())   || 0;
	time = parseFloat(mc.val())   || 0;
	var sum     = downpay + rate * time;

	//$("#loanReslut").html(+"x"++"X"+mc.val())
	//jahreszinssatz 
	var year_interest_rate = 10;
	//zinsfaktor
	var interestfactor = Math.pow(year_interest_rate/100 + 1, 1/12);
	var realSum = downpay + (rate * (Math.pow(interestfactor, time) - 1)) / (Math.pow(interestfactor, time) * (interestfactor - 1));
	realSum = Math.floor(realSum/1000)*1000;
	
	var _range = getRange(realSum);
	var _filed_price_from = $("#filed_price_from");
	var _filed_price_to = $("#filed_price_to");
	
	_filed_price_to.val(_range.max);
	_filed_price_from.val(_range.min);
	
	_rangeMin = _range.min;
	_rangeMax = _range.max > 0  ? _range.max :" ";
	$("#loanReslut").html(_rangeMin+"-"+_rangeMax+" $");
}

function getRange(x)
{

	var _min =0, _max = 0;

	for(var i =priceRanges.length-1; i >=0;i--   )
	{
		
		if(priceRanges[i] <=  x  )
		{

			_min = priceRanges[i];
			break;
		}
	}
	
	for(var i =0; i < priceRanges.length-1;i++   )
	{
		if(priceRanges[i] > x  )
		{
			_max = priceRanges[i];
			break;
		}
	}
	
	return {min:_min,max:_max};
}

var iniadvSearch = function(){
__initOptions3Lavel();
overFlayInit();
//initmultiSelect();
}
$(document).ready(function() {	
   try{
	   
	   
	   
	   
	   $('a.adv').click ( function() {
		   
		   
		  var dialog = $("<div>",{html:'<img src="/images/ajax-loader.gif" alt="" title="" />'}).dialog(
		  {
			  modal:true,
			  width:350,
			  close:function(){$(this).dialog('destroy').remove();}});
		   $.ajax({
			    url:this
				,content:dialog
				,beforeSend: function(){ 
				
				}
			   ,success:function(data){
				    $(dialog).html(data); 
					iniadvSearch();
					 $( 'label' ).tooltip({
            show: {
                effect: "slideDown",
                delay: 250
            }
        });
		 
					$(dialog).dialog( "option", "width", 550 );
					$(dialog).dialog( "option", "position", { my: "center center"} );
					$(dialog).dialog( "option", "buttons", 
												[
												{text:top_search_submit_label,click:function()
												{
													$('form',this).trigger('submit');	
												}}
												//{text:top_search_reset_label,click:function(){ $('form',this).trigger('reset');}}
												]
					);
					}
					
					});
		   return false;
		   
	   });
	   
	   if (window.location.search.indexOf('open_dialog') > 0)
	   {
		    $('a.adv').trigger('click');
	   }
	   
   }catch(e)
   {
	   	console.error(e);
	}
   
   });