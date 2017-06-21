import ACTION_TYPE from './actiontype';
import {browserHistory} from "react-router";

let acceptInsurListState={
	condition:{},
	List:[],
	// 待导出承保信息列表
	exportList:[],
	gridList:[],
	industryList:[],
	detail:{},
	companyList:[],
	acceptCompany:[],
	insurProductList:[],
	applyNumber:"",
	// 承保保单附件上传
	insureAcctach:{
		business:{},
		full:{},
		social:{},
		seal:{},
		people:{},
		other:{}
	}
};

import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";

import{
	deepCopy
} from "@stararc-insurance/help-tools";

let defaultState={...acceptInsurListState};

export default function  acceptInsurReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition);
		case ACTION_TYPE.GRID_LIST.RECEIVE_DATA:
			return get_grid_list(state,action.data,action.condition);    
		case ACTION_TYPE.INDUSTRY_LIST.RECEIVE_DATA:
			return get_industry_list(state,action.data,action.condition);
		case ACTION_TYPE.DETAIL.RECEIVE_DATA:
			return get_detail(state,action.data);
		case ACTION_TYPE.COMPANY_LIST.RECEIVE_DATA:
			return get_company_list(state,action.data,action.condition);
		case ACTION_TYPE.GET_ACCEPT_COMPANY.RECEIVE_DATA:
			return get_accept_company(state,action.data);
		case ACTION_TYPE.GET_APPLY_NUMBER.RECEIVE_DATA:
			return get_apply_number(state,action.data);
		case ACTION_TYPE.GET_INSUR_PRODUCT.RECEIVE_DATA:
			return get_insur_product(state,action.data);
		case ACTION_TYPE.CREATE_INSUR.RECEIVE_DATA:
			return create_insur(state,action.data);
		case ACTION_TYPE.UPDATE_INSUR.RECEIVE_DATA:
			return update_insur(state,action.data);	
		case ACTION_TYPE.UPLOAD_INSUR.RECEIVE_DATA:
			return upload_insur(state,action.data,action); 
		case ACTION_TYPE.UNMOUT_UPLOAD_INSUR.RECEIVE_DATA:
			return unmout_upload_insur(state,action); 		
		default:
			return state;
	}
}


function getList(state,data,condition){
	// 不分页为了导出数据
	if(condition.show_page && condition.show_page=='2'){
		return Object.assign({},state,{exportList:data.companys||[]})
	}else{
		return Object.assign({},state,{List:data.companys||[],
	        condition:{
	            ...condition,
	            totalPage:data.total_pages || 1
	        }    
	    });  
	}
}

function get_grid_list(state,data){
	let lists=[];

	if(data){
		data.map((d,key)=>{
			lists.push({
				id:d.gridID,
				name:d.gridName
			})
		})
	}

	return Object.assign({},state,{gridList:lists});
}

function get_industry_list(state,data){
	let lists=[];

	if(data&&data.list){
		data.list.map((d)=>{
			lists.push({
				id:d.typeID,
				name:d.typeName
			})
		})
	}

	return Object.assign({},state,{industryList:lists});
}


/**
 * 获取详情之后拿到数据需要在编辑的
 * 处理附件进行附件的删除操作
 * @date   2017-06-07T12:04:32+0800
 * @author liheng
 * @param  {[type]}                 state [description]
 * @param  {[type]}                 data  [description]
 * @return {[type]}                       [description]
 */
function get_detail(state,data){
	let {insureAcctach} = state;

	insureAcctach = deepCopy(insureAcctach);

	for (let  key in insureAcctach){
		insureAcctach[key] = data[key+"Attachment"]&&data[key+"Attachment"][0]||[]
	}

	return Object.assign({},state,{
		detail:data,
		insureAcctach
	});
}




function get_company_list(state,data,condition){
	return Object.assign({},state,{companyList:data.list||[],
        companyCondition:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });  
}

function get_accept_company(state,data){
	let filterLists=[];

	if(data&& data.list){
		data.list.map((d)=>{
			filterLists.push({
				id:d.organID,
				name:d.organName
			})
		})
	}

	return Object.assign({},state,{acceptCompany:filterLists});
}

function get_apply_number(state,data){
	return Object.assign({},state,{applyNumber:data});
}

function get_insur_product(state,data){
	let filterLists=[];

	if(data && data.list){
		data.list.map((d)=>{
			filterLists.push({
				id:d.insurance_product_id,
				name:d.name,
				practitioners:d.practitioners,
				third_party:d.third_party,
				attachment:d.attachment&&d.attachment[0]||{}
			})
		})
	}
	return Object.assign({},state,{insurProductList:filterLists});
}

function create_insur(state,data){
	if(data && data.id){
		openAlert(true,"创建成功！");
		setTimeout(function() {
			closeAlert();

			if (process.env.NODE_ENV != 'production') {
				location.href="/acceptInsurance";
			}else{
				browserHistory.push("/acceptInsurance");
			}

		}, 2000);
	}else{
		openAlert(false,"创建失败");
	}

	return Object.assign({},state);
}

function update_insur(state,data){
	
	if(data&&data.id){
		openAlert(true,"编辑成功！");
	}

	return Object.assign({},state);
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

	let type = condition.fileType,
		{insureAcctach} = state;

	insureAcctach = deepCopy(insureAcctach)

	insureAcctach[type] = data[0];

	return Object.assign({},state, {insureAcctach});
}

// 清除附件的参数
function unmout_upload_insur(state,data){
	return Object.assign({},state,{
		insureAcctach:{
			business:{},
			full:{},
			social:{},
			seal:{},
			people:{},
			other:{}
		},
		applyNumber:''
	});
}