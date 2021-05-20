$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.navbar-brand').toggleClass('scrolled', $(this).scrollTop() > 50);
});