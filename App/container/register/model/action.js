import REGISTER_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let registerAction={
	// 校验是否重复
	check_company_isexist:(params={})=>{
		return requestHandle(ACTION_TYPE.CHECK_COMPANY_ISEXIST,REGISTER_REQUEST.check_company_isexist,params);
	},
	// 获取行业类型
	get_industry_list:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_INDUSTRY_LIST,REGISTER_REQUEST.get_industry_list,params);
	},
	// 获取企业所在网格区域
	get_company_area:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_COMPANY_AREA,REGISTER_REQUEST.get_company_area,params);
	},
	// 获取验证码
	get_verify_code:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_VERIFY_CODE,REGISTER_REQUEST.get_verify_code,params);
	},
	// 校验验证码
	verify_code:(params={})=>{
		return requestHandle(ACTION_TYPE.VERIFY_CODE,REGISTER_REQUEST.verify_code,params);
	},
	// 企业注册
	company_register:(params={})=>{
		return requestHandle(ACTION_TYPE.COMPANY_REGISTER,REGISTER_REQUEST.company_register,params);
	}
	
	
};

export default registerAction;
