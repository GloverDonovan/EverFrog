// ======================== Navigation
jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	var doNav = function() {
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	}

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		doNav();
	});

	var last;
	$(".cd-primary-nav a").on("click", function(e) {
		e.preventDefault();
		$(last || ".selected").removeClass("selected");
		$(this).addClass("selected");
		last = this;
		doNav();
	})

});
