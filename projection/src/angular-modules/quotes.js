"use strict";

var angular=require("angular");
require("./ng-animate.min.js");
require("./receiver");
require("./middleman");

angular.module("quotes", ["receiver", "middleman", "ngAnimate"])
.directive("appQuotes", ["receiver", "middleman", function(receiver, middleman){
  return {
    restrict:"E",
    templateUrl:"quotes.html",
    controller:"quotesController",
    link:function(scope, element){

      var quoteLifetime=60000,
          lastTime=performance.now(),
          currentTime=lastTime,
          deltaTime=0;

      function receiverCallback(data){
        currentTime=performance.now();
        deltaTime=currentTime-lastTime;
        scope.$apply(function(){
          scope.quotes.push(data);
        });
        var quoteElements=element.children().children();
        scope.quotes.forEach(processExpiry);
        lastTime=currentTime;
        quoteElements=element.children().children();//REFRESH ELEMENTS INCASE SOME WERE DELETED
        preventOverflow(quoteElements);
      }

      function processExpiry(item, index, array){
        if (!item.expiry){
          item.expiry=quoteLifetime;
        }
        else{
          item.expiry-=deltaTime;
          if (item.expiry<=0){
            smoothRemoveItem(index);
          }
        }
      }

      function preventOverflow(quoteElements){
        var quoteMaxHeight=getElementHeight(element.children()[0]),
            singleElementHeight=getElementHeight(quoteElements[0] || 1) || Infinity,//CANNOT BE 0 OR ELSE DIVISION BY 0
            currentHeight=singleElementHeight*quoteElements.length,
            numberOfElementsThatNeedToBeRemoved=Math.ceil((currentHeight-quoteMaxHeight)/singleElementHeight);
            debugger;
            if (isNaN(numberOfElementsThatNeedToBeRemoved)){
              numberOfElementsThatNeedToBeRemoved=Infinity;
            }

            if (numberOfElementsThatNeedToBeRemoved>0){
              smoothRemoveItems(numberOfElementsThatNeedToBeRemoved);
            }
      }

      middleman.preventQuoteOverflow=function preventQuoteOverflow(){
        preventOverflow(element.children().children());
      };

      function getElementHeight(rawElement){
        return rawElement.offsetHeight;
      }

      function smoothRemoveItem(index){
        scope.$apply(function(){
          scope.quotes.splice(index, 1);
        });
      }

      function smoothRemoveItems(amount){
        scope.$apply(function(){
          scope.quotes.splice(0, amount);
        });
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
