(function (angular) {
	"use strict";

	var offcanvasModule = angular.module("myApp.offcanvas", [
    "myApp.offcanvas.offcanvas-toggle-directive",
    "myApp.offcanvas.offcanvas-close-directive",
    "myApp.offcanvas.offcanvas-menu-directive"
  ]);

	offcanvasModule.controller("OffcanvasCtrl", ["$scope", "$rootScope", "offCanvasVisibilityService", function($scope, $rootScope, offCanvasVisibilityService) {
    var ocCtrl = this;

	  ocCtrl.getVisibility = function () {
	    return offCanvasVisibilityService.getVisible();
    };

    ocCtrl.setVisibility = function (visibility) {
      offCanvasVisibilityService.setVisible(visibility);

      // Emitimos el evento "OFFCANVAS_CHANGE_VISIBILITY" para la actualizacion de la UI del menu
      $rootScope.$broadcast("OFFCANVAS_CHANGE_VISIBILITY", {visibility: visibility});
    };

    ocCtrl.toggleVisibility = function () {
      offCanvasVisibilityService.toggleVisible();

      // Emitimos el evento "OFFCANVAS_CHANGE_VISIBILITY" para la actualizacion de la UI del menu
      $rootScope.$broadcast("OFFCANVAS_CHANGE_VISIBILITY", {visibility: this.getVisibility()});
    };
  }]);

	offcanvasModule.service("offCanvasVisibilityService", function () {
    var ocs = this;
    ocs.visible = false;

    return {
      getVisible: function(){
        return ocs.visible;
      },
      setVisible: function(visibility){
        ocs.visible = visibility;
      },
      toggleVisible: function(){
        ocs.visible = !ocs.visible;
      }
    };
  });
})(angular);
