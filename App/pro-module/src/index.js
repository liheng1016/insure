/**
 * create by liheng at 2017.5.19
 */

// 风险警示
import { 
	childRoutes as risk_warning_route,
	route as risk_warning_menu,
	riskWarningReducer,
	gridReducer
} from  '@stararc-insurance_functional-module/risk-warning';

// 承包管理
import {
	childRoutes as insure_control_route,
	route as insur_control_menu,
	acceptInsurReducer,
	insurInfoReducer,
	insurUploadReducer
} from "@stararc-insurance_functional-module/insur-control";

// 基础设置
import {
	childRoutes as base_setting_route,
	route as base_setting_menu,
	basesettingReducer
} from "@stararc-insurance_functional-module/base-setting";

// 理赔管理
import {
	childRoutes as claim_management_route,
	route as claim_menu,
	claimReducer
} from "@stararc-insurance_functional-module/claim-management";

// 首页统计
import {
	childRoutes as home_statistic_route,
	route as home_menu,
	safeReducer,
	surveyReducer
} from "@stararc-insurance_functional-module/home-statistic";


// 菜单
let menu = [
	...home_menu.subs,
	...risk_warning_menu.subs,
	...base_setting_menu.subs,
	...insur_control_menu.subs,
	...claim_menu.subs
];

// 子路由
let childRoutes=[
	risk_warning_route,
    insure_control_route,
    base_setting_route,
    claim_management_route,
    home_statistic_route
];


let reducer = {
	riskWarningReducer,
    gridReducer,
    //承保
    acceptInsurReducer,
	insurInfoReducer,
	insurUploadReducer,
	//基础设置 
	basesettingReducer,
	// 理赔管理
	claimReducer,
	// 首页
	safeReducer,
	surveyReducer
};

import HomeComponnet from "./container";


const proRoute = {
	path:'/insure_beta',
	component:HomeComponnet,
	indexRoute:{ onEnter: (nextState, replace) => replace('/home') },
	childRoutes:childRoutes
}

export let obj={
	proRoute:proRoute,
	reducer:reducer,
	name:"insurance-pro"
}
