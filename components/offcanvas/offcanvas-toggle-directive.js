(function (angular) {
  "use strict";

  var offcanvasToggleDirectiveModule = angular.module("myApp.offcanvas.offcanvas-toggle-directive", []);

  offcanvasToggleDirectiveModule.directive("offcanvasToggle", function() {
    return {
      restrict: "A",
      scope: {
        toggleVisibility: "&"
      },
      link: function(scope, elem, attrs) {
        elem.on("click", function (event) {
          scope.toggleVisibility();
        });

        // Limpiamos cuando el scope se destruye
        scope.$on("$destroy", function() {
            elem.off("click");
        });
      }
    };
  });
})(angular);
