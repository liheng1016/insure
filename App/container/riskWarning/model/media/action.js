import MEDIA_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '../../../../helper/actionHandle';
let mediaAction={
	upload:(params={})=>{
		return requestHandle(ACTION_TYPE.UPLOAD,MEDIA_REQUEST.upload,params);
	}
};

export default mediaAction;
