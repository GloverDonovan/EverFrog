angular.module("EverFrog").directive("everfrogForm", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-form.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {
			
			$("form").on("submit", function() {
				
				$("#wait").fadeIn(200);
				setTimeout(function() {
					$("#wait").hide();
					$("#out").fadeIn(500);
				}, 2000);
				
			});
			
		}
		
	};
	
}]);
