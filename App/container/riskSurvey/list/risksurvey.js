import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./risksurvey.css";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Pagination from "@stararc-component/pagination";
import Action from "../model/survey/action";
import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';
/**
 * 主体
 * 
 */
class RiskSurvey extends Component{
	render() {
		return (
			<div className={style["settlementwarp"]}>
				<LayoutHeader styleCss={{height:"50px"}}>
					<SettlementHeader ref={'q'} {...this.props} onClick={e=>this.onClick()}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<TableContent {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<SettlementFooter {...this.props} 
					pageGoTo={(page)=>this.pageGoTo(page)}/>
				</LayoutFooter>

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
 * 顶部
 */
/*顶部  select input*/
export class SettlementHeader extends Component{
	render() {
		let InputStyle = {width:'100%',height:"30px"};
		let ButtonStyle = {width:"80px",height:"30px",float:"left",marginRight:'10px'}
		return (
			<div className={style["settlement-header"]}>
			<form  onSubmit={this.props.onClick}>
				<div className={style["search_top--warp"]}>
					<span className={style["search_wrap"]}>
						<Input ref="input" type="text" styleCss={InputStyle} placeholder="请输入企业名称" onChange={this.props.onChange}/>
					</span>
					<Button styleCss={ButtonStyle} text={"搜索"} onClick={this.props.onClick}/>
					<Button styleCss={ButtonStyle} text={"创建"} onClick={e=>this.go_to_add()}/>
				</div>
			</form>

			</div>
		);
	}
	getValue(){
		return {
			q:this.refs.input.getValue(),
			// read_type:this.refs.read_type.getValue()
		}
	}

	go_to_add(){
		this.context.router.push("/riskSurvey/add");
	}
	
}

/*table*/
export class TableContent extends Component{
	render() {
		return (
			<div className={style["table--list"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]} >
					    <th>任务名称</th>
					    <th>所属地区</th>
					    <th>任务状态</th>
					    <th>创建时间</th>
					    <th>查勘时间</th>
					    <th>排查人</th>
					    <th>风险</th>
					</tr>
				</thead>
				<tbody>
					{this.getTableTr()}
				
				</tbody>	  
				</table>
			</div>
		);
	}
	getTableTr(){
		let {lists=[]}= this.props;
		let status = {
			1:'待处理任务',
			3:'已完成',
			4:'限期整改',
			9:'处理中'

		};
		
		return	lists.map((l,key)=>{
				return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.go_to_detail(l)}>
					<td title={l.task_name}>{l.task_name}</td>
					<td title={l.grid_name}>{l.grid_name}</td>
					<td title={status[l.status]}>{status[l.status]}</td>
					<td title={getFormatData(l.created_at)}>{getFormatData(l.created_at)}</td>
					<td title={getFormatData(l.changed_at)}>{getFormatData(l.changed_at)}</td>
			     	<td title={l.user_name}>{l.user_name}</td>
			     	<td title={l.hidden_danger_total}>{l.hidden_danger_total}</td>
				</tr>
				)
		})
	}

	//点击跳转详情
	go_to_detail(l){
		this.context.router.push("/riskSurvey/detail/"+l.task_id)
	}

	
}

/**
 * footer
 */
export class SettlementFooter extends Component{
	render() {
		return (
			<div className={style["pagination"]}>
				<Pagination 
					currentPage={this.props.condition.page} 
					totalPage={this.props.condition.totalPage} 
					pageGoTo={(page)=>this.props.pageGoTo(page)}>
				</Pagination>
			</div>
		);
	}
}





let mapStateToProps = (state) => {
    return {
    	condition:state.surveyReducer.condition,
    	lists:state.surveyReducer.List
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getList: (obj) => {
            dispatch(Action.list(obj))
        }
        
    }
}
TableContent.contextTypes={
    router: React.PropTypes.object.isRequired
}

SettlementHeader.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskSurvey);