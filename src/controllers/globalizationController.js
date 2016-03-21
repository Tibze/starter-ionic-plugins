'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('GlobalizationController', function($rootScope,$scope,$cordovaGlobalization) { 

    $scope.isReady = false;
    $scope.preferredLanguage = null;
    $scope.localeName = null;
    $scope.firstDayOfWeek = null;

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

    function initialize(){

        $scope.isReady = true;
        getGlobalizationInformations();      

    };

    function getGlobalizationInformations(){

	  $cordovaGlobalization.getPreferredLanguage().then(
	    function(result) {
	      $scope.preferredLanguage = result.value;
	    },
	    function(error) {
	      // error
	  });

	 $cordovaGlobalization.getLocaleName().then(
	    function(result) {
	      $scope.localeName = result.value;
	    },
	    function(error) {
	      // error
	  });

	  $cordovaGlobalization.getFirstDayOfWeek().then(
	    function(result) {
	      $scope.firstDayOfWeek = result.value;
	    },
	    function(error) {
	      // error
	  });	  	  

    };     	     

  });
