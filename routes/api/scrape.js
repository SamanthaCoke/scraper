const router = require("express").Router(); 

const ScrapeController = require("../../controllers/ScrapeController");

router.route("/")
.get(ScrapeController.scrape)


module.exports =router; 