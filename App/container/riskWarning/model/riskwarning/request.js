
import commonRequest from '@stararc-insurance/common-request';
let riskwarningRequest={
	list: (params)=> {
		return commonRequest('/Riskwarning/getRiskList', params, 'get');
	},
	add: (params)=> {
		return commonRequest('/Riskwarning/addRisk', params, 'post');
	},
	detail: (params)=> {
		return commonRequest('/Riskwarning/detail', params, 'get');
	},
	delete: (params)=> {
		return commonRequest('/Riskwarning/deleteRisk', params, 'get');
	},
	verify_password: (params)=> {
		return commonRequest('/Riskwarning/verifyPassword', params, 'get');
	},
	// 上传
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
	media: (params)=> {
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
export default riskwarningRequest;
