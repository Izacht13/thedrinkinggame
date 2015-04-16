"use strict";

require("./submiter");
require("./actors");
require("./banners");

require("angular").module("home", ["submiter", "actors", "banners"])
.directive("appHome", function() {
  return {
    restrict:"E",
    templateUrl:"home.html"
  };
})
.directive("alwaysFocused", ["submiter", "actors", "customBanner", function(submiter, actors, customBanner){
  return {
    restrict:"A",
    link:function(scope, element){
      element[0].focus();
      element.on("blur", function(){
        element[0].focus();
      });
      element.on("keypress", function(e){

        if (e.keyCode===13){
          e.preventDefault();
          if (customBanner.inputActive){
            scope.$apply(function(){
              submiter.submitCustomBannerUrl(element[0]);
            });
          }
          else{
            scope.$apply(function(){
              submiter.submitText(element[0]);
            });
          }
        }
        else if (e.keyCode>=48 && e.keyCode<=57){
          e.preventDefault();
          scope.$apply(function(){
            if (e.keyCode===48){
              actors.setCurrentActorByIndex(10);
            }
            else{
              actors.setCurrentActorByIndex(e.keyCode-49);
            }
          });
        }
      });

      customBanner.registerInputElement(element);

    }
  }
}]);
