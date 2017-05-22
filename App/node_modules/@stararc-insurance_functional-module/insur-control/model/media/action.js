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

var mediaAction = {
	// 附件
	upload: function upload() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.UPLOAD, _request2.default.upload, params);
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
	// 承保保单的附件上传
	upload_insur: function upload_insur() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var type = arguments[1];

		return (0, _reduxBuildTools.requestHandle)(_actiontype2.default.UPLOAD_INSUR, _request2.default.upload, params, type);
	}
};

exports.default = mediaAction;