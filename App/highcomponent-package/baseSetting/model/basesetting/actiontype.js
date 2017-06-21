'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('BASESETTING_ACTION_TYPE');
var BASESETTING_ACTION_TYPE = {
	DETAIL: handle.createRequestActionType('DETAIL'),
	MODIFY: handle.createRequestActionType('MODIFY'),
	UPLOAD: handle.createRequestActionType('UPLOAD')
};

var PRODUCTOR_ACTION_TYPE = {
	PRODUCT_LIST: handle.createRequestActionType('PRODUCT_LIST'),
	PRODUCT_ADD: handle.createRequestActionType('PRODUCT_ADD'),
	PRODUCT_DETAIL: handle.createRequestActionType('PRODUCT_DETAIL'),
	PRODUCT_FORBIDDEN: handle.createRequestActionType('PRODUCT_FORBIDDEN'),
	GET_INSUR_COMPANY: handle.createRequestActionType('GET_INSUR_COMPANY'),
	GET_AUTHORIZED_AREA: handle.createRequestActionType('GET_AUTHORIZED_AREA'),
	UPLOAD_CLAUSECONTENT: handle.createRequestActionType('UPLOAD_CLAUSECONTENT')
};

exports.default = _extends({}, BASESETTING_ACTION_TYPE, PRODUCTOR_ACTION_TYPE);