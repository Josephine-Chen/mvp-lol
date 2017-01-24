angular.module('mvp.champion', [])

.controller('ChampionController', function($scope, $http, $location, Champions) {
  var champ = $location.$$path.split('/')[2];

  //Hardcoded
  $scope.data = {};
  $scope.getAllChampions = function(){
    Champions.getAllChampions().then(function(champions) {
      $scope.data = champions.data[0].data[champ];
      $scope.data.skins[0].name="Classic";
    }).catch(function(err) {
      console.log('error getting scope data champions', err);
    });
    }();

  $scope.modal = function(result) {
    close(result, 500);
  }
});