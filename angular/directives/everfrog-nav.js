angular.module("EverFrog").directive("everfrogNav", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-nav.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {

			// Objective-C variables ftw
			var isLateralNavAnimating = false;
			var didFinishLaunchingWithTimeout = true;
			var setVariableDidFinishLaunchingWithTimeout = function() {
				didFinishLaunchingWithTimeout = true;
			};
			
			var last = ".selected";

			var doNav = function() {

				if(!isLateralNavAnimating) {

					if(didFinishLaunchingWithTimeout) {

						didFinishLaunchingWithTimeout = false;

						if($(this).parents('.csstransitions').length > 0) {
							isLateralNavAnimating = true;
						}

						$("body").toggleClass("navigation-is-open");
						$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
							isLateralNavAnimating = false;
						});

						setTimeout(setVariableDidFinishLaunchingWithTimeout, 600);

					}

				}

			};

			$(".cd-nav-trigger").on("click", function(e) {
				e.preventDefault();
				doNav();
			});

			$(".cd-primary-nav a").on("click", function(e) {
				$(last).removeClass("selected");
				$(this).addClass("selected");
				$("main").css("background", "url(img/bg-" + $(this).data("img") + ".jpg)");
				last = this;
				doNav();
			});

		}
		
	};
	
}]);
