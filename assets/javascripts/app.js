$(document) .ready (function() {
$('header nav').affix({
  offset: {
    top: 60 
     }
   });

$('body').scrollspy({

 target: '#nav-link-container' 
 offset: 100

})
});