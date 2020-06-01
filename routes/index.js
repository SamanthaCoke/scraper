const router = require("express").Router(); 

const apiRoutes = require("./api");
const Book = require("../models/Book.js");

router.use("/api", apiRoutes);

router.get("/scraped/", function(req, res) {
    Book.find({})
    .then(books => {
        res.json(books);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;