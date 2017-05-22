
import ACTION_TYPE from './actiontype';
let surveyListState={
	List:[],
	condition:{},
	detail:{},
	getdetail:{},
};
let defaultState={...surveyListState};
export default function  surveyReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition);
		case ACTION_TYPE.GETDETAIL.RECEIVE_DATA:
			return one_detail(state,action.data);    
		default:
			return state;
	}
}
function getList(state,data,condition){
	console.log(data,'data')
	return Object.assign({},state,{
		List:data.tasks,
		condition:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function one_detail(state,data){
	console.log(data,'企业安全详情')
	return Object.assign({},state,{getdetail:data});
}
