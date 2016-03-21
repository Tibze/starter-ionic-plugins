'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('SocialController', function($scope,$rootScope,$cordovaSocialSharing,$cordovaToast,API) {

    $scope.isReady = false;
    $scope.facebookShareAvailable = null;
    $scope.twitterShareAvailable = null;
    $scope.emailShareAvailable = null;

    var message = "Sample Message";
    var file = "Sample File";
    var subject = "Sample Subject";
    var link = "http://www.sample.com";
    var image = "http://www.sample.com/1.png";

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

    $scope.shareFacebook = function(){

      $cordovaSocialSharing
      .shareViaFacebook(message, image, link)
      .then(function(result) {
          // Success!
        }, function(err) {

          $cordovaToast.showShortTop('Share Facebook Canceled');

      });

    };

    $scope.shareTwitter = function(){

      $cordovaSocialSharing
        .shareViaTwitter(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {

          $cordovaToast.showShortTop('Share Twitter Canceled');

      });

    }; 

    $scope.shareEmail = function(){

      $cordovaSocialSharing
        .shareViaEmail(message, subject)
        .then(function(result) {
          // Success!
        }, function(err) {

          $cordovaToast.showShortTop('Share Email Canceled');

      });

    };       

    function initialize(){

        $scope.isReady = true;
        getPermissions();      

    };

    function getPermissions(){

      //Share Facebook ?
      $cordovaSocialSharing.canShareVia('facebook', message, image, link)
      .then(function(response) {
            console.log(response);
            $scope.facebookShareAvailable = true;
          }, function(error) {
            $scope.facebookShareAvailable = false;
      });     

      // Share Twitter ?
      $cordovaSocialSharing.canShareVia('twitter', message, image, link)
      .then(function(result) {
            $scope.twitterShareAvailable = true;
          }, function(err) {
            $scope.twitterShareAvailable = false;
      }); 

      // Share Mail ? 
      $cordovaSocialSharing.canShareViaEmail()
      .then(function(result) {
        $scope.emailShareAvailable = true;
      }, function(err) {
        $scope.emailShareAvailable = false;
      });

    };


  });
