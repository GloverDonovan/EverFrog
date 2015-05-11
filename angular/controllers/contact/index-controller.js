angular.module("EverFrog").controller("ContactIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "Contact Us - EverFrog",
		"description": "Ready to apply or have any questions? Send us an email and we'll get back to you soon!",
		"keywords": "data scientist, everfrog, big data, tech careers, tech jobs, computer science, frogs, contact, apply",
		"shortname": "contact"

	});

}]);
