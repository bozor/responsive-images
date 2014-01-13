var globals = {
	lastWindowHeight: $(window).height(),
	lastWindowWidth: $(window).width()
}

var resizeHandler = function() {
	// has the window actually resized?
	// some browsers fire the resize event more than they have to
	if($(window).height() != globals.lastWindowHeight || $(window).width() != globals.lastWindowWidth){
		globals.lastWindowHeight = $(window).height();
        globals.lastWindowWidth = $(window).width();
		
		
	}
}

// Easing
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
});

$(function(){
	$(window).resize(resizeHandler);
	
	$('.responsive-image').responsImg({
		breakpoints: {
			mobile: 320,
			desktop: 640
		}
	});
});