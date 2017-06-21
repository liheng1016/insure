import commonRequest from '@stararc-insurance/common-request';
let detailedListRequest={
	get_list: (params)=> {
		return commonRequest('/Hidden/get_hidden_danger_by_statistic', params, 'get');
	},
	get_list_by_company: (params)=> {
		return commonRequest('/Hidden/get_hidden_danger_by_company', params, 'get');
	},
	get_detail: (params)=> {
		return commonRequest('/Hidden/get_one_hidden_detail', params, 'get');
	},
	upload_attach: (params)=> {
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
	},
	add_feedback: (params)=> {
		return commonRequest('/Hidden/add_feedback', params, 'get');
	},
};
export default detailedListRequest;
