function gist_element_append_as_tab(
    element, gist_id, gist_element, tab_title, tabHeaderId, tabContentsId
) {
    // Just need to add the element with a valid data-gist-id to the document, then call gist() on it
    var unqueried_code = '<code data-gist-id="' +
        gist_id +
        '" data-gist-file="' +
        gist_element +
        '"/>';
    var tabHeaderElement = '<li><a data-toggle="tab" href="' +
        element.replace(/#/, "#div_") +
        '">' +
        tab_title +
        '</a><li/>';
    var tabDiv = '<div class="tab-pane fade" id="' +
        element.replace(/#/, "div_") +
        '"><div id="' + element.replace(/#/, "") + '"></div></div>'

    function appendTab() {
        $(tabHeaderElement).appendTo(tabHeaderId);
        $(tabDiv).appendTo(tabContentsId);
    };

    function appendContent() {
        var $code = $(unqueried_code);
        $code.appendTo(element).gist();
    };
    setTimeout(function() {
        appendTab()
    }, 2000);
    setTimeout(function() {
        appendContent()
    }, 3000);
};
