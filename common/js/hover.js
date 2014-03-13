// JavaScript Document
$(document).ready(function(){
$("img.hover").fadeTo(0,1.0);
$("img.hover").hover(function(){
        $(this).fadeTo(100,0.7);
    },
    function(){
        $(this).fadeTo(100,1.0);
    });
});