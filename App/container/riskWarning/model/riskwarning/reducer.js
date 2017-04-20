
import ACTION_TYPE from './actiontype';
let riskwarningListState={
	List:[],
	condition:{}
};

let defaultState={...riskwarningListState};
export default function  riskwarningReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition);    
		default:
			return state;
	}
}

function getList(state,data,condition){
	return Object.assign({},state,{List:data.list||[],
        condition:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });  
}
