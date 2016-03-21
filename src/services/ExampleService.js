'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.serive:ExampleService
 * @description
 * # ExampleService
 */
angular.module('ionicPluginPlayground')
  // use factory for services
  .factory('ExampleService', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var doSomethingAsync = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
      return deferred.promise;
    };

    var fetchSomethingFromServer = function() {
      return $http({
          url: 'http://beta.json-generator.com/api/json/get/Vywoj7mh',
          // params: {
          //     paras: 2
          // },
          method: 'GET'
        })
        .success(function(data) {
          console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      doSomethingAsync: doSomethingAsync,
      fetchSomethingFromServer: fetchSomethingFromServer
    };

  });
