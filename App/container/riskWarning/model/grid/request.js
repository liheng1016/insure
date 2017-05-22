
import commonRequest from '@stararc-insurance/common-request';
let gridRequest={
	list: (params)=> {
		return commonRequest('/Grid/getList', params, 'get');
	}
};
export default gridRequest;
