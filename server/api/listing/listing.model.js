'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ListingSchema = new mongoose.Schema({
  id: Number,
  make: String,
  model: String,
  year: { type: Number, min: 1950 },
  priceType: String,
  egcPrice: Number,
  dapPrice: Number,
  contact_email: String,
  contact_name: String,
  contact_phone: String,
  dealer_abn: String,
  comments: String
});

export default mongoose.model('Listing', ListingSchema);
