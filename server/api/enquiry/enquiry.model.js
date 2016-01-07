'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var ListingSchema = require('mongoose').model('Listing');

var EnquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  content: String,
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Enquiry', EnquirySchema);
