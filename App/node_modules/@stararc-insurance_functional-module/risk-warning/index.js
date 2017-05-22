"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.childRoutes = exports.route = exports.riskWarningReducer = exports.gridReducer = undefined;

var _reducer = require("./model/grid/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require("./model/riskwarning/reducer");

var _reducer4 = _interopRequireDefault(_reducer3);

var _route = require("./route.js");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = require("./route/index.json");

exports.gridReducer = _reducer2.default;
exports.riskWarningReducer = _reducer4.default;
exports.route = route;
exports.childRoutes = _route2.default;