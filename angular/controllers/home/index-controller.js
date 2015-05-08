angular.module("EverFrog").controller("HomeIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "home"

	});

}]);
