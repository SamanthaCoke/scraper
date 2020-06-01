const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String, 
    image: String
})

let Book = mongoose.model('Book', BookSchema)
module.exports = Book;