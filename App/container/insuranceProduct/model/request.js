import commonRequest from '@stararc-insurance/common-request';

let productRequest={
	product_list: (params)=> {
		return commonRequest('/InsurProduct/get_insur_product', params, 'get');
	},
	product_add: (params)=> {
		return commonRequest('/InsurProduct/product_add', params, 'get');
	},
	product_detail: (params)=> {
		return commonRequest('/InsurProduct/product_detail', params, 'get');
	},
	product_forbidden: (params)=> {
		return commonRequest('/InsurProduct/product_forbidden', params, 'get');
	},
	get_insur_company: (params)=> {
		return commonRequest('/InsurProduct/get_accept_company', params, 'get');
	},
	get_authorized_area: (params)=> {
		return commonRequest('/Grid/getList', params, 'get');
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

export default productRequest;
