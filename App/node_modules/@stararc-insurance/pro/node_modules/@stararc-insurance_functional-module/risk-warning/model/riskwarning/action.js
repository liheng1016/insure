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

var riskwarningAction = {
	list: function list() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.LIST, _request2.default.list, params);
	},
	add: function add() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.ADD, _request2.default.add, params);
	},
	detail: function detail() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.DETAIL, _request2.default.detail, params);
	},
	verify_password: function verify_password() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.VERIFY_PASSWORD, _request2.default.verify_password, params);
	},
	delete: function _delete() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var onSuccess = function onSuccess(result, dispatch, getState) {
			if (result.ret == 0) {
				alert("删除成功！");
				location.reload();
				// location.href="#/riskwarning";
			}
		};

		var onFail = function onFail(result, dispatch, getState) {
			alert("删除失败:" + result.msg);
		};

		return (0, _reduxBuildTools.actionHandle)(_actiontype2.default.DELETE, _request2.default.delete, params, onSuccess, onFail);
	},
	// 附件
	upload: function upload() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.UPLOAD, _request2.default.upload, params);
	},
	// 多媒体信息
	media: function media() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.MEDIA, _request2.default.media, params);
	},
	// 删除多媒体信息
	delete_media: function delete_media() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return function (dispatch) {
			return dispatch({
				type: _actiontype2.default.DELETE_MEDIA.RECEIVE_DATA,
				data: params
			});
		};
	},
	// 删除附件
	delete_attach: function delete_attach() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return function (dispatch) {
			return dispatch({
				type: _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA,
				data: params
			});
		};
	},
	unmount_attachment: function unmount_attachment() {
		return function (dispatch) {
			return dispatch({
				type: _actiontype2.default.UNMOUNT_ATTACHMENT.RECEIVE_DATA,
				msg: "卸载附件相关信息"
			});
		};
	}
};

exports.default = riskwarningAction;