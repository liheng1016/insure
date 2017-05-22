import ACTION_TYPE from './actiontype';
import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";

import{
	deepCopy
} from "@stararc-insurance/help-tools";

let acceptInsurListState={
	List:[],
	condition:{},
	doneList:[],
	doneCondition:{},
	detail:{},
	companys:[],
	toexamine:[],
	insurList:[]

};

let defaultState={...acceptInsurListState};

export default function  acceptInsurReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition);    
		case ACTION_TYPE.DETAIL.RECEIVE_DATA:
			return get_detail(state,action.data);
		case ACTION_TYPE.APPROVAL.RECEIVE_DATA:
			return approval_suc(state,action.data);
		case ACTION_TYPE.GUARANTEE.RECEIVE_DATA:
			return guarantee_suc(state,action.data);
		case ACTION_TYPE.TOEXAMINE.RECEIVE_DATA:
			return toexamine_suc(state,action.data);
		case ACTION_TYPE.INSUR_LIST.RECEIVE_DATA:
			return insur_list(state,action.data);		  
		default:
			return state;
	}
}

function getList(state,data,condition){
	//flag 用来区分未操作和已操作部分

	if(condition.flag == 'not'){

		return Object.assign({},state,{List:data.compang_list||[],
	        condition:{
	            ...condition,
	            totalPage:data.total_pages || 1
	        }    
	    });  
	}else{
		return Object.assign({},state,{doneList:data.compang_list||[],
	        doneCondition:{
	            ...condition,
	            totalPage:data.total_pages || 1
	        }    
	    }); 
	}
}

function get_detail(state,data){
	return Object.assign({},state,{detail:data});
}


function approval_suc(state,data){
	let {detail} = state,newDetail = deepCopy(detail);

	if(data && data.id){
		openAlert(true,"操作成功！");

		newDetail.insuranceApply.list.unshift(data);
		newDetail.insuranceApply.is_approval="";

	}else{
		openAlert(false,"审核失败！");
	}

	return Object.assign({},state,{detail:newDetail});
}

function guarantee_suc(state,data){
	data.companys.splice(0,1);

	return Object.assign({},state,{companys:data.companys});
}

function toexamine_suc(state,data){
	data.list.splice(0,1);

	return Object.assign({},state,{toexamine:data.list});
	
}

function insur_list(state,data){
	data.list.splice(0,2);	

	return Object.assign({},state,{insurList:data.list});
	
}