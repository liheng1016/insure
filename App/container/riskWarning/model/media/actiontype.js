
import ActionTypeHandle from '../../../../helper/ActionTypeHandle';
let handle=new ActionTypeHandle('MEDIA_ACTION_TYPE');
const MEDIA_ACTION_TYPE={
	UPLOAD:handle.createRequestActionType('UPLOAD'),
};

export default MEDIA_ACTION_TYPE;