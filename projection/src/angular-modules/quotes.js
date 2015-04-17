"use strict";

var angular=require("angular");
require("./receiver");
require("./middleman");

angular.module("quotes", ["receiver", "middleman"])
.directive("appQuotes", ["receiver", "middleman", function(receiver, middleman){
  return {
    restrict:"E",
    templateUrl:"quotes.html",
    controller:"quotesController",
    link:function(scope, element){

      var quoteLifetime=30000,
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
        Array.prototype.forEach.call(quoteElements, processExpiry);
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
            smoothRemove(angular.element(array[index]));
          }
        }
      }

      function preventOverflow(quoteElements){
        var quoteMaxHeight=getElementHeight(element.children()[0]),
            singleElementHeight=getElementHeight(quoteElements[0] || 1) || Infinity,//CANNOT BE 0 OR ELSE DIVISION BY 0
            currentHeight=singleElementHeight*quoteElements.length,
            numberOfElementsThatNeedToBeRemoved=Math.ceil((currentHeight-quoteMaxHeight)/singleElementHeight);

            if (isNaN(numberOfElementsThatNeedToBeRemoved)){
              numberOfElementsThatNeedToBeRemoved=Infinity;
            }

            if (numberOfElementsThatNeedToBeRemoved>0){
              smoothRemove(angular.element(Array.prototype.slice.call(quoteElements, 0, numberOfElementsThatNeedToBeRemoved)));
            }
      }

      middleman.preventQuoteOverflow=function preventQuoteOverflow(){
        preventOverflow(element.children().children());
      };

      function getElementHeight(rawElement){
        return rawElement.offsetHeight;
      }

      function smoothRemove(elements){
        scope.$apply(function(){
          elements.remove();
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
