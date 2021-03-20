const router = require("express").Router();
const wikiController = require("../../controllers/wikiController");

router
  .route("/:className")
  .get(wikiController.getWiki)

module.exports = router;