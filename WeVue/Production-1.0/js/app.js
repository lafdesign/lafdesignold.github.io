
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// fade in quotes page 1
(function() {
            var quotes = $(".quotes");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(2000)
                    .delay(1000)
                    .fadeOut(2000, showNextQuote);
            }
            showNextQuote();
        })();

// sldie control on phones 
(function() {
            var quotes = $(".quotes2");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(2000)
                    .delay(1000)
                    .fadeOut(2000, showNextQuote);
            }
            showNextQuote();
        })();
(function() {
            var quotes = $(".branding-img");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(1000)
                    .delay(4300)
                    .fadeOut(2000, showNextQuote);
            }
            showNextQuote();
        })();
(function() {
            var quotes = $(".features-img");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(500)
                    .delay(3200)
                    .fadeOut(1500, showNextQuote);
            }
            showNextQuote();
        })();

(function() {
    var quotes = $(".screen-2-fade");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500, showNextQuote);
    }
    showNextQuote();
})();

// activates animate.css classes on scroll 
onScrollInit( $('.os-animation') );


function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '90%'
    });
  });
}



 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

 
