'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _authorsControllers = require('../controllers/authorsControllers');

var _authorsControllers2 = _interopRequireDefault(_authorsControllers);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authors = new _table2.default('authors');

var router = (0, _express.Router)();

router.get('/authors', function (req, res, next) {
    authors.getAll().then(function (authors) {
        return res.json(authors);
    });
});

router.get('/authors/:id', function (req, res, next) {
    var id = req.params.id;
    authors.getOne(id).then(function (author) {
        return res.json(author);
    });
});

router.post('/authors', function (req, res, next) {
    authors.insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }).then(function (id) {
        return res.json(id);
    }).then(res.sendStatus(201));
});

router.put('/authors/:id', function (req, res, next) {
    authors.update(req.params.id, req.body).then(function (results) {
        return res.json(results);
    }).catch(function (err) {
        return console.log(err);
    });
});

router.delete('/authors/:id', function (req, res, next) {
    authors.delete(req.params.id).then(function (results) {
        return res.json(results);
    }).then(res.sendStatus(200)).catch(function (err) {
        return console.log(err);
    });
});

exports.default = router;