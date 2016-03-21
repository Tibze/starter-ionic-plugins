'use strict';

/**
 * @ngdoc function
 * @name IonicPlayground.controller:SettingsController
 * @description
 * # SettingsController
 */
angular.module('ionicPluginPlayground')
  .controller('EmailComposerController', function($scope,$cordovaEmailComposer,$cordovaDialogs) {

	var email = {
		to: 'max@mustermann.de',
		cc: 'erika@mustermann.de',
		bcc: ['john@doe.com', 'jane@doe.com'],
		attachments: [],
		subject: 'Cordova Icons',
		body: 'How are you? Nice greetings from Leipzig',
		isHtml: true
	};  	

    // do something with $scope
    $scope.emailComposer = function(){

		$cordovaEmailComposer.open(email).then(null, function () {
		   // user cancelled email
		 });

    }; 

    $scope.checkEmailComposer = function(){

		$cordovaEmailComposer.isAvailable().then(function() {
		   $cordovaDialogs.alert('Email Composer est disponible', 'Email Composer', 'Fermer');
		 }, function () {
		   $cordovaDialogs.alert('Email Composer n\'est pas disponible', 'Email Composer', 'Fermer');
		 });

    };         

  });
