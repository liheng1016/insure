import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('DETAILEDLIST_ACTION_TYPE');

const DETAILEDLIST_ACTION_TYPE={
	GET_LIST:handle.createRequestActionType('GET_LIST'),
	GET_DETAIL:handle.createRequestActionType('GET_DETAIL'),
	GET_LIST_BY_COMPANY:handle.createRequestActionType('GET_LIST_BY_COMPANY'),
	UPLOAD_ATTACH:handle.createRequestActionType('UPLOAD_ATTACH'),
	DELETE_ATTACH:handle.createRequestActionType('DELETE_ATTACH'),
	ADD_FEEDBACK:handle.createRequestActionType('ADD_FEEDBACK')
};

export default DETAILEDLIST_ACTION_TYPE;