"use strict";

require("./actors");

require("angular").module("submiter", ["actors"])
.factory("submiter", ["actors", "customBanner", function(actors, customBanner){

  var socket=io();

  return {
    submitText:function (element){

      if (!element.textContent) {
        element.textContent="";
        return false;
      }

      if (actors.currentActor){
        socket.emit('quote', {actor:actors.currentActor, quote:element.textContent});
      }
      else{
        socket.emit('quote', {actor:actors[actors.actors.length], quote:element.textContent});
      }
      element.textContent="";
      actors.pickNoOne();
    },
    submitBanner:function(banner){
      socket.emit('banner', banner);
    },
    submitCustomBannerUrl:function(element){
      socket.emit('banner', {image:element.textContent});
      customBanner.toggleInputActivationStatus();
      element.textContent="";
    }
  };
}]);
