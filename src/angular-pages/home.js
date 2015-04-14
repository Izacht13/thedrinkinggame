"use strict";

require("angular").module("home", [])
.directive("home", function() {
  return {
    templateUrl:"fragment.html"
  };
});
