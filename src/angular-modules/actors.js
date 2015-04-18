"use strict";

var angular=require("angular");

angular.module("actors", [])
.factory("actors", function(){

  let actors=[
    {
      name:"GaRRy",
      image:"img/garry.png"
    },
    {
      name:"Paige",
      image:"img/paige.png"
    },
    {
      name:"Lindsay",
      image:"img/lindsay.png"
    },
    {
      name:"Ethan",
      image:"img/ethan.png"
    },
    {
      name:"Beyata",
      image:"img/beyata.png"
    },
    {
      name:"Cathie",
      image:"img/cathie.png"
    },
    {
      name:"Spencer",
      image:"img/spencer.png"
    },
    {
      name:"Nadja",
      image:"img/nadja.png"
    },
    {
      name:"No one",
      image:"img/noone.png"
    },
  ];


  var noOne=actors[actors.length-1];

  return {
    actors,
    setCurrentActorByImage:function(url){
      actors.some(function(item){
        if (url.includes(item.image)){
          this.currentActor=item;
          return true;
        }
      }, this);
    },
    setCurrentActorByIndex:function(index){
      this.currentActor=actors[index];
    },
    currentActor:actors[actors.length-1],
    pickNoOne:function(){
      this.currentActor=noOne;
    },
    get noOne(){
      return noOne;
    }
  };
})
.directive("appActors", function(actors){
  return {
    restrict:"E",
    controller:"actorController",
    templateUrl:"actors.html"
  };
})
.directive("actorImage", ["actors", function(actors){
  return {
    restrict:"A",
    link:function(scope, element){
      element.on("click", function(e){
        e.preventDefault();
        scope.$apply(()=>{
          actors.setCurrentActorByImage(this.src);
        });
      })
    }
  };
}])
.controller("actorController", ["$scope", "actors", "hotkeys", function($scope, actors, hotkeys){
  $scope.actors=actors.actors;
  $scope.isActorSelected=function(actor){
    return actors.currentActor===actor;
  };

  $scope.hotkeys=hotkeys;
}]);
