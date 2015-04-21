"use strict";

require("./submiter");
require("./actors");
require("./banners");
require("./hotkeys");
require("./quote-input");

require("angular").module("home", ["actors", "banners", "hotkeys", "quoteInput"])
.directive("appHome", function() {
  return {
    restrict:"E",
    templateUrl:"home.html"
  };
});
