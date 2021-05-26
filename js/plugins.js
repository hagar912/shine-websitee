$(document).ready(function(){
	//for first paragraph
	$(".content_banner").hide();
		$("html").mouseenter(function(){
			$(".content_banner").fadeIn(1000);
	});


//submit contet hidden using mouseenter to submit div
	$(".submit-content").hide();
		$("#submit").mouseenter(function(){
			$(".submit-content").fadeIn(1000);
	});

//on scroll effects to the div
	$(window).on("load",function() {
	$(window).scroll(function() {
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    	$(".fade").each(function() {
      /* Check the location of each desired element */
      		var objectBottom = $(this).position().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      	if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        	if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      	}else { //object goes out of view (scrolling up)
        	if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      	}
    	});
    }).scroll(); //invoke scroll-handler on page-load
	});
});
/*
$(window).on("scroll",function(){
		var sc = $(window).scrollTop();
		console.log(sc);

    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

      var objectBottom = $(this).offset().top + $(this).outerHeight();

		//for banner div 
		if(sc >= 160 && sc <=1000){
			$(".features").fadeIn(2000);
		}
		else
		{
			$(".features").fadeOut();
		}

		//for contact us div
		if(sc >= 880 && sc <=1450){
			$(".submit-content").fadeIn(2000);
		}
		else
		{
			$(".submit-content").fadeOut();
		}

		//for personal form
		if(sc <= 1300 ){
			$(".form-all").slideDown(3500);
		}
		else
		{
			$(".form-all").fadeOut();
		}
	});
});

*/