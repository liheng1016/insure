import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./risksurvey.css";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import DatePicker from "@stararc-insurance/date-picker";
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
	constructor(props) {
	   super(props);
	   this.state = {
	   		list:[{
	   			number:'1234567',
	   			people:'小红',
	   			product:'手机',
	   			oddnumbers:'1234567',
	   			time:'2017-09-46',
	   			condition:'通过'
	   		}]
	   };
	}


	render() {
		return (
			<div className={style["settlementwarp"]}>
				<LayoutHeader styleCss={{height:"50px"}}>
					<SettlementHeader ref={'q'} {...this.props} onClick={e=>this.onClick()}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"50px"}}>
					<TableContent {...this.props} table={this.state.list}/>
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

		console.log(search)
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
		let SelectStyle={width:'100%',}
		let ButtonStyle={width:'60px',background:'orange',float:'right',marginTop:'10px'}
		let FoundStyle={width:'60px',background:'orange',marginTop:'10px'}
		let DateStyle={
			width:'45%',
			marginTop:'10px',
			height:'30px',
			border:'1px solid #ccc',
			textAlign:'center',
			color:'#666',
			float:'left',
			display:'inline-block'
		}
		let InputStyle={width:'100%',marginTop:'10px',};
		
		return (
			
			<div className={style["settlement-header"]}>

				<div className={style["select-address"]}>
					<span className={style["select-name"]}>所属地区</span>
					<span className={style["select-content"]}>
						<Select styleCss={SelectStyle}>
							<option>佛山</option>
						</Select>
					</span>
				</div>


				<div className={style["settlement-header--select"]}>
					<span className={style["select-name"]}>任务状态</span>
					<span className={style["select-content"]}>
						<Select styleCss={SelectStyle} ref={'status'} >
							
						</Select>
					</span>
				</div>

				<div className={style["settlement-header--time"]}>
					<span className={style["select-name"]}>查勘时间</span>
					<span className={style["select-content"]}>
						<DatePicker ref={'since_at'} inputCss={DateStyle}/>
						<span className={style["separator"]}>~</span>
						<DatePicker ref={'max_at'} inputCss={DateStyle}/>
					</span>
				</div>

				<div className={style["settlement-header--input"]}>
					<span className={style["input-content"]}>
						<Input ref={'q'} placeholder={"企业名称关键字"} styleCss={InputStyle} />
					</span>
					<Button styleCss={ButtonStyle} text={'搜索'} />
				</div>
				<div className={style["settlement-header--button"]}>
					
					<Button styleCss={ButtonStyle} text={'重置'}/>
					<Button styleCss={FoundStyle} text={'创建'}/>
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
}

/*table*/
export class TableContent extends Component{
	render() {
		// let list  = this.props.table;
		// console.log(list,'所有数据')
		return (
			<div className={style["table--list"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]} >
					    <th>企业名称</th>
					    <th>所属地区</th>
					    <th>行业类型</th>
					    <th>任务状态</th>
					    <th>查勘时间</th>
					    <th>发现风险</th>
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
		console.log(lists,'风险数据');
		let status = {
			1:'待处理任务',
			3:'已完成',
			4:'限期整改',
			9:'处理中'

		};
		
		return	lists.map((l,key)=>{
				return(
				<tr className={style["table_row"]} key={key} >
					<td>{l.company_name}</td>
					<td>{l.grid_name}</td>
					<td>{l.type_name}</td>
					<td>{status[l.status]}</td>
					<td>{getFormatData(l.changed_at)}</td>
			     	<td>{l.hidden_danger_total}</td>
				</tr>
				)
		})
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

export default connect(mapStateToProps, mapDispatchToProps)(RiskSurvey);