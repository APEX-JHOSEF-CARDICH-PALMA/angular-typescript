(function (angular) {
	"use strict";

	describe("myApp.offcanvas module", function() {
	  beforeEach(module("myApp.offcanvas"));

	  describe("offcanvas service dummy test", function() {
	  	var one = 1;
	    it("should 1 return 1", inject(function() {
	      expect(one).toEqual(1);
	    }));
	  });
	});
})(angular);