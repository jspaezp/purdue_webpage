function elementAppendAsTab(
    tab_title, source, elementId, tabHeaderId, tabContentsId
) {
    // Just need to add the element with a valid data-gist-id to the document, then call gist() on it

    var tabHeaderElement = '<li><a data-toggle="tab" href="' +
        elementId.replace(/#/, "#div_") +
        '">' +
        tab_title +
        '</a><li/>';
    var tabDiv = '<div class="tab-pane fade" id="' +
        elementId.replace(/#/, "div_") +
        '"><div id="' + elementId.replace(/#/, "") + '"></div></div>'

    function appendTab() {
        $(tabHeaderElement).appendTo(tabHeaderId);
        $(tabDiv).appendTo(tabContentsId);
    };

    function appendContent() {
        $('<div>').load(source + " #content").appendTo(elementId);
    };
    setTimeout(function() {
        appendTab()
    }, 2000);
    setTimeout(function() {
        appendContent()
    }, 3000);
};


