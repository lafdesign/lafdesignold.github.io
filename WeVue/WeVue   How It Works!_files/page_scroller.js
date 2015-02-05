/*  Title: 		page_scroller.js
 *	Author: 	Jeff Boothe
 * 	Created: 	8/30/2014
 *	Modified: 	9/8/2014
 */

AdobeEdge.bootstrapCallback(function(compId){
	
	//$("<link/>",{"rel":"stylesheet", "type":"text/css", "href":"css/myStyles.css" }).appendTo("#Stage");
	
	if( $('html').hasClass('no-touch') ){
		// scroll device
		$('body').css('height', '10000px')  // Debug Only   .append('<p>debug</p>');
		$('.touchElement').remove();

		$(window).on('scroll', function() {
			checkScroll();
		}).resize(function() {
			checkScroll();
		});

		function checkScroll(){
			var myComposition = AdobeEdge.getComposition('WevueSPA');
			var scrollPos = $(window).scrollTop();
			var docHeight = $(document).height();
			var winHeight = $(window).height();
			var duration = myComposition.getStage().getDuration();
			var scrollPercent = scrollPos / (winHeight - docHeight);
			var animPosition = Math.floor(duration * (scrollPercent * -1));

			myComposition.getStage().stop(animPosition);

			//	Debug Only
			// $('p').html('scrollPos = '+scrollPos + '<br/> animation duration = ' + duration + '<br/>scrollPercent = '+scrollPercent+'<br/>animPosition = '+animPosition);
		}
	}else{
		// touch device
		$('.nonTouchElement').remove();
		$('.scroll_message').addClass('swipe').html('SWIPE TO BEGIN');

	}


});

