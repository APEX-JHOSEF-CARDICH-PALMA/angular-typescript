(function (angular, $) {
  "use strict";

  var offcanvasCloseDirectiveModule = angular.module("myApp.offcanvas.offcanvas-close-directive", []);

  offcanvasCloseDirectiveModule.directive("offcanvasClose", [function() {
    return {
      restrict: "A",
      scope: {
        setVisibility: "&"
      },
      link: function(scope, elem, attrs) {
        elem.on("click", function (e) {
          scope.setVisibility({ argVisibility: false });

          /*
          if (elem.hasClass("contact")) {
            // var pos = $("section#contact").position().top - 100 + $("section#contact").parent().scrollTop();
            // console.log(pos + "-" +  ($("section#contact").position().top - 100 + $("section#contact").parent().scrollTop()));
            // if (($(window).scrollTop() + $(window).height()) < ($(document).height() - 250)) {
            //   $("html, body").animate({
            //     scrollTop: pos
            //   }, 1000);
            // }

            var pos = $("section#contact").offset().top;
              $("html, body").animate({
                scrollTop: pos
              }, 1000);
          }
          */
        });

        // Limpiamos cuando el scope se destruye
        scope.$on("$destroy",
          function() {
            elem.off("click");
          }
        );
      }
    };
  }]);
})(angular, jQuery);
