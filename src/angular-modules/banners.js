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
      image:"img/banners/thedrinkinggame.jpg"
    },
    {
      title:"Hemingway",
      image:"img/banners/hemingway.jpg"
    },
    {
      title:"Watergate",
      image:"img/banners/watergate.jpg"
    },
    {
      title:"Speed Round",
      image:"img/banners/speedround.jpg"
    },
    {
      title:"Disco Round",
      image:"img/banners/discoround.jpg"
    },
    {
      title:"Interrogation",
      image:"img/banners/interrogation.jpg"
    },
    {
      title:"Jay Whitehead",
      image:"img/banners/jaywhitehead.jpg"
    },
    {
      title:"Bell of Silence",
      image:"img/banners/bellofsilence.jpg"
    },
    {
      title:"Sociable!",
      image:"img/banners/sociable.jpg"
    },
    {
      title:"Here's lookin' at you, kid",
      image:"img/banners/hereslookinatyoukid.jpg"
    },
    {
      title:"Boomerang",
      image:"img/banners/boomerang.jpg"
    },
    {
      title:"Off",
      image:"img/banners/unknown.jpg"
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
