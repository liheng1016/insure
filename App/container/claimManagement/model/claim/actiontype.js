
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('CLAIM_ACTION_TYPE');
const CLAIM_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
	DETAIL:handle.createRequestActionType('DETAIL'),
	CREATE:handle.createRequestActionType('CREATE'),
	UPDATE:handle.createRequestActionType('UPDATE'),
	GET_INSUR_COMPANY:handle.createRequestActionType('GET_INSUR_COMPANY'),
	GET_ACCIDENT_TYPES:handle.createRequestActionType('GET_ACCIDENT_TYPES'),
	UPLOAD_CLAIM:handle.createRequestActionType('UPLOAD_CLAIM'),
	DELETE_ATTACH:handle.createRequestActionType('DELETE_ATTACH'),
	UNMOUT_CLAIM_DETAIL:handle.createRequestActionType('UNMOUT_CLAIM_DETAIL'),
	
};

export default CLAIM_ACTION_TYPE;