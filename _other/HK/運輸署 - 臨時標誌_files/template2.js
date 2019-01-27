/* document.writeln('<style type="text/css">');
document.writeln('<!--');
document.writeln('body, html{');
document.writeln('padding: 0px;');
document.writeln('margin: 0px;');
document.writeln('height: 100%;');
document.writeln('}');
document.writeln('-->');
document.writeln('</style>');
document.writeln(''); */
var zmsBannerGroups = [["/filemanager/banner/tc/right_banner.xml", "banner_type1"],["/filemanager/banner/tc/bottom_banner.xml", "banner_type3"]];

document.writeln('<link href="/filemanager/template/tc/css/style.css" rel="stylesheet" type="text/css" media="screen" />\n<link href="/filemanager/template/tc/css/style_print.css" rel="stylesheet" type="text/css" media="print" />\n');
document.writeln('<link rel="icon" type="image/png" href="/filemanager/template/common/images/favicon-32x32.png" sizes="32x32" />');
//document.writeln('<script type="text/javascript" src="/filemanager/template/common/js/jquery-2.0.0.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/common.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/swiper.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/swiper.jquery.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/bottom_rolling_icon_1.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/bottom_rolling_icon_2.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/quicklinks.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/jq_control.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/generate_menu.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/generate_breadcrumb.js"></script>\n');
document.writeln('<script type="text/javascript" src="/filemanager/template/common/js/jquery-2.0.0.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/common-responsive.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/swiper.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/swiper.jquery.min.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/bottom_rolling_icon_1.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/bottom_rolling_icon_2.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/quicklinks.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/jq_control.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/generate_menu.js"></script>\n<script type="text/javascript" src="/filemanager/template/common/js/generate_breadcrumb.js"></script>\n');

//*****for www1
//document.writeln('<script type="text/javascript" src="/filemanager/system/tc/js/menu_www1.js" charset="utf-8"></script>');
//*****



var mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	mobile = true;
	//document.writeln('<link href="/filemanager/template/common/css/mobile.css" rel="stylesheet" type="text/css" media="screen" />\n');
		
}

function ShowHeader()
{
	if(mobile == true){
		//ShowHeaderMobile();
		ShowHeaderDesktop();
	}else{
		ShowHeaderDesktop();
	}

mobile = false;
}

