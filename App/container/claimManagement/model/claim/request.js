
import commonRequest from '@stararc-insurance/common-request';
let claimRequest={
	list: (params)=> {
		return commonRequest('/Claim/getList', params, 'get');
	},
	detail: (params)=> {
		return commonRequest('/Claim/detail', params, 'get');
	},
	create: (params)=> {
		return commonRequest('/Claim/create', params, 'get');
	},
	update: (params)=> {
		return commonRequest('/Claim/update', params, 'get');
	},
	get_insur_company: (params)=> {
		return commonRequest('/InsurInfo/getList', params, 'get');
	},
	get_accident_types: (params)=> {
		return commonRequest('/Accident/get_accident_list', params, 'get');
	},
	upload_claim: (params)=> {
		let path = '/Media/upload';
        
	    if (process.env.NODE_ENV != 'production') {
	        path = LOCAL_DOMAIN + path;
	    }

	    path = PATH_PREFIX + path;

	    
	    return fetch(path, {
	        method: 'POST',
	        body: params 
	    }).then(function (response) {
	        return response.json();
	    });
	},
};

export default claimRequest;
