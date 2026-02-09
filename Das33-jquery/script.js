$(function(){
    function planetSpin1(planet){
        $(planet).animate({
            left: "100%"
        },5000).css({
            opacity: 1,
        })
    };    
    function planetSpin2(planet){
        $(planet).animate({
            top: "100vh",
        },5000).css({
            opacity: 1,
        })
    }; 
    function planetSpin3(planet){
        $(planet).animate({
            top: "100vh",
            left: "100%"
        },5000).css({
            opacity: 1,
        })
    }; 
    $("body").on("keyup", function(event){
        let click = event.key.toLowerCase();
        if(click === "e"){
            planetSpin2("#earth-img");
        }
        if(click === "s"){
            planetSpin1("#saturn-img");
        }
        if(click === "u"){
            planetSpin3("#uran-img");
        }
        if(click === "y"){
            planetSpin2("#yupiter-img");
        }
    });
});