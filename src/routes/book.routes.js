const express = require('express');

const bookRouter = express.Router();

const { getBook, getBooks, createBook, updateBook, deleteBook } = require('../controllers/book.controller');

bookRouter.post("/", createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.patch("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;