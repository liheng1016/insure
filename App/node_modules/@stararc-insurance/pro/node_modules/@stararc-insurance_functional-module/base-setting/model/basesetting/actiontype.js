'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('BASESETTING_ACTION_TYPE');
var BASESETTING_ACTION_TYPE = {
	DETAIL: handle.createRequestActionType('DETAIL'),
	MODIFY: handle.createRequestActionType('MODIFY'),
	UPLOAD: handle.createRequestActionType('UPLOAD')
};

exports.default = BASESETTING_ACTION_TYPE;