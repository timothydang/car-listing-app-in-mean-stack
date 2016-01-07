/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Listing from '../api/listing/listing.model';
import Enquiry from '../api/enquiry/enquiry.model';

Listing.find({}).removeAsync()
  .then(() => {
    Listing.create(
      {
        id: 1,
        make: "Honda",
        model: "Accord Euro",
        year: 2014,
        priceType: "EGC",
        egcPrice: 32000,
        dapPrice: null,
        contact_email: "test_email_1@email.com",
        contact_name: "Test User 1",
        contact_phone: "0452226221",
        dealer_abn: null,
        comments: "This beautifully presented Accord Euro is finished in light blue metallic duco and is matched with unmarked charcoal cloth trim."
      },
      {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2012,
        priceType: "POA",
        egcPrice: null,
        dapPrice: null,
        contact_email: "test_email_2@email.com",
        contact_name: "Test User 2",
        contact_phone: "0452226222",
        dealer_abn: null,
        comments: null
      },
      {
        id: 3,
        make: "Mitsubishi",
        model: "Lancer",
        year: 2010,
        priceType: "EGC",
        egcPrice: 10500.00,
        dapPrice: null,
        contact_email: "test_email_3@email.com",
        contact_name: "Test User 3",
        contact_phone: "0452226223",
        dealer_abn: null,
        comments: null
      },
      {
        id: 4,
        make: "Range Rover",
        model: "Evoque",
        year: 2015,
        priceType: "EGC",
        egcPrice: 42299.00,
        dapPrice: null,
        contact_email: "test_email_4@email.com",
        contact_name: "Test User 4",
        contact_phone: "0452226224",
        dealer_abn: "88143526096",
        comments: "The 2015 Land Rover Range Rover Evoque seats up to five, has standard four-wheel drive and is available in either a two- or four-door body style. A turbocharged 2.0-liter four-cylinder engine and a nine-speed automatic transmission are standard."
      }

    );
  });

Enquiry.find({}).removeAsync();

