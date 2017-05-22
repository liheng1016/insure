import React,{ Component } from 'react';
import {connect} from 'react-redux';
import{
	Table,
	TableHeader,
	TableBody,
	TableTr,
	TableTd
} from '@stararc-component/table';

import Pagination,{PaginationBox} from "@stararc-component/pagination";

import style from './CompanyList.css';

import {SearchPie,ContainerArea} from './CompanyList';

import{
    timeToString,
    getFormatData
} from '@stararc-insurance/help-tools';

import safeAction from '../model/safe/safe.action'

class InsureComponentList extends Component{
	render() {
		return (
			<div className={style["box"]}>
				<SearchPie  
					ref="q" 
					defaultValue={this.props.condition.q}
					onClick={e=>this.onClick()}>
				</SearchPie>
				<ContainerArea>
					<TableList list={this.props.complist}></TableList>
				</ContainerArea>
				<PaginationBox>
					<Pagination 
						currentPage={this.props.condition.page} 
						totalPage={this.props.condition.totalPage} 
						position={"right"}
						pageGoTo={(page)=>this.pageGoTo(page)}>
					</Pagination>
				</PaginationBox>
			</div>
		);
	}
	onClick(){
		let q = this.refs.q.getValue();

		let params = this.getOps();

		this.getList(params);
		
	}
	pageGoTo(page){
		let params = this.getOps(page);
		
		this.getList(params);
	}
	getOps(page="1"){
		return {
			q:this.refs.q.getValue(),
			count:20,
			page:page
		}
	}
	getList(params={}){
		let {insureCompanyListForMoney} = this.props;

		insureCompanyListForMoney(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/**
 * 企业列表
 */
export class TableList extends Component{
	render() {
		return (
			<div className={style["table__list"]}>
				<Table>
					<TableHeader thArr={getTableHeader()}></TableHeader>
					<TableBody>
						{this.getTrContent()}
					</TableBody>
				</Table>

			</div>
		);
	}
	getTrContent(){
		let {list=[]}= this.props;

		return list.map((l,key)=>{
			return (
				<TableTr key={key}>
					<TableTd text={l.company_name}>{l.company_name}</TableTd>
					<TableTd text={l.insurance_type}>{l.insurance_type}</TableTd>
					<TableTd text={getFormatData(l.insure_date,"-")}>{getFormatData(l.insure_date,"-")}</TableTd>
					<TableTd text={getFormatData(l.done_at,"-")}>{getFormatData(l.done_at,"-")}</TableTd>
					<TableTd text={l.insure_money}>{l.insure_money}</TableTd>
				</TableTr>
			) 
		})
	}
}


/**
 * 获取列表的表头
 * @date   2017-04-10T15:28:04+0800
 * @author liheng
 * @param  {[type]}                 argument [description]
 */
function getTableHeader(argument) {
	return[
		"企业名称",
		"投保产品",
		"保险起期",
		"保险止期",
		"保费（元）"
	]
}

/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        condition:state.safeReducer.insureConditionForMoney,
        complist:state.safeReducer.insureCompanyListForMoney
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        insureCompanyListForMoney:(params)=>{
            dispatch(safeAction.insure_company_list_formoney(params));
        }
    }
};

export default connect(stateMaps,actionMaps)(InsureComponentList)
