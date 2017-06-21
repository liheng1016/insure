import commonRequest from '@stararc-insurance/common-request';

let basesettingRequest={
	detail: (params)=> {
		return commonRequest('/Basesetting/get_detail', params, 'get');
	},
	modify: (params)=> {
		return commonRequest('/Basesetting/modify_organ', params, 'get');
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
	    
	},
};


export default basesettingRequest;
