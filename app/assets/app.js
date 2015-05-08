angular.module("EverFrog", ["ngRoute"]).config(function() {})

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

angular.module("EverFrog").directive("everfrogModal", [function() {
	
	return {
		
		replace: true,
		restrict: "E",
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
				section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
					
				});

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
				actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
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

			var isLateralNavAnimating = false;
			
			var last = ".selected";

			var doNav = function() {
				if(!isLateralNavAnimating) {

					if($(this).parents('.csstransitions').length > 0) {
						isLateralNavAnimating = true;
					}

					$("body").toggleClass("navigation-is-open");
					$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
						isLateralNavAnimating = false;
					});

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

