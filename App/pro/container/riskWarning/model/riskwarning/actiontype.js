'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('RISKWARNING_ACTION_TYPE');
var RISKWARNING_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	ADD: handle.createRequestActionType('ADD'),
	DETAIL: handle.createRequestActionType('DETAIL'),
	VERIFY_PASSWORD: handle.createRequestActionType('VERIFY_PASSWORD'),
	DELETE: handle.createActionActionType('DELETE'),
	// 附件部分
	UPLOAD: handle.createRequestActionType('UPLOAD'),
	MEDIA: handle.createRequestActionType('MEDIA'),
	DELETE_MEDIA: handle.createRequestActionType('DELETE_MEDIA'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH'),
	UNMOUNT_ATTACHMENT: handle.createRequestActionType('UNMOUNT_ATTACHMENT')
};

exports.default = RISKWARNING_ACTION_TYPE;