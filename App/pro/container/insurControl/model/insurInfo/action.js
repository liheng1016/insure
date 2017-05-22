'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

var _actionHandle = require('../../../../helper/actionHandle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insurInfoAction = {
	// 承保保单的列表
	list: function list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.LIST, _request2.default.list, params);
	},
	// 承保保单的详情
	detail: function detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.DETAIL, _request2.default.detail, params);
	},
	// 承保保单的创建
	create_insur: function create_insur() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.CREATE_INSUR, _request2.default.create_insur, params);
	},
	// 承保保单的编辑
	update_insur: function update_insur() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.UPDATE_INSUR, _request2.default.update_insur, params);
	},
	// 网格列表
	grid_list: function grid_list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GRID_LIST, _request2.default.grid_list, params);
	},
	// 企业行业类型
	industry_list: function industry_list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.INDUSTRY_LIST, _request2.default.industry_list, params);
	},
	// 获取企业列表
	company_list: function company_list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.COMPANY_LIST, _request2.default.company_list, params);
	},
	// 承保公司
	get_accept_company: function get_accept_company() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GET_ACCEPT_COMPANY, _request2.default.get_accept_company, params);
	},
	// 投保单号
	get_apply_number: function get_apply_number() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GET_APPLY_NUMBER, _request2.default.get_apply_number, params);
	},
	// 保险产品列表
	get_insur_product: function get_insur_product() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GET_INSUR_PRODUCT, _request2.default.get_insur_product, params);
	},
	// 承保保单的附件上传
	upload_insur: function upload_insur() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var type = arguments[1];

		return (0, _actionHandle.requestHandle)(_actiontype2.default.UPLOAD_INSUR, _request2.default.upload, params, type);
	},
	// 卸载附件里面包含的数据
	unmout_upload_insur: function unmout_upload_insur() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return function (dispatch) {
			return dispatch({
				type: _actiontype2.default.UNMOUT_UPLOAD_INSUR.RECEIVE_DATA,
				msg: "卸载附件里面包含的数据"
			});
		};
		// return requestHandle(ACTION_TYPE.UPLOAD_INSUR,INSURINFO_REQUEST.upload,params,type);
	}
};

exports.default = insurInfoAction;