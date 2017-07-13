/* Theme Name: Aneria - Landing page Template
   Author: Harry
   Version: 1.0.0
   Created:August 2016
   File Description:Main JS
*/


/*-----------------------------------------------------------------------------------*/
/*  LOADING
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

/* ==============================================
Smooth Scroll To Anchor
=============================================== */
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar-nav a, #wish').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        // close menu after click in some link
        // just mobile
        if ($(this).parents('.navbar').length) {
          $('.navbar-toggle').click();
        }

        event.preventDefault();
    });

  $('#testimonials').on('click', '.more', function(e) {
    $(e.target).fadeOut('fast', function() {
      $(this).parent().find('.details').fadeIn('fast');
    });
  });
});
/*-------------------------------------------------*/
/* =  Full-window section
/*-------------------------------------------------*/

var windowHeight = $(window).height(),
    topSection = $('.home-fullscreen');
topSection.css('height', windowHeight);

$(window).resize(function() {
    var windowHeight = $(window).height();
    topSection.css('height', windowHeight);
});


//sticky header on scroll
$(window).load(function() {
    $(".sticky").sticky({
        topSpacing: 0
    });
});
