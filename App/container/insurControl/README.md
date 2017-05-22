###保险 承保管理功能块

>des 对外暴露路由，数据存储状态

>该模块的默认入口是/acceptInsur

```
import acceptInsurReducer from "./model/acceptInsur/reducer";

import insurInfoReducer from "./model/insurInfo/reducer";

import insurUploadReducer from "./model/media/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
    acceptInsurReducer,
    insurInfoReducer,
    insurUploadReducer,
    route,
    childRoutes
}

```
###以下是路由部分

```
{
    "name":"insue",
    "label":"承保管理",
    "path":"/acceptInsur",
    "module_path":"",
    "indexRoute":"/insuranceInformation",
    "level":2,
    "subs":[{
        "name":"insue/insuranceInformation",
        "label":"投保申请",
        "path":"/insuranceInformation",
        "module_path":"/insuranceInformation/list/insuranceInformation.js",
        "level":3,
        "subs":[]
    },{
        "name":"insue/insuranceInformation",
        "label":"投保详情",
        "path":"/insuranceInformation/detail/:id",
        "module_path":"/insuranceInformation/detail/detail.js",
        "level":3,
        "not_show":true,
        "subs":[]
    },{
        "name":"insue/acceptInsurance",
        "label":"承保信息",
        "path":"/acceptInsurance",
        "module_path":"/acceptInsurance/list/acceptinsurance.js",
        "level":3,
        "subs":[]
    },{
        "name":"insue/acceptInsurance",
        "label":"承保保单创建",
        "path":"/acceptInsurance/add",
        "module_path":"/acceptInsurance/add/add.js",
        "not_show":true,
        "level":3,
        "subs":[]
    },{
        "name":"insue/acceptInsurance",
        "label":"承保详情",
        "path":"/acceptInsurance/detail/:id",
        "module_path":"/acceptInsurance/detail/detail.js",
        "not_show":true,
        "level":3,
        "subs":[]
    },{
        "name":"insue/acceptInsurance",
        "label":"承保编辑",
        "path":"/acceptInsurance/edit/:id",
        "module_path":"/acceptInsurance/edit/edit.js",
        "level":3,
        "not_show":true,
        "subs":[]
    }]
}    
```