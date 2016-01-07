'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var enquiryCtrlStub = {
  index: 'enquiryCtrl.index',
  show: 'enquiryCtrl.show',
  create: 'enquiryCtrl.create',
  update: 'enquiryCtrl.update',
  destroy: 'enquiryCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var enquiryIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './enquiry.controller': enquiryCtrlStub
});

describe('Listing API Router:', function() {

  it('should return an express router instance', function() {
    enquiryIndex.should.equal(routerStub);
  });

  describe('GET /api/enquiries', function() {

    it('should route to enquiry.controller.index', function() {
      routerStub.get
        .withArgs('/', 'enquiryCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/enquiries/:id', function() {

    it('should route to enquiry.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'enquiryCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/enquiries', function() {

    it('should route to enquiry.controller.create', function() {
      routerStub.post
        .withArgs('/', 'enquiryCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/enquiries/:id', function() {

    it('should route to enquiry.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'enquiryCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/enquiries/:id', function() {

    it('should route to enquiry.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'enquiryCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/enquiries/:id', function() {

    it('should route to enquiry.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'enquiryCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
