
import commonRequest from '../../../../helper/commonRequest';
let mediaRequest={
	upload: (params)=> {
		return commonRequest('/Media/upload', params, 'get');
	}
};
export default mediaRequest;
