(function (angular) {
  "use strict";

  describe("myApp.offcanvas module", function() {
    var scope, mockOffcanvasCtrl, element, spyEvent;

    beforeEach(module("myApp.offcanvas"));
    beforeEach(module("myApp.offcanvas.offcanvas-toggle-directive"));
    beforeEach(inject(function ($compile, $rootScope) {
      // Creamos el offcanvas en el DOM y lo mostramos
      var divOffcanvas = $("<div id='offcanvas-usage' style='display: none;'></div>");
      $(document.body).append(divOffcanvas);
      var offcanvas = UIkit.offcanvas(document.getElementById("offcanvas-usage"));

      // Compilamos la directiva, pasandole el scope preparado
      scope = $rootScope.$new();
      scope.toggleVisibility = function (visibility) { // TODO probar toggle para el hide
        offcanvas.show();
      };
      // El spy trackea la funcion y delega la implementacion del mock a la implementacion del metodo especificada
      spyOn(scope, "toggleVisibility").and.callThrough();

      var ng_element = angular.element("<a offcanvas-toggle toggle-visibility=\"toggleVisibility()\"></a>");
      element = $compile(ng_element)(scope);
      element.triggerHandler('click');
      //scope.$digest(); // FIXME no es necesario
    }));

    describe("offcanvas-close directive", function() {
      it("should make the offcanvas show", function () {
        expect(scope.toggleVisibility).toHaveBeenCalled();

        expect($("#offcanvas-usage").css("display")).toEqual("block");
      });
    });
  });
})(angular);