(function (angular) {
  "use strict";

  var carouselIndexDirectiveModule = angular.module("myApp.carousel.carousel-index-directive", []);

  carouselIndexDirectiveModule.directive("carouselIndex", [function() {
    return {
      restrict: "E",
      scope: {},
      controller: "CarouselIndexCtrl",
      controllerAs: "carouselIndexCtrl",
      templateUrl: "components/carousel/carousel-index-template.html"
    };
  }]);
})(angular);
