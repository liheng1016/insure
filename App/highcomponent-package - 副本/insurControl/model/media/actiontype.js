'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('MEDIA_ACTION_TYPE');
var MEDIA_ACTION_TYPE = {
	UPLOAD: handle.createRequestActionType('UPLOAD'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH'),
	UPLOAD_INSUR: handle.createRequestActionType('UPLOAD_INSUR')
};

exports.default = MEDIA_ACTION_TYPE;