var angular=require('angular'); angular.module('templateCache', []).run(['$templateCache', function($templateCache) {$templateCache.put("banner.html","<div class=\"banner\"ng-style=\"bannerStyle\"></div>\r\n");
$templateCache.put("home.html","<app-banner></app-banner>\r\n<app-quotes></app-quotes>\r\n");
$templateCache.put("quotes.html","<div id=\"quote-container\">\r\n    <div ng-repeat=\"quote in quotes\" ng-style=\"{\'font-size\':(quote.quote.length>=30)?\'50px\':\'90px\'}\">\r\n        <img ng-show=\"quotes[$index].actor\" ng-src=\"{{quote.actor.image}}\" />{{quote.quote}}\r\n    </div>\r\n</div>\r\n");}]);