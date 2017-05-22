'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('CLAIM_ACTION_TYPE');
var CLAIM_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	CREATE: handle.createRequestActionType('CREATE'),
	UPDATE: handle.createRequestActionType('UPDATE'),
	GET_INSUR_COMPANY: handle.createRequestActionType('GET_INSUR_COMPANY'),
	GET_ACCIDENT_TYPES: handle.createRequestActionType('GET_ACCIDENT_TYPES'),
	UPLOAD_CLAIM: handle.createRequestActionType('UPLOAD_CLAIM'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH'),
	UNMOUT_CLAIM_DETAIL: handle.createRequestActionType('UNMOUT_CLAIM_DETAIL')

};

exports.default = CLAIM_ACTION_TYPE;