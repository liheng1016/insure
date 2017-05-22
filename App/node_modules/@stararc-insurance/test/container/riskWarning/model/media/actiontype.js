'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('MEDIA_ACTION_TYPE');
var MEDIA_ACTION_TYPE = {
	UPLOAD: handle.createRequestActionType('UPLOAD'),
	MEDIA: handle.createRequestActionType('MEDIA'),
	DELETE_MEDIA: handle.createRequestActionType('DELETE_MEDIA'),
	DELETE_ATTACH: handle.createRequestActionType('DELETE_ATTACH')
};

exports.default = MEDIA_ACTION_TYPE;