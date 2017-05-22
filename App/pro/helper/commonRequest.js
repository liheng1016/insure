'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by able on 2016/5/20 0020.
                                                                                                                                                                                                                                                                               */


exports.default = commonRequest;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commonRequest(path) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    path = PATH_PREFIX + path;

    if (process.env.NODE_ENV != 'production') {
        path = LOCAL_DOMAIN + path;
    }
    var m = method.toUpperCase();
    var opts = {
        method: m,
        headers: headers || {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: 'include'
    };
    if (m !== 'GET') {
        opts.body = !headers ? objToUrlString(data) : data;
    }

    var p = m === 'GET' ? path + '?' + objToUrlString(data) : path;

    return (0, _isomorphicFetch2.default)(p, opts).then(function (response) {
        var r = '';
        try {
            r = response.json();
        } catch (e) {
            r = {
                msg: e
            };
        }

        return r;
    }, function (err) {
        return { 'ret': '-1', 'msg': '网络连接失败!', error: err };
    });
}

/**
 * 将参数对象转为url字符串
 * @param obj
 * @returns {string}
 */
function objToUrlString(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        new Error('params expect an object, but got an ' + (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)));
        return;
    }
    var result = '';
    for (var n in obj) {
        if (obj.hasOwnProperty(n)) {
            if (result != '') {
                result += '&';
            }
            result += n + '=' + obj[n];
        }
    }
    return result;
}