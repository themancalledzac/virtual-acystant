const db = require("../models");

module.exports = {
    // this will be used to find all previous images with their associated probabilities
    findAll: function(req, res) {
        db.Post.find(req.query)
          .sort({ image: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },  
    // create a new image search to the tf model
    create: function (req, res) {
      db.Post.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    // remove function for if a user wants to delete their images
    remove: function (req, res) {
      db.Post.findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  
  }; 