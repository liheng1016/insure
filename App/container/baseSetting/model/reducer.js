import ACTION_TYPE from './actiontype';
import {deepCopy} from "@stararc-insurance/help-tools";
import {browserHistory} from "react-router";
import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";

let basesettingListState={
	detail:{},
	logoImg:[]	
};


let defaultState={...basesettingListState};

export default function  basesettingReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.DETAIL.RECEIVE_DATA:
			return get_detail(state,action.data);
		case ACTION_TYPE.MODIFY.RECEIVE_DATA:
			return modify(state,action.data);
		case ACTION_TYPE.UPLOAD.RECEIVE_DATA:
			return upload_result(state,action.data);
		default:
			return state;
	}
}

// 获取单条成功
function get_detail(state,data){
	return Object.assign({},state,{detail:data&&data[0]||{}});
}

// 修改成功
function modify(state,data){
	if(data){
		openAlert(true,"编辑成功！");
	}else{
		openAlert(false,"编辑失败！")
	};

	return state;
}

// logo附件
function upload_result(state,data){
	return Object.assign({},state,{logoImg:data&&data[0]||[]});
}