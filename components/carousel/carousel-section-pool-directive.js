(function (angular) {
  "use strict";

  var carouselSectionsDirectiveModule = angular.module("myApp.carousel.carousel-section-pool-directive", []);

  carouselSectionsDirectiveModule.directive("carouselSectionPool", [function() {
    return {
      restrict: "E",
      scope: {},
      controller: "CarouselSectionPoolCtrl",
      controllerAs: "cspoolCtrl",
      templateUrl: "components/carousel/carousel-section-pool-template.html"
    };
  }]);
})(angular);
