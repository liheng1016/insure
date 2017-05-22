import GRID_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let gridAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,GRID_REQUEST.list,params);
	}
};

export default gridAction;
