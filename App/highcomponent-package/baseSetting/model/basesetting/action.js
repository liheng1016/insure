'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basesettingAction = {
	detail: function detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.DETAIL, _request2.default.detail, params);
	},
	modify: function modify() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.MODIFY, _request2.default.modify, params);
	},
	// 附件
	upload: function upload() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.UPLOAD, _request2.default.upload, params);
	}
};

// 保险产品
var insuranceProductAction = {
	// 产品列表
	product_list: function product_list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.PRODUCT_LIST, _request2.default.product_list, params);
	},
	// 产品添加
	product_add: function product_add() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.PRODUCT_ADD, _request2.default.product_add, params);
	},
	// 产品详情
	product_detail: function product_detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.PRODUCT_DETAIL, _request2.default.product_detail, params);
	},
	// 产品禁用
	product_forbidden: function product_forbidden() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.PRODUCT_FORBIDDEN, _request2.default.product_forbidden, params);
	},
	//获取保险经纪公司
	get_insur_company: function get_insur_company() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.GET_INSUR_COMPANY, _request2.default.get_insur_company, params);
	},
	//获取授权地区
	get_authorized_area: function get_authorized_area() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.GET_AUTHORIZED_AREA, _request2.default.get_authorized_area, params);
	},
	//上传条款附件
	upload_clausecontent: function upload_clausecontent() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.UPLOAD_CLAUSECONTENT, _request2.default.upload, params);
	}
};

exports.default = _extends({}, basesettingAction, insuranceProductAction);