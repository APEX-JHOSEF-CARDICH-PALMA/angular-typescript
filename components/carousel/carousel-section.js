(function (angular) {
	"use strict";

	var carouselSectionsModule = angular.module("myApp.carouselSection", [
    "myApp.carousel.carousel-section-garden-directive",
    "myApp.carousel.carousel-section-pool-directive",
    "myApp.carousel.carousel-section-construction-directive"
  ]);

	carouselSectionsModule.controller("CarouselSectionGardenCtrl", ["$scope", function($scope) {
    var carouselSectionGardenCtrl = this;

    carouselSectionGardenCtrl.currIndex = 0;
    carouselSectionGardenCtrl.slideInterval = 7000;
    carouselSectionGardenCtrl.noWrapSlides = false;
    carouselSectionGardenCtrl.noTransition = false;
    carouselSectionGardenCtrl.active = 0;

    // Slides
    carouselSectionGardenCtrl.slides = [
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel1.jpg",
        heading: "Para su Jardín..",
        caption: "Mantenimiento integral de su jardín."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel2.jpg",
        heading: "Para su Jardín",
        caption: "Tala de árboles pequeños o grandes."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel3.jpg",
        heading: "Para su Jardín",
        caption: "Fumigaciones"
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel4.jpg",
        heading: "Para su Jardín",
        caption: "Recuperacion de cesped."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel5.jpg",
        heading: "Para su Jardín",
        caption: "Abonados"
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel6.png",
        heading: "Para su Jardín",
        caption: "Podas en altura con materiales profesionales."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel7.jpg",
        heading: "Para su Jardín",
        caption: "Mantenimiento para todo tipo de jardines."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel8.jpg",
        heading: "Para su Jardín",
        caption: "Limpieza , puesta a punto de grandes jardines y parcelas."
      },
      {
        id: carouselSectionGardenCtrl.currIndex++,
        image: "img/garden/garden_carousel9.png",
        heading: "Para su Jardín",
        caption: "Perfilados y recortes de setos."
      },
    ];

    // Hacemos del array de thumbnails una copia del slides
    carouselSectionGardenCtrl.thumbnails = carouselSectionGardenCtrl.slides.slice();

    // Manejo de la paginacion de los thumbnails
    carouselSectionGardenCtrl.activeThumbnails = carouselSectionGardenCtrl.thumbnails.slice(0,3);
    carouselSectionGardenCtrl.thumbnailPage = 1;
    carouselSectionGardenCtrl.thumbnailNumPages = 3;
    carouselSectionGardenCtrl.thumbnailPageSize = 3;
    carouselSectionGardenCtrl.totalThumbnails = carouselSectionGardenCtrl.thumbnails.length;

    carouselSectionGardenCtrl.setActive = function(id) {
      carouselSectionGardenCtrl.active = id;
    };

    carouselSectionGardenCtrl.prevPage = function() {
      if (carouselSectionGardenCtrl.thumbnailPage > 1) {
        carouselSectionGardenCtrl.thumbnailPage--;
      }
      carouselSectionGardenCtrl.activeThumbnails = carouselSectionGardenCtrl.thumbnails.slice( (carouselSectionGardenCtrl.thumbnailPage-1) * carouselSectionGardenCtrl.thumbnailPageSize,
                                                                                                carouselSectionGardenCtrl.thumbnailPage * carouselSectionGardenCtrl.thumbnailPageSize);
    };

    carouselSectionGardenCtrl.nextPage = function() {
      if (carouselSectionGardenCtrl.thumbnailPage < Math.floor(carouselSectionGardenCtrl.totalThumbnails / carouselSectionGardenCtrl.thumbnailPageSize)) {
        carouselSectionGardenCtrl.thumbnailPage++;
      }
      carouselSectionGardenCtrl.activeThumbnails = carouselSectionGardenCtrl.thumbnails.slice( (carouselSectionGardenCtrl.thumbnailPage-1) * carouselSectionGardenCtrl.thumbnailPageSize,
                                                                                                carouselSectionGardenCtrl.thumbnailPage * carouselSectionGardenCtrl.thumbnailPageSize);
    };

    carouselSectionGardenCtrl.updateThumbnails = function (newActiveValue) {
      carouselSectionGardenCtrl.thumbnailPage = Math.floor(newActiveValue / carouselSectionGardenCtrl.thumbnailPageSize) + 1;
      carouselSectionGardenCtrl.activeThumbnails = carouselSectionGardenCtrl.thumbnails.slice( (carouselSectionGardenCtrl.thumbnailPage-1) * carouselSectionGardenCtrl.thumbnailPageSize,
                                                                                                carouselSectionGardenCtrl.thumbnailPage * carouselSectionGardenCtrl.thumbnailPageSize);
    };

    $scope.$watch(function() {
      return this.active;
    }.bind(this), function(newActiveValue) {
      carouselSectionGardenCtrl.updateThumbnails(newActiveValue);
    });
  }]);

  carouselSectionsModule.controller("CarouselSectionPoolCtrl", ["$scope", function($scope) {
    var carouselSectionPoolCtrl = this;

    carouselSectionPoolCtrl.currIndex = 0;
    carouselSectionPoolCtrl.slideInterval = 7000;
    carouselSectionPoolCtrl.noWrapSlides = false;
    carouselSectionPoolCtrl.noTransition = false;
    carouselSectionPoolCtrl.active = 0;

    // Slides
    carouselSectionPoolCtrl.slides = [
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel1.jpg",
        heading: "Para su Piscina",
        caption: "Mantenimiento de su piscina de cloro, de sal o de oxígeno."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel2.jpg",
        heading: "Para su Piscina",
        caption: "Reparacion de depuradoras."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel3.png",
        heading: "Para su Piscina",
        caption: "Lechado de gresites, cambio de arena."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel4.jpg",
        heading: "Para su Piscina",
        caption: "Instalación de cloradores salinos."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel5.jpg",
        heading: "Para su Piscina",
        caption: "Limpieza y puesta a punto."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel6.jpg",
        heading: "Para su Piscina",
        caption: "Suministro de productos."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel7.jpg",
        heading: "Para su Piscina",
        caption: "Servcio con garantía."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel8.jpg",
        heading: "Para su Piscina",
        caption: "Mantenimiento a su medida."
      },
      {
        id: carouselSectionPoolCtrl.currIndex++,
        image: "img/pool/pool_carousel9.jpg",
        heading: "Para su Piscina",
        caption: "Solo preocupese en disfrutar."
      },
    ];

    // Hacemos del array de thumbnails una copia del slides
    carouselSectionPoolCtrl.thumbnails = carouselSectionPoolCtrl.slides.slice();

    // Manejo de la paginacion de los thumbnails
    carouselSectionPoolCtrl.activeThumbnails = carouselSectionPoolCtrl.thumbnails.slice(0,3);
    carouselSectionPoolCtrl.thumbnailPage = 1;
    carouselSectionPoolCtrl.thumbnailNumPages = 3;
    carouselSectionPoolCtrl.thumbnailPageSize = 3;
    carouselSectionPoolCtrl.totalThumbnails = carouselSectionPoolCtrl.thumbnails.length;

    carouselSectionPoolCtrl.setActive = function(id) {
      carouselSectionPoolCtrl.active = id;
    };

    carouselSectionPoolCtrl.prevPage = function() {
      if (carouselSectionPoolCtrl.thumbnailPage > 1) {
        carouselSectionPoolCtrl.thumbnailPage--;
      }
      carouselSectionPoolCtrl.activeThumbnails = carouselSectionPoolCtrl.thumbnails.slice( (carouselSectionPoolCtrl.thumbnailPage-1) * carouselSectionPoolCtrl.thumbnailPageSize,
                                                                                            carouselSectionPoolCtrl.thumbnailPage * carouselSectionPoolCtrl.thumbnailPageSize);
    };

    carouselSectionPoolCtrl.nextPage = function() {
      if (carouselSectionPoolCtrl.thumbnailPage < Math.floor(carouselSectionPoolCtrl.totalThumbnails / carouselSectionPoolCtrl.thumbnailPageSize)) {
        carouselSectionPoolCtrl.thumbnailPage++;
      }
      carouselSectionPoolCtrl.activeThumbnails = carouselSectionPoolCtrl.thumbnails.slice( (carouselSectionPoolCtrl.thumbnailPage-1) * carouselSectionPoolCtrl.thumbnailPageSize,
                                                                                            carouselSectionPoolCtrl.thumbnailPage * carouselSectionPoolCtrl.thumbnailPageSize);
    };

    carouselSectionPoolCtrl.updateThumbnails = function (newActiveValue) {
      carouselSectionPoolCtrl.thumbnailPage = Math.floor(newActiveValue / carouselSectionPoolCtrl.thumbnailPageSize) + 1;
      carouselSectionPoolCtrl.activeThumbnails = carouselSectionPoolCtrl.thumbnails.slice( (carouselSectionPoolCtrl.thumbnailPage-1) * carouselSectionPoolCtrl.thumbnailPageSize,
                                                                                            carouselSectionPoolCtrl.thumbnailPage * carouselSectionPoolCtrl.thumbnailPageSize);
    };

    $scope.$watch(function() {
      return this.active;
    }.bind(this), function(newActiveValue) {
      carouselSectionPoolCtrl.updateThumbnails(newActiveValue);
    });
  }]);

  carouselSectionsModule.controller("CarouselSectionConstructionCtrl", ["$scope", function($scope) {
    var carouselSectionConstructionCtrl = this;

    carouselSectionConstructionCtrl.currIndex = 0;
    carouselSectionConstructionCtrl.slideInterval = 7000;
    carouselSectionConstructionCtrl.noWrapSlides = false;
    carouselSectionConstructionCtrl.noTransition = false;
    carouselSectionConstructionCtrl.active = 0;

    // Slides
    carouselSectionConstructionCtrl.slides = [
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel1.jpg",
        heading: "Obra Nueva",
        caption: "Paisajismo de pequeños y grandes parcelas."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel2.jpg",
        heading: "Obra Nueva",
        caption: "Instalacion  de areas de cesped en tepe o semilla."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel3.jpg",
        heading: "Obra Nueva",
        caption: "Jardines verticales y de interior."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel4.png",
        heading: "Obra Nueva",
        caption: "Diseño y creación de jardines a medida."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel5.jpg",
        heading: "Obra Nueva",
        caption: "Asesoramiento en la elección de plantas y materiales."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel6.jpg",
        heading: "Obra Nueva",
        caption: "Reestructuración de areas verdes."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel7.jpg",
        heading: "Obra Nueva",
        caption: "Los mejores materiales para sus areas verdes."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel8.jpg",
        heading: "Obra Nueva",
        caption: "Todo tipo de diseños de Jardines, verticales , etc."
      },
      {
        id: carouselSectionConstructionCtrl.currIndex++,
        image: "img/construction/cons_carousel9.jpg",
        heading: "Obra Nueva",
        caption: "Todo esto y mucho más..!"
      },
    ];

    // Hacemos del array de thumbnails una copia del slides
    carouselSectionConstructionCtrl.thumbnails = carouselSectionConstructionCtrl.slides.slice();

    // Manejo de la paginacion de los thumbnails
    carouselSectionConstructionCtrl.activeThumbnails = carouselSectionConstructionCtrl.thumbnails.slice(0,3);
    carouselSectionConstructionCtrl.thumbnailPage = 1;
    carouselSectionConstructionCtrl.thumbnailNumPages = 3;
    carouselSectionConstructionCtrl.thumbnailPageSize = 3;
    carouselSectionConstructionCtrl.totalThumbnails = carouselSectionConstructionCtrl.thumbnails.length;

    carouselSectionConstructionCtrl.setActive = function(id) {
      carouselSectionConstructionCtrl.active = id;
    };

    carouselSectionConstructionCtrl.prevPage = function() {
      if (carouselSectionConstructionCtrl.thumbnailPage > 1) {
        carouselSectionConstructionCtrl.thumbnailPage--;
      }
      carouselSectionConstructionCtrl.activeThumbnails = carouselSectionConstructionCtrl.thumbnails.slice( (carouselSectionConstructionCtrl.thumbnailPage-1) * carouselSectionConstructionCtrl.thumbnailPageSize,
                                                                                                            carouselSectionConstructionCtrl.thumbnailPage * carouselSectionConstructionCtrl.thumbnailPageSize);
    };

    carouselSectionConstructionCtrl.nextPage = function() {
      if (carouselSectionConstructionCtrl.thumbnailPage < Math.floor(carouselSectionConstructionCtrl.totalThumbnails / carouselSectionConstructionCtrl.thumbnailPageSize)) {
        carouselSectionConstructionCtrl.thumbnailPage++;
      }
      carouselSectionConstructionCtrl.activeThumbnails = carouselSectionConstructionCtrl.thumbnails.slice( (carouselSectionConstructionCtrl.thumbnailPage-1) * carouselSectionConstructionCtrl.thumbnailPageSize,
                                                                                                            carouselSectionConstructionCtrl.thumbnailPage * carouselSectionConstructionCtrl.thumbnailPageSize);
    };

    carouselSectionConstructionCtrl.updateThumbnails = function (newActiveValue) {
      carouselSectionConstructionCtrl.thumbnailPage = Math.floor(newActiveValue / carouselSectionConstructionCtrl.thumbnailPageSize) + 1;
      carouselSectionConstructionCtrl.activeThumbnails = carouselSectionConstructionCtrl.thumbnails.slice( (carouselSectionConstructionCtrl.thumbnailPage-1) * carouselSectionConstructionCtrl.thumbnailPageSize,
                                                                                                            carouselSectionConstructionCtrl.thumbnailPage * carouselSectionConstructionCtrl.thumbnailPageSize);
    };

    $scope.$watch(function() {
      return this.active;
    }.bind(this), function(newActiveValue) {
      carouselSectionConstructionCtrl.updateThumbnails(newActiveValue);
    });
  }]);
})(angular);
