'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('BASESETTING_ACTION_TYPE');
var BASESETTING_ACTION_TYPE = {
	DETAIL: handle.createRequestActionType('DETAIL'),
	MODIFY: handle.createRequestActionType('MODIFY'),
	UPLOAD: handle.createRequestActionType('UPLOAD')
};

exports.default = BASESETTING_ACTION_TYPE;