let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// exam Model
let donationSchema = require('../models/donation');

// CREATE donation
router.route('/create-donation').post((req, res, next) => {
    donationSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ donation
router.route('/').get((req, res) => {
    donationSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single donation

router.route('/edit-donation/:id').get((req, res) => {
    donationSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update donation
router.route('/update-donation/:id').put((req, res, next) => {
    donationSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Donation updated successfully !')
    }
  })
})

// Delete donation
router.route('/delete-donation/:id').delete((req, res, next) => {
    donationSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;