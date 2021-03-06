angular.module("EverFrog").config(["$routeProvider", function($routeProvider) {

	$routeProvider
		.when("/", {
			redirectTo: "/home"
		})
		.when("/home", {
			templateUrl: "templates/pages/home/default.htm",
			controller: "HomeIndexController"
		})
		.when("/about", {
			templateUrl: "templates/pages/about/default.htm",
			controller: "AboutIndexController"
		})
		.when("/info", {
			templateUrl: "templates/pages/info/default.htm",
			controller: "InfoIndexController"
		})
		.when("/contact", {
			templateUrl: "templates/pages/contact/default.htm",
			controller: "ContactIndexController"
		})
		.otherwise({
			redirectTo: "/"
		});

}]);
