$(function(){
	 $('#srch_menu h4').click(function() {
            $(this).next().slideToggle();
            $(this).find('a').toggleClass('clicked');
      });
});

$(function() {
    $('#dropdown_nav li').find('.sub_nav').hide();
    $('#dropdown_nav li').hover(function() {
    	$(this).find('.sub_nav').slideToggle();
    });
});