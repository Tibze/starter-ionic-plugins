'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('ActionSheetController', function($scope,$cordovaActionSheet) {    

  	$scope.showActionSheet = function(){

		var options = {
		title: 'What do you want with this image?',
		buttonLabels: ['Share via Facebook', 'Share via Twitter'],
		addCancelButtonWithLabel: 'Cancel',
		androidEnableCancelButton : true,
		winphoneEnableCancelButton : true,
		addDestructiveButtonWithLabel : 'Delete it'
		};

		$cordovaActionSheet.show(options)
		  .then(function(btnIndex) {
		    var index = btnIndex;
		  });

  	}; 	     

  });
