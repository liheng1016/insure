
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('BASESETTING_ACTION_TYPE');
const BASESETTING_ACTION_TYPE={
	DETAIL:handle.createRequestActionType('DETAIL'),
	MODIFY:handle.createRequestActionType('MODIFY'),
	UPLOAD:handle.createRequestActionType('UPLOAD'),
};

export default BASESETTING_ACTION_TYPE;