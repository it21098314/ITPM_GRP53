let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// exam Model
let instaSchema = require('../models/Insta');

// CREATE exam
router.route('/create-insta').post((req, res, next) => {
 instaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ grade
router.route('/').get((req, res) => {
 instaSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single grade
router.route('/edit-insta/:id').get((req, res) => {
 instaSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update grade
router.route('/update-insta/:id').put((req, res, next) => {
  instaSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Instructor updated successfully !')
    }
  })
})

// Delete grade
router.route('/delete-insta/:id').delete((req, res, next) => {
  instaSchema.findByIdAndRemove(req.params.id, (error, data) => {
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