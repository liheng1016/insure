"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.childRoutes = exports.route = exports.basesettingReducer = undefined;

var _reducer = require("./model/basesetting/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _route = require("./route.js");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = require("./route/index.json");

exports.basesettingReducer = _reducer2.default;
exports.route = route;
exports.childRoutes = _route2.default;