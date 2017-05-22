'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.timeToString = timeToString;
exports.toBr = toBr;
exports.getFormatData = getFormatData;
exports.getHoursMinutes = getHoursMinutes;
exports.getWeekend = getWeekend;
exports.getYear = getYear;
exports.getMonth = getMonth;
exports.getDay = getDay;
exports.getHours = getHours;
exports.getMinutes = getMinutes;
exports.getSeconds = getSeconds;
exports.getWeek = getWeek;
exports.checkPhone = checkPhone;
exports.checkPassword = checkPassword;
exports.safeLink = safeLink;
exports.limitLen = limitLen;
exports.safeStr = safeStr;
exports.isArray = isArray;
exports.filterRouteMenu = filterRouteMenu;
exports.getFirstAndLastDay = getFirstAndLastDay;
exports.deepCopy = deepCopy;
exports.getFormatDay = getFormatDay;
function timeToString(time, format) {
    var localTimeString = new Date(time * 1000).toLocaleString();
    var tmpArr = localTimeString.match(/\d{1,4}/g);
    tmpArr[3] = /上午/.test(localTimeString) ? tmpArr[3] : 12 + Number(tmpArr[3]);
    return tmpArr[0] + '年' + tmpArr[1] + '月' + tmpArr[2] + '日 ' + tmpArr[3] + ':' + tmpArr[4];
}

function toBr(text) {
    return text.replace(/\n/g, '<br/>');
}

function getFormatData(timestamp, format) {
    if (!timestamp) {
        return;
    }
    var f = format || '-';

    timestamp = timestamp * 1000;

    var time = new Date(timestamp);

    var Y = getYear(time);
    var M = getMonth(time) + 1 < 10 ? '0' + (getMonth(time) + 1) : getMonth(time) + 1;
    var D = getDay(time) < 10 ? '0' + getDay(time) : getDay(time);
    ;

    var h = getHours(time) + ':';
    var m = getMinutes(time) + ':';
    var s = getSeconds(time);

    return Y + f + M + f + D;
}

function getHoursMinutes(timestamp, format) {
    var f = format || ':';
    timestamp = Number(timestamp) * 1000;
    var time = new Date(timestamp);
    var h = getHours(time) < 10 ? '0' + getHours(time) : getHours(time);
    var m = getMinutes(time) < 10 ? '0' + getMinutes(time) : getMinutes(time);
    var s = getSeconds(time) < 10 ? '0' + getSeconds(time) : getSeconds(time);
    return h + f + m + f + s;
}

function getWeekend(timestamp) {
    timestamp = timestamp * 1000;
    var time = new Date(timestamp);

    var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    return weeks[getWeek(time)];
}

function getYear(time) {
    return time.getFullYear();
}

function getMonth(time) {
    return time.getMonth();
}

function getDay(time) {
    return time.getDate();
}

function getHours(time) {
    return time.getHours();
}

function getMinutes(time) {
    return time.getMinutes();
}

function getSeconds(time) {
    return time.getSeconds();
}

function getWeek(time) {
    return time.getDay();
}

function checkPhone(phoneNumber) {
    var regp = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return regp.test(phoneNumber.toString());
}

function checkPassword(password) {
    var regp = /^[\da-zA-z]{6,12}$/;
    return regp.test(password.toString());
}

/**
 * 解决在开发环境和生产环境由于使用的路由模式不一致导致的链接问题
 * @param link
 * @returns {string}
 * @author Able
 */
function safeLink(link) {
    return process.env.NODE_ENV === 'production' ? link : '#' + link;
}

/**
 * 截取字符串
 * @date   2016-10-21T12:15:12+0800
 * @author liheng
 */
function limitLen(str) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;

    var length = len;
    var sl = str && str.length || 0;

    if (sl <= length) {
        return str;
    } else {
        return str.substr(0, len) + '...';
    }
}

/**
 * 将null值转为空字符串
 * @param str
 * @returns {*}
 * @author Able
 */
function safeStr(str) {
    if (typeof str === 'undefined' || str === null) {
        str = '';
    }
    return str;
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * 过滤路由获取菜单参数
 * @date   2016-12-28T14:40:26+0800
 * @author liheng
 * @param  {Object}                 item [description]
 * @param  {Array}                  menu [description]
 */
function filterRouteMenu() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var menu = [],
        subs = [];
    var childMenu = {
        name: item.name,
        path: item.path,
        icon: item.icon,
        icon_active: item.icon_active
    };
    if (item.childRoutes && item.childRoutes.length) {
        item.childRoutes.map(function (sub) {
            subs.push({
                name: sub.name,
                path: sub.path
            });
        });

        childMenu.subs = subs;
    }
    return childMenu;
}

/**
 * 格式化时间返回月份起始值
 * @date   2017-01-13T11:30:40+0800
 * @author liheng
 * @param  {[type]}                 argument [description]
 */
function getFirstAndLastDay(time) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
    var isAdd = arguments[2];

    var timeArr = time.split(format);

    var month = isAdd ? Number(timeArr[1]) + 1 : timeArr[1];

    var newTime = new Date(timeArr[0], timeArr[1], 0);

    return {
        since_at: [timeArr[0], timeArr[1], 1].join(format),
        max_at: [timeArr[0], timeArr[1], newTime.getDate()].join(format)
    };
}

/**
 * 深拷贝 dedpCopy
 * @date   2017-01-19T10:05:57+0800
 * @author liheng
 * @param  {[type]}                 params [description]
 */
function deepCopy(params) {
    var type = typeof params === 'undefined' ? 'undefined' : _typeof(params);
    var newParams = "";

    if (type == "object") {
        newParams = JSON.stringify(params);
        newParams = JSON.parse(newParams);
    } else {
        newParams = params;
    }

    return newParams;
}

/**
 * 获取给定时间戳的第一天，当天，最后一天格式化数据
 * @date   2017-01-24T10:19:54+0800
 * @author liheng
 * @param  {[type]}                 time [description]
 * @param  {[type]}                 type [description]
 */
function getFormatDay(time, type) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "-";

    switch (type) {
        case "f":
            return getYear(time) + format + (getMonth(time) + 1) + format + '1';
        case "c":
            return getFormatData(time / 1000);
        case "l":
            var days = new Date(getYear(time), getMonth(time) + 1, 0);

            return getYear(time) + format + (getMonth(time) + 1) + format + days.getDate();
    }
}

