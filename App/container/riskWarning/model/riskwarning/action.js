import RISKWARNING_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle,actionHandle} from '@stararc-insurance/redux-build-tools';
let riskwarningAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,RISKWARNING_REQUEST.list,params);
	},
	add:(params={})=>{
		return requestHandle(ACTION_TYPE.ADD,RISKWARNING_REQUEST.add,params);
	},
	detail:(params={})=>{
		return requestHandle(ACTION_TYPE.DETAIL,RISKWARNING_REQUEST.detail,params);
	},
	verify_password:(params={})=>{
		return requestHandle(ACTION_TYPE.VERIFY_PASSWORD,RISKWARNING_REQUEST.verify_password,params);
	},
	delete:(params={})=>{
		let onSuccess = function (result, dispatch, getState) {
			if(result.ret == 0){
				alert("删除成功！");
				location.reload();
				// location.href="#/riskwarning";
			}
        };

        let onFail = function (result, dispatch, getState) {
        	alert("删除失败:"+result.msg);
        };

        return actionHandle(ACTION_TYPE.DELETE, RISKWARNING_REQUEST.delete, params, onSuccess, onFail);
	},
	// 附件
	upload:(params={})=>{
		return requestHandle(ACTION_TYPE.UPLOAD,RISKWARNING_REQUEST.upload,params);
	},
	// 多媒体信息
	media:(params={})=>{
		return requestHandle(ACTION_TYPE.MEDIA,RISKWARNING_REQUEST.media,params);
	},
	// 删除多媒体信息
	delete_media:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.DELETE_MEDIA.RECEIVE_DATA,
			data:params
		})
	},
	// 删除附件
	delete_attach:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA,
			data:params
		})
	},
	unmount_attachment:()=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.UNMOUNT_ATTACHMENT.RECEIVE_DATA,
			msg:"卸载附件相关信息"
		})	
	}
};

export default riskwarningAction;
