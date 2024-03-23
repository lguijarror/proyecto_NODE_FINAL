const express = require('express');
const cors = require('cors');

const HTTPSTATUSCODE = require('./utils/httpStatusCode');
const {connectMongo} = require('./utils/db');
const bookRouter = require('./src/routes/book.routes');
require("dotenv").config();

const PORT = 3000; 

connectMongo();
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/book', bookRouter);
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to my server',
        app: 'My App'
    });
});

app.use((req, res, next) => {
    let error = new Error();
    error.status = 404;
    error.message = HTTPSTATUSCODE[404];
    next(error);
});
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
});
app.disable('x-powered-by');

app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`);
});