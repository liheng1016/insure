import React,{ Component } from 'react';
import {connect} from 'react-redux';
import{
	Table,
	TableHeader,
	TableBody,
	TableTr,
	TableTd
} from '@stararc-component/table';

import Button,{GoBackButton} from '@stararc-component/button';
import Input from '@stararc-component/input';
import GridLayout,{Row} from '@stararc-component/gridlayout';
import Pagination,{PaginationBox} from '@stararc-component/pagination';
import style from './CompanyList.css';
import safeAction from '../model/safe/safe.action';

class ComponentList extends Component{
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
		let {insureCompanyList} = this.props;

		insureCompanyList(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/**
 * 搜索块
 */
export class SearchPie extends Component{
	render() {
		return (
			<div className={style["search__pie"]}>
				<Row>
					<form  onSubmit={this.props.onClick}>
						<GridLayout width="4">
							<Input ref="input" placeholder="企业名称" onChange={this.props.onChange}/>
						</GridLayout>
						<GridLayout width="1">
							<Button text="搜索" onClick={this.props.onClick}/>
						</GridLayout>
					</form>
					<GridLayout width="1" offset="6">
						<GoBackButton />
					</GridLayout>
				</Row>
			</div>
		);
	}

	getValue(){
		return this.refs.input.getValue();
	}
}

/**
 * 内容区
 */
export class ContainerArea extends Component{
	render() {
		return (
			<div className={style["body_content"]}>
				{this.props.children}
			</div>
		);
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
					<TableTd text={l.task_total}>{l.task_total}</TableTd>
					<TableTd text={l.danger_total}>{l.danger_total}</TableTd>
					<TableTd text={l.insure_money}>{l.insure_money}</TableTd>
					<TableTd text={l.score}>{l.score}</TableTd>
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
		"检查任务数（次）",
		"风险总数",
		"保费（元）",
		"企业积分"
	]
}


/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        condition:state.safeReducer.insureCondition,
        complist:state.safeReducer.insureCompanyList
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        insureCompanyList:(params)=>{
            dispatch(safeAction.insure_company_list(params));
        }
    }
};

export default connect(stateMaps,actionMaps)(ComponentList)
