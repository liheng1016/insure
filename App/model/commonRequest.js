/**
 * Created by able on 2016/5/20 0020.
 */
import fetch from 'isomorphic-fetch';
export default function commonRequest(path, data = {}, method = 'GET', headers = null) {
    if (process.env.NODE_ENV != 'production') {
        path = LOCAL_DOMAIN + path;
    }
    let m = method.toUpperCase();
    let opts = {
        method: m,
        headers: headers || {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: 'include'
    };
    if (m !== 'GET') {
        opts.body = !headers ? objToUrlString(data) : data;
    }

    let p = m === 'GET' ? path + '?' + objToUrlString(data) : path;

    return fetch(p, opts).then(function (response) {
        let r = '';
        try {
            r = response.json();
        } catch (e) {
            r = {
                msg: e
            };
        }
        return r;
    }, function (err) {
        return {'ret': '-1', 'msg': '网络连接失败!', error: err};
    });
}

/**
 * 将参数对象转为url字符串
 * @param obj
 * @returns {string}
 */
function objToUrlString(obj) {
    if (typeof obj !== 'object') {
        new Error('params expect an object, but got an ' + typeof obj);
        return;
    }
    let result = '';
    for (let n in obj) {
        if (obj.hasOwnProperty(n)) {
            if (result != '') {
                result += '&';
            }
            result += n + '=' + obj[n];
        }
    }
    return result;
}