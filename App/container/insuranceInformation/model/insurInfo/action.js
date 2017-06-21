import ACCEPTINSUR_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let insurInfoAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,ACCEPTINSUR_REQUEST.list,params);
	},
	detail:(params={})=>{
		return requestHandle(ACTION_TYPE.DETAIL,ACCEPTINSUR_REQUEST.detail,params);
	},
	// 审核
	approval:(params={})=>{
		return requestHandle(ACTION_TYPE.APPROVAL,ACCEPTINSUR_REQUEST.approval,params);
	},
	//更多的保障信息
	guarantee:(params={})=>{
		return requestHandle(ACTION_TYPE.GUARANTEE,ACCEPTINSUR_REQUEST.guarantee,params);
	},
	// 更多的理赔信息
	toexamine:(params={})=>{
		return requestHandle(ACTION_TYPE.TOEXAMINE,ACCEPTINSUR_REQUEST.toexamine,params);
	},
	// 投保申请列表
	insur_list:(params={})=>{
		return requestHandle(ACTION_TYPE.INSUR_LIST,ACCEPTINSUR_REQUEST.insur_list,params);
	}
};

export default insurInfoAction;
