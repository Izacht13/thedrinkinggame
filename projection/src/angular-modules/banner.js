"use strict";

var angular=require("angular");
require("./receiver");
require("./middleman");

angular.module("banner", ["receiver", "middleman"])
.directive("appBanner", ["receiver", "middleman", function(receiver, middleman){
  return {
    restrict:"E",
    templateUrl:"banner.html",
    controller:"bannerController",
    link:function(scope, element){

      function receiverCallback(data){
        scope.$apply(function(){
          scope.bannerStyle["background-image"]="url("+data.image+")";
          if (data.image==="img/banners/unknown.jpg"){
            scope.bannerStyle.height="0%";
            var element=angular.element(document.getElementById("quote-container"))
            element.removeClass("quote-container-with-banner");
          }
          else{
            scope.bannerStyle.height="50%";
            var element=angular.element(document.getElementById("quote-container"))
            element.addClass("quote-container-with-banner");
          }
        });
        middleman.preventQuoteOverflow();
      }

      receiver.registerBannerReceiver(receiverCallback);

      element.on("$destroy", function(){
        receiver.deregisterBannerReceiver(receiverCallback);
      });

    }
  };
}])
.controller("bannerController", ["$scope", function($scope){
  $scope.bannerStyle={"background-image": "url(img/banners/unknown.jpg)", height:"0%"};
}]);
