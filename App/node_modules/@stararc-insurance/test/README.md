### 保险产品的测试安装包
```
// 保险模块总路由
let router = require("./routes/insur.json");

// 首页统计
import safe from "./container/Safe/SafeStatistics.js" ;
// 风险警示
import risk from "./container/riskWarning/index.js" ;
// 基础设置
import base from "./container/baseSetting/index.js" ;
// 承保管理
import insur from "./container/insurControl/insuranceInformation/insuranceInformation.js" ;
// 理赔管理
import claim from "./container/claimManagement/claimmanagement.js" ;

import {appReducer} from  "./container/App.reducer.js";

export {
	safe,
	risk,
	base,
	insur,
	claim,
	router,
	appReducer
};
```
### 对外暴露参数说明

`safe`   首页保险统计

`risk`   风险警示模块

`base`   基础信息设置模块

`insur`   承保管理模块

`claim`   理赔管理模块

`router`   保险路由json 

`appReducer`  数据流app