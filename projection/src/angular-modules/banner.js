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
          scope.bannerStyle["background-image"]="url("+data.image+")";
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
  $scope.bannerStyle={"background-image": "url(img/banners/unknown.png)"};
}]);
