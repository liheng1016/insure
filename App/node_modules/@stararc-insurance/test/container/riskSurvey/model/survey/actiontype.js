'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('SURVEY_ACTION_TYPE');
var SURVEY_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST'),
	GETDETAIL: handle.createRequestActionType('GETDETAIL')
};

exports.default = SURVEY_ACTION_TYPE;