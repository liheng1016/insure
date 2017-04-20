import RISKWARNING_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '../../../../helper/actionHandle';
let riskwarningAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,RISKWARNING_REQUEST.list,params);
	}
};

export default riskwarningAction;
