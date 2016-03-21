'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('ToastController', function($scope,$cordovaToast) {    

  	$scope.showShortTop = function(){

		$cordovaToast.showShortTop('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

  	};

  	$scope.showShortCenter = function(){

		$cordovaToast.showShortCenter('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

  	};

  	$scope.showShortBottom = function(){

		$cordovaToast.showShortBottom('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

  	};

  	$scope.showLongTop = function(){

		$cordovaToast.showLongTop('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

  	};

	$scope.showLongCenter = function(){

		$cordovaToast.showLongCenter('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

	};

	$scope.showLongBottom = function(){


		$cordovaToast.showLongBottom('Here is a message').then(function(success) {
		    // success
		  }, function (error) {
		    // error
		  });

	};  	     

  });
