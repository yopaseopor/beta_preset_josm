var toSize = getCookie('pagesizes');
toSize = toSize.replace("=","");
if(toSize==''){toSize = "small";}

jQuery.preloadImages = function() {
	$('.btn_over').each(function() {
		jQuery("<img>").attr("src", replaceFilename($(this).attr('src'), ".", "_over."));
		jQuery('<input>').attr("src", replaceFilename($(this).attr('src'), ".", "_over."));
	});
}

function loadFontSize() {
	var toSize = getCookie('pagesizes');
	toSize = toSize.replace("=","");
	if(toSize==''){toSize = "small";}
	changeSize(toSize);
}

var classes = ['small', 'mid', 'large'];

function changeSize(toSize){
	if (document.getElementById('sizecontrol')) {
		document.getElementById('sizecontrol').className=toSize;
		var tempObj;
		for(x in classes){
			$('ul#font_size li a.selected').removeClass('selected');
		}
		
		$('ul#font_size li a.'+toSize+'_font').addClass('selected');
		setCookie('pagesizes', toSize, 365);
		
		 syncHeight();
	}
}

function search(){


	var query;

	query = document.getElementById("query").value;
	var url = "http://search.gov.hk/search.html?";
	url += "tpl_id=td_r2&";
	url += "gp0=td2_home&";
	url += "gp1=td2_home&";
	url += "ui_charset=utf-8&";
	url += "web=this&";
	if (zmsCharsetID==1) {
		url += "ui_lang=en&";
	} else if (zmsCharsetID==2 && !isSC(location.href)) {
		url += "ui_lang=zh-hk&";
	} else if (zmsCharsetID==3 || isSC(location.href)) {
		url += "ui_lang=zh-cnhk&";
	}
	if (location.href.indexOf("index_t")>=0){
		url += "txtonly=1&";
	}
	url += "query=" + encodeURIComponent(query);
	location.href=url;

//*****for www1
//alert("Searching function is not available in the test environment, it will be available in the OGCIO production environment.");
//*****

}

