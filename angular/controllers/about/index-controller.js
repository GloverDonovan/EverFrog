angular.module("EverFrog").controller("AboutIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "Just Who Are We? - EverFrog",
		"description": "We're EverFrog, a Disney-owned company that is based in Orlando, Florida. We study frogs, of course!",
		"keywords": "everfrog, about, bio, computer science, frogs",
		"shortname": "about"

	});

}]);
