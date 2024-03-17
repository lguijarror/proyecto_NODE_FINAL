const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 13
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    publishingHouse: {
        type: String,
        required: true,
        trim: true,
    },
    publicationYear: {
        type: Number,
        required: true,
        trim: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;