const express = require('express');

const bookRouter = express.Router();

const { getBook, getBooks, createBook, updateBook, deleteBook } = require('../controllers/book.controller');

const { isAuth } = require('../middlewares/auth.middleware');

bookRouter.post("/", [isAuth], createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.patch("/:id", [isAuth], updateBook);
bookRouter.delete("/:id", [isAuth], deleteBook);

module.exports = bookRouter;