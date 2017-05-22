
import commonRequest from '@stararc-insurance/common-request';
let surveyRequest={
	list: (params)=> {
		return commonRequest('/Survey/getList', params, 'get');
	},
	getdetail: (params)=> {
		return commonRequest('/Survey/detail', params, 'get');
	},
};
export default surveyRequest;
