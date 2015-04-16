"use strict";

require("./banner");
require("./quotes");

require("angular").module("home", ["banner", "quotes"])
.directive("appHome", function(){
  return {
    restrict:"E",
    templateUrl:"home.html",
    controller:"homeController"
  };
})
.controller("homeController", ["$scope", function($scope){

}]);
