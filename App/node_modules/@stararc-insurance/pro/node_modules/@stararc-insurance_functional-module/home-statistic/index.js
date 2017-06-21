"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.childRoutes = exports.route = exports.surveyReducer = exports.safeReducer = undefined;

var _safe = require("./model/safe/safe.reducer");

var _safe2 = _interopRequireDefault(_safe);

var _reducer = require("./model/survey/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _route = require("./route.js");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = require("./route/index.json");

exports.safeReducer = _safe2.default;
exports.surveyReducer = _reducer2.default;
exports.route = route;
exports.childRoutes = _route2.default;