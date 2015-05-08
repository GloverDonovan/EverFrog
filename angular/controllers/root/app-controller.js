angular.module("EverFrog").controller("RootAppController", ["$scope", function($scope) {

	var didFinishInitializingOnLoad = false; // Objective-C variable names ftw

	$scope.meta = {
		"title": "We're hiring! Data Scientist @ EverFrog",
		"description": "",
		"keywords": "data scientist, everfrog, big data, tech careers, tech jobs, computer science, frogs",
		"shortname": "home"
	};

	// Update app meta and call MixPanel Analytics for eacn newPageLoaded event!
	$scope.$on("newPageLoaded", function(event, meta) {
		$scope.meta = meta;

		if(!didFinishInitializingOnLoad) {
			var x = $(".cd-primary-nav").find("[href='#/" + meta.shortname + "']");
			x.addClass("selected");
			$("main").css("background", "url(img/bg-" + x.data("img") + ".jpg)");
			didFinishInitializingOnLoad = true;
		}
		
	});

}]);
