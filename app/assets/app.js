angular.module("EverFrog", ["ngRoute"]).config(function() {});

angular.module("EverFrog").config(["$routeProvider", function($routeProvider) {

	$routeProvider
		.when("/", {
			redirectTo: "/home"
		})
		.when("/home", {
			templateUrl: "templates/pages/home/default.htm",
			controller: "HomeIndexController"
		})
		.when("/about", {
			templateUrl: "templates/pages/about/default.htm",
			controller: "AboutIndexController"
		})
		.when("/info", {
			templateUrl: "templates/pages/info/default.htm",
			controller: "InfoIndexController"
		})
		.when("/contact", {
			templateUrl: "templates/pages/contact/default.htm",
			controller: "ContactIndexController"
		})
		.otherwise({
			redirectTo: "/"
		});

}]);

angular.module("EverFrog").directive("everfrogForm", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-form.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {}
		
	};
	
}]);

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

angular.module("EverFrog").directive("everfrogModal", [function() {
	
	return {
		
		replace: true,
		transclude: true,
		restrict: "E",
		scope: {
			lead: "@",
			header: "@"
		},
		templateUrl: "templates/directives/everfrog-modal.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {

			var retrieveScale = function(btn) {
				var btnRadius = btn.width()/2,
					left = btn.offset().left + btnRadius,
					top = btn.offset().top + btnRadius - $(window).scrollTop(),
					scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

				btn.css('position', 'fixed').velocity({
					top: top - btnRadius,
					left: left - btnRadius,
					translateX: 0,
				}, 0);

				return scale;
			};

			var scaleValue = function(topValue, leftValue, radiusValue, windowW, windowH) {
				var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
					maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
				return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
			};

			var animateLayer = function(layer, scaleVal, bool) {
				layer.velocity({ scale: scaleVal }, 400, function(){
					$('body').toggleClass('overflow-hidden', bool);
					(bool) 
						? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
						: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
				});
			};

			var updateLayer = function() {
				var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
					layerRadius = layer.width()/2,
					layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
					layerLeft = layer.siblings('.btn').offset().left + layerRadius,
					scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
				
				layer.velocity({
					top: layerTop - layerRadius,
					left: layerLeft - layerRadius,
					scale: scale,
				}, 0);
			};

			var closeModal = function() {
				var section = $('.cd-section.modal-is-visible');
				animateLayer(section.find('.cd-modal-bg'), 1, false);
				section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {});

				//if browser doesn't support transitions...
				if(section.parents('.no-csstransitions').length > 0 ) {
					animateLayer(section.find('.cd-modal-bg'), 1, false);
				}
			};

			// open modal window
			$('[data-type="modal-trigger"]').on("click", function(event) {

				event.preventDefault(); // Very important! Prevent Angular.js default

				var actionBtn = $(this),
					scaleValue = retrieveScale(actionBtn.next(".cd-modal-bg"));
				
				actionBtn.addClass('to-circle');
				actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
					animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
				});

				// Fallback if no css3 support
				if(actionBtn.parents('.no-csstransitions').length > 0 ) {
					animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
				}
			});

			// close modal window
			$('.cd-section .cd-modal-close').on("click", function(event) {
				event.preventDefault();
				closeModal();
			});

			$(document).keyup(function(event) {
				if(event.which == '27') {
					closeModal();
				}
			});

			$(window).on('resize', function() {
				// on window resize - update cover layer dimention and position
				if($('.cd-section.modal-is-visible').length > 0) {
					window.requestAnimationFrame(updateLayer);
				}
			});

		}
		
	};
	
}]);

angular.module("EverFrog").directive("everfrogNav", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
		templateUrl: "templates/directives/everfrog-nav.htm",
		controller: function($scope) {},
		link: function(scope, element, attrs) {

			// Objective-C variables ftw
			var isLateralNavAnimating = false;
			var didFinishLaunchingWithTimeout = true;
			var setVariableDidFinishLaunchingWithTimeout = function() {
				didFinishLaunchingWithTimeout = true;
			}
			
			var last = ".selected";

			var doNav = function() {

				if(!isLateralNavAnimating) {

					if(didFinishLaunchingWithTimeout) {

						didFinishLaunchingWithTimeout = false;

						if($(this).parents('.csstransitions').length > 0) {
							isLateralNavAnimating = true;
						}

						$("body").toggleClass("navigation-is-open");
						$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
							isLateralNavAnimating = false;
						});

						setTimeout(setVariableDidFinishLaunchingWithTimeout, 1000);

					}

				}

			};

			$(".cd-nav-trigger").on("click", function(e) {
				e.preventDefault();
				doNav();
			});

			$(".cd-primary-nav a").on("click", function(e) {
				$(last).removeClass("selected");
				$(this).addClass("selected");
				$("main").css("background", "url(img/bg-" + $(this).data("img") + ".jpg)");
				last = this;
				doNav();
			});

		}
		
	};
	
}]);

angular.module("EverFrog").controller("AboutIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "About EverFrog",
		"description": "",
		"keywords": "everfrog, about, bio, computer science, frogs",
		"shortname": "about"

	});

}]);

angular.module("EverFrog").controller("ContactIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "contact"

	});

}]);

angular.module("EverFrog").controller("HomeIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "home"

	});

}]);

angular.module("EverFrog").controller("InfoIndexController", ["$scope", function($scope) {
	
	$scope.$emit("newPageLoaded", {

		"title": "",
		"description": "",
		"keywords": "",
		"shortname": "info"

	});

}]);

angular.module("EverFrog").controller("RootAppController", ["$scope", function($scope) {

	var didFinishInitializingOnLoad = false; // Objective-C variable names ftw

	$scope.meta = {
		"title": "We're hiring! Data Scientist @ EverFrog",
		"description": "Join us in analyzing big data at EverFrog. We are currently hiring and specialize in the advancement of Frog kind.",
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

