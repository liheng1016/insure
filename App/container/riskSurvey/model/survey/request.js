
import commonRequest from '@stararc-insurance/common-request';
let surveyRequest={
	list: (params)=> {
		return commonRequest('/Survey/getList', params, 'get');
	},
	getdetail: (params)=> {
		return commonRequest('/Survey/detail', params, 'get');
	},
	add: (params)=> {
		return commonRequest('/Survey/risk_add', params, 'get');
	},
	get_risk_company: (params)=> {
		return commonRequest('/Survey/get_risk_company', params, 'get');
	},
	get_risk_table:(params)=> {
		return commonRequest('/Survey/get_risk_table', params, 'get');
	},
	get_risk_people:(params)=> {
		return commonRequest('/Survey/get_risk_people', params, 'get');
	},
	

};
export default surveyRequest;
