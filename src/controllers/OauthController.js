'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('OauthController', function($scope,$cordovaOauth) {    

  	$scope.OauthFacebook = function(){

        $cordovaOauth.facebook("536037899877836", ["email"]).then(function(result) {
            console.log(result);
        }, function(error) {
            // error
        }); 

  	}; 	     

  });
