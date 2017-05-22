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

var claimAction = {
	list: function list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.LIST, _request2.default.list, params);
	},
	detail: function detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.DETAIL, _request2.default.detail, params);
	},
	create: function create() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.CREATE, _request2.default.create, params);
	},
	update: function update() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.UPDATE, _request2.default.update, params);
	},
	get_insur_company: function get_insur_company() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GET_INSUR_COMPANY, _request2.default.get_insur_company, params);
	},
	get_accident_types: function get_accident_types() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.GET_ACCIDENT_TYPES, _request2.default.get_accident_types, params);
	},
	// 理赔的创建附件上传
	upload_claim: function upload_claim() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var type = arguments[1];


		return (0, _actionHandle.requestHandle)(_actiontype2.default.UPLOAD_CLAIM, _request2.default.upload_claim, params, type);
	},
	delete_claim: function delete_claim() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return function (dispatch) {
			return dispatch({
				type: _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA,
				data: params
			});
		};
	}
};

exports.default = claimAction;