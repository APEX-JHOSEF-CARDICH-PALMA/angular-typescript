// (function (angular) {
//   "use strict";
//
//   describe("myApp.offcanvas module", function() {
//     beforeEach(module("myApp.offcanvas.offcanvas-close-directive"));
//
//     describe("offcanvas-close directive", function() {
//       it("should close the offcanvas menu", function() { // TODO hacer funcionar los expect
//         module("myApp.offcanvas.offcanvas-close-directive", function($provide) {
//           $provide.value("UIkit", UIkit);
//         });
//
//         inject(function($compile, $rootScope) {
//           // Create the menu
//           var divOffcanvas = $('<div id="offcanvas-usage"></div>');
//           $(document.body).append(divOffcanvas);
//
//           // Show the menu first
//           var offcanvas = UIkit.offcanvas(document.getElementById("offcanvas-usage"));
//
//           // Compile the anchor element with the directive
//           console.log($("#offcanvas-usage").css("display"));
//
//           offcanvas.show();
//
//           var ng_element = angular.element("<a offcanvas-close></a>");
//           var element = $compile(ng_element)($rootScope);
//           element.triggerHandler('click');
//           $rootScope.$digest();
//           console.log($("#offcanvas-usage"));
//           console.log($("#offcanvas-usage").css("display"));
//
//           // expect($("#offcanvas-usage").css("display") == "none").toEqual(true);
//         });
//       });
//     });
//   });
// })(angular);