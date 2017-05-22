'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonRequest = require('../../../../helper/commonRequest');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acceptInsurRequest = {
	list: function list(params) {
		return (0, _commonRequest2.default)('/AcceptInsur/getList', params, 'get');
	},
	detail: function detail(params) {
		return (0, _commonRequest2.default)('/AcceptInsur/detail', params, 'get');
	},
	approval: function approval(params) {
		return (0, _commonRequest2.default)('/AcceptInsur/approval', params, 'get');
	},
	guarantee: function guarantee(params) {
		return (0, _commonRequest2.default)('/InsurInfo/getList', params, 'get');
	},
	toexamine: function toexamine(params) {
		return (0, _commonRequest2.default)('/Claim/getList', params, 'get');
	},
	insur_list: function insur_list(params) {
		return (0, _commonRequest2.default)('/AcceptInsur/get_insur_list', params, 'get');
	}

};
exports.default = acceptInsurRequest;