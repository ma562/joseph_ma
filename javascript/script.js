$(document).ready(function(){
	$(window).scroll(function()	{
		if(this.scrollY > 20)	{
			console.log("scrolled");
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	// toggle menu/navbar
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	$('.navbar .menu li a').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	})

	//typing script
	var typed = new Typed(".typing", {
		strings: ["a Computer Engineer", "an Electrical Engineer", "a Programmer", "a Robotics Enthusiast", "a Pythonista", "a Boilermaker"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	//owl carousel
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,

		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});
});