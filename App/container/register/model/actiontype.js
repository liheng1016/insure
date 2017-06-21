import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';

let handle=new ActionTypeHandle('REGISTER_ACTION_TYPE');

const REGISTER_ACTION_TYPE={
	CHECK_COMPANY_ISEXIST:handle.createRequestActionType('CHECK_COMPANY_ISEXIST'),
	GET_INDUSTRY_LIST:handle.createRequestActionType('GET_INDUSTRY_LIST'),
	GET_COMPANY_AREA:handle.createRequestActionType('GET_COMPANY_AREA'),
	GET_VERIFY_CODE:handle.createRequestActionType('GET_VERIFY_CODE'),
	COMPANY_REGISTER:handle.createRequestActionType('COMPANY_REGISTER'),
	VERIFY_CODE:handle.createRequestActionType('VERIFY_CODE')
};

export default REGISTER_ACTION_TYPE;