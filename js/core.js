(function ($) {
	"use strict";

	// Navbar transparent to not transparent when scrolling
  $(window).on('scroll', function (e) {
    var navbarElem = $('.navbar');
    var startY = navbarElem.height();

    console.log($(window).scrollTop() + "-" + startY);
    if($(window).scrollTop() > startY /*&& $(window).width() > 500*/) {
      navbarElem.addClass("scrolled");
    } else {
      navbarElem.removeClass("scrolled");
    }
  });
})(jQuery);
