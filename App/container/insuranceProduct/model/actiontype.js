
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('BASESETTING_ACTION_TYPE');

const PRODUCTOR_ACTION_TYPE={
	PRODUCT_LIST:handle.createRequestActionType('PRODUCT_LIST'),
	PRODUCT_ADD:handle.createRequestActionType('PRODUCT_ADD'),
	PRODUCT_DETAIL:handle.createRequestActionType('PRODUCT_DETAIL'),
	PRODUCT_FORBIDDEN:handle.createRequestActionType('PRODUCT_FORBIDDEN'),
	GET_INSUR_COMPANY:handle.createRequestActionType('GET_INSUR_COMPANY'),
	GET_AUTHORIZED_AREA:handle.createRequestActionType('GET_AUTHORIZED_AREA'),
	UPLOAD_CLAUSECONTENT:handle.createRequestActionType('UPLOAD_CLAUSECONTENT'),
	UNMOUT_CLAIM_DETAIL:handle.createRequestActionType('UNMOUT_CLAIM_DETAIL'),
};

export default PRODUCTOR_ACTION_TYPE;