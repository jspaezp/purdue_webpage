
// Usage exaplmple
// csvToHtml('data.csv', '#container')
// would read the csv and add the table to the container called container

function _csvToHtml (csvLocation, containerToAppend) {
    $.get(csvLocation, function(data) {

    // start the table
    var html = '<table">';

    // split into lines
    var rows = data.split("\n");

    // parse lines
    rows.forEach( function getvalues(ourrow) {

    // start a table row
    html += "<tr>";

    // split line into columns
    var columns = ourrow.split(",");

    html += "<td>" + columns[0] + "</td>";
    html += "<td>" + columns[1] + "</td>";
    html += "<td>" + columns[2] + "</td>";

    // close row
    html += "</tr>";
    })
    // close table
    html += "</table>";

    // insert into div
    $(containerToAppend).append(html);

    });
}

// gotten from the jQuery webpage and was done by someone a lot smarter than me :D

function csvToHtml(csvLocation, containerToAppend) {
    setTimeout(function() {
        appendTab(csvLocation, containerToAppend)
    }, 2000);
}

