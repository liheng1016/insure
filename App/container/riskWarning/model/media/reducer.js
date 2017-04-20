
import ACTION_TYPE from './actiontype';
let mediaListState={
	result:[]
};
let defaultState={...mediaListState};
export default function  mediaReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.UPLOAD.RECEIVE_DATA:
			return getList(state,action.data);    
		default:
			return state;
	}
}
function getList(state,data){
	return Object.assign({},state,{result:data});
}
