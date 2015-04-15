"use strict";

require("angular").module("home", [])
.directive("appHome", function() {
  return {
    restrict:"E",
    templateUrl:"home.html"
  };
})
.directive("alwaysFocused", function(){
  return {
    restrict:"A",
    link:function(scope, element){



      element.on('$destroy', function() {

      });
    }
  }
});
