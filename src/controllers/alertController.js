'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('AlertController', function($scope,$cordovaDialogs,Async,$timeout) {

    // do something with $scope
    $scope.alert = function(){

	 $cordovaDialogs.alert('message', 'title', 'button name')
	    .then(function() {
	      // callback success
	    });

    };

    $scope.confirm = function(){

		$cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		    });

    };

    $scope.prompt = function(){

		 $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
		    });

    }; 

    $scope.beep = function(){

    	$cordovaDialogs.beep(3); 

    };       

  });
