let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// Blog Model
let blogSchema = require('../models/Blog');

// CREATE Blog
router.route('/create-blog').post((req, res, next) => {
    blogSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Blog
router.route('/').get((req, res) => {
    blogSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Blog

router.route('/edit-blog/:id').get((req, res) => {
    blogSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Blog
router.route('/update-blog/:id').put((req, res, next) => {
    blogSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Blog updated successfully !')
    }
  })
})

// Delete Blog
router.route('/delete-blog/:id').delete((req, res, next) => {
    blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
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