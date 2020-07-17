(function (angular) {
	"use strict";

	var carouselIndexModule = angular.module("myApp.carouselIndex", [
    "myApp.carousel.carousel-index-directive"
  ]);

	carouselIndexModule.controller("CarouselIndexCtrl", ["$scope", function($scope) {
    var carouselIndexCtrl = this;

    carouselIndexCtrl.currIndex = 0;
    carouselIndexCtrl.slideInterval = 6000;
    carouselIndexCtrl.noWrapSlides = false;
    carouselIndexCtrl.noTransition = false;
    carouselIndexCtrl.active = 0;

    // Slides
    carouselIndexCtrl.slides = [
      {
        id: carouselIndexCtrl.currIndex++,
        image: "img/index/index_carousel1.jpg",
        heading: "CALIDAD",
        caption: "En todos nuestros acabados."
      },
      {
        id: carouselIndexCtrl.currIndex++,
        image: "img/index/index_carousel2.jpg",
        heading: "GARANTÍA",
        caption: " Asistencia integral a su medida."
      },
      {
        id: carouselIndexCtrl.currIndex++,
        image: "img/index/index_carousel3.jpg",
        heading: "FLEXIBILIDAD",
        caption: "Para todo tipo de proyectos."
      },
      {
        id: carouselIndexCtrl.currIndex++,
        image: "img/index/index_carousel4.jpg",
        heading: "SERIEDAD",
        caption: " Puntualidad y eficiencia para nuestros clientes."
      }
    ];
  }]);
})(angular);
