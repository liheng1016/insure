import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./acceptinsurance.css";
import Input from "@stararc-component/input";
import Select from "@stararc-component/select";
import Button from "@stararc-component/button";
import Pagination from "@stararc-component/pagination";
import DatePicker from "@stararc-insurance/date-picker";
// import ExportComponent from "../../../component/Export";

import ExportComponent from "@stararc-insurance/export-file";


import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import Action from "../../model/insurInfo/action";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

/**
 * 承保主体
 */
class AcceptInsurance extends Component{
	constructor(props){
		super(props)
		this.state={
			status:[{
				id:1,
				name:"脱保"
			},{
				id:2,
				name:"在保"
			},{
				id:3,
				name:"待出单"
			}],
			exportData:{}
		}
	}	
	render(){
		return(
			<div className={style["acceptinsurance_wrap"]}>
				<LayoutHeader styleCss={{height:135}}>
					<AcceptInsuranceTitle 
						ref="q" 
						{...this.props}
						onClick={e=>this.onClick()} 
						exportData={this.state.exportData}
						getExportData={e=>this.getExportData()}>
					</AcceptInsuranceTitle>	
				</LayoutHeader>
				<LayoutContent styleCss={{top:135}}>
					<AcceptInsuranceTable {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<AcceptInsuranceFoot {...this.props} pageGoTo={(page)=>this.pageGoTo(page)}/>
				</LayoutFooter>
			</div>
		)
	}

	getExportData(){
		let ops = this.getOps();

		ops.show_page = 2;

		this.getList(ops);
	}
	dealExportData(exportdata=[]){
		let content=[],
		 	title=getCommonTableTitle(),
		 	filename="承保保单信息",
			status={
				1:"脱保",
				2:"在保 ",
				3:"待出单"
			};

		exportdata.map((item,index)=>{
			content.push([
				item['apply_number'],
				item['apply_company_name'],
				item['company_name'],
				item['insurance_number'],
				item['grid_name'],
				item['type_name'],
				status[item['status']],
				item['insurance_company'],
				item['start_date']?getFormatData(item['start_date']):"",
				item['done_at']?getFormatData(item['done_at']):""
			])
		});

		this.setState({
			exportData:{
				filename:filename,
				title:title,
				content:content
			}
		})

	}
	onClick(){
		let params = this.getOps();
		this.getList(params);
	}
	pageGoTo(page){
		let params = this.getOps(page);
		this.getList(params);
	}
	getOps(page="1"){
		let search = this.refs.q.getValue();
		return {
			...search,
			count:10,
			page:page,
		}
	}
	getList(params={}){
		let {get_list} = this.props;
		get_list(params);
	}
	componentDidMount(){
		let {get_grid_list,get_industry_list} = this.props;
		get_grid_list();
		get_industry_list();
		this.getList(this.getOps());
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.exportList != this.props.exportList){
			this.dealExportData(nextProps.exportList);
		}
	}
};

/**
 * 搜索
 */
export class AcceptInsuranceTitle extends Component{
	constructor(props){
		super(props)
		this.state={
			status:[{
				id:1,
				name:"脱保"
			},{
				id:2,
				name:"在保"
			},{
				id:3,
				name:"待出单"
			}]
		}
	}		
	render(){
		let InputStyle={width:'58%',float:'left',marginTop:'3px'};
		let SelectStyle={width:'100%',float:'left',marginTop:'3px'};
		let button={
			ButtonStyle:{width:'60px',float:'right',background:'#efc420'},
			SearchStyle:{width:'60px',float:'right',background:'#0093e1',marginLeft:'10px'},
			SetStyle:{width:'95px',float:'right',background:'#eec420',marginLeft:'10px'},
			ExportStyle:{width:'60px',float:'right',background:'#f7a712',marginLeft:'10px'}
		};
		let DateStyle={
			width:'45%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			textAlign:'center',
			color:'#666',
			marginTop:'2px'
		};
		
		return(
			<div className={style["title_wrap"]}>
				<div className={style["titlt--top"]}>
					<span className={style["number_of_policy"]}>
						<span className={style["name"]}>投保单号/保单号 : </span>
						<Input ref="q_number" styleCss={InputStyle}/>
					</span>
					<span className={style["number_of_policy"]}>
						<span className={style["name"]}>投保人/被保人 : </span>
						<Input ref="q_name" styleCss={InputStyle}/>
					</span>
					<span className={style["number_of_policy"]}>
						<span className={style["name"]}>所属地区 : </span>
						<span className={style["area"]}>
							<Select styleCss={SelectStyle} ref="grid_id" options={this.props.gridList}>
							</Select>
						</span>
					</span>
				</div>

				<div className={style["titlt--top"]}>
					<span className={style["number_of_policy"]}>
						<span className={style["name"]}>行业类型 : </span>
						<span className={style["area"]}>
							<Select styleCss={SelectStyle} ref="type_id" options={this.props.industryList}>
							</Select>
						</span>
					</span>
					<span className={style["number_of_policy"]}>
						<span className={style["name"]}>投保状态 : </span>
						<span className={style["area"]}>
							<Select styleCss={SelectStyle} ref="status" options={this.state.status}>
							</Select>
						</span>
					</span>
					<span className={style["number_of_policy--data"]}>
						<span className={style["insurance-name"]}>保险时间 : </span>
						<span className={style["insurance-name_time"]}>
							<DatePicker ref="since_at" placeholder={"保险起期"} inputCss={DateStyle}/>
			                <span className={style["separator"]}>~</span>
			                <DatePicker ref="max_at"  placeholder={"保险止期"}inputCss={DateStyle}/>
						</span>
					</span>
				</div>
				<div className={style["titlt--top"]}>
					
					<span className={style["export--button"]}>
						<ExportComponent 
							createFilePath={"/Export/exportDataToCSV"}
							getFilePath={"/Export/getFile"}
							onClick={this.props.getExportData} 
							exportData={this.props.exportData}>
						</ExportComponent>
					</span>
					<Button styleCss={button.SetStyle} text={"创建新保单"} onClick={e=>this.go_to_add()}/>
					<Button styleCss={button.SearchStyle} text={"搜索"} onClick={this.props.onClick}/>
					{/*<Button styleCss={button.ButtonStyle} text={"重置"}/>*/}
				</div>
			</div>
		)
	}
	go_to_add(){
		this.context.router.push("/acceptInsurance/add");
	}
	getValue(){
		let result = {},ref=this.refs;
		for(let r in ref){
			result[r] = ref[r].getValue();
		}
		return result;
	}

}
/**
 * 内容
 */
