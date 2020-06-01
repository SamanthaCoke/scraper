const Book = require('../models/Book');
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = {
    scrape: function(req, res) {
        console.log("Eworking??")
        let books = [];
        axios.get("http://books.toscrape.com")
        .then((resp) => {
            let $ = cheerio.load(resp.data);
            $("article.product_pod").each(function(i, element) {
                let header = $(this).find("h3").text().trim();
                let img = "http://books.toscrape.com/" + $(this).find(".image_container img").attr("src")
                console.log("Header", header)
                console.log("image", img)
                let book = {
                    title: header, 
                    image: img
                }
                books.push(book)
            })
           // console.log(db)
            Book.create(books)
            .then(bookss => {
                console.log("sucess", bookss)
                res.json(bookss);
            })
            .catch(err=> {
                console.log("err", err)
            });
        })
        .catch(err => {
            console.log(err)
            res.status(401).json(err);
        })
    }, 

}