'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('CLAIM_ACTION_TYPE');
var CLAIM_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	CREATE: handle.createRequestActionType('CREATE'),
	UPDATE: handle.createRequestActionType('UPDATE'),
	GET_INSUR_COMPANY: handle.createRequestActionType('GET_INSUR_COMPANY'),
	GET_ACCIDENT_TYPES: handle.createRequestActionType('GET_ACCIDENT_TYPES'),
	UPLOAD_CLAIM: handle.createRequestActionType('UPLOAD_CLAIM'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH')
};

exports.default = CLAIM_ACTION_TYPE;