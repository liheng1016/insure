import commonRequest from '@stararc-insurance/common-request';

let registerRequest={
	check_company_isexist: (params)=> {
		return commonRequest('/Register/check_company_isexist', params, 'get');
	},
	get_industry_list: (params)=> {
		return commonRequest('/Register/get_industry_list', params, 'get');
	},
	get_company_area: (params)=> {
		return commonRequest('/Register/get_company_area', params, 'get');
	},
	get_verify_code: (params)=> {
		return commonRequest('/Register/get_verify_code', params, 'get');
	},
	verify_code: (params)=> {
		return commonRequest('/Register/verify_code', params, 'get');
	},
	company_register: (params)=> {
		return commonRequest('/Register/company_register', params, 'get');
	}
};
export default registerRequest;
