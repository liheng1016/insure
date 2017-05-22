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

var mediaAction = {
	// 附件
	upload: function upload() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.UPLOAD, _request2.default.upload, params);
	},
	// 多媒体信息
	media: function media() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return (0, _actionHandle.requestHandle)(_actiontype2.default.MEDIA, _request2.default.media, params);
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
		// return requestHandle(ACTION_TYPE.UPLOAD,MEDIA_REQUEST.upload,params);
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
	}
};

exports.default = mediaAction;