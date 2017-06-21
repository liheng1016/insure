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
 * 风险清单主体
 * 
 */
class RiskDetailedList extends Component{
	render() {
		return (
			<div className={style["settlementwarp"]}>
				<SearchPart ref={'q'} {...this.props} onClick={e=>this.onClick()}/>
				<TableContent {...this.props}/>
				<SettlementFooter {...this.props} 
				pageGoTo={(page)=>this.pageGoTo(page)}/>
			</div>
		);
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
			count:20,
			page:page
		}
	}
	getList(params={}){
		let {getList} = this.props;

		getList(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/**
 * 顶部搜索
 */
export class SearchPart extends Component{
	render() {
		let ButtonStyle = {width:"80px",float:"right",marginRight:'10px'}
		return (
			<div className={style["settlement-header"]}>
				<div className={style["search_top--warp"]}>
					<Button styleCss={ButtonStyle} text={"搜索"} onClick={this.props.onClick}/>
					<span className={style["search_wrap"]}>
						<Input ref="input" type="text" placeholder="请输入企业名称" onChange={this.props.onChange}/>
					</span>
				</div>
			</div>
		);
	}
	getValue(){
		return {
			q:this.refs.input.getValue(),
		}
	}
}

/*table*/
export class TableContent extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.headArr=[
	  		"企业名称",
	  		"风险",
	  		"已反馈风险",
	  		"未反馈风险",
	  		"最近查勘时间"
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
		
		return	lists.map((l,key)=>{
			return(
				<tr  key={key} onClick={e=>this.go_to_list(l)}>
					<td title={l.company_name}>{l.company_name}</td>
					<td title={l.total}>{l.total}</td>
					<td title={l.feebback_total}>{l.feebback_total}</td>
			     	<td title={l.un_feedback_total}>{l.un_feedback_total}</td>
					<td title={getFormatData(l.created_at)}>{getFormatData(l.created_at)}</td>
				</tr>
			)
		})
	}

	//点击跳转到企业的风险列表
	go_to_list(l){
		this.context.router.push("/riskDetailedList/"+l.company_id)
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
    	condition:state.detailedListReducer.condition,
    	lists:state.detailedListReducer.totalList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getList: (obj) => {
            dispatch(Action.get_list(obj))
        }
        
    }
}
TableContent.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskDetailedList);