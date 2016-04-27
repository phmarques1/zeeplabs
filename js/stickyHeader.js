/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();



   $(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clonedHeader"));
        
        $(window).on("scroll", function() {
        
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 470));

        });



    });

$(document).ready(function(){
    
$('a .profile-hidden').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
    
});

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 200);
  });
});

/* 
$(document).ready(function() {

        $( ".close" ).hide();
        $( ".menu_responsive" ).show();



        $( ".menu_responsive" ).click(function() {
           
            $( ".menu_responsive" ).hide();
            $( ".close" ).show();
            $( ".top-fixed" ).show();
            $(".mobile_header").css("background-color", "white");
            $( ".mobile" ).show();

                $(window).on("resize", function() {
                    if (parseInt($(window).width()) > 768) {
                        $( ".mobile" ).hide();
                        $( ".top-fixed" ).hide();
                        $(".mobile_header").css("background-color", "transparent");
                        $( ".close" ).hide();
                        $( ".menu_responsive" ).show();
                } 

                });

        /*$( "" ).slideToggle( "slow", function() {
            

 


            });

        });




        $( ".close" ).click(function() {
            
            $( ".top-fixed" ).hide();
            $( ".mobile" ).hide();
            $( ".close" ).hide();
            $(".mobile_header").css("background-color", "transparent");
            $( ".menu_responsive" ).show();
        });
   

}); */




