'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authors = new _table2.default('authors');

function get() {
  authors.getAll().then(function (authors) {
    return res.json(authors);
  });
}

exports.get = get;