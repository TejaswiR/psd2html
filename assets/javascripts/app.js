$(document) .ready (function() {
$('header nav').affix({
  offset: {
    top: 60 
     }
   });

$('body').scrollspy({

 target: '#nav-link-container' ,
 offset: 55
});

var email_components =["hello" , "@" , "example" , "." , "com" ];
var  email = email_components . join(" ");
$('#email-link').html (email).attr ('href',  'mailto:' +email);
});