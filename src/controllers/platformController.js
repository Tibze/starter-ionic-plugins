'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('PlatformController', function($scope) {

	  ionic.Platform.ready(function(){
	    // will execute when device is ready, or immediately if the device is already ready.

		  var deviceInformation = ionic.Platform.device();

		  var isWebView = ionic.Platform.isWebView();
		  var isIPad = ionic.Platform.isIPad();
		  var isIOS = ionic.Platform.isIOS();
		  var isAndroid = ionic.Platform.isAndroid();
		  var isWindowsPhone = ionic.Platform.isWindowsPhone();

		  var currentPlatform = ionic.Platform.platform();
		  var currentPlatformVersion = ionic.Platform.version();

		  if (isWebView) $scope.webView = "Yes";
		  else $scope.webView = "No";

		  if (isIPad) $scope.isIpad = "Yes"; 
		  else $scope.isIpad = "No";

		  if (isIOS) $scope.isIOS = "Yes";
		  else $scope.isIOS = "No";	

		  if (isAndroid) $scope.isAndroid = "Yes";
		  else $scope.isAndroid = "No";	
		  
		  $scope.currentPlatform = currentPlatform;
		  $scope.currentPlatformVersion = currentPlatformVersion;	  	  		  

		  if(!$scope.$$phase) $scope.$apply();   

	  });       

  });
