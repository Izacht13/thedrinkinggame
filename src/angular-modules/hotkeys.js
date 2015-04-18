"use strict";

require("angular").module("hotkeys", [])
.directive("appHotkeyToggleButton", ["hotkeys", function(hotkeys){
  return {
    restrict:"E",
    controller:"hotKeyToggleButtonController",
    link:function(scope, element){
      element.children().on("click", function(){
        hotkeys.enabled=!hotkeys.enabled;
        scope.$apply(function(){
          scope.text=(hotkeys.enabled)?"Disable Hotkeys":"Enable Hotkeys";
        });
      });
    },
    templateUrl:"hotkeys.html"
  };
}])
.controller("hotKeyToggleButtonController", ["$scope", function($scope){
  $scope.text="Disable Hotkeys";
}])
.factory("hotkeys", function(){
  return {
    enabled:true
  };
});
