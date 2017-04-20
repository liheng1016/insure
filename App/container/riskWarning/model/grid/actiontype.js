
import ActionTypeHandle from '../../../../helper/ActionTypeHandle';
let handle=new ActionTypeHandle('GRID_ACTION_TYPE');
const GRID_ACTION_TYPE={
	LIST:handle.createRequestActionType('LIST'),
};

export default GRID_ACTION_TYPE;