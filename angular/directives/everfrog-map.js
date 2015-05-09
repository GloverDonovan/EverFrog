angular.module("EverFrog").directive("everfrogMap", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-map.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {

			function init() {
				// Basic options for a simple Google Map
				// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
				var mapOptions = {
					// How zoomed in you want the map to start at (always required)
					zoom: 11,

					scrollwheel: false,
					scaleControl: false,

					// The latitude and longitude to center the map (always required)
					center: new google.maps.LatLng(28.546482, -81.384886), // Orlando

					// How you would like to style the map. 
					// This is where you would paste any style found on Snazzy Maps.
					styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6d6d6d"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#c8e08b"},{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d6e5a7"},{"lightness":"19"},{"saturation":"29"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"color":"#d6e5a7"},{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#d6e5a7"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"saturation":"-4"},{"lightness":"69"},{"gamma":"1.22"},{"color":"#f7ffb6"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#c0e8e4"},{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#89b7b0"}]},{"featureType":"poi.attraction","elementType":"labels.text.fill","stylers":[{"color":"#6b6b6b"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#5eddc5"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#9ac87b"},{"saturation":"13"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"color":"#00ffc4"},{"visibility":"on"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#33cee8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#6bb1c2"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#67a4b2"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#82b6c2"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#93eb96"},{"saturation":"-33"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#a4fff2"}]},{"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#454545"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"weight":"0.50"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#757575"}]}]
				};

				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById('map');

				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map(mapElement, mapOptions);

				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(28.546482, -81.384886),
					map: map,
					title: 'Snazzy!'
				});
			}

			setTimeout(init, 5000);

		}
		
	};
	
}]);
