'use strict';

class ContactFormController {
  constructor($location, $routeParams, EnquiryService) {
    this.EnquiryService = EnquiryService;
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.enquiry = {};
  }

  submit($scope) {
    this.enquiry = $scope.enquiry;
    this.enquiry.listing = this.$routeParams.id;

    this.EnquiryService.create(
      this.enquiry,
      success,
      failure
    );

    function success() {
      $scope.formSuccess = true;
      $scope.enquiry = {};
      $scope.contactform.$setPristine();
    }

    function failure() {
      $scope.formError = true;
      $scope.enquiry = {};
      $scope.contactform.$setPristine();
    }
  }
}

angular.module('carlistingApp').controller('ContactFormController', ContactFormController);
