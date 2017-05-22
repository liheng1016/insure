'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonRequest = require('../../../../helper/commonRequest');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gridRequest = {
	list: function list(params) {
		return (0, _commonRequest2.default)('/Grid/getList', params, 'get');
	}
};
exports.default = gridRequest;