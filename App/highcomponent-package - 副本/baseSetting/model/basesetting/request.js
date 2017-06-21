'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
			body: params
		}).then(function (response) {
			return response.json();
		});
	}
};
exports.default = basesettingRequest;