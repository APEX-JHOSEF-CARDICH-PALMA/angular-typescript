(function (angular) {
	"use strict";

	angular.module("myApp.sectionPool", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	  $routeProvider.when("/pool", {
	    templateUrl: "views/section_pool/section_pool.html",
	    controller: "SectionPoolCtrl"
	  });
	}])

	.controller("SectionPoolCtrl", [function() {

	}]);
})(angular);