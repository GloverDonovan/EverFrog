angular.module("EverFrog").controller("ContactIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "contact"

	});

}]);
