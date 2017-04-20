
import commonRequest from '../../../../helper/commonRequest';
let gridRequest={
	list: (params)=> {
		return commonRequest('/Grid/getList', params, 'get');
	}
};
export default gridRequest;
