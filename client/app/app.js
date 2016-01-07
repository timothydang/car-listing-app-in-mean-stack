'use strict';

angular.module('carlistingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/index.html',
      controller: 'IndexController',
      controllerAs: 'indexCtrl'
    })
    .when('/enquiries', {
      templateUrl: 'app/views/enquiries.html',
      controller: 'EnquiriesController',
      controllerAs: 'enquiriesCtrl'
    })

    .when('/listing/:id', {
      templateUrl: 'app/views/listing.html',
      controller: 'ListingController',
      controllerAs: 'listingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
