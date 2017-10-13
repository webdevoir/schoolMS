'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var adminSchema = new Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    default: _v2.default
  },
  number: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    default: 'noemail@mail.com'
  },
  userType: {
    type: String,
    lowercase: true,
    trim: true,
    default: 'admin'
  }
});

adminSchema.plugin(_passportLocalMongoose2.default);

exports.default = _mongoose2.default.model('Admin', adminSchema);
//# sourceMappingURL=Admin.js.map