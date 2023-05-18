let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// Order Mangement Model
let orderManageSchema = require('../models/OrderMangement');

// Create Order
router.route('/create-order').post((req, res, next) => {
    orderManageSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// Read Order
router.route('/').get((req, res) => {
    orderManageSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single order
router.route('/edit-order/:id').get((req, res) => {
    orderManageSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Order
router.route('/update-order/:id').put((req, res, next) => {
    orderManageSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Order updated successfully !')
    }
  })
})

// Delete Order
router.route('/delete-order/:id').delete((req, res, next) => {
    orderManageSchema.findByIdAndRemove(req.params.id, (error, data) => {
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