const flic = $(".carousel").flickity({pageDots: false, cellAlign:"left"});

$(document).ready(makeResponsive);
$(window).on('resize', makeResponsive);

$(document).scroll(function(){
    if(document.body.scrollTop>150){
        if($("#navblock").css("position")==="static"){
            $("#navblock").css("position", "fixed");
            $("#navblock").hide(0, function(){
                $("#navblock").slideDown(300);
            })
        }
    }
    else{
        $("#navblock").css("position", "static");
        
    }
})

function makeResponsive(){
    var width = $(window).width();
    if(width <= 767){
        //mobile
        flic.flickity({groupCells: 1});
    }
    else if(width <= 991){
        //tablet
        flic.flickity({groupCells: 2});
    }
    else if(width <= 1399){
        //pc
        flic.flickity({groupCells: 3});
    }
    else{
        //large pc
        flic.flickity({groupCells: 4});
    }
}

function openMobileNavMenu(){
    $("#mobilenavmenu").show();
    $("#mobilenavmenu").css("left", "100%");
    $("#mobilenavmenu").animate({"left":"0%"})
}

function closeMobileNavMenu(){
    $("#mobilenavmenu").fadeOut();
}