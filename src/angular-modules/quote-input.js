"use strict";

require("./submiter");
require("./actors");
require("./banners");
require("./hotkeys");

require("angular").module("quoteInput", ["submiter", "actors", "banners", "hotkeys"])
.directive("quoteInput", ["submiter", "actors", "customBanner", "hotkeys",  function(submiter, actors, customBanner, hotkeys){
  return {
    restrict:"E",
    templateUrl:"quote-input.html",
    link:function(scope, element){

      element=element.children();

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

        if (e.keyCode>=48 && e.keyCode<=57 && hotkeys.enabled){
          e.preventDefault();
          scope.$apply(function(){
            if (e.keyCode===48){
              actors.setCurrentActorByIndex(8);
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
