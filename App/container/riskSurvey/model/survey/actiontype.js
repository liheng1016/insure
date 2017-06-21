
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('SURVEY_ACTION_TYPE');
const SURVEY_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
	GETDETAIL:handle.createRequestActionType('GETDETAIL'),
	ADD:handle.createRequestActionType('ADD'),
	GET_RISK_COMPANY:handle.createRequestActionType('GET_RISK_COMPANY'),
	GET_RISK_TABLE:handle.createRequestActionType('GET_RISK_TABLE'),
	GET_RISK_PEOPLE:handle.createRequestActionType('GET_RISK_PEOPLE'),

};

export default SURVEY_ACTION_TYPE;