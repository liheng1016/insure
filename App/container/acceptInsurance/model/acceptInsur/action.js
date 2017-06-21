import INSURINFO_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';

let acceptInsurAction={
	// 承保保单的列表
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,INSURINFO_REQUEST.list,params);
	},
	// 承保保单的详情
	detail:(params={})=>{
		return	requestHandle(ACTION_TYPE.DETAIL,INSURINFO_REQUEST.detail,params);
	},
	// 承保保单的创建
	create_insur:(params={})=>{
		return requestHandle(ACTION_TYPE.CREATE_INSUR,INSURINFO_REQUEST.create_insur,params);
	},
	// 承保保单的编辑
	update_insur:(params={})=>{
		return requestHandle(ACTION_TYPE.UPDATE_INSUR,INSURINFO_REQUEST.update_insur,params);
	},
	// 网格列表
	grid_list:(params={})=>{
		return requestHandle(ACTION_TYPE.GRID_LIST,INSURINFO_REQUEST.grid_list,params);
	},
	// 企业行业类型
	industry_list:(params={})=>{
		return requestHandle(ACTION_TYPE.INDUSTRY_LIST,INSURINFO_REQUEST.industry_list,params);
	},
	// 获取企业列表
	company_list:(params={})=>{
		return requestHandle(ACTION_TYPE.COMPANY_LIST,INSURINFO_REQUEST.company_list,params);
	},
	// 承保公司
	get_accept_company:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_ACCEPT_COMPANY,INSURINFO_REQUEST.get_accept_company,params);
	},
	// 投保单号
	get_apply_number:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_APPLY_NUMBER,INSURINFO_REQUEST.get_apply_number,params);
	},
	// 保险产品列表
	get_insur_product:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_INSUR_PRODUCT,INSURINFO_REQUEST.get_insur_product,params);
	},
	// 承保保单的附件上传
	upload_insur:(params={},type)=>{
		return requestHandle(ACTION_TYPE.UPLOAD_INSUR,INSURINFO_REQUEST.upload,params,type);
	},
	// 卸载附件里面包含的数据
	unmout_upload_insur:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.UNMOUT_UPLOAD_INSUR.RECEIVE_DATA,
			msg:"卸载附件里面包含的数据"
		})
		// return requestHandle(ACTION_TYPE.UPLOAD_INSUR,INSURINFO_REQUEST.upload,params,type);
	}
};


export default acceptInsurAction;
