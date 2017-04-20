import React,{Component} from "react";
import { connect } from 'react-redux';

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '../../component/layout';
import style from "./index.css";

import Action from './model/riskwarning/action';

import GridLayout from "@stararc-component/gridlayout";
import Select from "@stararc-component/select";
import Pagination from "@stararc-component/pagination";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import {
	getFormatData,
	getHoursMinutes
} from "../../helper/function";


class RiskWarning extends Component{
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:"50px"}}>
					<SearchPie {...this.props} ref="q" onClick={e=>this.onClick()}></SearchPie>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<Table lists={this.props.lists}/>
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

		console.log(search)
		return {
			q:search.q,
			type:search.type,
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
	render() {
		let buttonStyle={
			background:"#f6a811",
			color:"white",
		}

		return (
			<div className={style["search--pie"]}>
				<form  onSubmit={this.props.onClick}>
					<GridLayout width="2" offset="4">
						<Select options={[{id:1,name:"ceshi"}]} ref="select"></Select>
					</GridLayout>
					<GridLayout width="0.2">&nbsp;</GridLayout>
					<GridLayout width="3">
						<Input ref="input" placeholder="请输入警示标题关键字" onChange={this.props.onChange}/>
					</GridLayout>
					<GridLayout width="1">
						<Button text="搜索" onClick={this.props.onClick}/>
					</GridLayout>
				</form>
				<GridLayout width="0.8">&nbsp;</GridLayout>
				<GridLayout width="1">
					<Button text={"创建"} styleCss={buttonStyle}></Button>
				</GridLayout>
			</div>
		);
	}
	getValue(){
		return {
			q:this.refs.input.getValue(),
			type:this.refs.select.getValue()
		}
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
					<tr className={style["table_title"]}>
					    <th>警示标题</th>
					    <th>状态</th>
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
				<tr className={style["table_row"]} key={key}>
					<td>{l.title}</td>
					<td>{l.dress}</td>
					<td>{this.getSendArea(l.grid_name)}</td>
					<td>{l.send_object}</td>
					<td>{getFormatData(l.create_at)+" " +getHoursMinutes(l.create_at)}</td>
			     	<td><a href="#">删除</a></td>
				</tr>
				)
		})
	}
	getSendArea(areas=[]){
		areas = areas || [];
		return areas.join("|")
	}
}

let mapStateToProps = (state) => {
    return {
    	condition:state.riskwarningReducer.condition,
    	lists:state.riskwarningReducer.List
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getList: (obj) => {
            dispatch(Action.list(obj))
        },
        // deleteUser: (obj)=>{
        //     dispatch(Action.delete(obj))
        // }
    }
}

// RiskWarning.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(RiskWarning);
