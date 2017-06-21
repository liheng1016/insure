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

var acceptInsurAction = {
	list: function list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.LIST, _request2.default.list, params);
	},
	detail: function detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.DETAIL, _request2.default.detail, params);
	},
	// 审核
	approval: function approval() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.APPROVAL, _request2.default.approval, params);
	},
	//更多的保障信息
	guarantee: function guarantee() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.GUARANTEE, _request2.default.guarantee, params);
	},
	// 更多的理赔信息
	toexamine: function toexamine() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.TOEXAMINE, _request2.default.toexamine, params);
	},
	// 投保申请列表
	insur_list: function insur_list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.INSUR_LIST, _request2.default.insur_list, params);
	}
};

exports.default = acceptInsurAction;