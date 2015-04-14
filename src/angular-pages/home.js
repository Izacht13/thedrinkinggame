"use strict";

require("angular").module("home", [])
.directive("appHome", function() {
  return {
    templateUrl:"home.html"
  };
});
