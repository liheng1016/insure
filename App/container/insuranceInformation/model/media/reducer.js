import ACTION_TYPE from './actiontype';
import Immutable from "immutable";
import{
	deepCopy
} from "@stararc-insurance/help-tools";


let mediaListState={
	attachList:[],
	insureAcctach:{
		business:{},
		full:{},
		social:{},
		seal:{},
		people:{},
		other:{}
	}
};

let defaultState={...mediaListState};

export default function  insurUploadReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.UPLOAD.RECEIVE_DATA:
			return upload_result(state,action.data);
		case ACTION_TYPE.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state,action.data); 
		case ACTION_TYPE.UPLOAD_INSUR.RECEIVE_DATA:
			return upload_insur(state,action.data,action); 
		default:
			return state;
	}
}

// 现场图片附件
function upload_result(state,data){
	let {attachList=[]} = state,newAttach=[];

     	newAttach = attachList.slice(0);

		newAttach.push(data[0]);

	return Object.assign({},state,{attachList:newAttach});
}


// 删除附件
function delete_attach(state,data){

	let {attachList=[]} = state, newMediaList=[];

	newMediaList = attachList.slice(0);

	newMediaList.map((n,key)=>{
		if(n.attachment_id == data.attachment_id){
			newMediaList.splice(key,1);
		}
	});

	return Object.assign({},state,{
		attachList:newMediaList
	})
}

/**
 * 此处是由页面中上传文件的时候传递了一个fileType
 * 用来区分上传是的是哪个文件
 * 此处为了省略部分代码，雇用相同的参数当成key值保存相应附件
 * 所以insureAcctach中的属性不能随便修改
 * @date   2017-05-05T16:59:02+0800
 * @author liheng
 */
function upload_insur(state,data,condition){
	console.log(data,condition);

	let type = condition.fileType,
		{insureAcctach} = state;

	// insureAcctach = Immutable.Map(insureAcctach)
	
	insureAcctach = deepCopy(insureAcctach)
	

	insureAcctach[type] = data[0];

	

	return Object.assign({},state, {insureAcctach});
}