"use strict";

var angular=require("angular");
require("./receiver");

angular.module("quotes", ["receiver"])
.directive("appQuotes", ["receiver", function(receiver){
  return {
    restrict:"E",
    templateUrl:"quotes.html",
    controller:"quotesController",
    link:function(scope, element){

      var quoteLifetime=5000,
          lastTime=performance.now(),
          currentTime=lastTime,
          deltaTime=0;

      function receiverCallback(data){
        currentTime=performance.now();
        deltaTime=currentTime-lastTime;
        scope.$apply(function(){
          scope.quotes.push(data);
        });
        Array.prototype.forEach.call(element.children().children(), processExpiry);
        lastTime=currentTime;
      }

      function processExpiry(item, index, array){
        debugger;
        if (!item.expiry){
          item.expiry=quoteLifetime;
        }
        else{
          item.expiry-=deltaTime;
          if (item.expiry<=0){
            angular.element(array[index]).remove();
          }
        }
      }

      receiver.registerQuoteReceiver(receiverCallback);

      element.on("$destroy", function(){
        receiver.deregisterQuoteReceiver(receiverCallback);
        observer.disconnect();
      });

    }
  };
}])
.controller("quotesController", ["$scope", function($scope){
  $scope.quotes=[];
}]);
