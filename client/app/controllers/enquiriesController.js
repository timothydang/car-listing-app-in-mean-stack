'use strict';

class EnquiriesController {

  constructor(EnquiryService) {
    this.allEnquiries = EnquiryService.index();
  }
}

angular.module('carlistingApp')
  .controller('EnquiriesController', EnquiriesController);


