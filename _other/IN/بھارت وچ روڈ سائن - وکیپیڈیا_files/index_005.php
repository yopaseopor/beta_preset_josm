/* @User:Ebrahim
This gadget adds a prompt option besides permalink and shortURL under tools in sidebar */

$(function () {
    // Permanent link
    if (mw.config.get('wgNamespaceNumber') > -1) {
        $('#t-permalink').append(' ', $('<a>', {
            href: "#",
            style: "font-size:12px;color:blue",
            html: "&#10012;"
        }).click(function (e) {
            e.preventDefault();
            prompt('مستقل ربط', '[[Special:PermaLink/' + mw.config.get('wgRevisionId') + ']]');
        }));
    }

    // Short URL
    if (mw.config.get('wgNamespaceNumber') > -1) {
        $('#t-shorturl').append(' ', $('<a>', {
            href: "#",
            style: "font-size:12px;color:blue",
            html: "&#10012;"
        }).click(function (e) {
            e.preventDefault();
            prompt('مختصر ربط', $('#t-shorturl a')[0].href);
        }));
    }
});