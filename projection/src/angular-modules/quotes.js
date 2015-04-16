"use strict";

require("./receiver");

require("angular").module("quotes", ["receiver"])
.directive("appQuotes", ["receiver", function(receiver){
  return {
    restrict:"E",
    templateUrl:"quotes.html",
    controller:"quotesController",
    link:function(scope, element){

      function receiverCallback(data){
        alert("quote event");
      }

      receiver.registerQuoteReceiver(receiverCallback);

      element.on("$destroy", function(){
        receiver.deregisterQuoteReceiver(receiverCallback);
      });

    }
  };
}])
.controller("quotesController", ["$scope", function($scope){

}]);
