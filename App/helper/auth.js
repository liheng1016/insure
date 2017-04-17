/**
 * Created by able on 2016/10/14 0014.
 */
import {CookieFromServer} from './user';
let authJson = require('./auth.json');
var Auth = {
    routeAuth: function (nextState, replace) {
        let {params, location} = nextState;
        let nextPath = location.pathname;
        for (let key in params) {
            nextPath = nextPath.replace(params[key], ':' + key);
        }
        let role = CookieFromServer.getValue('role');
        let token = CookieFromServer.getValue('token');
        if (!token) {
            replace('/');
        } else {
            let isAvailable = getAuthByPath(nextPath, Number(role));
            if (!isAvailable) {
                replace('/404');
            }
        }
    },
    actionAuth: function (action) {

    },
    availableMenu: function (menus = []) {
        let role = CookieFromServer.getValue('role');
        let result = [];
        menus.forEach(function (m) {
            if (getAuthByPath(m.path, Number(role))) {
                result.push(m);
            }
        })
        return result;
    }

}

/**
 * 专家
 * @returns {boolean}
 */
function onlyForExport() {
    return true;
}

/**
 * 行政人员
 * @returns {boolean}
 */
function onlyForGov() {
    return true;
}

/**
 * 企业人员
 * @returns {boolean}
 */
function onlyForCompany() {
    return true;
}

/**
 * 专家&&行政人员
 * @returns {boolean}
 */
function exportAndGov() {
    return onlyForExport() && onlyForGov();
}

/**
 * 专家&&企业人员
 * @returns {boolean}
 */
function exportAndCompany() {
    return onlyForExport() && onlyForCompany();
}

/**
 * 根据path和role获取当前角色的访问权限
 */
export function getAuthByPath(path, role) {
    let route = authJson.route;
    let roles = [];
    let result = false;
    for (let i = 0, len = route.length; i < len; i++) {
        if (route[i].path === path) {
            roles = route[i].role;
            break;
        }
    }

    for (let j = 0, length = roles.length; j < length; j++) {
        if (roles[j] === role) {
            result = true;
            break;
        }
    }
    return result;
}
/**
 * 根据action和role获取角色的控制权限
 */
export function getAuthByAction() {

}
export default Auth;
