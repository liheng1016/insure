import MEDIA_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let mediaAction={
	// 附件
	upload:(params={})=>{
		return requestHandle(ACTION_TYPE.UPLOAD,MEDIA_REQUEST.upload,params);
	},
	// 删除附件
	delete_attach:(params={})=>{
		return dispatch=>dispatch({
			type:ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA,
			data:params
		})
	},
	// 承保保单的附件上传
	upload_insur:(params={},type)=>{
		return requestHandle(ACTION_TYPE.UPLOAD_INSUR,MEDIA_REQUEST.upload,params,type);
	}
};

export default mediaAction;
