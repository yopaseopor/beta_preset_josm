function zmsGenerateBreadcrumb(parentList){
	var html = "";
	if (parentList.length>0) {
		/* html="<div style=\"padding-left: 20px;padding-top:2px;padding-bottom:20px;font-weight:bold;background-image: url(/filemanager/template/common/images/path_bg.gif);background-repeat: no-repeat;\">"; */
		//html+='<img src="/filemanager/template/common/images/index_bullet_white.gif" />&nbsp;';
		for (i=0; i < parentList.length; i++){
			var contentID = parentList[i];
			
			//For Traffic Notices
			if (typeof(zmsTrafficNoticesContentID) != "undefined" && contentID == zmsTrafficNoticesContentID ){
			    //START:: Traffic Notices
				var dataFileID = Math.floor(contentID / 100);
				if (zmsBreadcrumbData[dataFileID]) {
					var node = zmsBreadcrumbData[dataFileID][contentID];
					if(i!=0){
						/* html += '&gt;&nbsp;'; */
					}
					if (i == parentList.length - 1 && zmsTrafficNoticesBreadcrumbData.length <=0){
						if (typeof(zmsBreadcrumbCustomTitle) == "undefined"){
							if (node) {
								html += node.name;
							}
						}else{
							html += zmsBreadcrumbCustomTitle;
						}
					}else if(node){
						node.url = CheckSCPath(node.url);
						html += '<a href="'+node.url+'" target="'+node.target+'">'+node.name+'</a>';
					}
				}
			
				for (j=0; j < zmsTrafficNoticesBreadcrumbData.length; j++){
					var TrafficNoticesNode = zmsTrafficNoticesBreadcrumbData[j];
					//if(i!=0 || j!=0 ){
						/* html += '&gt;&nbsp;'; */
					//}
					if ( j == zmsTrafficNoticesBreadcrumbData.length - 1 && i == parentList.length - 1){
						if (typeof(zmsBreadcrumbCustomTitle) == "undefined"){
							if (TrafficNoticesNode ) {
								html += TrafficNoticesNode.name;
							}
						}else{
							html += zmsBreadcrumbCustomTitle;
						}
					}else if(TrafficNoticesNode ){
						TrafficNoticesNode.url = CheckSCPath(TrafficNoticesNode.url);
						html += '<a href="'+TrafficNoticesNode.url+'" target="'+TrafficNoticesNode.target+'">'+ TrafficNoticesNode.name+'</a>';
					}
				}
                //END:: Traffic Notices
			}else{

				var dataFileID = Math.floor(contentID / 100);
				if (zmsBreadcrumbData[dataFileID]) {
					var node = zmsBreadcrumbData[dataFileID][contentID];
					if(i!=0){
						/* html += '&gt;&nbsp;'; */
					}
					if (i == parentList.length - 1){
						if (typeof(zmsBreadcrumbCustomTitle) == "undefined"){
							if (node) {
								html += node.name;
							}
						}else{
							html += zmsBreadcrumbCustomTitle;
						}
					}else if(node){
						node.url = CheckSCPath(node.url);
						html += '<a href="'+node.url+'" target="'+node.target+'">'+node.name+'</a>';
					}
				}
			}
		}
		/* html += "</div>"; */
		document.writeln(html);
	} else {
		/* document.writeln("&nbsp;"); */
	}
}