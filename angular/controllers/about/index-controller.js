angular.module("EverFrog").controller("AboutIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "About EverFrog",
		"description": "",
		"keywords": "everfrog, about, bio, computer science, frogs",
		"shortname": "about"

	});

}]);
