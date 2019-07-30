$(document).ready(function () {
    var window_height = window.innerHeight;
    var headerHeight = $("header").innerHeight(); //header height
    // window.location.href = "http://www.google.com";
    //window.location.replace("http://www.google.com");
    //document.getElementById('desktop-frame').innerHTML('http://www.google.com');
    
    $("#content_wrapper").css("padding-top", headerHeight);
    $("#left-sidebar").css("height", window_height);
    $("#content_wrapper").css("height", window_height);
    $("#main_toggle").click(function () {
        $("#left-sidebar").toggleClass("close-sidebar");
        $(".row-container").toggleClass("left-pannel");
    })
})