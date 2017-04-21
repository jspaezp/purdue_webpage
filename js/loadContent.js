
$(function(){
    function load_my_content(file) {
        $( "#sidenav" ).append($('<div>').load( file+" #sidenav_content" ));
        $( "#main_content" ).append($('<div>').load( file+" #content" ));
    }
    load_my_content("sub4/acetone.html")
    load_my_content("sub4/ion_solvation.html")
})
