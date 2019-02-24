// JavaScript Document
$(document).ready( function()
							{
								$('.cMenu').hide();
								
								$(".cItem").hover( function(){ $('#'+this.id+" ul").show(250)},
																										  function(){ $('#'+this.id+" ul").stop(true, true).hide(50)} );
				
								$('.cPriceBlock').hide();
								
								$(".cPriceBlockItem").hover(function() { $('#'+this.id+" ul").show(250)},function(){ $('#'+this.id+" ul").stop(true, true).hide(200)} );
							})
								