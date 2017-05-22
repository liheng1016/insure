import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./claimmanagement.css";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import DatePicker from "@stararc-insurance/date-picker";
import Pagination from "@stararc-component/pagination";

import Action from "../model/claim/action";
import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';

/**主体**/
class SettlementWarp extends Component{
	render() {
		return (
			<div className={style["settlementwarp"]}>
				<LayoutHeader styleCss={{height:"50px"}}>
					<SettlementHeader 
						ref={'q'} 
						{...this.props} 
						onClick={e=>this.onClick()}>
					</SettlementHeader>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<TableContent 
						{...this.props}>
					</TableContent>
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

/*顶部  select input*/
export class SettlementHeader extends Component{
	render() {
		let SelectStyle={
				width:'100%'
		};
			
		let ButtonStyle={
				width:'30%',
				background:'#3fafef',
				float:'left',
				marginTop:'10px'
		};

		let FoundStyle={
				width:'60px',
				background:'orange',
				float:'right',
				marginTop:'10px'
		};

		let DateStyle={
				width:'45%',
				marginTop:'10px',
				height:'30px',
				border:'1px solid #ccc',
				textAlign:'center',
				color:'#666',
				float:'left',
				display:'inline-block'
		};

		let ResettStyle={
			width:'60px',
			background:'#3fafef',
			float:'left',
			marginTop:'10px'
		};

		let InputStyle={
				width:'100%',
				marginTop:'10px'
		};

		let options=[{
				id:'1',
				name:'报案'
			},{
				id:'2',
				name:'定损'
			},{
				id:'3',
				name:'结案'
			},{
				id:'4',
				name:'销案'
		}];

		return (
			<div className={style["settlement-header"]}>
				<div className={style["settlement-header--select"]}>
					<span className={style["select-name"]}>报案状态</span>
					<span className={style["select-content"]}>
						<Select styleCss={SelectStyle} ref={'status'} options={options}>
						</Select>
					</span>
				</div>

				<div className={style["settlement-header--time"]}>
					<span className={style["select-name"]}>报案时间</span>
					<span className={style["select-content--data"]}>
						<DatePicker ref={'since_at'} inputCss={DateStyle} placeholder="开始时间"/>
						<span className={style["separator"]}>~</span>
						<DatePicker ref={'max_at'} inputCss={DateStyle} placeholder="结束时间"/>
					</span>
				</div>

				<div className={style["settlement-header--input"]}>
					<span className={style["input-content"]}>
						<Input ref={'q'} placeholder={"投保单号/被保险人"} styleCss={InputStyle} />
					</span>
					<Button styleCss={ButtonStyle} text={'搜索'} onClick={this.props.onClick}/>
				</div>
				<div className={style["settlement-header--button"]}>
					{/*<Button styleCss={ResettStyle} text={'重置'}/>*/}
					<Button styleCss={FoundStyle} text={'创建'} onClick={e=>this.go_to_add()}/>
				</div>
			</div>
		);
	}

	getValue(){
		return {
			q:this.refs.q.getValue(),
			since_at:this.refs.since_at.getValue(),
			max_at:this.refs.max_at.getValue(),
			status:this.refs.status.getValue(),
		}
	}
	go_to_add(){
		this.context.router.push("/claimManagement/add");
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
					    <th>报案号</th>
					    <th>被保险人</th>
					    <th>投保产品</th>
					    <th>投保单号</th>
					    <th>报案时间</th>
					    <th>案件状态</th>
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

		let status = {
			1:'报案',
			2:'定损',
			3:'结案',
			4:'销案'
		};
		
		return	lists.map((l,key)=>{
				return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.goto_Dateil(l)}>
					<td title={l.compensate_number}>{l.compensate_number}</td>
					<td title={l.company_name}>{l.company_name}</td>
					<td title={l.insurance_type}>{l.insurance_type}</td>
					<td title={l.apply_number}>{l.apply_number}</td>
					<td title={getFormatData(l.report_at)}>{getFormatData(l.report_at)}</td>
			     	<td title={status[l.status]}>{status[l.status]}</td>
				</tr>
				)
		})
	}

	//点击跳转详情
	goto_Dateil(l){
		this.context.router.push("/claimManagement/detail/"+l.id)
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
    	condition:state.claimReducer.condition,
    	lists:state.claimReducer.List
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getList: (obj) => {
            dispatch(Action.list(obj))
        }
    }
};

TableContent.contextTypes={
    router: React.PropTypes.object.isRequired
}

SettlementHeader.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SettlementWarp);
