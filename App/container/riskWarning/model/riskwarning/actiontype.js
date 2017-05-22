
import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle=new ActionTypeHandle('RISKWARNING_ACTION_TYPE');
const RISKWARNING_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
	ADD:handle.createRequestActionType('ADD'),
	DETAIL:handle.createRequestActionType('DETAIL'),
	VERIFY_PASSWORD:handle.createRequestActionType('VERIFY_PASSWORD'),
	DELETE:handle.createActionActionType('DELETE'),
	// 附件部分
	UPLOAD:handle.createRequestActionType('UPLOAD'),
	MEDIA:handle.createRequestActionType('MEDIA'),
	DELETE_MEDIA:handle.createRequestActionType('DELETE_MEDIA'),
	DELETE_ATTACH:handle.createRequestActionType('DELETE_ATTACH'),
	UNMOUNT_ATTACHMENT:handle.createRequestActionType('UNMOUNT_ATTACHMENT')
};

export default RISKWARNING_ACTION_TYPE;