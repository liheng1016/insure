'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonRequest = require('../../../../helper/commonRequest');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploadUrl = "http://192.168.1.200:86/";
var mediaRequest = {
    upload: function upload(params) {
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
        /*********************/

        // let path =uploadUrl+ 'upload/index';

        //       return fetch(path, {
        //           method: 'PUT',
        //           body: params 
        //       }).then(function (response) {
        //           return response.json();
        //       });
    }
};
exports.default = mediaRequest;