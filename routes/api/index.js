const router = require("express").Router(); 

const scrapeRoutes = require("./scrape");
const path = require("path")

router.use("/scrape", scrapeRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;