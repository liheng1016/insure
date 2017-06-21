
import commonRequest from '@stararc-insurance/common-request';
let insurInfoRequest={
	list: (params)=> {
		return commonRequest('/InsurInfo/getList', params, 'get');
	},
	detail: (params)=> {
		return commonRequest('/InsurInfo/detail', params, 'get');
	},
	approval: (params)=> {
		return commonRequest('/InsurInfo/approval', params, 'get');
	},
	guarantee:(params)=> {
		return commonRequest('/AcceptInsur/getList', params,'get');
	},
	toexamine:(params)=> {
		return commonRequest('/Claim/getList', params,'get');
	},
	insur_list:(params)=> {
		return commonRequest('/InsurInfo/get_insur_list', params,'get');
	}
};
export default insurInfoRequest;
