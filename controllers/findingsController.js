/* eslint-disable no-undef */
const db = require("../models");

module.exports = {
    // get all predictions
    findAll: function(req, res) {
        db.Finding.find(req.query)
          .sort({ image: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },  
    // save predictions to the db
    create: function (req, res) {
        console.log(req.body)
      db.Finding.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  
  }; 