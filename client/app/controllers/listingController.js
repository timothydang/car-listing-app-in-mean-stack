'use strict';

class ListingController {

  constructor($routeParams, ListingService) {
    this.data = ListingService.show({ id: $routeParams.id });
  }
}

angular.module('carlistingApp')
  .controller('ListingController', ListingController);
