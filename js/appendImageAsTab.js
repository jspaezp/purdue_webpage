function imageAppendAsTab(
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
        '"><div class="container-fluid center">'+
        '<img style="display:block" class="img-fluid center" src="'+
        source+
        '"/></div></div>';

    function appendTab() {
        $(tabHeaderElement).appendTo(tabHeaderId);
        $(tabDiv).appendTo(tabContentsId);
    };

    setTimeout(function() {
        appendTab();
    }, 1000);
};
