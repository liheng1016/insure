
import ACTION_TYPE from './actiontype';
let gridListState={
	List:[]
};
let defaultState={...gridListState};
export default function  gridReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data);    
		default:
			return state;
	}
}
function getList(state,data){
	return Object.assign({},state,{List:data});
}
