function zmsLoadBanner(bannerPath, divID)
{
	if (typeof zmsPreviewBannerGroup != "undefined" && 
			typeof zmsPreviewXmlUrl != "undefined"){
		if (bannerPath == zmsPreviewBannerGroup){
			bannerPath = zmsPreviewXmlUrl;
		}
	}
	var xmlDoc;

	//////////////////////////////////////////////////
	// Load XML File
	$.ajax({
		type: "GET",
		url: bannerPath,
		data: "",
		timeout: 3000,
		cache: false,
		async: false,
		//Connection: 'close',
		//contentType: "application/json; charset=utf-8",
		dataFilter: function(data) {
			return data;                    
		},
		success: function(msg, textStatus) {
			xmlDoc = msg;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});

	if (!xmlDoc) {
		return;
	}

	//////////////////////////////////////////////////
	// Parse XML
	if (xmlDoc.getElementsByTagName("data").length <= 0){
		return;	// Break the function 
	}

	var displayTypeID = xmlDoc.getElementsByTagName("data")[0].attributes.getNamedItem("displayTypeID").nodeValue;
	if (displayTypeID == 4){
		zmsLoadRotationalBanner(xmlDoc, divID);
	}else{
		var imageList = xmlDoc.getElementsByTagName("data")[0].getElementsByTagName("image");
		var len = imageList.length;
		if(divID != 'wcag_wrap'){
			var str = '<div class="swiper-container"><div class="swiper-wrapper">';
		}else{
			var str = '';
		}
		
		var i;
		for (i=0; i < len; i++){
			var imageUrl = "";
			var alt_text = "";
			var target = "_self";
			var width = 0, height = 0;
			var navUrl = "";

			imageUrl = imageList[i].getElementsByTagName("image_path")[0].childNodes[0].nodeValue;

			if (imageList[i].getElementsByTagName("alt_text")[0].childNodes.length > 0){
				alt_text = imageList[i].getElementsByTagName("alt_text")[0].childNodes[0].nodeValue;
			}

			var nodeInfoLink = imageList[i].getElementsByTagName("info_link")[0];

			target = nodeInfoLink.attributes.getNamedItem("target").nodeValue;
			width = nodeInfoLink.attributes.getNamedItem("width").nodeValue;
			height = nodeInfoLink.attributes.getNamedItem("height").nodeValue;

			if (nodeInfoLink.childNodes.length > 0){
				navUrl = nodeInfoLink.childNodes[0].nodeValue;
			}

			//////////////////////////////////////////////////
			// Generate Banner
			if(divID == 'banner_type1'){
				str += '<div class="swiper-slide" style="width: 145px; height: 65px;">';
			}else if(divID == 'banner_type3'){
				str += '<div class="swiper-slide" style="width: 85px; height: 50px;">';
			}else if(divID == 'scrollBanner'){
				str += '<div class="swiper-slide">';
			}
			
			if (navUrl != ""){
				// Write <a> tag
				if ("_blank" == target && width > 0 && height > 0){
					// Popup
					var strPopup;
					strPopup = "window.open('"+navUrl+"', null, 'height="+height+",width="+width+",status=no,toolbar=no,menubar=no,location=no')";
					str += "<a href=\"javascript:void(0);\" onclick=\""+strPopup+"\">";
				}else{
					str += "<a href=\""+navUrl+"\" target=\""+target+"\">";
				}
			}
			if (displayTypeID==3) {
				// align right
				str += '<img src="'+imageUrl+'" title="'+alt_text+'" alt="'
					+alt_text+'" border="0" />';
			} else {
				str += '<img src="'+imageUrl+'" title="'+alt_text+'" alt="'
					+alt_text+'" border="0" />';
			}
			if (navUrl != ""){
				str += "</a>";
			}
			/* if (displayTypeID=="1")	{
				str += "<br />";
			} */
			
			if(divID != 'wcag_wrap'){
				str += '</div>';
			}
			
			// End of Banner Generation
			//////////////////////////////////////////////////
		}
		
		
		if (document.getElementById(divID))	{
			if(divID != 'wcag_wrap'){
				if(divID == 'scrollBanner' && mobile == true){
					str += '</div></div><div id="pagination">&nbsp;</div>';
				}else{
					str += '</div></div><div class="swiper-button-prev">&nbsp;</div><div class="swiper-button-next">&nbsp;</div>';
				}
				document.getElementById(divID).innerHTML = str;
				if(divID == 'banner_type1'){
					initBanner1();
				}else if(divID == 'banner_type3'){
					initBanner3();
				}else{
					initHomeVisual();
				}
			}else{
				$('#wcag_wrap > div').append(str);
			}
		}
	}
}

/* For rotational banner */

// The image list of rotational banner
var zmsBannerImageList = new Array();

// The current position in image list
var zmsBannerImageIndex = new Array();

function zmsLoadRotationalBanner(xmlDoc, divID){
	if (typeof zmsBannerImageList[divID] == "undefined"){
		zmsBannerImageList[divID] = new Array();
	}
	var b = zmsBannerImageList[divID];

	var imageList = xmlDoc.getElementsByTagName("data")[0].getElementsByTagName("image");
	var len = imageList.length;
	for (i=0; i < len; i++){
		var imageUrl = "";
		var alt_text = "";
		var target = "_self";
		var width = 0, height = 0;
		var navUrl = "";

		imageUrl = imageList[i].getElementsByTagName("image_path")[0].childNodes[0].nodeValue;

		if (imageList[i].getElementsByTagName("alt_text")[0].childNodes.length > 0){
			alt_text = imageList[i].getElementsByTagName("alt_text")[0].childNodes[0].nodeValue;
		}

		var nodeInfoLink = imageList[i].getElementsByTagName("info_link")[0];

		target = nodeInfoLink.attributes.getNamedItem("target").nodeValue;
		width = nodeInfoLink.attributes.getNamedItem("width").nodeValue;
		height = nodeInfoLink.attributes.getNamedItem("height").nodeValue;

		if (nodeInfoLink.childNodes.length > 0){
			navUrl = nodeInfoLink.childNodes[0].nodeValue;
		}

		b[i] = {"imageUrl":imageUrl
			,"alt_text":alt_text
			,"target":target
			,"width":width
			,"height":height
			,"navUrl":navUrl
		};
	}

	if (typeof zmsBannerImageIndex[divID] == "undefined"){
		zmsBannerImageIndex[divID] = len;
		loadRotationalBanner(divID);
	}
}

function loadRotationalBanner(divID){
	var b = zmsBannerImageList[divID];
	if (typeof b != "undefined" && b.length > 0){
		zmsBannerImageIndex[divID]++;
		if (zmsBannerImageIndex[divID] > b.length - 1){
			zmsBannerImageIndex[divID] = 0;
		}
		var str = "";
		var idx = zmsBannerImageIndex[divID];

		//////////////////////////////////////////////////
		// Generate Banner

		if (b[idx].navUrl != ""){
			// Write <a> tag
			if ("_blank" == b[idx].target && b[idx].width > 0 && b[idx].height > 0){
				// Popup
				var strPopup;
				strPopup = "window.open('"+b[idx].navUrl+"', null, 'height="+b[idx].height+",width="+b[idx].width+",status=no,toolbar=no,menubar=no,location=no')";
				str += "<a href=\"javascript:void(0);\" onclick=\""+strPopup+"\">";
			}else{
				str += "<a href=\""+b[idx].navUrl+"\" target=\""+b[idx].target+"\">";
			}
		}
		str += '<img src="'+b[idx].imageUrl+'" title="'+b[idx].alt_text+'" alt="'
			+b[idx].alt_text+'" border="0" />';
		if (b[idx].navUrl != ""){
			str += "</a>";
		}

		// End of Banner Generation
		//////////////////////////////////////////////////

		if (document.getElementById(divID))	{
			document.getElementById(divID).innerHTML = str;
		}

		setTimeout("loadRotationalBanner('"+divID+"')", 5 * 1000);
	}
}

function zmsLoadBannerGroup(){
	var i;
	if (typeof(zmsBannerGroups) != 'undefined'){
		for (i=0; i < zmsBannerGroups.length; i++){
			var xmlPath = zmsBannerGroups[i][0];
			var divID = zmsBannerGroups[i][1];

			zmsLoadBanner(xmlPath, divID);
		}
	}
}

zmsLoadBannerGroup();
