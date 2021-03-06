'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var riskwarningRequest = {
  list: function list(params) {
    return (0, _commonRequest2.default)('/Riskwarning/getRiskList', params, 'get');
  },
  add: function add(params) {
    return (0, _commonRequest2.default)('/Riskwarning/addRisk', params, 'get');
  },
  detail: function detail(params) {
    return (0, _commonRequest2.default)('/Riskwarning/detail', params, 'get');
  },
  delete: function _delete(params) {
    return (0, _commonRequest2.default)('/Riskwarning/deleteRisk', params, 'get');
  },
  verify_password: function verify_password(params) {
    return (0, _commonRequest2.default)('/Riskwarning/verifyPassword', params, 'get');
  },
  // 上传
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
  },
  media: function media(params) {
    var path = '/Media/upload';

    if (process.env.NODE_ENV != 'production') {
      path = LOCAL_DOMAIN + path;
    }

    return fetch(path, {
      method: 'POST',
      body: params
    }).then(function (response) {
      return response.json();
    });
  }
};
exports.default = riskwarningRequest;