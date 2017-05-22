'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAuthByPath = getAuthByPath;
exports.getAuthByAction = getAuthByAction;

var _user = require('./user');

var authJson = require('./auth.json'); /**
                                        * Created by able on 2016/10/14 0014.
                                        */

var Auth = {
    routeAuth: function routeAuth(nextState, replace) {
        var params = nextState.params,
            location = nextState.location;

        var nextPath = location.pathname;
        for (var key in params) {
            nextPath = nextPath.replace(params[key], ':' + key);
        }
        var role = _user.CookieFromServer.getValue('role');
        var token = _user.CookieFromServer.getValue('token');
        if (!token) {
            replace('/');
        } else {
            var isAvailable = getAuthByPath(nextPath, Number(role));
            if (!isAvailable) {
                replace('/404');
            }
        }
    },
    actionAuth: function actionAuth(action) {},
    availableMenu: function availableMenu() {
        var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var role = _user.CookieFromServer.getValue('role');
        var result = [];
        menus.forEach(function (m) {
            if (getAuthByPath(m.path, Number(role))) {
                result.push(m);
            }
        });
        return result;
    }

};

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
function getAuthByPath(path, role) {
    var route = authJson.route;
    var roles = [];
    var result = false;
    for (var i = 0, len = route.length; i < len; i++) {
        if (route[i].path === path) {
            roles = route[i].role;
            break;
        }
    }

    for (var j = 0, length = roles.length; j < length; j++) {
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
function getAuthByAction() {}
exports.default = Auth;