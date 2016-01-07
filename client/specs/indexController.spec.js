'use strict';

describe('Controller: IndexController', function() {

  // load the controller's module
  beforeEach(module('carlistingApp'));

  var scope;
  var IndexController;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/listings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    IndexController = $controller('IndexController', {
      $scope: scope
    });
  }));

  it('should attach a list of listings to the controller', function() {
    $httpBackend.flush();
    expect(IndexController.allListings.length).toBe(4);
  });
});
