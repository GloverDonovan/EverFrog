angular.module("EverFrog").controller("HomeIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "We're hiring! Data Scientist @ EverFrog",
		"description": "Join us in analyzing big data at EverFrog. We are currently hiring and specialize in the advancement of Frog kind.",
		"keywords": "data scientist, everfrog, big data, tech careers, tech jobs, computer science, frogs",
		"shortname": "home"

	});

}]);
