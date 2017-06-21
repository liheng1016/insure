import BASESETTING_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let basesettingAction={
	detail:(params={})=>{
		return requestHandle(ACTION_TYPE.DETAIL,BASESETTING_REQUEST.detail,params);
	},
	modify:(params={})=>{
		return requestHandle(ACTION_TYPE.MODIFY,BASESETTING_REQUEST.modify,params);
	},
	// 附件
	upload:(params={})=>{
		return requestHandle(ACTION_TYPE.UPLOAD,BASESETTING_REQUEST.upload,params);
	}
};



export default basesettingAction;
