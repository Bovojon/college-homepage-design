(function() {
  'use strict';

  angular
    .module('cssApp', ['ui.router', 'ngMaterial'])
    .config(configFunction)
    .controller('cssCtrl', cssCtrl);

  /////////////////
  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configFunction($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'cssCtrl',
          controllerAs: 'vm',
      });

  }

  /////////////////
  cssCtrl.$inject = [];
  function cssCtrl() {
    var vm = this;
    vm.message = "Hello World!";

  }



})();
