'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('ACCEPTINSUR_ACTION_TYPE');
var ACCEPTINSUR_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	APPROVAL: handle.createRequestActionType('APPROVAL'),
	GUARANTEE: handle.createRequestActionType('GUARANTEE'),
	TOEXAMINE: handle.createRequestActionType('TOEXAMINE'),
	INSUR_LIST: handle.createRequestActionType('INSUR_LIST')

};

exports.default = ACCEPTINSUR_ACTION_TYPE;