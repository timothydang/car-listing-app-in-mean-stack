'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Enquiries',
      'link': '/enquiries'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('carlistingApp')
  .controller('NavbarController', NavbarController);
