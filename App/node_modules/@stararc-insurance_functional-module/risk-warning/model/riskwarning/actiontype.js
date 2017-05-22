'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('RISKWARNING_ACTION_TYPE');
var RISKWARNING_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	ADD: handle.createRequestActionType('ADD'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	VERIFY_PASSWORD: handle.createRequestActionType('VERIFY_PASSWORD'),
	DELETE: handle.createActionActionType('DELETE'),
	// 附件部分
	UPLOAD: handle.createRequestActionType('UPLOAD'),
	MEDIA: handle.createRequestActionType('MEDIA'),
	DELETE_MEDIA: handle.createRequestActionType('DELETE_MEDIA'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH'),
	UNMOUNT_ATTACHMENT: handle.createRequestActionType('UNMOUNT_ATTACHMENT')
};

exports.default = RISKWARNING_ACTION_TYPE;