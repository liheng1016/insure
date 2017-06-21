import ACTION_TYPE from './actiontype';
import{
	deepCopy
} from "@stararc-insurance/help-tools";

import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";


let registerState={
	industryList:[],
	checkCompanyFlag:"",
	grids:[],
	personMsg:""
};
	
let defaultState={...registerState};

export default function  registerReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.CHECK_COMPANY_ISEXIST.RECEIVE_DATA:
			return check_company_isexist(state,action.data);
		case ACTION_TYPE.GET_INDUSTRY_LIST.RECEIVE_DATA:
			return get_industry_list(state,action.data);
		case ACTION_TYPE.GET_COMPANY_AREA.RECEIVE_DATA:
			return get_company_area(state,action.data,action.condition);	
		case ACTION_TYPE.GET_VERIFY_CODE.RECEIVE_DATA:
			return get_verify_code(state,action.data);
		case ACTION_TYPE.COMPANY_REGISTER.RECEIVE_DATA:
			return company_register(state,action.data);	
		case ACTION_TYPE.VERIFY_CODE.RECEIVE_DATA:
			return verify_code(state,action.data);		
		default:
			return state;
	}
}

// 校验企业名称是否已经存在
function check_company_isexist(state,data){
	
	return Object.assign({},state,{
		checkCompanyFlag:data?"yes":"no"
	});
}

// 获取行业类型
// 过滤出大的行业类型以及小的分类
function get_industry_list(state,data){
	let industry = data && data.list || [],parentIndustry={},resultIndustry=[];
	let allIndustry = [];

	industry.map((item)=>{
		if(!parentIndustry[item.parentID]){
			parentIndustry[item.parentID] = {
				id:item.parentID,
				name:item.parentName,
				subs:[{
					id:item.typeID,
					name:item.typeName
				}]
			}
		}else{
			parentIndustry[item.parentID].subs.push({
				id:item.typeID,
				name:item.typeName
			})
		}

		allIndustry.push({
			id:item.typeID,
			name:item.typeName
		})
	})


	for(let item in parentIndustry){
		resultIndustry.push(parentIndustry[item]);
	}
	
	resultIndustry.unshift({
		id:0,
		name:"全部类型",
		subs:allIndustry
	})

	return Object.assign({},state,{
		industryList:resultIndustry
	});
}

// 获取企业所在网格区域
function get_company_area(state,data,condition){
	let {grids=[]} = state;
	// 下拉框数组
	let newGrids = deepCopy(grids),newData=[];
	// 下拉框联动发生改变是的第几个索引
	let index = condition && condition.index || 0,

		selectedId = condition && condition.gridID || "",

		selectedName = condition && condition.gridName || "";

	if(newGrids && newGrids.length){
		newGrids = newGrids.slice(0,parseInt(index)+1);
	}

	// 处理返回的网格
	if(data &&  data.length){
		data.map((d)=>{
			newData.push({
				id:d.gridID,
				name:d.gridName
			})
		})

		newGrids.push({
			selectedId:'',
			selectedName:'',
			subs:newData
		})
	}
	
	// 设置选中的网格id
	newGrids[index]["selectedId"] = selectedId;
	newGrids[index]["selectedName"] = selectedName;


	return Object.assign({},state,{
		grids:newGrids
	})
}

// 获取验证码
function get_verify_code(state,data){
	return Object.assign({},state)
}

//企业注册 
function company_register(state,data){
	if(data&&data.id){
		openAlert(true,"注册成功");
	}else{
		openAlert(false,"注册失败："+data.msg);
	}

	return Object.assign({},state);
}

// 验证邀请码
function verify_code(state,data){
	let personMsg ="";

	if(!data){
		personMsg = "您输入的手机号或邀请码不正确,请确认";
	}

	return Object.assign({},state,{personMsg});
}