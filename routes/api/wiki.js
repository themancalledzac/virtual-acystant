const router = require("express").Router();
const wikiController = require("../../controllers/wikiController");

router
  .route("/")
  .get(wikiController.getWiki)