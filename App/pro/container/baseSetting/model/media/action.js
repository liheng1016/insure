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
	}
};

exports.default = mediaAction;