'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var claimRequest = {
	list: function list(params) {
		return (0, _commonRequest2.default)('/Claim/getList', params, 'get');
	},
	detail: function detail(params) {
		return (0, _commonRequest2.default)('/Claim/detail', params, 'get');
	},
	create: function create(params) {
		return (0, _commonRequest2.default)('/Claim/create', params, 'get');
	},
	update: function update(params) {
		return (0, _commonRequest2.default)('/Claim/update', params, 'get');
	},
	get_insur_company: function get_insur_company(params) {
		return (0, _commonRequest2.default)('/InsurInfo/getList', params, 'get');
	},
	get_accident_types: function get_accident_types(params) {
		return (0, _commonRequest2.default)('/Accident/get_accident_list', params, 'get');
	},
	upload_claim: function upload_claim(params) {
		var path = '/Media/upload';

		if (process.env.NODE_ENV != 'production') {
			path = LOCAL_DOMAIN + path;
		}

		path = PATH_PREFIX + path;

		return fetch(path, {
			method: 'POST',
			body: params
		}).then(function (response) {
			return response.json();
		});
	}
};

exports.default = claimRequest;