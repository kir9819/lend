$(window).scroll(function() {
  if ($(window).scrollTop() > 400){
	$('nav').addClass('scroll_nav');
	}
  else {
	$('nav').removeClass('scroll_nav');
  }
});