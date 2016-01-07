'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var listingCtrlStub = {
  index: 'listingCtrl.index',
  show: 'listingCtrl.show',
  create: 'listingCtrl.create',
  update: 'listingCtrl.update',
  destroy: 'listingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var listingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './listing.controller': listingCtrlStub
});

describe('Listing API Router:', function() {

  it('should return an express router instance', function() {
    listingIndex.should.equal(routerStub);
  });

  describe('GET /api/listings', function() {

    it('should route to listing.controller.index', function() {
      routerStub.get
        .withArgs('/', 'listingCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/listings/:id', function() {

    it('should route to listing.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'listingCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/listings', function() {

    it('should route to listing.controller.create', function() {
      routerStub.post
        .withArgs('/', 'listingCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/listings/:id', function() {

    it('should route to listing.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'listingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/listings/:id', function() {

    it('should route to listing.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'listingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/listings/:id', function() {

    it('should route to listing.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'listingCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
