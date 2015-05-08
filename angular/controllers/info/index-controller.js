angular.module("EverFrog").controller("InfoIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "info"

	});

}]);
