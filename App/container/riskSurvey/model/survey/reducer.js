
import ACTION_TYPE from './actiontype';
import {browserHistory} from "react-router";
import {
	openAlert,
	closeAlert
} from "@stararc-insurance/alert-tips";
let surveyListState={
	List:[],
	condition:{},
	detail:{},
	getdetail:{},
	companylist:[],
	companylistCondition:{},
	industryList:[],
	examinePeople:[]
};
let defaultState={...surveyListState};
export default function  surveyReducer(state=defaultState,action) {
	switch (action.type){
		case ACTION_TYPE.LIST.RECEIVE_DATA:
			return getList(state,action.data,action.condition);
		case ACTION_TYPE.GETDETAIL.RECEIVE_DATA:
			return one_detail(state,action.data); 
		case ACTION_TYPE.ADD.RECEIVE_DATA:
			return get_add(state,action.data); 
		case ACTION_TYPE.GET_RISK_COMPANY.RECEIVE_DATA:
			return get_risk_company(state,action.data,action.condition);
		case ACTION_TYPE.GET_RISK_TABLE.RECEIVE_DATA:
			return get_risk_table(state,action.data);
		case ACTION_TYPE.GET_RISK_PEOPLE.RECEIVE_DATA:
			return get_risk_people(state,action.data);
			    
		default:
			return state;
	}
}
function getList(state,data,condition){
	return Object.assign({},state,{
		List:data.tasks||[],
		condition:{
            ...condition,
            totalPage:data.total_pages || 1
        }   
	});
}

function one_detail(state,data){
	return Object.assign({},state,{getdetail:data});
}

function get_add(state,data){
	if(data && data.task_id){
		openAlert(true,"创建成功！");
		setTimeout(()=>{
			closeAlert();
			if (process.env.NODE_ENV != 'production') {
				location.href="#/riskSurvey";
			}else{
				browserHistory.push("/riskSurvey");
			}
		},1500);
	}else{
		openAlert(false,"创建失败！");
	}
	return Object.assign({},state,{});
}

function get_risk_company(state,data,condition){
	let companylist = data||[],result=[];
	return Object.assign({},state,{
			companylist:data.list || [],
			companylistCondition:{
		            ...condition,
		            totalPage:data.total_pages || 1
		        } 
		});

}

function get_risk_table(state,data){
	let list = data.list||[],result=[];
	list.map((l)=>{
		result.push({
			id:l.formID,
			name:l.formName
		})
	})
	return Object.assign({},state,{industryList:result});
}
function get_risk_people(state,data){
	let examinePeople = data.list||[],result=[];
	return Object.assign({},state,{examinePeople:data.list||[]});
}
