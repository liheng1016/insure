
import commonRequest from '@stararc-insurance/common-request';
let acceptInsurRequest={
	list: (params)=> {
		return commonRequest('/AcceptInsur/getList', params, 'get');
	},
	grid_list: (params)=> {
		return commonRequest('/Grid/get_sub_list', params, 'get');
	},
	industry_list: (params)=> {
		return commonRequest('/Industry/getIndustryList', params, 'get');
	},
	create_insur: (params)=> {
		return commonRequest('/AcceptInsur/create_insur_info', params, 'get');
	},
	update_insur: (params)=> {
		return commonRequest('/AcceptInsur/update_insur_info', params, 'get');
	},
	detail: (params)=> {
		return commonRequest('/AcceptInsur/get_detail', params, 'get');
	},
	company_list: (params)=> {
		return commonRequest('/Company/get_company_list', params, 'get');
	},
	get_accept_company: (params)=> {
		return commonRequest('/Company/get_accept_company', params, 'get');
	},
	get_apply_number: (params)=> {
		return commonRequest('/AcceptInsur/get_apply_number', params, 'get');
	},
	get_insur_product: (params)=> {
		return commonRequest('/InsurProduct/get_insur_product', params, 'get');
	},
	upload: (params)=> {
		let path = '/Media/upload';
        
	    if (process.env.NODE_ENV != 'production') {
	        path = LOCAL_DOMAIN + path;
	    }
	    path = PATH_PREFIX + path;

	    return fetch(path, {
	        method: 'POST',
	        body: params ,
        	credentials: 'include'
	        
	    }).then(function (response) {
	        return response.json();
	    });
	}
};
export default acceptInsurRequest;
