(function (angular) {
  "use strict";

  var carouselSectionsDirectiveModule = angular.module("myApp.carousel.carousel-section-construction-directive", []);

  carouselSectionsDirectiveModule.directive("carouselSectionConstruction", [function() {
    return {
      restrict: "E",
      scope: {},
      controller: "CarouselSectionConstructionCtrl",
      controllerAs: "csconstructionCtrl",
      templateUrl: "components/carousel/carousel-section-construction-template.html"
    };
  }]);
})(angular);
