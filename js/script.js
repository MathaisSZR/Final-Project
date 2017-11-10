$(document).ready(function(){

	$("#fondo").css({"height":$(window).height() + "px"});


	$(window).scroll(function(){
		scroll = $(window).scrollTop();

			var barscr = $(window).scrollTop();
			var position = barscr * 0.05;
			var scroll;
			var flag = false;
			
			$("#body").css({
			"background-position": "0 -" + position +"px"
		});

		if (scroll > 100) {
			if (!flag) {
				$("#logo").css({"margin-top": "250%", "max-width": "100px", "max_height": "100px", "margin-left": "25px"});
				flag = true;
			}
		}
		else{
			if (!flag) {
				$("#logo").css({"margin-top": "0%", "max-width": "500px", "max_height": "500px", "margin-left": "300%"});
				flag = true;
			}
		}
	});
});