import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./list.css";
import Button from "@stararc-component/button";
import Pagination from "@stararc-component/pagination";

import Action from "../model/action";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';

/*保险产品管理主体*/
export class ManagementList extends Component{
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:"50px"}}>
					<ManagementButton {...this.props}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<ManagementContent {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<SettlementFooter
						{...this.props} 
						pageGoTo={(page)=>this.pageGoTo(page)}>
					</SettlementFooter>	
				</LayoutFooter>
			</div>
		);
	}
	pageGoTo(page){
		let params = this.getOps(page);
		this.getList(params);
	}
	getOps(page="1"){
		return {
			count:20,
			page:page
		}
	}
	getList(params={}){
		let {product_list} = this.props;
		product_list(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/*顶部按钮*/
export class ManagementButton extends Component{
	render() {
		let ButtonStyle = {width:"60px",background:'#f9d865',color:'white'};
		return (
			<div className={style["list_button"]}>
				<Button 
					onClick={e=>this.go_to_add()}
					styleCss={ButtonStyle}
					text={"新建"}/>
			</div>
		);
	}
	go_to_add(){
		this.context.router.push("/insuranceProduct/add");
	}
}

/*主体内容*/
export class ManagementContent extends Component{
	render() {
		let lists = this.props.lists||[];

		return (
			<div className={style["table--list"]}>
				<table className={style["table--main"]}>
					<thead>
						<tr className={style["table_title"]} >
						    <th>保险产品名称</th>
						    <th>保险经纪公司</th>
						    <th>承保公司</th>
						    <th>授权地区</th>
						    <th>状态</th>
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
		let {lists=[]} = this.props;

		let status={
			"1":"正常",
			"2":"停售"
		};

		return	lists.map((l,key)=>{
			return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.go_to_detail(l)}>
					<td title={l.name}>{l.name}</td>
					<td title={l.broker_name}>{l.broker_name}</td>
					<td title={l.organ_name}>{l.organ_name}</td>
					<td title={l.grid_names}>{l.grid_names}</td>
			     	<td title={status[l.status]} style={{color:l.status==2?"#f55d4f":"black"}}>{status[l.status]}</td>
				</tr>
			)
		})
	}
	go_to_detail(l){
		this.context.router.push("/insuranceProduct/detail/"+l.insurance_product_id);
	}
}


/*footer*/
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
    	condition:state.productReducer.productCondition,
    	lists:state.productReducer.productList
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        product_list: (obj) => {
            dispatch(Action.product_list(obj))
        }
    }
};

ManagementContent.contextTypes={
    router: React.PropTypes.object.isRequired
}

ManagementButton.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagementList);

