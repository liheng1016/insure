import React,{ Component } from 'react';
import {connect} from 'react-redux';

import {SearchPie,ContainerArea} from "./CompanyList"
import Pagination,{PaginationBox} from "@stararc-component/pagination";

import style from './TaskList.css';
import safeAction from '../model/safe/safe.action'

import{
    getFormatData
} from '@stararc-insurance/help-tools';
class TaskList extends Component{
	render() {
		return (
			<div>
				<SearchPie  
					ref="q" 
					defaultValue={this.props.condition.q}
					onClick={e=>this.onClick()}>
				</SearchPie>
				<ContainerArea>
					<TaskListBlock lists={this.props.tasklist} ></TaskListBlock>
				</ContainerArea>
				{
					this.props.tasklist && this.props.tasklist.length?
					<PaginationBox>
						<Pagination 
							currentPage={this.props.condition.page} 
							totalPage={this.props.condition.totalPage} 
							position={"right"}
							pageGoTo={(page)=>this.pageGoTo(page)}>
						</Pagination>
					</PaginationBox>:''
			}
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
			count:10,
			page:page
		}
	}
	getList(params={}){
		let {insureTaskList} = this.props;

		insureTaskList(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
} 

export class TaskListBlock extends Component{
	render() {
		return (
			<ul className={style["clear"]}>
				{this.getContent()}
			</ul>
		);
	}
	
	getContent(listArr){
		let {lists=[]} = this.props;
		
		return lists.map((item,key)=>{
			return	(
				<li className={style["inspect__li"]} key={key} onClick={e=>this.go_to_detail(item)}>
                    <dl>
                        <dt className={style["inspect__title"]}>
                        	{item.task_name}
                        </dt>
                        <dd className={style["inspect__mark"]+" "+style["clear"]}>
                            <span>
                            	<img src={require("./img/map_marker.png")} alt="" />
                            	{item.address}
                            </span>
                        </dd>
                        <dd className={style["inspect__time"]}>
                        	检查时间：<span>{getFormatData(item.changed_at,"-")}</span>
                        </dd>
                        <dd className={style["inspect__man"]}>
                        	检查人：<span>{item.user_name}</span>
                        </dd>
                        {
                        	item.status && item.status=="1"?
	                        <div className={style["inspect__img"]}>
	                        	<img src={require("./img/hidden.png")} alt="" />
	                        </div>:''
                        }
                    </dl>
                </li>
			)	
		})
	}
	go_to_detail(item){
		this.context.router.push("/riskSurvey/detail/"+item.task_id)
	}
}


/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        condition:state.safeReducer.insureTaskCondition,
        tasklist:state.safeReducer.insureTaskList
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        insureTaskList:(params)=>{
            dispatch(safeAction.insure_task_list(params));
        }
    }
};

TaskListBlock.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(stateMaps,actionMaps)(TaskList)



