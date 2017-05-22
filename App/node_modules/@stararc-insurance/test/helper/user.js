'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CookieFromServer = undefined;
exports.convertCookieToObj = convertCookieToObj;
exports.getCookieFromServer = getCookieFromServer;
exports.updateCookie = updateCookie;

var _wheelAes = require('wheel-aes');

var _wheelAes2 = _interopRequireDefault(_wheelAes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {AES_KEY, AES_IV} from '../config';
// import {getCookieRequest} from '../request/loginRequest';
var CookieFromServer = {
    cookie: convertCookieToObj(),
    getPassword: function getPassword() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'password';

        var password = this.cookie[key];
        // let aesObj = new Aes(AES_KEY, AES_IV);
        // return password ? aesObj.decrypt(password) : '';
    },
    getValue: function getValue(key) {
        return this.cookie[key] || '';
    }
}; /**
    * Created by able on 2016/10/13 0013.
    */
function convertCookieToObj() {
    var cookie = document.cookie;
    var tmp = cookie.split('; ');
    var cookieObj = {};
    tmp.forEach(function (str) {
        var index = str.indexOf('=');
        var key = str.slice(0, index);
        var value = str.slice(index + 1);
        cookieObj[key] = decodeURI(value);
    });

    return cookieObj;
}
function getCookieFromServer() {
    if (process.env.NODE_ENV !== 'production') {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000);
        getCookieRequest().then(function (cookie) {
            for (var n in cookie) {
                if (cookie.hasOwnProperty(n)) {
                    document.cookie = n + '=' + cookie[n] + '; expires=' + exdate + '; path=/';
                }
            }
        });
    }
}

function updateCookie() {
    CookieFromServer.cookie = convertCookieToObj();
}
exports.CookieFromServer = CookieFromServer;