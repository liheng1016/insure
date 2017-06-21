import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./insuranceInformation.css";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Pagination from "@stararc-component/pagination";
import DatePicker from "@stararc-insurance/date-picker";
import Action from "../../model/acceptInsur/action";

import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import{
	LayoutHeader,
	LayoutFooter,
	LayoutContent
} from "@stararc-insurance/layout";

/**
 * 主体
 */
class InsuranceInformation extends Component{
	constructor(props){
		super(props);
		this.state={
			hasDone:false
		}
	}
	render(){
		return(
			<div className={style["InsuranceMain"]}>
				{/*<InsuranceTabNav onClick={(type)=>this.clickHandle(type)}/>*/}
				{
					this.state.hasDone ?
					<HasDoneInsurComponent {...this.props} clickHandle={(type)=>this.clickHandle(type)}/>
					:
					<HasNotDoneInsurComponent {...this.props} clickHandle={(type)=>this.clickHandle(type)} />
				}
			</div>
		)
	}
	clickHandle(type){
		let hasDone = type =="done"?true : false;
		this.setState({
			hasDone:hasDone			
		})
	}
}

/** * 待操作部分*/
export class HasNotDoneInsurComponent extends Component{
	render(){
		return(
			<div>
				<LayoutHeader styleCss={{height:"100px",padding:"15px"}}>
					<InsuranceTabNav onClick={(type)=>this.props.clickHandle(type)} hasDone={"not"}/>
					<InsuranceTabSearch ref="q" onClick={e=>this.onClick()} {...this.props}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"100px"}}>
					<InsuranceTabTable  {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<InsuranceTabFoot {...this.props} pageGoTo={(page)=>this.pageGoTo(page)}/>
				</LayoutFooter>				
			</div>
		)
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
			count:25,
			page:page,
			flag:"not",//未操作
			status:"1"
		}
	}
	getList(params={}){
		let {get_list} = this.props;
		get_list(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/** * 已操作部分*/
export class HasDoneInsurComponent extends Component{
	render(){
		return(
			<div >
				<LayoutHeader styleCss={{height:"100px",padding:"15px"}}>
					<InsuranceTabNav onClick={(type)=>this.props.clickHandle(type)} hasDone={"done"}/>
					<TabSearch ref="q" onClick={e=>this.onClick()} {...this.props}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:"100px"}}>
					<TabTable {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<TabFoot {...this.props} pageGoTo={(page)=>this.pageGoTo(page)}/>
				</LayoutFooter>
			</div>
		)
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
			page:page,
			status:search.status||'2,3',
			flag:"done"//已操作
		}
	}
	getList(params={}){
		let {get_list} = this.props;
		get_list(params);
	}
	componentDidMount(){
		this.getList(this.getOps());
	}
}

