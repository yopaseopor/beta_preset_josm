var wcaghtml='';

if (typeof complyWCAG!="undefined" && complyWCAG) {
	if (zmsCharsetID==1) {
		wcaghtml+='<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" title="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" border="0" /></a>';
	} else {
		wcaghtml+='<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" title="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" border="0" /></a>';
	}
}  else if (location.href.indexOf("/free_publications/annual_transport_digest_2003/")>0
	|| location.href.indexOf("/free_publications/annual_transport_digest_2002/")>0
	|| location.href.indexOf("/free_publications/annual_transport_digest_2001/")>0
	|| location.href.indexOf("/free_publications/annual_transport_digest_2000")>0) 
	{
	if (zmsCharsetID==1) {
		wcaghtml+='<a href="http://www.td.gov.hk/en/wcag2_0_statement/index.html" target="_blank"><img src="/filemanager/template/en/images/non_wcag.gif" alt="Web Accessibility Conformance" title="Web Accessibility Conformance" border="0" />.</a>';
	} else {
		wcaghtml+='<a href="http://www.td.gov.hk/tc/wcag2_0_statement/index.html" target="_blank"><img src="/filemanager/template/tc/images/non_wcag.gif" alt="無障礙網頁守則" title="無障礙網頁守則" border="0" />.</a>';
	}

}  else if (location.href.indexOf("/publications_and_press_releases/publications/free_publications/")>0
	|| location.href.indexOf("/publications_and_press_releases/consultation_papers/transport_department/")>0
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index.html")>0 
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index_year_2013")>0 
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index_year_2014")>0 
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index_year_2015")>0 
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index_year_2016")>0 
	|| location.href.indexOf("/publications_and_press_releases/press_releases/transport_department/index_id_2")>0 
	|| location.href.indexOf("/publications_and_press_releases/speeches/")>0 
	|| location.href.indexOf("/taxi/workplace_english_and_putonghua_programme_for_taxi/")>0 
	|| location.href.indexOf("/transport_figures/monthly_traffic_and_transport_digest/2013/")>0 
	|| location.href.indexOf("/transport_figures/monthly_traffic_and_transport_digest/2014/")>0 
	|| location.href.indexOf("/transport_figures/monthly_traffic_and_transport_digest/2015/")>0 
	|| location.href.indexOf("/transport_figures/monthly_traffic_and_transport_digest/2016/")>0 
	|| location.href.indexOf("/road_safety/road_traffic_accident_statistics/")>0 
	|| location.href.indexOf("/traffic_notices/index_type")>0 
	|| location.href.indexOf("/traffic_notices/index_id")>0 
	|| location.href.indexOf("/site_map/index.html")>0 
	|| location.href.indexOf("/rss/index.html")>0) 
	{
	if (zmsCharsetID==1) {
		wcaghtml+='<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" title="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" border="0" />.</a>';
	} else {
		wcaghtml+='<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" title="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" border="0" />.</a>';
	}

}  else {
	if (typeof nonComplyWCAGContentUrl!="undefined" && nonComplyWCAGContentUrl) {
		// Non-standard non-comply WCAG
		if (zmsCharsetID==1) {
			wcaghtml+='<a href="'+nonComplyWCAGContentUrl+'" target="_blank"><img src="/filemanager/template/en/images/non_wcag.gif" alt="Web Accessibility Conformance" title="Web Accessibility Conformance" border="0" /></a>';
		} else {
			wcaghtml+='<a href="'+nonComplyWCAGContentUrl+'" target="_blank"><img src="/filemanager/template/tc/images/non_wcag.gif" alt="無障礙網頁守則" title="無障礙網頁守則" border="0" /></a>';
		}
	} else {
		// Standard non-comply WCAG
		if (zmsCharsetID==1) {
			//-----Modified in Dec 2016-----
			//wcaghtml+='<a href="http://www.td.gov.hk/en/wcag2_0_statement/index.html" target="_blank"><img src="/filemanager/template/en/images/non_wcag.gif" alt="Web Accessibility Conformance" title="Web Accessibility Conformance" border="0" /></a>';
			wcaghtml+='.<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" title="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0" border="0" /></a>';
			//-----end of modified in Dec 2016-----

		} else if (location.href.indexOf("/sc/")>0)	{
			//-----Modified in Dec 2016-----
			//wcaghtml+='<a href="http://www.td.gov.hk/sc/wcag2_0_statement/index.html" target="_blank"><img src="/filemanager/template/tc/images/non_wcag.gif" alt="无障碍网页守则" title="无障碍网页守则" border="0" /></a>';
			wcaghtml+='.<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="符合万维网联盟有关无障碍网页设计指引中2A级别的要求" title="符合万维网联盟有关无障碍网页设计指引中2A级别的要求" border="0" /></a>';
			//-----end of modified in Dec 2016-----

		} else {
			//-----Modified in Dec 2016-----
			//wcaghtml+='<a href="http://www.td.gov.hk/tc/wcag2_0_statement/index.html" target="_blank"><img src="/filemanager/template/tc/images/non_wcag.gif" alt="無障礙網頁守則" title="無障礙網頁守則" border="0" /></a>';
			wcaghtml+='.<a href="http://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank"><img src="/filemanager/template/common/images/wcag.gif" alt="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" title="符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求" border="0" /></a>';
			//-----end of modified in Dec 2016-----
		}
	}
}
$('#wcag_wrap > div').append(wcaghtml);
//document.getElementById('').innerHTML = wcaghtml;