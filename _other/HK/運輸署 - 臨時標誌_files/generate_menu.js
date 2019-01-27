function generateMenu(rootMenu, level) {
	var cssclass = "sub";
	if (typeof(level) == "undefined"){
		level = 1;
		if(mobile == true){
			cssclass = "menu_mobile"
		}else{
			cssclass = "menu"
		}
		
	}

	document.writeln('<ul class="'+cssclass+'">');
	for (var i=0; i<rootMenu.childs.length; i++) {
		var m = rootMenu.childs[i];
		if (m.isCurrentSection) {
			document.writeln('<li>'+m.alt);
		} else {
			m.href = CheckSCPath(m.href);
			if (typeof(domain) != "undefined" && m.href.indexOf("/")==0) {
				m.href = "http://" + domain + m.href;
			}
			document.write('<li><a href="'+m.href+'" target="'+m.target+'"');
			if (level==1 && (zmsCurrentContentId==m.contentId || (","+zmsParentContentId).indexOf(','+m.contentId+',')>=0)) {
				document.write(' class="selected"');
			}
			if(mobile == true && m.childs.length>0 && level <= 1){
			document.writeln('>'+m.alt+'<span>Open</span></a>');
			}else{
				document.writeln('>'+m.alt+'</a>');
			}			
		}
		
		if (m.childs.length>0 && level <= 1) {
			generateMenu(m, level+1);
		}
		document.writeln('</li>');
	}
	document.writeln('</ul>');
}

