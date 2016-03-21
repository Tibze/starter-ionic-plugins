'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('ProgressIndicatorController', function($scope,$cordovaProgress,$timeout) {    

  	$scope.showSimple = function(){

		$cordovaProgress.showSimple(true);
		$timeout(function(){
			$cordovaProgress.hide();
		},3000);
  	}; 

  	$scope.showSimpleWithLabel = function(){

  		$cordovaProgress.showSimpleWithLabel(true, "Loading");
		$timeout(function(){
			$cordovaProgress.hide();
		},3000);  		

  	}; 	 

  	$scope.showSimpleWithLabelDetail = function(){

		$cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "detail");
		$timeout(function(){
			$cordovaProgress.hide();
		},3000);  
  	}; 

  	$scope.showDeterminate = function(){

  		$cordovaProgress.showDeterminate(false, 100000);

  	};   

  	$scope.showBar = function(){

  		$cordovaProgress.showBar(true, 50000);

  	};

  	$scope.showBarWithLabel = function(){

		$cordovaProgress.showBarWithLabel(false, 100000, "Loading");

  	};

  	$scope.showSuccess = function(){

		$cordovaProgress.showSuccess(true, "Success!");
		$timeout(function(){
			$cordovaProgress.hide();
		},3000); 		

  	};

  });
