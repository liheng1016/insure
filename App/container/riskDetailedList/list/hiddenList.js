import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./list.css";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Pagination from "@stararc-component/pagination";
import Action from "../model/detailedList/action";
import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';

import * as table from "../component/table";

/**
 * 风险清单企业主体
 * 
 */
class RiskDetailedList extends Component{
	render() {
		return (
			<div className={style["settlementwarp"]}>
				<GoBack/>
				<TableContent {...this.props}/>
				<SettlementFooter 
					{...this.props} 
					pageGoTo={(page)=>this.pageGoTo(page)}>
				</SettlementFooter>	
			</div>
		);
	}
	pageGoTo(page){
		let params = this.getOps(page);

		this.get_list(params);
	}
	getOps(page="1"){
		let {params} = this.props;

		return {
			count:20,
			page:page,
			company_id:params.id
		}
	}
	get_list(params={}){
		let {get_list} = this.props;

		get_list(params);
	}
	componentDidMount(){
		this.get_list(this.getOps());
	}
}

/**
 * 顶部
 */
export class GoBack extends Component{
	render() {
		let ButtonStyle = {
			width:"80px",
			float:"right",
			marginRight:'10px',
			marginTop:'10px',
			border:'1px solid #0095e2',
			background:"white",
			color:'#0095e2'
		};

		return (
			<div className={style["settlement-header"]}>
				<Button styleCss={ButtonStyle} text={"返回"} onClick={e=>history.go(-1)}/>
			</div>
		);
	}
}

/*table*/
export class TableContent extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.headArr=[
	  		"查勘内容",
	  		"查勘结论",
	  		"企业名称",
	  		"查勘时间",
	  		"风险状态"
	  	];
	}	
	render() {
		return (
			<div className={style["table--list"]}>
				<table.Table>
					<table.Thead headArr={this.headArr}></table.Thead>
					<table.Tbody>
						{this.getTableTr()}
					</table.Tbody>
				</table.Table>
				
			</div>
		);
	}
	getTableTr(){
		let {lists=[]}= this.props;

		let status = {
			1:'已反馈',
			0:'未反馈'
		};
		
		return	lists.map((l,key)=>{
			return(
				<tr  key={key} onClick={e=>this.go_to_list(l)}>
					<td title={l.hidden_danger_name}>{l.hidden_danger_name}</td>
					<td title={l.answer}>{l.answer}</td>
					<td title={l.company_name}>{l.company_name}</td>
					<td title={getFormatData(l.changed_at)}>{getFormatData(l.changed_at)}</td>
			     	<td title={status[l.is_feedback]}>{status[l.is_feedback]}</td>
				</tr>
			)
		})
	}

	//点击跳转到隐患的风险详情
	go_to_list(l){
		this.context.router.push("/riskDetailedList/detail/"+l.id)
	}
}

/**
 * footer
 */
export class SettlementFooter extends Component{
	render() {
		return (
			<LayoutFooter>
				<div className={style["pagination"]}>
					<Pagination 
						currentPage={this.props.condition.page} 
						totalPage={this.props.condition.totalPage} 
						pageGoTo={(page)=>this.props.pageGoTo(page)}>
					</Pagination>
				</div>
			</LayoutFooter>
		);
	}
}





let mapStateToProps = (state) => {
    return {
    	condition:state.detailedListReducer.conditionByCompany,
    	lists:state.detailedListReducer.hiddenListByCompany
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        get_list: (obj) => {
            dispatch(Action.get_list_by_company(obj))
        }
        
    }
}
TableContent.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskDetailedList);