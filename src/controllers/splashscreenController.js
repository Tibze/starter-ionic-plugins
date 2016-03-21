'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('SplashscreenController', function($scope,$cordovaSplashscreen,$timeout) { 	

    // do something with $scope
    $scope.showSplashscreen = function(){

    	$cordovaSplashscreen.show();
    	$timeout(function(){
    		$cordovaSplashscreen.hide();
    	},5000);

    };        

  });
