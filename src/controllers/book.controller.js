const Book = require('../models/book.model');

const HTTPSTATUSCODE = require('../../utils/httpStatusCode');

//CONSULTAR UN LIBRO

const getBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        res.status(200).json ({
            status:200,
            message: HTTPSTATUSCODE[200],
            book: book
        });
    } catch(error) {
        next(error);
    }
};

//CONSULTAR TODOS LOS LIBROS

const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json ({
            status:200,
            message: HTTPSTATUSCODE[200],
            books: books
        });
    } catch(error) {
        next(error);
    }
};

//CREAR UN LIBRO

const createBook = async (req, res, next) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json ({
            status:201,
            message: HTTPSTATUSCODE[201],
            book: book
        });
    } catch(error) {
        next(error);
    }
};

//MODIFICAR UN LIBRO

const updateBook = async (req, res, nex) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const book = await Book.findByIdAndUpdate(id, body, {new: true});
        if(!book) {
            return res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404]
            });
        }
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: book
        });
    } catch(error) {
        next(error);
    }
};

//ELIMINAR UN LIBRO

const deleteBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            return res.status(404).json({ message: 'Libro no encontrado'});
        }
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: book
        });
    } catch(error) {
        next(error);
    }
};

module.exports = { getBook, getBooks, createBook, updateBook, deleteBook };