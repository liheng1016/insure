
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('SURVEY_ACTION_TYPE');
const SURVEY_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
	GETDETAIL:handle.createRequestActionType('GETDETAIL'),
};

export default SURVEY_ACTION_TYPE;