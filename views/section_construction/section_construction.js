(function (angular) {
	"use strict";

	angular.module("myApp.sectionConstruction", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	  $routeProvider.when("/construction", {
	    templateUrl: "views/section_construction/section_construction.html",
	    controller: "SectionConstructionCtrl"
	  });
	}])

	.controller("SectionConstructionCtrl", [function() {

	}]);
})(angular);