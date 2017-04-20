
import commonRequest from '../../../../helper/commonRequest';
let riskwarningRequest={
	list: (params)=> {
		return commonRequest('/Riskwarning/getRiskList', params, 'get');
	}
};
export default riskwarningRequest;
