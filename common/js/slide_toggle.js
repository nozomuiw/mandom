// JavaScript Document
  $(document).ready(function(){
    $("#drop").css("display","none");
    $("#btn_group").click(function(){
      $(this).next("#drop:not(:animated)").slideToggle("slow");
      $(this).toggleClass("active");
      return false;
    });
  });