"use strict";

;(function ($, window, document, undefined) {

	var isLateralNavAnimating = false;

	var last = ".selected";

	var doNav = function doNav() {
		if (!isLateralNavAnimating) {

			if ($(undefined).parents(".csstransitions").length > 0) {
				isLateralNavAnimating = true;
			}

			$("body").toggleClass("navigation-is-open");
			$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
				isLateralNavAnimating = false;
			});
		}
	};

	$(document).ready(function () {

		$(".cd-nav-trigger").on("click", function (e) {
			e.preventDefault();
			doNav();
		});

		$(".cd-primary-nav a").on("click", function (e) {
			e.preventDefault();
			$(last).removeClass("selected");
			$(this).addClass("selected");
			last = this;
			doNav();
		});
	});
})(jQuery, window, document);