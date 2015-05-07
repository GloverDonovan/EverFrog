angular.module("EverFrog", ["ngRoute"]).config(function() {})

angular.module("EverFrog").config(["$routeProvider", function($routeProvider) {

	$routeProvider
		.when("/", {
			redirectTo: "/home"
		})
		.when("/home", {
			templateUrl: "templates/pages/home/default.htm",
			controller: "HomeIndexController"
		})
		.when("/contact", {
			templateUrl: "templates/pages/contact/default.htm",
			controller: "ContactIndexController"
		})
		.otherwise({
			redirectTo: "/"
		});

}]);

angular.module("EverFrog").directive("everfrogNav", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-nav.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {

			var isLateralNavAnimating = false;
			
			var last = ".selected";

			var doNav = function() {
				if(!isLateralNavAnimating) {

					if($(this).parents('.csstransitions').length > 0) {
						isLateralNavAnimating = true;
					}

					$("body").toggleClass("navigation-is-open");
					$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
						isLateralNavAnimating = false;
					});

				}
			};

			$(".cd-nav-trigger").on("click", function(e) {
				e.preventDefault();
				doNav();
			});

			$(".cd-primary-nav a").on("click", function(e) {
				$(last).removeClass("selected");
				$(this).addClass("selected");
				last = this;
				doNav();
			});

		}
		
	};
	
}]);

angular.module("EverFrog").controller("ContactIndexController", ["$scope", function($scope) {
	
}]);

angular.module("EverFrog").controller("HomeIndexController", ["$scope", function($scope) {
	
}]);

