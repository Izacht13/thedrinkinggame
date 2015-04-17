"use strict";

require("./submiter");

require("angular").module("banners", ["submiter"])
.directive("appBanners", function(){
  return {
    restrict:"E",
    controller:"bannersController",
    templateUrl:"banners.html",
    link:function(scope, element){

    }
  };
})
.controller("bannersController", ["$scope", function($scope){
  $scope.bannerButtons=[
    {
      title:"The Drinking Game",
      image:"img/banners/thedrinkinggame.png"
    },
    {
      title:"Hemingway",
      image:"img/banners/hemingway.png"
    },
    {
      title:"Watergate",
      image:"img/banners/watergate.png"
    },
    {
      title:"Speed Round",
      image:"img/banners/speedround.png"
    },
    {
      title:"Disco Round",
      image:"img/banners/discoround.png"
    },
    {
      title:"Interrogation",
      image:"img/banners/interrogation.png"
    },
    {
      title:"Jay Whitehead",
      image:"img/banners/jaywhitehead.png"
    },
    {
      title:"Bell of Silence",
      image:"img/banners/bellofsilence.png"
    },
    {
      title:"Sociable!",
      image:"img/banners/sociable.png"
    },
    {
      title:"Here's lookin' at you, kid",
      image:"img/banners/hereslookinatyoukid.png"
    },
    {
      title:"Boomerang",
      image:"img/banners/boomerang.png"
    },
    {
      title:"Off",
      image:"img/banners/unknown.png"
    }
  ];

}])
.factory("customBanner", function(){

  var inputElement=null,
      inputActive=false,
      buttonThatCalled=null;

  function toggleButton(element){
    element[0].textContent=(element[0].textContent==="Cancel")?"Custom":"Cancel";
    if (element[0].textContent==="Cancel"){
      element.addClass("cancel-button");
    }
    else{
      element.removeClass("cancel-button");
    }
  }

  return {
    registerInputElement:function(element){
      inputElement=element;
    },
    toggleInputActivationStatus:function(ele){
      buttonThatCalled = ele || buttonThatCalled;
      toggleButton(buttonThatCalled);
      inputActive=!inputActive;
      inputElement.attr("placeholder", (inputElement.attr("placeholder"))?"":"Please enter a direct link to an image");
    },
    get inputActive(){
      return inputActive;
    }
  };
})
.directive("bannerButton", ["submiter", function(submiter){
  return {
    restrict:"A",
    link:function(scope, element){
      element.on("click", function(){
        submiter.submitBanner(scope.bannerButton);
      });
    }
  };
}])
.directive("customBannerButton", ["customBanner", function(customBanner){
  return {
    restrict:"A",
    link:function(scope, element){
      element.on("click", function(){
        customBanner.toggleInputActivationStatus(element);
      });
    }
  };
}]);
