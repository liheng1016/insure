'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surveyRequest = {
	list: function list(params) {
		return (0, _commonRequest2.default)('/Survey/getList', params, 'get');
	},
	getdetail: function getdetail(params) {
		return (0, _commonRequest2.default)('/Survey/detail', params, 'get');
	}
};
exports.default = surveyRequest;