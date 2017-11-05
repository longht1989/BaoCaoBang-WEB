$(document).ready(function(){

	var viewportWidth = $(window).width();
	if(viewportWidth<1200) {
		$('.scrollleftads').css({'display':'none'});
		$('.scrollrightads').css({'display':'none'});
	}
});