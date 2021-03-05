const db = require("../models");

// we define methods for the userController
// preliminary controller, just a few thoughts to go towards

module.exports = {
  // Our initial login will most likely find our user by our login ID, find our user, and res.json our user
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // our create function is our initial create user if !login
  create: function (req, res) {
    db.Post.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // our update function could be used for an update user page? or, more than likely used when our user adds an image, which updates the DB, but also is, at least while logged in(?), added to our state. (ALSO, WHEN WE HAVE AN 'IMAGE' IN OUR STATE, IS IT SIMPLY A LINK TO THE DB IMAGE? OR IS THERE SORT OF A LOCAL COPY WHILE THE USER IS LOGGED IN?)
  update: function (req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // remove function for if a user wants to delete their account? More than likely used when a user wants to remove an image they uploaded.
  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
