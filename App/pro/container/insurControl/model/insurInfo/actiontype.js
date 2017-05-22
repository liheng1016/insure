'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('INSURINFO_ACTION_TYPE');
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