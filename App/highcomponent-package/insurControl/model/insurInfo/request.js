'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insurInfoRequest = {
	list: function list(params) {
		return (0, _commonRequest2.default)('/InsurInfo/getList', params, 'get');
	},
	grid_list: function grid_list(params) {
		return (0, _commonRequest2.default)('/Grid/get_sub_list', params, 'get');
	},
	industry_list: function industry_list(params) {
		return (0, _commonRequest2.default)('/Industry/getIndustryList', params, 'get');
	},
	create_insur: function create_insur(params) {
		return (0, _commonRequest2.default)('/InsurInfo/create_insur_info', params, 'get');
	},
	update_insur: function update_insur(params) {
		return (0, _commonRequest2.default)('/InsurInfo/update_insur_info', params, 'get');
	},
	detail: function detail(params) {
		return (0, _commonRequest2.default)('/InsurInfo/get_detail', params, 'get');
	},
	company_list: function company_list(params) {
		return (0, _commonRequest2.default)('/Company/get_company_list', params, 'get');
	},
	get_accept_company: function get_accept_company(params) {
		return (0, _commonRequest2.default)('/Company/get_accept_company', params, 'get');
	},
	get_apply_number: function get_apply_number(params) {
		return (0, _commonRequest2.default)('/InsurInfo/get_apply_number', params, 'get');
	},
	get_insur_product: function get_insur_product(params) {
		return (0, _commonRequest2.default)('/InsurProduct/get_insur_product', params, 'get');
	},
	upload: function upload(params) {
		var path = '/Media/upload';

		if (process.env.NODE_ENV != 'production') {
			path = LOCAL_DOMAIN + path;
		}
		path = PATH_PREFIX + path;

		return fetch(path, {
			method: 'POST',
			body: params,
			credentials: 'include'

		}).then(function (response) {
			return response.json();
		});
	}
};
exports.default = insurInfoRequest;