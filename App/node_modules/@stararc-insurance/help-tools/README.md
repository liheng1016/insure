### 保险产品 常用的一些小方法

>转换字符串，时间格式化，深copy等

>源码位置：@stararc-insurance/core/helpTools

```
export function timeToString(time, format) {
    let localTimeString = new Date(time * 1000).toLocaleString()
    let tmpArr = localTimeString.match(/\d{1,4}/g);
    tmpArr[3] = /上午/.test(localTimeString) ? tmpArr[3] : 12 + Number(tmpArr[3]);
    return tmpArr[0] + '年' + tmpArr[1] + '月' + tmpArr[2] + '日 ' + tmpArr[3] + ':' + tmpArr[4];
}

export function toBr(text) {
    return text.replace(/\n/g, '<br/>');
}


export function getFormatData(timestamp, format,) {
    if (!timestamp) {
        return;
    }
    let f = format || '-';

    timestamp = timestamp * 1000;

    let time = new Date(timestamp);

    let Y = getYear(time);
    let M = getMonth(time) + 1 < 10 ? ('0' + (getMonth(time) + 1)) : getMonth(time) + 1;
    let D = getDay(time) < 10 ? ('0' + getDay(time)) : getDay(time);
    ;

    let h = getHours(time) + ':';
    let m = getMinutes(time) + ':';
    let s = getSeconds(time);


    return (Y + f + M + f + D)
}

export function getHoursMinutes(timestamp, format) {
    let f = format || ':';
    timestamp = Number(timestamp) * 1000;
    let time = new Date(timestamp);
    let h = getHours(time) < 10 ? '0' + getHours(time) : getHours(time);
    let m = getMinutes(time) < 10 ? '0' + getMinutes(time) : getMinutes(time);
    let s = getSeconds(time) < 10 ? '0' + getSeconds(time) : getSeconds(time);
    return h + f + m + f + s;
}

export function getWeekend(timestamp) {
    timestamp = timestamp * 1000;
    let time = new Date(timestamp);

    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    return weeks[getWeek(time)];

}

export function getYear(time) {
    return time.getFullYear();
}

export function getMonth(time) {
    return time.getMonth();
}

export function getDay(time) {
    return time.getDate();
}

export function getHours(time) {
    return time.getHours();
}

export function getMinutes(time) {
    return time.getMinutes();
}

export function getSeconds(time) {
    return time.getSeconds();
}

export function getWeek(time) {
    return time.getDay();
}

export function checkPhone(phoneNumber) {
    var regp = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return regp.test(phoneNumber.toString());
}

export function checkPassword(password) {
    var regp = /^[\da-zA-z]{6,12}$/;
    return regp.test(password.toString());
}

/**
 * 解决在开发环境和生产环境由于使用的路由模式不一致导致的链接问题
 * @param link
 * @returns {string}
 * @author Able
 */
export function safeLink(link) {
    return process.env.NODE_ENV === 'production' ? link : '#' + link;
}

/**
 * 截取字符串
 * @date   2016-10-21T12:15:12+0800
 * @author liheng
 */
export function limitLen(str, len = 15) {
    let length = len;
    let sl = str && str.length || 0;

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
export function safeStr(str) {
    if (typeof str === 'undefined' || str === null) {
        str = '';
    }
    return str;
}

export function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * 过滤路由获取菜单参数
 * @date   2016-12-28T14:40:26+0800
 * @author liheng
 * @param  {Object}                 item [description]
 * @param  {Array}                  menu [description]
 */
export function filterRouteMenu(item={}){
    let menu=[],subs=[];
    let childMenu = {
        name:item.name,
        path:item.path,
        icon:item.icon,
        icon_active:item.icon_active
    };
    if(item.childRoutes && item.childRoutes.length){
        item.childRoutes.map((sub)=>{
            subs.push({
                name:sub.name,
                path:sub.path
            })
        })

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
export function getFirstAndLastDay(time,format="-",isAdd) {
    let timeArr = time.split(format);
    
    let month = isAdd ? Number(timeArr[1])+1 : timeArr[1];

    let newTime = new Date(timeArr[0],timeArr[1],0);

    return {
        since_at:[timeArr[0],timeArr[1],1].join(format),
        max_at:[timeArr[0],timeArr[1],newTime.getDate()].join(format)
    }    
}

/**
 * 深拷贝 dedpCopy
 * @date   2017-01-19T10:05:57+0800
 * @author liheng
 * @param  {[type]}                 params [description]
 */
export function deepCopy (params){
    let type = typeof(params);
    let newParams="";    

    if(type == "object"){
        newParams=JSON.stringify(params);
        newParams = JSON.parse(newParams);
    }else{
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
export function getFormatDay(time,type,format="-"){
    switch(type){
        case "f":
            return  getYear(time)+format+(getMonth(time)+1)+format+'1';
        case "c":
            return  getFormatData(time/1000);    
        case "l":
            let days =new Date(getYear(time),(getMonth(time)+1),0);

            return getYear(time)+format+(getMonth(time)+1)+format+days.getDate();
    }
 }
```
