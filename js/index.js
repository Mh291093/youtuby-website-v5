$(document).ready(function() {
    $(".first-list-element").addClass("active");
    
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function(event) {
        $("#wrap").toggleClass("toggled");
        
        var left = $(".side-bar").css("left");
        if (left == "0px")
        {
            $(".side-bar").css({"left" : "-17rem"});
            $(".layer").fadeOut();
        }
        else
        {
            $(".side-bar").css({"left" : "0rem"});
            $(".layer").fadeIn();
        }
    });

    $(".layer").click(function() {
        $(".side-bar").css({"left" : "-17rem"});
        $(".layer").fadeOut();
    });

    $(".search-icon").click(function() {
        $(".search-input").slideToggle("slow");
    });

});