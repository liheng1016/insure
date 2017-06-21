
import ACTION_TYPE from './actiontype';
import {deepCopy} from "@stararc-insurance/help-tools";
import {browserHistory} from "react-router";
import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";

// 保险产品
let productState={
	productList:[],
	productCondition:{},
	productDetail:{},
	productAdd:[],
	insurCompany:[],
	list:[],
	uploadClausecontent:[],
};

let defaultState={...productState};

/**
 * 保险产品
 * @date   2017-06-21T14:54:53+0800
 * @author liheng
 */
export default function  productReducer(state=defaultState,action) {
	switch (action.type){
		//以下是保险产品数据处理部分 
		case ACTION_TYPE.PRODUCT_LIST.RECEIVE_DATA:
			return product_list(state,action.data,action.condition);			    
		case ACTION_TYPE.PRODUCT_ADD.RECEIVE_DATA:
			return product_add(state,action.data);
		case ACTION_TYPE.PRODUCT_DETAIL.RECEIVE_DATA:
			return product_detail(state,action.data);			    
		case ACTION_TYPE.PRODUCT_FORBIDDEN.RECEIVE_DATA:
			return product_forbidden(state,action.data);
		case ACTION_TYPE.GET_INSUR_COMPANY.RECEIVE_DATA:
			return get_insur_company(state,action.data);
		case ACTION_TYPE.GET_AUTHORIZED_AREA.RECEIVE_DATA:
			return get_authorized_area(state,action.data);	
		case ACTION_TYPE.UPLOAD_CLAUSECONTENT.RECEIVE_DATA:
			return upload_clausecontent(state,action.data);
		case ACTION_TYPE.UNMOUT_CLAIM_DETAIL.RECEIVE_DATA:
			return clear_claim_detail(state,action.data);	
		default:
			return state;
	}
}



function product_add(state,data){
	if(data && data.insurance_product_id){
		openAlert(true,"创建成功！");
		setTimeout(()=>{
			closeAlert();
			if (process.env.NODE_ENV != 'production') {
				location.href="/insuranceProduct";
			}else{
				browserHistory.push("/insuranceProduct");
			}
		},1500);
	}else{
		openAlert(false,"创建失败！");
	}

	return Object.assign({},state,{
		uploadClausecontent:[]
	});
}

function product_list(state,data,condition){
	return Object.assign({},state,{productList:data.list||[],
        productCondition:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });  
}

function product_detail(state,data){

	return Object.assign({},state,{productDetail:data||{}});
}

function  product_forbidden(state,data) {
	if(data && data.insurance_product_id){
		openAlert(true,"操作成功！");

		let {productDetail} = state;

		let newProductDetail = deepCopy(productDetail);
		newProductDetail.status = 2;

		return Object.assign({},state,{
			productDetail:newProductDetail
		});
	}else{
		openAlert(false,"操作失败！");

		return Object.assign({},state);
	}

}

function get_insur_company(state,data){
	let list = data.list||[],result=[];
	list.map((l)=>{
		result.push({
			id:l.organID,
			name:l.organName
		})
	})

	return Object.assign({},state,{
		insurCompany:result
	});
}

function get_authorized_area(state,data){
	let list = data||[],result=[];
	list.map((l)=>{
		result.push({
			id:l.gridID,
			name:l.gridName
		})
	})
	return Object.assign({},state,{list:data});
}

function upload_clausecontent(state,data){
	return Object.assign({},state,{uploadClausecontent:data && data[0] || {}});
}
//卸载附件
function clear_claim_detail(state){
	return Object.assign({},state,{
		uploadClausecontent:{}
	})
}