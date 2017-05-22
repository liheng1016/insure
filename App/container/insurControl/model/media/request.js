
import commonRequest from '@stararc-insurance/common-request';

let mediaRequest={
	upload: (params)=> {
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
export default mediaRequest;
