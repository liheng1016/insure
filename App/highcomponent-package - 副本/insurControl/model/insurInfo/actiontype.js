'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('INSURINFO_ACTION_TYPE');
var INSURINFO_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	GRID_LIST: handle.createRequestActionType('GRID_LIST'),
	INDUSTRY_LIST: handle.createRequestActionType('INDUSTRY_LIST'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	COMPANY_LIST: handle.createRequestActionType('COMPANY_LIST'),
	GET_ACCEPT_COMPANY: handle.createRequestActionType('GET_ACCEPT_COMPANY'),
	GET_APPLY_NUMBER: handle.createRequestActionType('GET_APPLY_NUMBER'),
	GET_INSUR_PRODUCT: handle.createRequestActionType('GET_INSUR_PRODUCT'),
	CREATE_INSUR: handle.createRequestActionType('CREATE_INSUR'),
	UPDATE_INSUR: handle.createRequestActionType('UPDATE_INSUR'),
	UPLOAD_INSUR: handle.createRequestActionType('UPLOAD_INSUR'),
	UNMOUT_UPLOAD_INSUR: handle.createRequestActionType('UNMOUT_UPLOAD_INSUR')
};

exports.default = INSURINFO_ACTION_TYPE;