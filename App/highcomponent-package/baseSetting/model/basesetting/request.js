'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basesettingRequest = {
	detail: function detail(params) {
		return (0, _commonRequest2.default)('/Basesetting/get_detail', params, 'get');
	},
	modify: function modify(params) {
		return (0, _commonRequest2.default)('/Basesetting/modify_organ', params, 'get');
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

var productRequest = {
	product_list: function product_list(params) {
		return (0, _commonRequest2.default)('/InsurProduct/get_insur_product', params, 'get');
	},
	product_add: function product_add(params) {
		return (0, _commonRequest2.default)('/InsurProduct/product_add', params, 'get');
	},
	product_detail: function product_detail(params) {
		return (0, _commonRequest2.default)('/InsurProduct/product_detail', params, 'get');
	},
	product_forbidden: function product_forbidden(params) {
		return (0, _commonRequest2.default)('/InsurProduct/product_forbidden', params, 'get');
	},
	get_insur_company: function get_insur_company(params) {
		return (0, _commonRequest2.default)('/InsurProduct/get_accept_company', params, 'get');
	},
	get_authorized_area: function get_authorized_area(params) {
		return (0, _commonRequest2.default)('/Grid/getList', params, 'get');
	}
};

exports.default = _extends({}, basesettingRequest, productRequest);