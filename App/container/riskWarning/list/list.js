import React,{Component} from "react";
import { connect } from 'react-redux';
import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';

import GridLayout from "@stararc-component/gridlayout";
import Select from "@stararc-component/select";
import Pagination from "@stararc-component/pagination";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";

import style from "./list.css";

import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import Action from '../model/riskwarning/action';

/**
 * 风险警示
 */
class RiskWarning extends Component{
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:"50px"}}>
					<SearchPie {...this.props} ref="q" onClick={e=>this.onClick()}></SearchPie>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<Table  {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<div className={style["pagination"]}>
						<Pagination 
							currentPage={this.props.condition.page} 
							totalPage={this.props.condition.totalPage} 
							pageGoTo={(page)=>this.pageGoTo(page)}>
						</Pagination>
					</div>
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

export class SearchPie extends Component{
	constructor(props) {
	   super(props);
	   this.state = {
		   	options:[{
		   		id:1,
		   		name:"已读"
		   	},{
		   		id:2,
		   		name:"未读"
		   	}],
			buttonStyle:{
				background:"#f6a811",
				color:"white",
			}
	   };
	}
	render() {
		return (
			<div className={style["search--pie"]}>
				<form  onSubmit={this.props.onClick}>
					{
					/*<GridLayout width="2" offset="4">
						<Select options={this.state.options} ref="read_type"></Select>
					</GridLayout>
					<GridLayout width="0.2">&nbsp;</GridLayout>
					*/}
					<GridLayout width="9.2" >
						<Input ref="input" placeholder="警示标题关键字" onChange={this.props.onChange}/>
					</GridLayout>
					<GridLayout width="1">
						<Button text="搜索" onClick={this.props.onClick}/>
					</GridLayout>
				</form>
				<GridLayout width="0.8">&nbsp;</GridLayout>
				<GridLayout width="1">
					<Button text={"创建"} styleCss={this.state.buttonStyle} onClick={e=>this.ceate_warning()}></Button>
				</GridLayout>
			</div>
		);
	}
	getValue(){
		return {
			q:this.refs.input.getValue(),
			// read_type:this.refs.read_type.getValue()
		}
	}
	ceate_warning(){
		this.context.router.push('/riskwarning/add');
	}
}

/**
 * 表格数据
 */
export class Table extends Component{
	render(){
		return(
			<div className={style["table--list"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]} >
					    <th>警示标题</th>
					    {/*<th>状态</th>*/}
					    <th>发送地区</th>
					    <th>发送对象</th>
					    <th>发布时间</th>
					    <th>操 作</th>
					</tr>
				</thead>
				<tbody>
					{this.getTrContent()}
				</tbody>	  
				</table>
			</div>
		)
	}
	getTrContent(){
		let {lists=[]} = this.props;
		return	lists.map((l,key)=>{
				return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.goto_detail(l)}>
					<td title={l.title}>{l.title}</td>
					{/*<td title={l.is_read=="2"?"未读":"已读"}>{l.is_read=="2"?"未读":"已读"}</td>*/}
					<td title={this.getSendArea(l.grid_name)}>{this.getSendArea(l.grid_name)}</td>
					<td title={l.send_object}>{l.send_object}</td>
					<td title={getFormatData(l.create_at)+" " +getHoursMinutes(l.create_at)}>{getFormatData(l.create_at)+" " +getHoursMinutes(l.create_at)}</td>
			     	<td>
			     		{
			     			l.status == 1?
			     			<a href="javascript:;" onClick={(e)=>this.deleteRisk(e,l)}>删除</a>
			     			:<span style={{color:"#ccc"}}>删除</span>
			     		}
			     	</td>
				</tr>
				)
		})
	}
	getSendArea(areas=[]){
		areas = areas || [];
		return areas.join("|")
	}

	// 跳转详情
	goto_detail(l){
		this.context.router.push("/riskwarning/detail/"+l.id)
	}
	// 删除警示
	deleteRisk(e,l){
		e.stopPropagation();
		let {deleteRisk} = this.props;
		if(!confirm("是否要删除该条警示？")){
			return;
		}
		deleteRisk({
			id:l.id
		});
	}
}

let mapStateToProps = (state) => {
    return {
    	condition:state.riskWarningReducer.condition,
    	lists:state.riskWarningReducer.List
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getList: (obj) => {
            dispatch(Action.list(obj))
        },
        deleteRisk: (obj)=>{
            dispatch(Action.delete(obj))
        }
    }
}

SearchPie.contextTypes = {
    router: React.PropTypes.object.isRequired
}

Table.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskWarning);
