import PRODUCT_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';

// 保险产品
let insuranceProductAction={
	// 产品列表
	product_list:(params={})=>{
		return requestHandle(ACTION_TYPE.PRODUCT_LIST,PRODUCT_REQUEST.product_list,params);
	},
	// 产品添加
	product_add:(params={})=>{
		return requestHandle(ACTION_TYPE.PRODUCT_ADD,PRODUCT_REQUEST.product_add,params);
	},
	// 产品详情
	product_detail:(params={})=>{
		return requestHandle(ACTION_TYPE.PRODUCT_DETAIL,PRODUCT_REQUEST.product_detail,params);
	},
	// 产品禁用
	product_forbidden:(params={})=>{
		return requestHandle(ACTION_TYPE.PRODUCT_FORBIDDEN,PRODUCT_REQUEST.product_forbidden,params);
	},
	//获取保险经纪公司
	get_insur_company:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_INSUR_COMPANY,PRODUCT_REQUEST.get_insur_company,params);
	},
	//获取授权地区
	get_authorized_area:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_AUTHORIZED_AREA,PRODUCT_REQUEST.get_authorized_area,params);
	},
	//上传条款附件
	upload_clausecontent:(params={})=>{
		return requestHandle(ACTION_TYPE.UPLOAD_CLAUSECONTENT,PRODUCT_REQUEST.upload,params);
	},
	//清除详情数据
	unmout_claim_detail:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.UNMOUT_CLAIM_DETAIL.RECEIVE_DATA,
			msg:"卸载附件里面包含的数据"
		})
	}
}

export default insuranceProductAction;
