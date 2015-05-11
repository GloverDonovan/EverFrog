angular.module("EverFrog").controller("InfoIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "More Information - EverFrog",
		"description": "Not sure if you would like to work at EverFrog? This page covers the information you need before applying.",
		"keywords": "data scientist, everfrog, big data, tech careers, tech jobs, computer science, frogs, information",
		"shortname": "info"

	});

}]);
