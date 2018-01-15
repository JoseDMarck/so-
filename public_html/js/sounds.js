$(document).ready(function() {
    var sonido_pop = document.createElement('audio');
    var sonido_wahwah = document.createElement('audio');
    var sonido_error = document.createElement('audio');


    sonido_pop.setAttribute('src', 'sounds/pop.mp3');
    sonido_wahwah.setAttribute('src', 'sounds/wahwah.wav')
    sonido_error.setAttribute('src', 'sounds/error.wav')
    

    
     
    
  
    
    $('.tapa').click(function() {
        sonido_pop.play();
        TweenLite.to(".titulo", 1, {rotation:20, y:-70,  ease: Elastic.easeOut.config(1, 0.5), transformOrigin:"left 50%"});
        TweenLite.to(".titulo", 1, {delay:0.6, y:1500, transformOrigin:"left 50%"});




    });

    $(".cuerpo_contendor").click(function(){
        sonido_error.play();
       
         TweenLite.fromTo(".titulo", 0.5, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"})
 

 

    });


    sonido_pop.addEventListener('ended', function() {
         $( '.tapa' ).unbind();
         $( '.cuerpo_contendor' ).unbind();
         sonido_wahwah.play();
    }, false);
    
 
     
});