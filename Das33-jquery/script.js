$(function(){ 
    $("body").on("keyup", function(event){
        let click = event.key.toLowerCase();
        if(click === "e"){
            $("#earth-img").animate({top: "100vh"}, 5000).css({opacity: 1});
        }
        if(click === "s"){
            $("#saturn-img").animate({left: "100%"}, 5000).css({opacity: 1});
        }
        if(click === "u"){
            $("#uran-img").animate({
                top: "100vh",
                left: "100%"
            }, 5000).css({opacity: 1});
        }
        if(click === "y"){
            $("#yupiter-img").animate({
                top: "100vh",
                right: "100%"
            }, 5000).css({opacity: 1});
        }
    });
});