import ACTION_TYPE from './actiontype';
let claimListState={
	List:[],
	condition:{},
	detail:{},
	insurCompanyList:[],
	insurCompanyCondition:{},
	accidentTypes:[],
	sceneAttachment:[],
	accidentAttachment:{},
	thingsAttachment:{}
};

import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";


let defaultState={...claimListState};
export default function  claimReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition); 
		case ACTION_TYPE.DETAIL.RECEIVE_DATA:
			return one_detail(state,action.data);
		case ACTION_TYPE.CREATE.RECEIVE_DATA:
			return create_suc(state,action.data);
		case ACTION_TYPE.UPDATE.RECEIVE_DATA:
			return update_suc(state,action.data);
		case ACTION_TYPE.GET_INSUR_COMPANY.RECEIVE_DATA:
			return get_insur_company(state,action.data,action.condition);
		case ACTION_TYPE.GET_ACCIDENT_TYPES.RECEIVE_DATA:
			return get_accident_types(state,action.data);			
		case ACTION_TYPE.UPLOAD_CLAIM.RECEIVE_DATA:
			return upload_claim(state,action.data,action);
		case ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state,action.data);
		case ACTION_TYPE.UNMOUT_CLAIM_DETAIL.RECEIVE_DATA:
			return clear_claim_detail(state,action.data);							   
		default:
			return state;
	}
}

function getList(state,data,condition){
	return Object.assign({},state,{
		List:data.list,
		condition:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function one_detail(state,data){
	let attach = {
		sceneAttachment:[],
		accidentAttachment:{},
		thingsAttachment:{}
	};

	if(data && data.id){
		attach.sceneAttachment = data.attachment || [];
		attach.accidentAttachment = data.accidentAttachment && data.accidentAttachment[0] || {};
		attach.thingsAttachment = data.thingsAttachment && data.thingsAttachment[0] || {};
	}

	return Object.assign({},state,{
		detail:data,
		...attach
	})

}

function create_suc(state,data){

	if(data && data.id){
		openAlert(true,"创建成功！");
		setTimeout(()=>{
			closeAlert();
			window.location.href="#/claimManagement";
		},2000);
	}else{
		openAlert(false,"创建失败！");
	}

	return Object.assign({},state);
}

function update_suc(state,data){

	if(data&&data.id){
		openAlert(true,"编辑成功！");
	}
	
	return Object.assign({},state);
}

function get_insur_company(state,data,condition){
	return Object.assign({},state,{
		insurCompanyList:data.companys,
		insurCompanyCondition:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function get_accident_types(state,data){
	let list = data && data.list || [],result=[];

	list.map((l)=>{
		result.push({
			id:l.id,
			name:l.dictValue
		})
	})

	return Object.assign({},state,{accidentTypes:result})
}


function upload_claim(state,data,condition){
	let type = condition.fileType;

	let newAttachment = [];

	if(data&& data[0]){

		switch(type){
			case "scene":
				let {sceneAttachment=[]} = state;

				 newAttachment = sceneAttachment.slice(0);

				newAttachment.push(data[0]);

				return Object.assign({},state,{
					sceneAttachment:newAttachment
				});
				break;
			case "accident":
				newAttachment = data&&data[0] || {};

				return Object.assign({},state,{
					accidentAttachment:newAttachment
				});	
				break;


			case "things":

				newAttachment = data&&data[0] || {};

				return Object.assign({},state,{
					thingsAttachment:newAttachment
				});	

				break;
		}
	}else{
		return state;
	}

}

// 删除附件
function delete_attach(state,data){

	let {sceneAttachment=[]} = state, newMediaList=[];

	newMediaList = sceneAttachment.slice(0);

	newMediaList.splice(data.index,1);

	return Object.assign({},state,{
		sceneAttachment:newMediaList
	})
}
//
function clear_claim_detail(state){
	return Object.assign({},state,{
		detail:{}
	})
}