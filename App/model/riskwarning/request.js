
import commonRequest from '../commonRequest';
let riskwarningRequest={
	list: (params)=> {
		return commonRequest('/Riskwarning/getList', params, 'get');
	}
};
export default riskwarningRequest;
