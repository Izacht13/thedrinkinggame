var angular=require("angular"); angular.module("templateCache", []).run(["$templateCache", function($templateCache) {$templateCache.put("banner.html","<div class=\"banner\">\r\n    <img ng-src=\"{{bannerUrl}}\" />\r\n</div>\r\n");
$templateCache.put("home.html","<app-banner></app-banner>\r\n<app-quotes></app-quotes>\r\n");
$templateCache.put("quotes.html","quotes\r\n");}]);