/*已操作搜索*/
export class TabSearch extends Component{
	constructor(props) {
	  	super(props);
	    this.state = {
	    	options:[{
	    		id:2,
	    		name:"拒绝投保"
	    	},{
	    		id:3,
	    		name:"同意投保"
	    	}],
	    	defaultStatus:"",
	    	defaultSinceAt:"",
	    	defaultMaxAt:"",
	    	defaultQ:""
	    };
	}
	render(){
		let SelectStyle={
			width:'100%',
			float:'left',
		},InputStyle={
			width:'100%',
			float:'left',
		},ButtonStyle={
			width:'60px',
			float:'left',
			// background:'#f6a810',
		},DateStyle={
			width:'45%',
			float:'left',
			height:'30px',
			marginTop:'10px',
			border:'1px solid #ccc',
			textAlign:'center',
			color:'#666'
		}
		return(
			<div className={style["tab_search"]}>
				<div className={style["select"]}>
					<span>审核结果</span>
					<div>
						<Select 
							ref="status" 
							styleCss={SelectStyle} 
							defaultValue={this.state.defaultStatus}
							options={this.state.options}>
		            	</Select>
            		</div>
				</div>
				
				<div className={style["time-select"]}>
					<span className={style["time-select_name"]}>审核时间</span>
					<div className={style["time-select_content"]}>
		                <DatePicker 
		                	ref="approval_since_at" 
		                	placeholder={"开始时间"}
		                	defaultValue={this.state.defaultSinceAt} 
		                	inputCss={DateStyle}>
		                </DatePicker>	
		                <span className={style["separator"]}>~</span>
		                <DatePicker 
		                	ref="approval_max_at" 
		                	placeholder={"结束时间"}
		                	defaultValue={this.state.defaultMaxAt} 
		                	inputCss={DateStyle}>
		                </DatePicker>	
                    </div>
				</div>
				
				<div className={style["tab-Input"]}>
					<div>
						<Input styleCss={InputStyle} ref="q" defaultValue={this.state.defaultQ} placeholder="企业名称关键字"/>
               		</div>
				</div>
				<div className={style["tab-Button"]}>
					<div>
						<Button
							onClick={this.props.onClick} 
							styleCss={ButtonStyle}
							text={"搜索"}/>
               		</div>
				</div>
				
				{/*<div className={style["tab-return"]}>
					<div>
						<Button
							onClick={e=>this.clearParams()} 
							styleCss={ButtonStyle}
							text={"重置"}/>
               		</div>
				</div>*/}
			</div>
		)
	}
	clearParams(){
		this.setState({
			defaultStatus:"",
	    	defaultSinceAt:"",
	    	defaultMaxAt:"",
	    	defaultQ:""
		})
	}
	getValue(){
		let refs = this.refs;
		return {
			status:refs.status.getValue(),
			approval_since_at:refs.approval_since_at.getValue(),
			approval_max_at:refs.approval_max_at.getValue(),
			q:refs.q.getValue()
		}
	}	
}

/*已操作Table*/
export class TabTable extends Component{
	render(){
		return(
			<div className={style["tab_Table"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]}>
					    {/*<th>序号</th>*/}
					    <th>企业名称</th>
					    <th>所属地区</th>
					    <th>审核结果</th>
					    <th>审核人</th>
					    <th>审核时间</th>
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
		let {doneList=[]} = this.props;
		let statu={
			2:"拒绝投保",
			3:"同意投保"			
		};

		return doneList.map((l,key)=>{
			return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.go_to(l.effect_insuce_id)}>
					{/*<td></td>*/}
					<td title={l.effect_insuce_name}>{l.effect_insuce_name}</td>
					<td title={l.effect_grid_name}>{l.effect_grid_name}</td>
					<td title={statu[l.status]}>{statu[l.status]}</td>
					<td title={l.approval_user_name}>{l.approval_user_name}</td>
					<td title={getFormatData(l.approval_at)+" "+getHoursMinutes(l.approval_at)}>{getFormatData(l.approval_at)+" "+getHoursMinutes(l.approval_at)}</td>
				</tr>
			)
		})
	}
	go_to(company_id){
		this.context.router.push('/insuranceInformation/detail/'+company_id);
	}
};


/** * tab标题切换*/
export class InsuranceTabNav extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		hasDone:true
	  	};
	}
	render(){
		return(
			<ul className={style["tab_nav"]}>
				<li className={this.props.hasDone=="not" ? style["tab_nav-active"] : ''} 
					onClick={e=>this.props.onClick('not')}>
					待操作
				</li>
				<li className={this.props.hasDone=="done" ? style["tab_nav-active"] : ''} 
					onClick={e=>this.props.onClick('done')}>
					已操作
				</li>
			</ul>
		)
	}
	clickHandle(value){
		let {onClick} = this.props;
		this.setState({
			hasDone:value=="not"	
		},function(){
			onClick && onClick(value)
		})	
	}

}


/**
 * 待操作search搜索*/
