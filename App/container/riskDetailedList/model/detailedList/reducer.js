import ACTION_TYPE from './actiontype';
import {deepCopy} from "@stararc-insurance/help-tools";

let detailedListListState={
	totalList:[],
	condition:{},
	hiddenListByCompany:[],
	conditionByCompany:{},
	detail:{},
	attachs:[]
};

let defaultState={...detailedListListState};

export default function  detailedListReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.GET_LIST.RECEIVE_DATA:
			return get_list(state,action.data,action.condition);    
		case ACTION_TYPE.GET_DETAIL.RECEIVE_DATA:
			return get_detail(state,action.data);    
		case ACTION_TYPE.GET_LIST_BY_COMPANY.RECEIVE_DATA:
			return get_list_by_company(state,action.data,action.condition);    	
		case ACTION_TYPE.UPLOAD_ATTACH.RECEIVE_DATA:
			return upload_attach(state,action.data);    
		case ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state,action.data);	
		case ACTION_TYPE.ADD_FEEDBACK.RECEIVE_DATA:
			return add_feedback(state,action.data);	
		default:
			return state;
	}
}

function get_list(state,data,condition){
	return Object.assign({},state,{
		totalList:data.companys||[],
		condition:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function get_list_by_company(state,data,condition){
	return Object.assign({},state,{
		hiddenListByCompany:data.list||[],
		conditionByCompany:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function get_detail(state,data){
	return Object.assign({},state,{detail:data});
}

/**
 *上传附件
 * @date   2017-06-20T11:26:56+0800
 * @author liheng
 */
function upload_attach(state,data){
	let {attachs=[]} = state,newAttach= [];

	newAttach = attachs.slice(0);

	newAttach.push(data[0]);

	return Object.assign({},state,{
		attachs:newAttach
	});
}

/**
 * 删除附件
 * @date   2017-06-20T11:27:14+0800
 * @author liheng
 */
function delete_attach(state,data){
	let {attachs=[]} = state, newAttach=[];

	newAttach = attachs.slice(0);

	newAttach.splice(data.index,1);

	return Object.assign({},state,{
		attachs:newAttach
	})
}

/**
 * 创建反馈意见
 * @date   2017-06-20T14:16:43+0800
 * @author liheng
 */
function add_feedback(state,data){
	let {detail={}} = state;

	let newDetail = deepCopy(detail);

	let feedback = newDetail && newDetail.feedback || [];


	if(data && data.id){
		feedback.unshift(data)
	}

	newDetail.feedback = feedback;
	newDetail.is_feedback = 1;//修改反馈状态

	return Object.assign({},state,{
		detail:newDetail,
		attachs:[]
	});
}