(function (angular) {
  "use strict";

  var carouselSectionsDirectiveModule = angular.module("myApp.carousel.carousel-section-garden-directive", []);

  carouselSectionsDirectiveModule.directive("carouselSectionGarden", [function() {
    return {
      restrict: "E",
      scope: {},
      controller: "CarouselSectionGardenCtrl",
      controllerAs: "csgardenCtrl",
      templateUrl: "components/carousel/carousel-section-garden-template.html"
    };
  }]);
})(angular);
