"use strict";

require("./actors");

require("angular").module("submiter", ["actors"])
.factory("submiter", ["actors", "customBanner", function(actors, customBanner){
  return {
    submitText:function (element){

      if (!element.textContent) {
        element.textContent="";
        return false;
      }

      if (actors.currentActor){
        alert(actors.currentActor.name+": "+element.textContent);
      }
      else{
        alert(element.textContent);
      }
      element.textContent="";
      actors.currentActor=null;
    },
    submitCustomBannerUrl:function(element){
      customBanner.toggleInputActivationStatus();
      alert("image submited: "+element.textContent);
      element.textContent="";
    }
  };
}]);