function updatelink() {
	var langFolder = "en";
	var filename = "index.html";

	if (1 == zmsCharsetID){
		langFolder = "en";
	}else if (2 == zmsCharsetID || location.href.match(/:\/\/[^/]+\/tc\//)){
		langFolder = "tc";
	}else if (3 == zmsCharsetID || location.href.match(/:\/\/[^/]+\/sc\//)){
		langFolder = "sc";
	}
	if (window.location.toString().indexOf("/index_t_") >= 0 || window.location.toString().indexOf("/index_t.") >= 0){
		filename = "index_t.html";
	}

	if (document.getElementById('home')) {
		document.getElementById('home').href = "/"+langFolder+"/home/" + filename;
	}
	if (document.getElementById('sitemap')) {
		//*****for www1
		/*
		if(filename != "index_t.html")
		{document.getElementById('sitemap').href = "/"+langFolder+"/site_map/index_www1.html";}
		else
		{document.getElementById('sitemap').href = "/"+langFolder+"/site_map/index_t.html";}
		*/
		//*****

		document.getElementById('sitemap').href = "/"+langFolder+"/site_map/" + filename;
	}
	if (document.getElementById('contactus')) {
		document.getElementById('contactus').href = "/"+langFolder+"/contact_us/" + filename;
	}
	if (document.getElementById('licensing')) {
		document.getElementById('licensing').href = "/"+langFolder+"/licensing_service/" + filename;
	}
	if (document.getElementById('trafficonline')) {
		document.getElementById('trafficonline').target = "_blank";
		if (1 == zmsCharsetID){
			document.getElementById('trafficonline').href = "http://traffic.td.gov.hk/selection_e.htm";
		}else if (2 == zmsCharsetID){
			document.getElementById('trafficonline').href = "http://traffic.td.gov.hk/selection_c.htm";
		}else if (3 == zmsCharsetID){
			document.getElementById('trafficonline').href = "http://traffic.td.gov.hk/selection_sc.htm";
		}
	}
	if (document.getElementById('importantnotices')) {
		document.getElementById('importantnotices').href = "/"+langFolder+"/important_notices/" + filename;
	}
	if (document.getElementById('privacypolicy')) {
		document.getElementById('privacypolicy').href = "/"+langFolder+"/privacy_policy/" + filename;
	}
	if (document.getElementById('whatsnew')) {
		document.getElementById('whatsnew').href = "/"+langFolder+"/whats_new/" + filename;
	}
	if (document.getElementById('rss')) {
		document.getElementById('rss').href = "/"+langFolder+"/rss/" + filename;
	}
}

function goBack() {
	history.go(-1);
}

function textSwitch(){
  var url = window.location.toString();
  if (url.indexOf(".aspx") != -1){
    // dynamic
    if (url.indexOf("textonly=") != -1){
      window.location = url.replace(/textonly=\w*/, "textonly=true");
    }else{
      window.location = url + "&textonly=true";
    }
  }else{
    // static
    window.location = url.replace(/\/index([^\/]*)\.html/, "/index_t$1.html");
  }
}

function graphicSwitch(){
  var url = window.location.toString();
  if (url.indexOf(".aspx") != -1){
    // dynamic
    if (url.indexOf("textonly=") != -1){
      window.location = url.replace(/textonly=\w*/, "textonly=false");
    }else{
      window.location = url + "&textonly=false";
    }
  }else{
    // static
    window.location = url.replace(/\/index_t/, "/index");
  }
}

function switchLang(charsetID){
	var url = window.location.toString();
	var isStaticURL = false;
	var langPaths = new Array("en", "tc", "sc");
	var oldLangPath = "";

	// Check url type (is static page or dynamic page)
	for (i=0; i < langPaths.length; i++){
		if (url.indexOf("/"+langPaths[i]+"/") != -1){
			oldLangPath = "/"+langPaths[i]+"/";
			isStaticURL = true;
			break;
		}
	}

	if (isStaticURL){
		var path;
		path = window.location.href;
		window.location = path.replace(oldLangPath, "/"+langPaths[charsetID - 1]+"/");
	}else{
		if (url.indexOf("lang=") != -1){
			window.location = 
				url.replace(/lang=\d/, "lang="+charsetID);
		}
	}
}

function configureScButtons(){
	if (typeof(zmsCharsetID) != "undefined" && (zmsCharsetID == 2 || zmsCharsetID == 3)){
		var btnScTextSwitch, btnTcTextSwitch;
		btnTcTextSwitch = document.getElementById("btnTcTextSwitch");
		btnScTextSwitch = document.getElementById("btnScTextSwitch");
		if (btnTcTextSwitch && btnScTextSwitch){
			if (isSC(location.href)){
				btnTcTextSwitch.style.display = "none";
				btnScTextSwitch.style.display = "inline";
			}else{
				btnTcTextSwitch.style.display = "inline";
				btnScTextSwitch.style.display = "none";
			}
		}

		var btnToSC, btnToTC;
		btnToTC = document.getElementById("btnToTC");
		btnToSC = document.getElementById("btnToSC");
		if (btnToTC && btnToSC){
			if (isSC(location.href)){
				btnToTC.style.display = "inline";
				btnToSC.style.display = "none";
			}else{
				btnToSC.style.display = "inline";
				btnToTC.style.display = "none";
			}
		}
	}
}

function Menu() {
	this.contentId = 0;
	this.text = "";
	this.alt = "";
	this.href = "";
	this.target = "";
	this.childs = new Array();
}

Menu.prototype = {
	addChild : function(m) {
		this.childs[this.childs.length] = m;
	}
}

function Sitemap() {
	this.contentId = 0;
	this.childs = new Array();
}

Sitemap.prototype = {
	addChild : function(m) {
		this.childs[this.childs.length] = m;
	}
}

function showHide(theOne, isShow){
	// theOne = JQuery Selector
	// isShow = true for show
	if(isShow){
		theOne.show();
	}else{
		theOne.hide();
	}
}

function hideAllSubMenu(){
	$(".sub").each(function(){
		$(this).css({top:-10000});
	});
	
	$('#icon_wrap > div > ul > li > a').removeClass('keyfocus');
	$('#icon_wrap > div > ul > li li a').removeClass('focus');
	$('#icon_wrap > div > ul > li div.icon_sub_wrap').fadeOut();
}

function hideAllKeyFocusMenu(){
	$('.menu a.keyfocus').each(function() {
		$(this).removeClass("keyfocus");
	});
}

function configureLeftMenu(){
	if(typeof mobile == 'undefined' || mobile == false){
		$(".menu .sub").each(function(){
			var currSub = $(this);
			$(this).parent().hover(function(){
				hideAllSubMenu();
				var mainMenu = $(this).parent(".menu");
				mainMenu.attr("active", 1)
				var iWidth = mainMenu.width();
				var iTop = getY(this);
				var subMenuWidth = currSub.width();
				var subMenuHeight = currSub.height();

				if (iTop+subMenuHeight>document.body.scrollHeight) {
					iTop = document.body.scrollHeight - subMenuHeight;
				}
				if (iTop<0) {
					iTop = 0;
				}
				currSub.css({top: iTop});
				currSub.children("li:eq(0)").children("iframe").css("width", subMenuWidth+"px");
				currSub.children("li:eq(0)").children("iframe").css("height", subMenuHeight+"px");
			}, function(){
				currSub.css({top:-10000});
				hideAllKeyFocusMenu();
			});
		});
		$("ul.menu > li > a").focus(function(){
			var currMenuA = $(this);
			hideAllSubMenu();
			hideAllKeyFocusMenu();
			currMenuA.addClass("keyfocus");
			$(this).parent().find(".sub").each(function() {
				var currSub = $(this);
				var mainMenu = $(this).parent(".menu");
				mainMenu.attr("active", 1)
				var subMenuWidth = currSub.width();
				var subMenuHeight = currSub.height();

				currSub.css({top: currMenuA.position().top});
				currSub.children("li:eq(0)").children("iframe").css("width", subMenuWidth+"px");
				currSub.children("li:eq(0)").children("iframe").css("height", subMenuHeight+"px");
			});
		});
		$("ul.sub li a").focus(function(){
			var currMenuA = $(this);
			var currSub = currMenuA.parents("ul.sub");
			hideAllKeyFocusMenu();
			currMenuA.addClass("keyfocus");
			currSub.parent().find("> a").addClass("keyfocus");

			if (currMenuA.offset().top<0) {
				hideAllSubMenu();
				var parentMenuA = currSub.parent("li").find("> a");
				currSub.css({top: parentMenuA.position().top});
			}
		});
	}
}

function getY(arg){
	var y = 0;
	if (arg.offsetParent){
		y = getY(arg.offsetParent);
	}
	return arg.offsetTop + y;
}

function getX(arg){
	var x = 0;
	if (arg.offsetParent){
		x = getX(arg.offsetParent);
	}
	return arg.offsetLeft + x;
}

function getChildList(childList,rootContentId) {
	var rootNode;
	try	{
		rootNode = eval('sitemap_'+rootContentId);
	}
	catch (e) {
	}
	if (rootNode) {
		for (var i=0; i<rootNode.childs.length; i++) {
			childList[childList.length] = rootNode.childs[i].contentId;
			getChildList(childList,rootNode.childs[i].contentId);
		}
	}
	return childList;
}

function dateAdd(interval,number,date){
	number = parseInt(number);
	if (typeof(date)=="string"){
		date = date.split(/\D/);
		--date[1];
		eval("var date = new Date("+date.join(",")+")");
	}
	if (typeof(date)=="object"){
		var date = date
	}
	switch(interval){
		case "y": date.setFullYear(date.getFullYear()+number); break;
		case "m": date.setMonth(date.getMonth()+number); break;
		case "d": date.setDate(date.getDate()+number); break;
		case "w": date.setDate(date.getDate()+7*number); break;
		case "h": date.setHours(date.getHour()+number); break;
		case "n": date.setMinutes(date.getMinutes()+number); break;
		case "s": date.setSeconds(date.getSeconds()+number); break;
		case "l": date.setMilliseconds(date.getMilliseconds()+number); break;
	}
	return date;
} 

function configureRevisionDate(){
	var childList=new Array();
	var maxRevisionDate = null;
	var overdueDate = 90;
	var minReviewDate = new Date(2000,2,15);	/* (YYYY, [0-11], [1-31]) */
	var notCheckChildDate = window.notCheckChildDate || false;
	var showByRevisionDate = window.showByRevisionDate || false;

	// The minimum review date becomes (minReviewDate - overdueDate)
	minReviewDate = dateAdd("d", overdueDate, minReviewDate);

	getChildList(childList,zmsCurrentContentId);
	childList[childList.length] = zmsCurrentContentId;
	if (!notCheckChildDate && location.href.indexOf("/publications/free_publications/")<0) {
		// Disable child revision date lookup for "Publication"
		for (var i=0; i<childList.length; i++) {
			if (!maxRevisionDate || childRevisionDate[childList[i]]>maxRevisionDate) {
				maxRevisionDate=childRevisionDate[childList[i]];
			}
		}
	//alert(maxRevisionDate);
	}
	if (zmsCurrentContentId==1 && typeof(whatsnewRevisionDate)!="undefined") {
		if (!maxRevisionDate || whatsnewRevisionDate>maxRevisionDate) {
			maxRevisionDate=whatsnewRevisionDate;
		}
	}
	if (typeof(reviewDateExists) != "undefined"
			&& reviewDateExists
			&& (maxRevisionDate == null || 
					new Date(reviewDate_Year,reviewDate_Month-1,reviewDate_Day) >= maxRevisionDate)){
		// Current review date > child revision date
		var placeHolder = document.getElementById("phReviewDate");
		var divDate = document.getElementById("div_reviewdate");
		if (minReviewDate>new Date(reviewDate_Year,reviewDate_Month-1,reviewDate_Day)) {
			reviewDate_Year = minReviewDate.getFullYear();
			reviewDate_Month = minReviewDate.getMonth()+1;
			reviewDate_Day = minReviewDate.getDate();
		}
		if (placeHolder != null && divDate != null){
			divDate.innerHTML = loadDateString(reviewDate_Year, reviewDate_Month, reviewDate_Day);
			placeHolder.style.display = "inline";
		}
	}else if (typeof(revisionDateExists) != "undefined"
			&& revisionDateExists){
		// Display revision date
		var placeHolder = document.getElementById("phRevisionDate");
		var divDate = document.getElementById("div_revisiondate");
		if (minReviewDate>new Date(revisionDate_Year,revisionDate_Month-1,revisionDate_Day)) {
			revisionDate_Year = minReviewDate.getFullYear();
			revisionDate_Month = minReviewDate.getMonth()+1;
			revisionDate_Day = minReviewDate.getDate();
			placeHolder = document.getElementById("phReviewDate");
			divDate = document.getElementById("div_reviewdate");
		}

		// Review date for specific Press Release and TN
		if ((location.href.indexOf("/press_releases/transport_department/index.html")>0)
			|| (location.href.indexOf("/press_releases/transport_department/index_t.html")>0)
			|| (location.href.indexOf("/press_releases/transport_department/index_year_")>0)
			|| (location.href.indexOf("/press_releases/transport_department/index_t_year_")>0)
			|| (location.href.indexOf("/site_map/index")>0)
			|| (location.href.indexOf("/public_services/vehicle_examination/index")>0)
			|| (location.href.indexOf("/tender_notices/award_of_contracts_and_consultancies/index")>0)
			|| (location.href.indexOf("/en/publications_and_press_releases/speeches/index")>0)
			|| (location.href.indexOf("traffic_notices/index.html")>0)
			|| (location.href.indexOf("traffic_notices/index_t.html")>0)
			|| (location.href.indexOf("/traffic_notices/index_type_")>0 && location.href.indexOf("-district_")<0)
			|| (location.href.indexOf("/traffic_notices/index_t_type_")>0 && location.href.indexOf("-district_")<0))
		{
			placeHolder = document.getElementById("phReviewDate");
			divDate = document.getElementById("div_reviewdate");
		}

		if (maxRevisionDate >= new Date(revisionDate_Year,revisionDate_Month-1,revisionDate_Day)) {
			placeHolder = document.getElementById("phReviewDate");
			divDate = document.getElementById("div_reviewdate");
		}

		// Revision date for specific page
		if (showByRevisionDate ||
			(location.href.indexOf("/xxx/index")>0)
			) {
			placeHolder = document.getElementById("phRevisionDate");
			divDate = document.getElementById("div_revisiondate");
		}
		if (placeHolder != null && divDate != null){
			if (maxRevisionDate == null || new Date(revisionDate_Year,revisionDate_Month-1,revisionDate_Day) > maxRevisionDate) {
				divDate.innerHTML = loadDateString(revisionDate_Year, revisionDate_Month, revisionDate_Day);
			} else {
				divDate.innerHTML = loadDateString(maxRevisionDate.getFullYear(), maxRevisionDate.getMonth()+1, maxRevisionDate.getDate());
			}
			placeHolder.style.display = "inline";
		}
	}else if (maxRevisionDate != null){
		// Child revision date > current review date
		var placeHolder = document.getElementById("phReviewDate");
		var divDate = document.getElementById("div_reviewdate");

		// Revision date for specific page
		if (showByRevisionDate ||
			(location.href.indexOf("/xxx/index.html")>0)
			) {
			placeHolder = document.getElementById("phRevisionDate");
			divDate = document.getElementById("div_revisiondate");
		}
		if (placeHolder != null && divDate != null){
			divDate.innerHTML = loadDateString(maxRevisionDate.getFullYear(), maxRevisionDate.getMonth()+1, maxRevisionDate.getDate());
			placeHolder.style.display = "inline";
		}
	}
}

function loadDateString(yyyy, mm, dd){
	switch (zmsCharsetID)
	{
		case 1:
		case 4:
			var monthName = new Array("", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
			return dd+" "+monthName[mm]+" "+yyyy;
			break;
		case 2:
		case 5:
			return yyyy+"年"+mm+"月"+dd+"日";
			break;
		case 3:
		case 6:
			return yyyy+"年"+mm+"月"+dd+"日";
			break;
	}
}

function replaceFilename(url, fromstr, tostr){
	var newUrl;
	if (url) {
		var filestart = url.lastIndexOf("/");
		newUrl = 
			url.substring(0, filestart)
			+ url.substring(filestart)
			.replace(fromstr, tostr);
	}
	return newUrl;
}

function generateMenu(rootMenu) {
	// Must override
}

function printPage() {
	var URL;
	URL = location.href;
	if (URL.indexOf("?")>0) {
		URL += "&print=1";
	} else {
		URL += "?print=1";
	}
	window.open(URL);
}

function ShowPrintHeader(){
	document.body.style.background = "none";
	var langFolder = "en";
	if (1 == zmsCharsetID){
		langFolder = "en";
		altText = "Transport Department";
	}else if (2 == zmsCharsetID && location.href.match(/:\/\/[^/]+\/tc\//)){
		langFolder = "tc";
		altText = "運輸署";
	} else if (3 == zmsCharsetID || location.href.match(/:\/\/[^/]+\/sc\//)){
		langFolder = "sc";
		altText = "运输署";
	}
	
	var imageFolder = "/filemanager/template/"+langFolder+"/images/";
	var html = '';
	html += '<table border="0" cellpadding="0" cellspacing="0" width="600">';
	html += '<tbody>';
	html += '<tr align="left" valign="top">';
	html += '<td><img src="'+imageFolder+'print_banner.gif" alt="'+altText+'" title="'+altText+'" border="0" /></td>';
	html += '</tr>';
	html += '<tr align="left" valign="top">';
	html += '<td>';
	html += '<div id="div_pagename" class="hdtitle"></div><br />';

	document.writeln(html);
}

function ShowPrintFooter(){
	if (location.href.indexOf("/home/index.html")>=0) {
		var html = '';
		var langFolder = "en";
		if (1 == zmsCharsetID){
			langFolder = "en";
			altText = "Transport Department";
		}else if (2 == zmsCharsetID && location.href.match(/:\/\/[^/]+\/tc\//)){
			langFolder = "tc";
			altText = "運輸署";
		} else if (3 == zmsCharsetID || location.href.match(/:\/\/[^/]+\/sc\//)){
			langFolder = "sc";
			altText = "运输署";
		}
		html += '<script language="javascript" src="/filemanager/util_uarticle_wn/'+langFolder+'/list_whatsnew_2.js">';
		document.writeln(html);
	}
}

function openLink(tcLink, scLink, target, width, height) {
	if (isSC(location.href)) {
		if (scLink.indexOf("javascript:")==0) {
			eval(scLink);
		} else {
			switch (target) {
				case 0:
					window.location = scLink;
					break;
				case 1:
					window.open(scLink);
					break;
				case 2:
					openPopup(scLink, width, height);
				break;
				default:
					window.open(tcLink);
					break;
			}
		}
	} else {
		if (tcLink.indexOf("javascript:")==0) {
			eval(tcLink);
		} else {
			switch (target) {
				case 0:
					window.location = tcLink;
					break;
				case 1:
					window.open(tcLink);
					break;
				case 2:
					openPopup(tcLink, width, height);
					break;
				default:
					window.open(tcLink);
					break;
			}
		}
	}
	return null;
}

function openPopup(path,width,height,targetname) {
	window.open(path,targetname,'height='+height+', width='+width+', toolbar=no, menubar=no, location=no, status=no, scrollbars=no, resizable=yes');
}

function openPopupAutoSC(path,width,height,targetname) {
	if (path[0]=='/' && location.href.indexOf("/sc/")>0) {
		path = path.replace("/filemanager/tc/","/filemanager/sc/");
	}
	window.open(path,targetname,'height='+height+', width='+width+', toolbar=no, menubar=no, location=no, status=no, scrollbars=no, resizable=yes');
}

function getCookie(c_name) {
	if (document.cookie.length>0) {
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1) { 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}

function setCookie(c_name,value,expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	deleteCookie(c_name);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/");
}

function deleteCookie(c_name) {
	if (getCookie(c_name))
		document.cookie = c_name + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/";
}

function HTMLEncode(strHTML)
{
	var div = document.createElement('div');
	div.innerText = strHTML;
	div.textContent = strHTML;
	return div.innerHTML;
}

function HTMLDecode(strEncodeHTML)
{
	var div = document.createElement('div');
	div.innerHTML = strEncodeHTML;
	return div.innerText;
}

function getX(arg)
{
	var x = 0;
	if (arg.offsetParent){
		x = getX(arg.offsetParent);
	}
	return arg.offsetLeft + x;
}

function isInteger(text) {
	var re = new RegExp(/^[0-9]*$/);
	return text.match(re)!=null;
}

function changeSmall(){
	changeSize('small');
}
function changeMedium(){
	changeSize('mid');
}
function changeLarge(){
	changeSize('large');
}

function simg(obj,url) {
	if (document.images){obj.src = url;}
}

function isSC(url) {
	var re = new RegExp(/:\/\/[^/]+\/sc\//);
	return (url.match(re)!=null || url.indexOf("ui_lang=zh-cn")>=0);
}

function CheckSCPath(url) {
	var re = new RegExp(/^\/tc\//);
	if (isSC(location.href) && url.match(re)!=null) {
		url = "/sc/" + url.substring(4);
	}
	return url;
}

// Start: Reverts links for javascript:openLink(...)
function parseOpenLink(data) {
    var e=/^javascript:openLink\('([^']*)',\s*'([^']*)',\s*(\d+)/;

    if (data.match(e)) {
        return {tcLink:RegExp.$1,
                scLink:RegExp.$2,
                target:RegExp.$3};
    }else {
        return null;
    }
}

function revertOpenLink(){
	if (zmsCharsetID == 2){
		for (i=0; i < document.links.length; i++){
			var l=document.links[i];
			var url = l.href;
			if (url.indexOf("javascript:openLink(") >= 0){
				var openLinkInfo = parseOpenLink(url.replace(/%20/g, " "));

				if (openLinkInfo != null && openLinkInfo.target != 2){
					l.href = isSC(location.href) ? openLinkInfo.scLink : openLinkInfo.tcLink;
					if (openLinkInfo.target == 1){
						l.target = "_blank";
					}
				}
			}
		}
	}
}
var first_load = true;
var windowURL = window.location.href;
$(document).ready(function(){
	revertOpenLink();
	
	 syncHeight();
	 
	 generateQuicklins(); 
	
	$('#top_zone .f_right a').on('focusin', function(){
		$('#icon_wrap > div > ul > li > a').removeClass('keyfocus');
		$('#icon_wrap > div > ul > li li a').removeClass('focus');
		$('#icon_wrap > div > ul > li div.icon_sub_wrap').fadeOut();
	});
	
	$('#icon_wrap > div > ul > li').each(function(i){
		$(this).find('>a').on('focusin', function(){
			if(!$(this).hasClass('keyfocus')){
				$('#icon_wrap > div > ul > li > a').removeClass('keyfocus');
				$('#icon_wrap > div > ul > li div.icon_sub_wrap').fadeOut();
				$('#icon_wrap > div > ul > li li a').removeClass('focus');
				$(this).siblings('div').fadeIn();
				$(this).addClass('keyfocus');
			}
		});
		
		$(this).find('>a').on('mouseover', function(){
			if(!$(this).hasClass('keyfocus')){
				$('#icon_wrap > div > ul > li > a').removeClass('keyfocus');
				$('#icon_wrap > div > ul > li div.icon_sub_wrap').fadeOut();
				$('#icon_wrap > div > ul > li li a').removeClass('focus');
				$(this).siblings('div').fadeIn();
				$(this).addClass('keyfocus');
			}
		});
		
		$(this).on('mouseleave', function(){
			$('#icon_wrap > div > ul > li > a').removeClass('keyfocus');
			$('#icon_wrap > div > ul > li div.icon_sub_wrap').fadeOut();
			$('#icon_wrap > div > ul > li li a').removeClass('focus');
		});
		
		$(this).find('ul li').each(function(i2){
			var length = $(this).parent('ul').find('> li').length;
			$(this).children('a').on('focusin', function(){
				/* index = i2; */
				$(this).addClass('focus');		
			});
			
			$(this).children('a').on('focusout', function(){
				if(i2 < $('.focus').length - 1 && i2 == 0){
					$(this).parents('div.icon_sub_wrap').fadeOut();
					$(this).parents('li').find('a').removeClass('focus');	
				}else if(i2 == $('.focus').length - 1 && i2 == 0 && i == 3){
					$(this).parents('div.icon_sub_wrap').fadeOut();
					$(this).parents('li').find('a').removeClass('focus');	
				}
			});
		});
	});	
	
	
	
	$(document).keypress(function(e) {
    if(e.which == 13) {
        if($('#query').val() != '' && $("#query").is(":focus")){
			search();
		}
    }
	});
	
	
	if($('.index').length > 0){
		getNews();
		
		setInterval(function(){
			getNews();
		}, 180000);
	}
	
	if($('#btn_top').length > 0){
		$('#btn_top').on('click', function(){
			$('body,html').animate({
				scrollTop: 0
			}, 300);
		});
	}
	
	if(typeof mobile == 'undefined' || mobile == true){
		/* alert($('#icon_wrap > div > ul').width()); */
		/* $("head").append('<meta name="viewport" content="width=730, maximum-scale=1, user-scalable=yes" >'); */
		$("head").prepend('<meta name="viewport" content="width=1010, user-scalable=yes, maximum-scale=1">');
		$('#menu_btn').on('click', function(){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$('#menu_wrap').addClass('active');
				$('#menu_wrap').animate({
					left : 0
				}, 300);
				if($('#icon_wrap > div > ul > li > a').hasClass('active')){
					$('#icon_wrap > div > ul > li > a').removeClass('active');
					$('.icon_sub_wrap').hide();
				}
			}else{
				$(this).removeClass('active');
				$('#menu_wrap').animate({
					left : '-100%'
				}, 300);
				setTimeout(function(){
					$('#menu_wrap').removeClass('active');
				}, 300);
			}
		});
		
		$('.menu_mobile li').on('click', function(e){
			$(this).find('>a').removeClass('keyfocus');
		});
		
		$('.menu_mobile li a span').on('click', function(e){
			e.preventDefault();
			if(!$(this).parent('a').siblings('ul').hasClass('active')){
				$('.menu_mobile li ul').slideUp();
				$('.menu_mobile li a span').removeClass('active');
				$('.menu_mobile li ul').removeClass('active');
				$(this).addClass('active');
				$(this).parent('a').siblings('ul').addClass('active');
				$(this).parent('a').siblings('ul').slideDown();
			}else{
				$(this).removeClass('active');
				$(this).parent('a').siblings('ul').removeClass('active');
				$(this).parent('a').siblings('ul').slideUp();
			}
			
		});
		
		$('#icon_wrap > div > ul > li > a').on('click', function(){
			$('#icon_wrap > div > ul > li > a').removeClass('active');
			if($('#menu_btn').hasClass('active')){
				$('#menu_btn').removeClass('active');
				$('#menu_wrap').removeClass('active');
				var w = -$(window).outerWidth();
				$('#menu_wrap').animate({
					left : w
				}, 300);
			}
			
			$(this).addClass('active');
			$('.icon_sub_wrap').hide();
			$('.icon_sub_wrap').eq($(this).closest('li').index()).slideDown();
		});
		
		$('.close_btn').on('click', function(){
			$('#icon_wrap > div > ul > li > a').removeClass('active');
			$(this).parent('.icon_sub_wrap').slideUp();
		});
		
		if($('#others_wrap').length > 0){
			var max = 0;
			$('#others_wrap > div').each(function(){
				if($(this).outerHeight() > max){
					max = $(this).outerHeight();
				}
			});
			$('#others_wrap > div').outerHeight(max);
		}
	}
});
// End: Reverts links for .html and .htm, replaced by kanhan

$(window).resize(function(){
	if(typeof mobile == 'undefined' || mobile == false){
		syncHeight();
	}
});

function syncHeight(){
	if($('#content').length > 0 && (typeof mobile == 'undefined' || mobile == false)){
		$('#menu_wrap').attr('style', '');
		$('#content_wrap').attr('style', '');
		if($('#menu_wrap').outerHeight() >= $('#content_wrap').outerHeight()){
			$('#content_wrap').outerHeight($('#menu_wrap').outerHeight());	
		}else{
			$('#menu_wrap').outerHeight($('#content_wrap').outerHeight());
		}
		
	}
}
