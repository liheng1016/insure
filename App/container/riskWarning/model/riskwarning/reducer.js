import ACTION_TYPE from './actiontype';
import {browserHistory} from "react-router";

let riskwarningListState={
	List:[],
	detail:[],
	condition:{},
	isRight:""
};

let defaultState={...riskwarningListState};

export default function  riskWarningReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition)
		case ACTION_TYPE.ADD.RECEIVE_DATA:
			return add_risk(state,action.data);
		case ACTION_TYPE.DETAIL.RECEIVE_DATA:
			return one_detail(state,action.data);  
		case ACTION_TYPE.VERIFY_PASSWORD.RECEIVE_DATA:
			return verify_success(state,action.data);
		//附件部分
		case ACTION_TYPE.UPLOAD.RECEIVE_DATA:
			return upload_result(state,action.data);
		case ACTION_TYPE.MEDIA.RECEIVE_DATA:
			return upload_media_result(state,action.data);
		case ACTION_TYPE.DELETE_MEDIA.RECEIVE_DATA:
			return delete_media(state,action.data);
		case ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state,action.data);
		case ACTION_TYPE.UNMOUNT_ATTACHMENT.RECEIVE_DATA:
			return unmount_attachment(state,action);
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

function add_risk(state,data){
	if(data.id){

		// browserHistory.push("#/riskwarning")
		location.href="#/riskwarning";
	}
	return Object.assign({},state,{
		isRight:""
	});
}

function one_detail (state,data){

	return Object.assign({},state,{detail:data||{}})
}

// 密码校验成功后设置成功状态，然后
function verify_success(state,data){
	let isRight = "";

		isRight = data=="ok"?true:false;


	return Object.assign({},state,{isRight});
}

// 附件上传
function upload_result(state,data){
	let {attachmentList=[]} = state,newAttach=[];

     	newAttach = attachmentList.slice(0);

     	if(data && data[0]){
			newAttach.push(data[0]);
     	}

	return Object.assign({},state,{attachmentList:newAttach});
}

// 多媒体上传
function upload_media_result(state,data){
	let {mediaList=[]} = state,newAttach=[];

		newAttach = mediaList.slice(0);

		if(data && data[0]){
			newAttach.push(data[0]);
		}

	return Object.assign({},state,{mediaList:newAttach});
}

// 删除多媒体
function delete_media(state,data){
	let {mediaList=[]} = state, newMediaList=[];

	newMediaList = mediaList.slice(0);

	newMediaList.map((n,key)=>{
		if(n.attachment_id == data.attachment_id){
			newMediaList.splice(key,1);
		}
	});

	return Object.assign({},state,{
		mediaList:newMediaList
	})

}


// 删除附件
function delete_attach(state,data){

	let {attachmentList=[]} = state, newMediaList=[];

	newMediaList = attachmentList.slice(0);

	newMediaList.map((n,key)=>{
		if(n.attachment_id == data.attachment_id){
			newMediaList.splice(key,1);
		}
	});

	return Object.assign({},state,{
		attachmentList:newMediaList
	})
}

// 卸载附件
function unmount_attachment(state,data){
	return Object.assign({},state,{
		attachmentList:[],
		mediaList:[]
	})
}