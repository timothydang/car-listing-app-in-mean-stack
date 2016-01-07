'use strict';

class IndexController {

  constructor(ListingService) {
    this.allListings = ListingService.index();
  }
}

angular.module('carlistingApp')
  .controller('IndexController', IndexController);


