angular.module('ecej', ['ionic', 'ecej.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  //Define o template de cada página e seus controllers
  $urlRouterProvider.otherwise('/login');

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('esqueceu', {
    url: '/esqueceu',
    templateUrl: 'templates/esqueceu.html'
  })

  .state('mural', {
    url: '/mural',
    templateUrl: 'templates/mural.html'
  })

  .state('mural-form', {
    url: '/mural-form',
    templateUrl: 'templates/mural-form.html'
  })
});
