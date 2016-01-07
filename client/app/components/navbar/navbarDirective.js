'use strict';

angular.module('carlistingApp')
  .directive('navbar', () => ({
    templateUrl: 'app/components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
