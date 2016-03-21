'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('AppAvailabilityController', function($scope,$rootScope,$cordovaAppAvailability) {   

    $scope.isReady = false;

    $scope.availabilityData = [
    	{
    		'applicationName':'Facebook',
    		'iosSchemes':'fb://',
    		'androidSchemes':'com.facebook.katana',
    		'available':null
    	},
    	{
    		'applicationName':'Twitter',
    		'iosSchemes':'twitter://',
    		'androidSchemes':'com.twitter.android',
    		'available':null
    	},
    	{
    		'applicationName':'Whats App',
    		'iosSchemes':'whatsapp://',
    		'androidSchemes':'com.whatsapp',
    		'available':null
    	},
    	{
    		'applicationName':'YouTube',
    		'iosSchemes':'youtube://',
    		'androidSchemes':'com.youtube',
    		'available':null
    	},
    	{
    		'applicationName':'Waze',
    		'iosSchemes':'waze://',
    		'androidSchemes':'com.waze',
    		'available':null
    	},
    	{
    		'applicationName':'Instagram',
    		'iosSchemes':'instagram://',
    		'androidSchemes':'com.instagram',
    		'available':null
    	}    	    	   	    	   	    	
    ];

    //if ($rootScope.platformReady) initialize();

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

    	console.log("initialize");

    	$scope.isReady = true;
    	checkAvailability();

	};

	function checkAvailability(){

    	console.log("checkAvailability");

    	for (var i in $scope.availabilityData) {

    		if (ionic.Platform.isAndroid()) var scheme = $scope.availabilityData[i].androidSchemes;
    		if (ionic.Platform.isIOS()) var scheme = $scope.availabilityData[i].iosSchemes;

		    (function(i) {

				$cordovaAppAvailability.check(scheme)
				      .then(function(id) {
				      	console.log("available");
				        $scope.availabilityData[i].available = true;
				      }, function () {
				      	console.log("not available");
				        $scope.availabilityData[i].available = false;
				      });

		    })(i);

    	}

	};	    

  });
