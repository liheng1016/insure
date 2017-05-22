'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypeHandle = require('../../../../helper/ActionTypeHandle');

var _ActionTypeHandle2 = _interopRequireDefault(_ActionTypeHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = new _ActionTypeHandle2.default('GRID_ACTION_TYPE');
var GRID_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST')
};

exports.default = GRID_ACTION_TYPE;