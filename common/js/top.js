$(function(){


	var bnrAry = [];
	$('#top_splash_bnr img').each(function(i) {
		bnrAry[i] = $(this).attr('src');
	});

	$('img.imgHover').each(function() {
		var src = $(this).attr('src');
		var src_on = src.replace(/^(.+)(\.[a-z]+)$/, '$1_hover$2');
		$('<img>').attr('src', src_on);
		$(this).hover(function() {
			$(this).attr('src', src_on);
		}, function() {
			$(this).attr('src', src);
		});
	});

	$('#top_splash').cycle({
		fx: 'fade',
		timeout: 6000,
		speed: 500,
		pager: '#top_splash_bnr'
	});

$(window).load(function() {

	$('#top_splash_bnr a').each(function(i) {
		var num = i*174+12;
		var bnr_on = bnrAry[i].replace(/^(.+)(\.[a-z]+)$/, '$1_hover$2');
		$(this).css({'left':num + 'px', 'background-image':'url(' + bnrAry[i] + ')'});
		$('<img>').attr('src', bnr_on);
		$(this).hover(function() {
			$(this).css('background-image', 'url(' + bnr_on + ')');
		}, function() {
			$(this).css('background-image', 'url(' + bnrAry[i] + ')');
		});
	});


});


});
