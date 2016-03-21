'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.serive:ExampleService
 * @description
 * # ExampleService
 */
angular.module('ionicPluginPlayground')
  // use factory for services
  .factory('Async', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var ask = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 6000);
      return deferred.promise;
    };

    // public api
    return {
      ask: ask
    };

  });
