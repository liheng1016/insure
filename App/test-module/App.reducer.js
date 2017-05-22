/**
 * create by liheng at 2017.4.17
 */
import {combineReducers} from 'redux';

// 风险警示
import {
	riskWarningReducer,
	gridReducer
} from '@stararc-insurance_functional-module/risk-warning';

// 承保管理
import {
	acceptInsurReducer,
	insurInfoReducer,
	insurUploadReducer
}from "@stararc-insurance_functional-module/insur-control";

// 基础设置
import{
	basesettingReducer
}from "@stararc-insurance_functional-module/base-setting"

// 理赔管理
import{
	claimReducer
}from "@stararc-insurance_functional-module/claim-management"

// 首页
import{
	safeReducer,
	surveyReducer
}from "@stararc-insurance_functional-module/home-statistic"

import {reducer} from "@stararc-insurance/pro";


export const appReducer = combineReducers({
	...reducer
 //    riskWarningReducer,
 //    gridReducer,
 //    //承保
 //    acceptInsurReducer,
	// insurInfoReducer,
	// insurUploadReducer,
	// //基础设置 
	// basesettingReducer,
	// // 理赔管理
	// claimReducer,
	// // 首页
	// safeReducer,
	// surveyReducer
})
