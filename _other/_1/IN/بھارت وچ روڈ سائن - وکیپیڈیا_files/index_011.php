//[[سانچہ:افقی قائمہ]]
/* jQuery Multi Level CSS Menu #2- By Dynamic Drive
** http://www.dynamicdrive.com/style/csslibrary/item/jquery_multi_level_css_menu_2/
*/

//Specify full URL to down and left arrow images (10 is padding-left to add to top level LIs with drop downs):
var arrowimages={down:['downarrowclass', '//upload.wikimedia.org/wikipedia/commons/f/f1/MediaWiki_Vector_skin_action_arrow.svg', 10], left:['leftarrowclass', '//upload.wikimedia.org/wikipedia/commons/8/8e/MediaWiki_Vector_skin_left_arrow.svg']}

var jqueryslidemenu={

animateduration: {over: 400, out: 400}, //duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid, arrowsvar){
	jQuery(document).ready(function($){
		var $mainmenu=$("#"+menuid+">ul")
		var $headers=$mainmenu.find("ul").parent()
		$headers.each(function(i){
			var $curobj=$(this)
			var $subul=$(this).find('ul:eq(0)')
			this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false
			$subul.css({top:this.istopheader? this._dimensions.h+"px" : 0})
			$curobj.children("a:eq(0)").css(this.istopheader? {paddingLeft: arrowsvar.down[2]} : {}).append(
				'<img src="'+ (this.istopheader? arrowsvar.down[1] : arrowsvar.left[1])
				+'" class="' + (this.istopheader? arrowsvar.down[0] : arrowsvar.left[0])
				+ '" style="border:0;" />'
			)
			$curobj.hover(
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					this._offsets={right:$(this).offset().right, top:$(this).offset().top}
					var menuright=this.istopheader? 0 : this._dimensions.w
					menuright=(this._offsets.right+menuright+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) : menuright
					if ($targetul.queue().length<=1) //if 1 or less queued animations
						$targetul.css({right:menuright+"px", width:this._dimensions.subulw+'px'}).slideDown(jqueryslidemenu.animateduration.over)
				},
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					$targetul.slideUp(jqueryslidemenu.animateduration.out)
				}
			) //end hover
			$curobj.click(function(){
				$(this).children("ul:eq(0)").hide()
			})
		}) //end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible'})
	}) //end document.ready
}
}

//build menu with ID="myslidemenu" on page:
jqueryslidemenu.buildmenu("myslidemenu", arrowimages)