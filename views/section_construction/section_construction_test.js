(function (angular) {
	"use strict";

	describe("myApp.sectionConstruction module", function() {

	  beforeEach(module("myApp.sectionConstruction"));

	  describe("sectionConstruction controller", function(){

	    it("should ....", inject(function($controller) {
	      //spec body
	      var sectionConstructionCtrl = $controller("SectionConstructionCtrl");
	      expect(sectionConstructionCtrl).toBeDefined();
	    }));

	  });
	});
})(angular);