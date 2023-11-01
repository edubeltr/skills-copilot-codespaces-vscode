// Create web server
var express = require('express');
var router = express.Router();

// Import comments model
var Comments = require('../models/Comments');

// Get all comments
router.get('/', function(req, res, next) {
  Comments.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Save comment
router.post('/', function(req, res, next) {
  Comments.create(req.body, function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Update comment
router.put('/:id', function(req, res, next) {
  Comments.findByIdAndUpdate(req.params.id, req.body, function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Delete comment
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, req.body, function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

module.exports = router;

