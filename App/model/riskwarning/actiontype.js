
import ActionTypeHandle from '../../helper/ActionTypeHandle';
let handle=new ActionTypeHandle('RISKWARNING_ACTION_TYPE');
const RISKWARNING_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
};

export default RISKWARNING_ACTION_TYPE;