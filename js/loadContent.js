function load_my_content(file) {
    $("#sidenav").append($('<div>').load(file + " #sidenav_content"));
    $("#main_content").append($('<div>').load(file + " #content"));
}