export class AcceptInsuranceTable extends Component{
	render(){
		return(
			<div className={style["table-wrap"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]} >
					    <th>投保单号</th>
					    <th>投保人</th>
					    <th>被保人</th>
					    <th>保单号</th>
					    <th>所属地区</th>
					    <th>行业类型</th>
					    <th>投保状态</th>
					    <th>承保公司</th>
					    <th>保险起期</th>
					    <th>保险止期</th>
					</tr>
				</thead>
				<tbody>
					{this.getTrContentList()}
				</tbody>	  
				</table>
			</div>
		)
	}

	getTrContentList(){
		let {lists=[]} = this.props,
			status={
				1:"脱保",
				2:"在保 ",
				3:"待出单"
			};

		return lists.map((l,key)=>{
			return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.go_to_detail(l.id)}>
					<td title={l.apply_number}>{l.apply_number}</td>
					<td title={l.apply_company_name}>{l.apply_company_name}</td>
					<td title={l.company_name}>{l.company_name}</td>
					<td title={l.insurance_number}>{l.insurance_number}</td>
					<td title={l.grid_name}>{l.grid_name}</td>
			     	<td title={l.type_name}>{l.type_name}</td>
			     	<td title={status[l.status]}>{status[l.status]}</td>
					<td title={l.insurance_company}>{l.insurance_company}</td>
					<td title={l.start_date?getFormatData(l.start_date):""}>{l.start_date?getFormatData(l.start_date):""}</td>
					<td title={l.done_at?getFormatData(l.done_at):""}>{l.done_at?getFormatData(l.done_at):""}</td>
				</tr>
			)
		})
	}

	go_to_detail(id){
		this.context.router.push("/acceptInsurance/detail/"+id);
	}
}
/**
 * 底部
 */
 export class AcceptInsuranceFoot extends Component{
	render(){
		return(
			<div className={style["pagination"]}>
				<Pagination 
					currentPage={this.props.condition.page} 
					totalPage={this.props.condition.totalPage} 
					pageGoTo={(page)=>this.props.pageGoTo(page)}>
				</Pagination>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
    return {
    	lists:state.insurInfoReducer.List,
    	condition:state.insurInfoReducer.condition,
    	gridList:state.insurInfoReducer.gridList,
    	industryList:state.insurInfoReducer.industryList,
    	exportList:state.insurInfoReducer.exportList
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取承保列表申请
        get_list: (obj) => {
            dispatch(Action.list(obj))
        },
        // 获取网格的子网格
        get_grid_list: (obj) => {
            dispatch(Action.grid_list(obj))
        },
        // 获取行业类型
        get_industry_list: (obj) => {
            dispatch(Action.industry_list(obj))
        }
    }
};        

function getCommonTableTitle(){
	return[
		"投保单号",
	    "投保人",
	    "被保人",
	    "保单号",
	    "所属地区",
	    "行业类型",
	    "投保状态",
	    "承保公司",
	    "保险起期",
	    "保险止期"
	]
}


AcceptInsuranceTable.contextTypes = {
    router: React.PropTypes.object.isRequired
}

AcceptInsuranceTitle.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInsurance);
