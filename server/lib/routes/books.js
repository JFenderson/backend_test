'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _booksControllers = require('../controllers/booksControllers');

var _booksControllers2 = _interopRequireDefault(_booksControllers);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var books = new _table2.default('books');

var router = (0, _express.Router)();

router.get('/books', function (req, res, next) {
    books.getAll().then(function (books) {
        return res.json(books);
    });
});

router.get('/books/:id', function (req, res, next) {
    var id = req.params.id;
    books.getOne(id).then(function (author) {
        return res.json(author);
    });
});

router.post('/books', function (req, res, next) {
    books.insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }).then(function (id) {
        return res.json(id);
    }).then(res.sendStatus(201));
});

router.put('/books/:id', function (req, res, next) {
    books.update(req.params.id, req.body).then(function (results) {
        return res.json(results);
    }).catch(function (err) {
        return console.log(err);
    });
});

router.delete('/books/:id', function (req, res, next) {
    books.delete(req.params.id).then(function (results) {
        return res.json(results);
    }).then(res.sendStatus(200)).catch(function (err) {
        return console.log(err);
    });
});

exports.default = router;