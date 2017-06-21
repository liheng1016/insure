import SURVEY_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let surveyAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,SURVEY_REQUEST.list,params);
	},
	getdetail:(params={})=>{
		return requestHandle(ACTION_TYPE.GETDETAIL,SURVEY_REQUEST.getdetail,params);
	},
	add:(params={})=>{
		return requestHandle(ACTION_TYPE.ADD,SURVEY_REQUEST.add,params);
	},
	//获取查勘企业
	get_risk_company:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_RISK_COMPANY,SURVEY_REQUEST.get_risk_company,params);
	},
	//获取排查表
	get_risk_table:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_RISK_TABLE,SURVEY_REQUEST.get_risk_table,params);
	},
	//获取任务排查人
	get_risk_people:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_RISK_PEOPLE,SURVEY_REQUEST.get_risk_people,params);
	},
	


};

export default surveyAction;
