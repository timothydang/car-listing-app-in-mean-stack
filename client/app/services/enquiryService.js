'use strict';

angular.module('carlistingApp')
  .factory("EnquiryService", function($resource, $http) {
    var resource = $resource("/api/enquiries/:id", { id: "@_id" },
      {
        'create':  { method: 'POST' },
        'index':   { method: 'GET', isArray: true },
        'show':    { method: 'GET', isArray: false },
        'update':  { method: 'PUT' },
        'destroy': { method: 'DELETE' }
      }
    );

    return resource;
  });
