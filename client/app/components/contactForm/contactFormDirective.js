'use strict';

angular.module('carlistingApp')
  .directive('contactForm', () => ({
    templateUrl: 'app/components/contactForm/contactForm.html',
    restrict: 'E',
    controller: 'ContactFormController',
    controllerAs: 'contactForm'
  }));
