var xmlhttp;
if (window.XMLHttpRequest)
  xmlhttp=new XMLHttpRequest();
else
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

function tsw_show (stat, plugin_url, blog_url) {

  document.getElementById("tsw_stats_title").innerHTML = '<img src="'+plugin_url+'" title="Loading Stats" alt="Loading Stats" border="0">';
  xmlhttp.onreadystatechange=tsw_change_stat;
  xmlhttp.open("GET",blog_url+"/wp-admin/admin-ajax.php?action=tswstats&reqstats="+stat,true);
  xmlhttp.send(); 
}

function tsw_change_stat () {

  if (xmlhttp.readyState==4 && xmlhttp.status==200) {

     var rt = xmlhttp.responseText;
     var tswdata = rt.split('~');
     document.getElementById("tsw_stats_title").innerHTML = tswdata[0];
     document.getElementById("tsw_lds").innerHTML = tswdata[1];
     document.getElementById("tsw_lws").innerHTML = tswdata[2];
     document.getElementById("tsw_lms").innerHTML = tswdata[3];

  }
}

/*
     FILE ARCHIVED ON 17:04:47 Nov 30, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:47:49 Jan 27, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 42.354 (3)
  esindex: 0.102
  captures_list: 61.55
  CDXLines.iter: 13.261 (3)
  PetaboxLoader3.datanode: 66.856 (4)
  exclusion.robots: 0.185
  exclusion.robots.policy: 0.173
  RedisCDXSource: 2.312
  PetaboxLoader3.resolve: 74.383
  load_resource: 110.526
*/