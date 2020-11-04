var express = require('express');
var router = express.Router();
var books = require('../resources/books');
let Books = require('../models/books');

/* GET home page. */
router.get('/', async function(req, res, next) {
 let books = await Books.find();
    res.render('index', { title: 'Book App', bookList: books });
});
module.exports = router;
