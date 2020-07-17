(function (angular) {
  "use strict";

  var offcanvasMenuDirectiveModule = angular.module("myApp.offcanvas.offcanvas-menu-directive", []);

  offcanvasMenuDirectiveModule.directive("offcanvasMenu", ["offCanvasVisibilityService", "UIkit", function(offCanvasVisibilityService, UIkit) {
    return {
      restrict: "A",
      scope: {},
      link: function(scope, elem, attrs) {
        scope.$on("OFFCANVAS_CHANGE_VISIBILITY", function (event, result) {
          if (offCanvasVisibilityService.getVisible() === true) {
            UIkit.offcanvas(elem).show();
          } else {
            UIkit.offcanvas(elem).hide();
          }
        });

        // Nos aseguramos que si se hace click fuera del offcanvas y se oculta se acutaliza el estado del servicio
        elem.on("hide", function (event) {
          if (offCanvasVisibilityService.getVisible() === true) {
            offCanvasVisibilityService.setVisible(false);
          }
        });

        // Limpiamos cuando el scope se destruye
        scope.$on("$destroy",
          function() {
            elem.off("OFFCANVAS_CHANGE_VISIBILITY");
            elem.off("hide");
          }
        );
      }
    };
  }]);
})(angular);
