jQuery(document).ready(function() {

jQuery('aside.home-feat-cat:nth-child(2n+1)').addClass('odd');
jQuery('#right-sidebar #wp-calendar').wrap('<div class="extra-block">');
jQuery('#right-sidebar .widget_categories select').wrap('<div class="extra-block">');
jQuery('#right-sidebar .widget_archive select').wrap('<div class="extra-block">');
jQuery('#featuredbox').delay(2000).fadeIn(400);

jQuery("ul.sf-menu").supersubs({
            minWidth:    18,   // minimum width of sub-menus in em units
            maxWidth:    18,   // maximum width of sub-menus in em units
            extraWidth:  1     // extra width can ensure lines don't sometimes turn over
                               // due to slight rounding differences and font-family
        }).superfish();  // call supersubs first, then superfish, so that subs are
                         // not display:none when measuring. Call before initialising
                         // containing tabs for same reason.

});


document.write('<style type="text/css">.tabber{display:none;}<\/style>');


function startGallery() {
var myGallery = new gallery($('myGallery'), {
timed: true,
showArrows: true,
showCarousel: false,
embedLinks: true
});
document.gallery = myGallery;
}
if (typeof onDomReady == 'function') {
window.onDomReady(startGallery);
}