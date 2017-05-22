
import commonRequest from '@stararc-insurance/common-request';
let acceptInsurRequest={
	list: (params)=> {
		return commonRequest('/AcceptInsur/getList', params, 'get');
	},
	detail: (params)=> {
		return commonRequest('/AcceptInsur/detail', params, 'get');
	},
	approval: (params)=> {
		return commonRequest('/AcceptInsur/approval', params, 'get');
	},
	guarantee:(params)=> {
		return commonRequest('/InsurInfo/getList', params,'get');
	},
	toexamine:(params)=> {
		return commonRequest('/Claim/getList', params,'get');
	},
	insur_list:(params)=> {
		return commonRequest('/AcceptInsur/get_insur_list', params,'get');
	},

};
export default acceptInsurRequest;
