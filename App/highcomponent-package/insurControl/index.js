"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.childRoutes = exports.route = exports.insurUploadReducer = exports.insurInfoReducer = exports.acceptInsurReducer = undefined;

var _reducer = require("./model/acceptInsur/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require("./model/insurInfo/reducer");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require("./model/media/reducer");

var _reducer6 = _interopRequireDefault(_reducer5);

var _route = require("./route.js");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = require("./route/index.json");

exports.acceptInsurReducer = _reducer2.default;
exports.insurInfoReducer = _reducer4.default;
exports.insurUploadReducer = _reducer6.default;
exports.route = route;
exports.childRoutes = _route2.default;