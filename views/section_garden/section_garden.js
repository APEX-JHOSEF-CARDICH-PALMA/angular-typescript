(function (angular) {
	"use strict";

	angular.module("myApp.sectionGarden", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	  $routeProvider.when("/garden", {
	    templateUrl: "views/section_garden/section_garden.html",
	    controller: "SectionGardenCtrl"
	  });
	}])

	.controller("SectionGardenCtrl", [function() {

	}]);
})(angular);