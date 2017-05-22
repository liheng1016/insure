###保险 理赔管理功能块

>des 对外暴露路由，数据存储状态

>该模块的默认入口是/acceptInsur

```
import claimReducer from "./model/claim/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
    claimReducer,
    route,
    childRoutes
}

```
###以下是路由部分

```
{
    
    "name":"insue/claimManagement",
    "label":"理赔管理",
    "path":"/claimControl",
    "module_path":"",
    "indexRoute":"/claim",
    "level":2,
    "subs":[{ 
        "name":"insue/claimManagement",
        "label":"理赔管理",
        "path":"/claim",
        "indexRoute":"/claimManagement",
        "module_path":"",
        "level":2,
        "subs":[{
            "name":"insue/claimManagement",
            "label":"理赔列表",
            "path":"/claimManagement",
            "module_path":"/list/claimmanagement.js",
            "level":3,
            "subs":[]
        },{
            "name":"insue/claimManagement",
            "label":"理赔管理>>详情",
            "path":"/claimManagement/detail/:id",
            "module_path":"/detail/detail.js",
            "level":3,
            "not_show":true,
            "subs":[]
        },{
            "name":"insue/claimManagement",
            "label":"理赔管理>>编辑",
            "path":"/claimManagement/edit/:id",
            "module_path":"/edit/edit.js",
            "level":3,
            "not_show":true,
            "subs":[]
        },{
            "name":"insue/claimManagement",
            "label":"理赔管理>>创建",
            "path":"/claimManagement/add",
            "module_path":"/add/add.js",
            "level":3,
            "not_show":true,
            "subs":[]
        }]
    }]
}       
```