function ShowHeaderDesktop()
{
document.writeln('<a class="skip_to_content" href="#content" tabindex="1">Skip to Main Content</a>');
document.writeln('<script type="text/javascript"><!--');
document.writeln('if (toSize=="small") {');
document.writeln('document.writeln(\'<div id="sizecontrol" class="small">\');');
document.writeln('} else if (toSize=="mid") {');
document.writeln('document.writeln(\'<div id="sizecontrol" class="mid">\');');
document.writeln('} else if (toSize=="large") {');
document.writeln('document.writeln(\'<div id="sizecontrol" class="large">\');');
document.writeln('} else {');
document.writeln('document.writeln(\'<div id="sizecontrol">\');');
document.writeln('}');
document.writeln('// --></script>');
document.writeln('<div id="wrap" class="clearfix">');
document.writeln('<div id="top_wrap" class="clearfix">');
document.writeln('	<div id="top_zone" class="clearfix">');
document.writeln('			<div class="subnav">');
document.writeln('				<ul class="clearfix">');

//document.writeln('					<li><strong><font size="4" color="red">***</font><font size="4" color="white">TESTING&nbsp;SITE<font size="4" color="red">***</font>&nbsp;&nbsp;</font></strong></li>');

document.writeln('					<li><a href="javascript:switchLang(1);">English</a></li>');
document.writeln('					<li><a href="javascript:switchLang(3);">简体</a></li>');
document.writeln('					<li><a href="javascript:textSwitch();">純文字版本</a></li>');
document.writeln('					<li>');
document.writeln('						<ul id="font_size">');
document.writeln('							<li><a class="small_font" title="Small" href="javascript:changeSmall()">A</a></li>');
document.writeln('							<li><a class="mid_font" title="Medium" href="javascript:changeMedium()">A</a></li>');
document.writeln('							<li><a class="large_font" title="Large" href="javascript:changeLarge()">A</a></li>');
document.writeln('						</ul>');
document.writeln('					</li>');
document.writeln('					<li><a id="rss" href="#">RSS</a></li>');
document.writeln('					<li><a id="sitemap" href="#">網頁指南</a></li>');
document.writeln('					<li><input name="query" size="8" style="margin-top: 2px; margin-left: 15px;" id="query" class="searchquery"><a href="javascript:search();" id="search">Search</a></li>');
document.writeln('					<li><a id="contactus" href="#">Contact us</a></li>');

document.writeln('				</ul>');
document.writeln('			</div>');
document.writeln('		<div class="f_left">');
document.writeln('			<a href="/tc/home/index.html"><img title="香港特別行政區 - 運輸署" src="/filemanager/template/tc/images/branding.png" border="0" alt="香港特別行政區 - 運輸署" /></a>');
document.writeln('		</div>');
document.writeln('		<div class="f_right">');

/* document.writeln('			<img src="/filemanager/template/en/images/slogan.png" id="slogan" />'); */

//document.writeln('		<a href="/tc/50a_act/index.html"><img title="五十周年活動" src="/filemanager/template/common/images/trantop50a.gif" border="0" alt="五十周年活動"  /></a>');

document.writeln('			<a href="http://www.brandhk.gov.hk/html/tc/index.html" target="_blank"><img title="香港品牌形象 - 亞洲國際都會" src="/filemanager/template/tc/images/brandhk.gif" border="0" alt="香港品牌形象 - 亞洲國際都會"  /></a>');
document.writeln('		</div>');
document.writeln('	</div>');
document.writeln('</div>');
document.writeln('<div id="icon_wrap" class="clearfix">');
document.writeln('	<div class="clearfix">');
/* document.writeln('		<a id="drivers" href="#">Drivers</a>');
document.writeln('		<a id="passengers" href="#">Passengers</a>');
document.writeln('		<a id="pedestrians" href="#">Pedestrians</a>');
document.writeln('		<a id="stu_parents" href="#">Students / Parents</a>');
document.writeln('		<a id="disabilities" href="#">People with disabilities</a>'); */
document.writeln('		<ul>');
document.writeln('			<li><a id="drivers" href="#">駕駛者</a>');
document.writeln('				<div class="icon_sub_wrap">');
document.writeln('					<div class="icon_subtitle">駕駛者</div>');
document.writeln('					<ul></ul>');
document.writeln('				</div>');
document.writeln('			</li>');
document.writeln('			<li><a id="passengers" href="#">乘客</a>');
document.writeln('				<div class="icon_sub_wrap">');
document.writeln('					<div class="icon_subtitle">乘客</div>');
document.writeln('					<ul></ul>');
document.writeln('				</div>');
document.writeln('			</li>');
document.writeln('			<li><a id="pedestrians" href="#">行人</a>');
document.writeln('				<div class="icon_sub_wrap">');
document.writeln('					<div class="icon_subtitle">行人</div>');
document.writeln('					<ul></ul>');
document.writeln('				</div>');
document.writeln('			</li>');
document.writeln('			<li><a id="stu_parents" href="#">學生/家長</a>');
document.writeln('				<div class="icon_sub_wrap">');
document.writeln('					<div class="icon_subtitle">學生/家長</div>');
document.writeln('					<ul></ul>');
document.writeln('				</div>');
document.writeln('			</li>');
document.writeln('			<li><a id="disabilities" href="#">殘疾人士</a>');
document.writeln('				<div class="icon_sub_wrap">');
document.writeln('					<div class="icon_subtitle">殘疾人士</div>');
document.writeln('					<ul></ul>');
document.writeln('				</div>');
document.writeln('			</li>');
document.writeln('		</ul>');
document.writeln('	</div>');
document.writeln('</div>');
document.writeln('<div id="middle_wrap" class="clearfix">');
document.writeln('	<div id="middle_zone" class="clearfix">');
document.writeln('	<div>');
document.writeln('		<div id="menu_wrap" class="clearfix">');
			 mobile = false;

			//*****for www1
			//generateMenu(rootMenu_www1);
			generateMenu(rootMenu);
			//*****
			
document.writeln('		</div>');
document.writeln('		<div id="content_wrap" class="clearfix">');
/* document.writeln('			<div class="banner_wrap clearfix">');
document.writeln('				<div id="div_pagename"></div>');
document.writeln('			</div>'); */
document.writeln('				<div id="breadcrum"  class="clearfix">');
									zmsGenerateBreadcrumb(zmsBreadcrumbParentList);
document.writeln('				</div>');
document.writeln('				<div id="div_pagename"></div>');
document.writeln('			<div id="content" class="clearfix">');
document.writeln('			<a name="content"></a>');

}


function ShowFooter()
{
document.writeln('			</div>');
document.writeln('			<div class="btn_wrap clearfix">');
document.writeln('			<a href="javascript:;" title="頁首" id="btn_top">頁首</a>');
document.writeln('			<a href="javascript: history.go(-1);" title="返回" id="btn_back">返回</a>');
document.writeln('			</div>');
document.writeln('		</div>');
document.writeln('	</div>');
document.writeln('	</div>');
document.writeln('</div>');
document.writeln('<div id="footer_wrap" class="clearfix">');
document.writeln('	<div id="footer" class="clearfix">');
document.writeln('	<div id="banner_type1"></div>');
document.writeln('	<div id="banner_type3"></div>');
document.writeln('<script language="javascript" src="/filemanager/template/common/js/generate_banner.js"></script>');

document.writeln('			<div id="wcag_wrap" class="clearfix">');
document.writeln('			<div>');
document.writeln('<script src="/filemanager/template/common/js/generate_wcag.js" type="text/javascript"></script>');
document.writeln('			</div>');
document.writeln('			</div>');
document.writeln('		<div class="f_left">');
document.writeln('			<a id="importantnotices" href="#">重要告示</a> | <a id="privacypolicy" href="#">私隱政策</a>');
document.writeln('		</div>');
document.writeln('		<div id="phRevisionDate">');
document.writeln('			修訂日期: <span id="div_revisiondate"><!-- Revision date --></span>');
document.writeln('		</div>');
document.writeln('		<div id="phReviewDate">');
document.writeln('			覆檢日期: <span id="div_reviewdate"><!-- Review date --></span>');
document.writeln('		</div>');
document.writeln('	</div>');
document.writeln('</div>');
document.writeln('</div>');

}

