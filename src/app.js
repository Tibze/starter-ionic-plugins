'use strict';

/**
 * @ngdoc overview
 * @name IonicPlayground
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

 
angular.module('ionicPluginPlayground', ['ionic', 'ngCordova','ngCordovaOauth'])

  .run(function($rootScope,$ionicPlatform,$cordovaStatusbar,$ionicLoading,$cordovaToast,$cordovaNetwork) {

    $rootScope.platformReady = false;
    $rootScope.networkAvailable = true;
    $rootScope.networkType = null;   
    $rootScope.isWebView = ionic.Platform.isWebView(); 

    ionic.Platform.ready(function(){

      console.log("device ready");

      $rootScope.platformReady = true;

      if ($rootScope.isWebView) {

        // Status Bar
        $cordovaStatusbar.style(0);
        $cordovaStatusbar.show();

        // Network

        if ($cordovaNetwork.isOnline()) $rootScope.networkAvailable = true;
        else $rootScope.networkAvailable = false;

        $rootScope.networkType = $cordovaNetwork.getNetwork();

        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){

          $rootScope.networkAvailable = true;
          $rootScope.networkType = networkState;

        }); 

        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){

          $rootScope.networkAvailable = false;
          $rootScope.networkType = networkState;

        }); 

      }                       

    }, false);

    // $ionicPlatform.ready(function() {
    //   // save to use plugins here

    //   $rootScope.platformReady = true;
    //   $cordovaStatusbar.style(0);
    //   $cordovaStatusbar.show();

    //   $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
    //     //var onlineState = networkState;
    //     console.log("online");
    //   });

    //   document.addEventListener("offline", function(){
    //     console.log("offline");
    //   }, true);

    //   document.addEventListener("online", function(){
    //     console.log("online");
    //   }, false);                   

    // });

    // add possible global event handlers here

    $rootScope.showLoading = function (text) {
        $rootScope.loading = $ionicLoading.show({
            content: text ? text : 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
    };

    $rootScope.hideLoading = function () {
        $ionicLoading.hide();
    };    

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    // Config
    $ionicConfigProvider.backButton.text('Retour').icon('ion-chevron-left');
    $ionicConfigProvider.spinner.icon("spiral");

    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.actionSheet', {
        url: '/actionsheet',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/action-sheet.html',
            controller: 'ActionSheetController'
          }
        }
      }) 

      .state('app.oauth', {
        url: '/oauth',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/oauth.html',
            controller: 'OauthController'
          }
        }
      })

      .state('app.facebookConnect', {
        url: '/facebookConnect',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/facebook-connect.html',
            controller: 'FacebookConnectController'
          }
        }
      })      
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.alert', {
        url: '/alert',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/alert.html',
            controller: 'AlertController'
          }
        }
      })
      .state('app.emailComposer', {
        url: '/emailComposer',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/email-composer.html',
            controller: 'EmailComposerController'
          }
        }
      })
      .state('app.toast', {
        url: '/toast',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/toast.html',
            controller: 'ToastController'
          }
        }
      })
      .state('app.progressIndicator', {
        url: '/toast',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/progress-indicator.html',
            controller: 'ProgressIndicatorController'
          }
        }
      })
      .state('app.splashscreen', {
        url: '/toast',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/splashscreen.html',
            controller: 'SplashscreenController'
          }
        }
      })
      .state('app.platform', {
        url: '/platform',
        cache: true,
        views: {
          'viewContent': { 
            templateUrl: 'templates/views/platform.html',
            controller: 'PlatformController'
          }
        }
      })
      .state('app.globalization', {
        url: '/globalization',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/globalization.html',
            controller: 'GlobalizationController'
          }
        }
      })      
      .state('app.network', {
        url: '/network',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/network.html',
            controller: 'NetworkController'
          }
        }
      })
      .state('app.version', {
        url: '/version',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/version.html',
            controller: 'VersionController'
          }
        }
      })
      .state('app.share', {
        url: '/share',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/social.html',
            controller: 'SocialController'
          }
        }
      })
      .state('app.appAvailability', {
        url: '/appAvailability',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/app-availability.html',
            controller: 'AppAvailabilityController'
          }
        }
      });                                                  


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  });


