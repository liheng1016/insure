
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('INSURINFO_ACTION_TYPE');
const INSURINFO_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
	DETAIL:handle.createRequestActionType('DETAIL'),
	APPROVAL:handle.createRequestActionType('APPROVAL'),
	GUARANTEE:handle.createRequestActionType('GUARANTEE'),
	TOEXAMINE:handle.createRequestActionType('TOEXAMINE'),
	INSUR_LIST:handle.createRequestActionType('INSUR_LIST'),
	
};

export default INSURINFO_ACTION_TYPE;