/**
 * Created by able on 2016/10/13 0013.
 */
import Aes from 'wheel-aes';
// import {AES_KEY, AES_IV} from '../config';
// import {getCookieRequest} from '../request/loginRequest';
var CookieFromServer = {
    cookie: convertCookieToObj(),
    getPassword: function (key = 'password') {
        let password = this.cookie[key];
        // let aesObj = new Aes(AES_KEY, AES_IV);
        // return password ? aesObj.decrypt(password) : '';
    },
    getValue: function (key) {
        return this.cookie[key] || '';
    }
}


export function convertCookieToObj() {
    let cookie = document.cookie;
    let tmp = cookie.split('; ');
    let cookieObj = {};
    tmp.forEach(function (str) {
        let index = str.indexOf('=');
        let key = str.slice(0, index);
        let value = str.slice(index + 1);
        cookieObj[key] = decodeURI(value);
    })


    return cookieObj;

}
export function getCookieFromServer() {
    if (process.env.NODE_ENV !== 'production') {
        let exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000);
        getCookieRequest().then(cookie=> {
            for (let n in cookie) {
                if (cookie.hasOwnProperty(n)) {
                    document.cookie = n + '=' + cookie[n] + '; expires=' + exdate + '; path=/';
                }
            }

        })
    }
}

export function updateCookie() {
    CookieFromServer.cookie = convertCookieToObj();
}
export {
    CookieFromServer
}
