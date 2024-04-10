$(document).ready(function(){
    $("#header-container").load("header/header.html", function() {
        // Callback function to apply styles after content is loaded
        $("#header-container").find("link[href='style.css']").remove(); // Remove duplicate stylesheet link
        $("head").append('<link rel="stylesheet" href="style.css">'); // Add stylesheet link to header.html content
    });
});
