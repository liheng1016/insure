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

exports.default = basesettingAction;