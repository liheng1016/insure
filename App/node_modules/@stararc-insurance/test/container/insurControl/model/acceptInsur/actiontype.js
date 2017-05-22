'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('ACCEPTINSUR_ACTION_TYPE');
var ACCEPTINSUR_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	APPROVAL: handle.createRequestActionType('APPROVAL'),
	GUARANTEE: handle.createRequestActionType('GUARANTEE'),
	TOEXAMINE: handle.createRequestActionType('TOEXAMINE'),
	INSUR_LIST: handle.createRequestActionType('INSUR_LIST')

};

exports.default = ACCEPTINSUR_ACTION_TYPE;