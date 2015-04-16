"use strict";

require("./receiver");

require("angular").module("banner", ["receiver"])
.directive("appBanner", ["receiver", function(receiver){
  return {
    restrict:"E",
    templateUrl:"banner.html",
    controller:"bannerController",
    link:function(scope, element){

      function receiverCallback(data){
        scope.$apply(function(){
          scope.bannerUrl=data.image;
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
  $scope.bannerUrl="img/banners/sjkdsjdks.png";
}]);
