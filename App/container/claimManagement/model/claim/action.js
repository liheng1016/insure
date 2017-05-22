import CLAIM_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let claimAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,CLAIM_REQUEST.list,params);
	},
	detail:(params={})=>{
		return requestHandle(ACTION_TYPE.DETAIL,CLAIM_REQUEST.detail,params);
	},
	create:(params={})=>{
		return requestHandle(ACTION_TYPE.CREATE,CLAIM_REQUEST.create,params);
	},
	update:(params={})=>{
		return requestHandle(ACTION_TYPE.UPDATE,CLAIM_REQUEST.update,params);
	},
	get_insur_company:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_INSUR_COMPANY,CLAIM_REQUEST.get_insur_company,params);
	},
	get_accident_types:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_ACCIDENT_TYPES,CLAIM_REQUEST.get_accident_types,params);
	},
	// 理赔的创建附件上传
	upload_claim:(params={},type)=>{

		return requestHandle(ACTION_TYPE.UPLOAD_CLAIM,CLAIM_REQUEST.upload_claim,params,type);
	},
	delete_claim:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA,
			data:params
		})
	},
	//清除详情数据
	unmout_claim_detail:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.UNMOUT_CLAIM_DETAIL.RECEIVE_DATA,
			msg:"卸载附件里面包含的数据"
		})
	}
};

export default claimAction;
