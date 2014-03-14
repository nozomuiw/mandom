$(function(){
	 $('#srch_menu h5').click(function() {
            $(this).next().slideToggle();
      });
});

$(function() {
    $('#dropdown_nav li').find('.sub_nav').hide();
    //When hovering over the main nav link we find the dropdown menu to the corresponding link.
    $('#dropdown_nav li').hover(function() {
      //Find a child of 'this' with a class of .sub_nav and make the beauty fadeIn.
      $(this).find('.sub_nav').slideToggle();
    });
});