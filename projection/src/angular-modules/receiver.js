"use strict";

require("angular").module("receiver", [])
.factory("receiver", function(){

  var socket=io();

  return {
    registerBannerReceiver(callback){
      socket.on("banner-projector", callback);
    },
    deregisterBannerReceiver(callback){
      socket.removeListener("banner-projector", callback);
    },
    registerQuoteReceiver(callback){
      socket.on("quote-projector", callback);
    },
    deregisterQuoteReceiver(callback){
      socket.removeListener("quote-projector", callback);
    }
  };

});
