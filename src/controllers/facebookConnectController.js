'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('FacebookConnectController', function($scope,$rootScope,$cordovaFacebook) {   

    $scope.isReady = false;  
    $scope.isConnected = false;

    var userID = null;
    var accesToken = null;

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
    	getLoginStatus();  

	};

	function getLoginStatus(){

		 $cordovaFacebook.getLoginStatus()
		    .then(function(success) {

		    	userID = success.authResponse.userID;
		    	accesToken = success.authResponse.accessToken;

		    	console.log(accesToken);

		    	if (userID) {
		    		$scope.isConnected = true;
		    		getMe();
		    		//getPicture();
	    		} 



		    }, function (error) {
		      
		    	$scope.isConnected = false; 

		    });

	};

	function getMe(){

		$cordovaFacebook.api("me", ["public_profile"])
		    .then(function(success) {
		      console.log(success.name);

		      $scope.name = success.name;
		      $scope.fbId = success.id;

		    }, function (error) {
		      // error
		    });

	};

	function getPicture(){

		$cordovaFacebook.api(userID+"/picture")
		    .then(function(success) {
		      console.log(success.url);
		    }, function (error) {
		      // error
		    });

	};	

	  $scope.connectFacebook = function(){

		$cordovaFacebook.login(["public_profile", "email"])
		    .then(function(success) {
		      getLoginStatus();
		    }, function (error) {
		      getLoginStatus();
		    });

	  };

	  $scope.logOutFacebook = function(){

		$cordovaFacebook.logout()
		    .then(function(success) {
		    	$scope.isConnected = false; 
		    }, function (error) {
		      alert("Impossible de se deconnecter de Facebook");
		    });

	  };	    

  });
