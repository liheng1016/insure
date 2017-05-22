'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('SURVEY_ACTION_TYPE');
var SURVEY_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	GETDETAIL: handle.createRequestActionType('GETDETAIL')
};

exports.default = SURVEY_ACTION_TYPE;