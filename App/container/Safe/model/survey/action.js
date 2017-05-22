import SURVEY_REQUEST from './request';
import ACTION_TYPE from './actiontype';
import {requestHandle} from '@stararc-insurance/redux-build-tools';
let surveyAction={
	list:(params={})=>{
		return requestHandle(ACTION_TYPE.LIST,SURVEY_REQUEST.list,params);
	},
	getdetail:(params={})=>{
		return requestHandle(ACTION_TYPE.GETDETAIL,SURVEY_REQUEST.getdetail,params);
	},
};

export default surveyAction;
