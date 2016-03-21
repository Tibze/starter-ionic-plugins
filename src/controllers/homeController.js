'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('ionicPluginPlayground')
  .controller('HomeController', function($scope,$rootScope,$timeout, API, $cordovaToast) {

    $scope.isReady = false;

    function initialize(){
        $scope.isReady = true;
        $scope.fetchRandomText();        
    };

    $rootScope.$watch('platformReady', function() {
       console.log($rootScope.platformReady);
       if (!$rootScope.platformReady) {
            $rootScope.showLoading();
        }
       else {
            $rootScope.hideLoading();
            // Entry Point
            initialize();            
        }
    });

    // just an example...
    $scope.fetchRandomText = function() {

      API.doAsync()
        .then(API.getHomeData)
        .then(function(response) {

            $scope.myHTML = response.data[0].description;
            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
        },function(error){

            $scope.myHTML = "Unable to fetch API...";
            $scope.$broadcast('scroll.refreshComplete');

        });
    };

  });
