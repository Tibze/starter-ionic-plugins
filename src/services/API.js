'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.serive:ExampleService
 * @description
 * # ExampleService
 */
angular.module('ionicPluginPlayground')
  // use factory for services
  .factory('API', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var doAsync = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
      return deferred.promise;
    };

    var getHomeData = function() {
      return $http({
          url: 'http://www.json-generator.com/api/json/get/bYNWdCVCUO?indent=2',
          // params: {
          //     paras: 2
          // },
          method: 'GET'
        })
        .success(function(data) {
          //console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          //console.log('an error occured', error);
        });
    };

    // public api
    return {
      doAsync: doAsync,
      getHomeData: getHomeData
    };

  });
