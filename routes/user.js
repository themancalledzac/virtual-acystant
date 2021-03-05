const router = require("express").Router();
const userController = require("../controllers/userController");

// api router

// login page. does this require and routes? It leads to 2 routes, login and create

// create User, where on the userPage, we want to create user
router.route("/createUser").post(userController.create);

// home page, where we, if logged in(?), want to display user data.
router.route("/:id").get(userController.findById);

// upload image, from home page, upload image, which will reload homepage with data? Or do we have a second screen after an upload?
router.route("/upload").get(userController.update);

// delete user, maybe from user page
router.route("/delete").delete(userController.remove);
