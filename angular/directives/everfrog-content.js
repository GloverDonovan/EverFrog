angular.module("EverFrog").directive("everfrogContent", [function() {
	
	return {
		
		replace: true,
		transclude: true,
		restrict: "E",
		scope: {
			make: "@"
		},
		templateUrl: "templates/directives/everfrog-content.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {}
		
	};
	
}]);
