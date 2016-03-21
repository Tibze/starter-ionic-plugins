'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('VersionController', function($rootScope,$scope,$cordovaAppVersion) { 

		$cordovaAppVersion.getVersionNumber().then(function (version) {
	        $scope.applicationVersion = version;
      	});	  	 

  });
