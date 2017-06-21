
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('MEDIA_ACTION_TYPE');
const MEDIA_ACTION_TYPE={
	UPLOAD:handle.createRequestActionType('UPLOAD'),
	DELETE_ATTACH:handle.createRequestActionType('DELETE_ATTACH'),
	UPLOAD_INSUR:handle.createRequestActionType('UPLOAD_INSUR')
};

export default MEDIA_ACTION_TYPE;