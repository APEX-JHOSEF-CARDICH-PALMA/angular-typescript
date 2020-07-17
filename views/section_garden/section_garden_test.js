(function (angular) {
	"use strict";

	describe("myApp.sectionGarden module", function() {

	  beforeEach(module("myApp.sectionGarden"));

	  describe("SectionGarden controller", function(){

	    it("should ....", inject(function($controller) {
	      //spec body
	      var sectionGardenCtrl = $controller("SectionGardenCtrl");
	      expect(sectionGardenCtrl).toBeDefined();
	    }));

	  });
	});
})(angular);