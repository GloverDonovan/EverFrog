;(($, window, document, undefined) => {

/*
	let isLateralNavAnimating = false;
	
	var last = ".selected";

	let doNav = () => {
		if(!isLateralNavAnimating) {

			if($(this).parents('.csstransitions').length > 0) {
				isLateralNavAnimating = true;
			}

			$("body").toggleClass("navigation-is-open");
			$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", () => {
				isLateralNavAnimating = false;
			});

		}
	};

	$(document).ready(() => {

		$(".cd-nav-trigger").on("click", function(e) {
			e.preventDefault();
			doNav();
		});

		$(".cd-primary-nav a").on("click", function(e) {
			e.preventDefault();
			$(last).removeClass("selected");
			$(this).addClass("selected");
			last = this;
			doNav();
		});

	});
*/

})(jQuery, window, document);
