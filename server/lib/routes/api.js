'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authors = require('./authors');

var _authors2 = _interopRequireDefault(_authors);

var _books = require('./books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/api', _authors2.default);
router.use('/api', _books2.default);

exports.default = router;