export class InsuranceTabSearch extends Component{
	render(){
		let SelectStyle={
			width:'100%',
			float:'left',
		},InputStyle={
			width:'100%',
			float:'left',
		},ButtonStyle={
			width:'60px',
			float:'left',
			// background:'#f6a810',
		},DateStyle={
			width:'45%',
			float:'left',
			height:'30px',
			marginTop:'10px',
			border:'1px solid #ccc',
			textAlign:'center',
			color:'#666'
		};

		return(
			<div className={style["tab_search"]}>
				<div className={style["select"]}></div>
				
				<div className={style["time-select"]}>
					<span className={style["time-select_name"]}>申请时间</span>
					<div className={style["time-select_content"]}>
		                <DatePicker ref="apply_since_at" placeholder={"开始时间"}  inputCss={DateStyle}/>
		                <span className={style["separator"]}>~</span>
		                <DatePicker ref="apply_max_at"  placeholder={"结束时间"} inputCss={DateStyle}/>
                    </div>
				</div>
				
				<div className={style["tab-Input"]}>
					<div>
						<Input ref="q" styleCss={InputStyle} placeholder="企业名称关键字"/>
               		</div>
				</div>
				<div className={style["tab-Button"]}>
					<div>
						<Button
							onClick={this.props.onClick} 
							styleCss={ButtonStyle}
							text={"搜索"}/>
               		</div>
				</div>
				
				{/*<div className={style["tab-return"]}>
					<div>
						<Button 
							styleCss={ButtonStyle}
							text={"重置"}/>
               		</div>
				</div>*/}
			</div>
		)
	}
	getValue(){
		let  refs = this.refs;
		return {
			q:refs.q.getValue(),
			apply_since_at:refs.apply_since_at.getValue(),
			apply_max_at:refs.apply_max_at.getValue()
		}
	}
}


/**
 * 待操作部分Table内容*/
export class InsuranceTabTable extends Component{
	render(){
		return(
			<div className={style["tab_Table"]}>
				<table className={style["table--main"]}>
				<thead>
					<tr className={style["table_title"]}>
					    {/*<th>序号</th>*/}
					    <th>企业名称</th>
					    <th>所属地区</th>
					    <th>行业类型</th>
					    <th>申请时间</th>
					    <th>脱保时间</th>
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
		return lists.map((l,key)=>{
			return(
				<tr className={style["table_row"]} key={key} onClick={e=>this.go_to(l.effect_insuce_id)}>
					{/*<td></td>*/}
					<td title={l.effect_insuce_name}>{l.effect_insuce_name}</td>
					<td title={l.effect_grid_name}>{l.effect_grid_name}</td>
					<td title={l.type_name}>{l.type_name}</td>
					<td title={getFormatData(l.apply_at)+" "+getHoursMinutes(l.apply_at)}>{getFormatData(l.apply_at)+" "+getHoursMinutes(l.apply_at)}</td>
			     	<td title={l.done_at?getFormatData(l.done_at)+" "+getHoursMinutes(l.done_at):""}>{l.done_at?getFormatData(l.done_at)+" "+getHoursMinutes(l.done_at):""}</td>
				</tr>
			)
		})
	}
	go_to(company_id){
		this.context.router.push('/insuranceInformation/detail/'+company_id);
	}
};


/** * 未操作footer*/
export class InsuranceTabFoot extends Component{
	render(){
		return(
			<div className={style["pagination"]}>
				<Pagination 
					currentPage={this.props.condition.page} 
					totalPage={this.props.condition.totalPage} 
					pageGoTo={(page)=>this.props.pageGoTo(page)}>
				</Pagination>
			</div>
		)
	}
}

/** * 已操作footer*/
export class TabFoot extends Component{
	render(){
		return(
			<div className={style["pagination"]}>
				<Pagination 
					currentPage={this.props.doneCondition.page} 
					totalPage={this.props.doneCondition.totalPage} 
					pageGoTo={(page)=>this.props.pageGoTo(page)}>
				</Pagination>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
    return {
    	lists:state.acceptInsurReducer.List,
    	condition:state.acceptInsurReducer.condition,
    	doneList:state.acceptInsurReducer.doneList,
    	doneCondition:state.acceptInsurReducer.doneCondition
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取投保申请
        get_list: (obj) => {
            dispatch(Action.list(obj))
        }
    }
};        

InsuranceTabTable.contextTypes = {
    router: React.PropTypes.object.isRequired
}
TabTable.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceInformation);
