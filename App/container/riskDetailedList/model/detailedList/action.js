import DETAILEDLIST_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';

let detailedListAction={
	get_list:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_LIST,DETAILEDLIST_REQUEST.get_list,params);
	},
	get_list_by_company:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_LIST_BY_COMPANY,DETAILEDLIST_REQUEST.get_list_by_company,params);
	},
	get_detail:(params={})=>{
		return requestHandle(ACTION_TYPE.GET_DETAIL,DETAILEDLIST_REQUEST.get_detail,params);
	},
	// 反馈附件上传
	upload_attach:(params={},type)=>{
		return requestHandle(ACTION_TYPE.UPLOAD_ATTACH,DETAILEDLIST_REQUEST.upload_attach,params);
	},
	// 删除附件
	delete_attach:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA,
			data:params
		})
	},
	// 添加反馈
	add_feedback:(params={},type)=>{
		return requestHandle(ACTION_TYPE.ADD_FEEDBACK,DETAILEDLIST_REQUEST.add_feedback,params);
	},
};

export default detailedListAction;
