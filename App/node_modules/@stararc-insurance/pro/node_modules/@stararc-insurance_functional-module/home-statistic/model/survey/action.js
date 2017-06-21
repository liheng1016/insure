'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surveyAction = {
	list: function list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.LIST, _request2.default.list, params);
	},
	getdetail: function getdetail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.GETDETAIL, _request2.default.getdetail, params);
	}
};

exports.default = surveyAction;