jQuery(document).ready(function($) {  


 	TweenMax.fromTo(".titulo_loading", 2, {autoAlpha:0}, {autoAlpha:1, delay:1});
    TweenLite.to(".titulo_loading", 1, {delay:3,  rotation:20, ease: Elastic.easeOut.config(1, 0.5), transformOrigin:"left 0%"});
    TweenLite.to(".titulo_loading", 1, {delay:4,  y:1200, onComplete:destroLoading});




function destroLoading() {
  $('.Loading').fadeOut('slow',function(){$(this).remove();});
}


// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
  //$('.Loading').fadeOut('slow',function(){$(this).remove();});

});


});