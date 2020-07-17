// App level Angular module
(function (angular, UIKit) {
	"use strict";

	// Declaramos el modulo raiz a nivel el cual depende de views y components
	var app = angular.module("myApp", [
	  "ngRoute",
	  "ngAnimate",
	  "ngTouch",
    "ui.bootstrap",
    "myApp.constants",
		"myApp.index",
		"myApp.sectionGarden",
	  "myApp.sectionPool",
	  "myApp.sectionConstruction",
	  "myApp.offcanvas",
	  "myApp.carouselIndex",
	  "myApp.carouselSection"
	]);

	app.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	  // FIXME comentado debido a un problema con UIKit al hacer la redireccion en los enlaces
	  // $locationProvider.hashPrefix("!");

	  $routeProvider.otherwise({redirectTo: "/index"});
	}]);
})(angular, UIkit);