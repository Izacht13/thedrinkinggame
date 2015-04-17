"use strict";

var angular=require("angular");
require("./receiver");

angular.module("banner", ["receiver"])
.directive("appBanner", ["receiver", function(receiver){
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
            angular.element(document.getElementById("quote-container")).removeClass("quote-container-with-banner");
          }
          else{
            scope.bannerStyle.height="50%";
            angular.element(document.getElementById("quote-container")).addClass("quote-container-with-banner");
          }
        });
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
