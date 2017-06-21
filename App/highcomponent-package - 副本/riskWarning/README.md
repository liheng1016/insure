###保险 风险警示功能块

>des 对外暴露路由，数据存储状态

>该模块的默认入口是/risk

```
import gridReducer from "./model/grid/reducer";

import riskWarningReducer from "./model/riskwarning/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
    gridReducer,
    riskWarningReducer,
    route,
    childRoutes
}

```

```
{
    "name":"riskwarning",
    "label":"风险警示",
    "path":"/risk",
    "module_path":"",
    "indexRoute":"/riskwarning",
    "level":1,
    "auth":"",
    "subs":[{
        "name":"insue/riskwarning",
        "label":"风险警示",
        "path":"/riskwarning",
        "module_path":"/list/list.js",
        "level":2,
        "subs":[]
    },{
        "name":"insue/riskwarning",
        "label":"风险警示添加",
        "path":"/riskwarning/add",
        "module_path":"/add/add.js",
        "level":2,
        "not_show":true,
        "subs":[]
    },{
        "name":"insue/riskwarning",
        "label":"风险警示详情",
        "path":"/riskwarning/detail/:id",
        "module_path":"/detail/detail.js",
        "level":2,
        "not_show":true,
        "subs":[]
    }]
}  
```