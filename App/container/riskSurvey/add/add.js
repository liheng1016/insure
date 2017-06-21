import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./add.css";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import Textarea from "@stararc-component/textarea";
import GridLayout from "@stararc-component/gridlayout";
import Input from "@stararc-component/input";
import Pagination from "@stararc-component/pagination";
import Action from "../model/survey/action.js";
import {deepCopy,load_script} from "@stararc-insurance/help-tools"; 

class RiskAdd extends Component{
	constructor(props) {
	   super(props);
		this.state={
			value:{}
		}
	}
	render() {
		let CompanyStyle = {width:"110px",height:"30px",background:"#cbcbcb",color:"#fff"};
		return (
			<div className={style["risk_warp--add"]}>
				<div className={style["warp"]}>
					<ButtonBack/>
					<div className={style["content_warp"]}>
						<SelectRisk ref="selectrisk" {...this.props} closeWind={(value)=>this.closeWind(value)}/>
						<TaskName ref="taskusername" defaultValue={this.state.value} {...this.props}/>
						<RiskTable ref="risktable" {...this.props}/>
						<TaskPeople ref="taskpeople" examinePeople={this.props.examinePeople} {...this.props}/>
						<TaskDescribe ref="task_context" {...this.props}/>
					</div>
						<SureButton closeMoreHandle={(e)=>this.submitHandle()}/>
				</div>
			</div>
		);
	}
	submitHandle(){
		let {risk_add} = this.props;
		let refs = this.refs,paramsFeild={};
		for(let r in refs){
			paramsFeild = Object.assign(paramsFeild,paramsFeild,{...refs[r].getValue()});
		}
		if(!paramsFeild.isValueRisk || !paramsFeild.isValueName || !paramsFeild.isValue || !paramsFeild.isuser){
			return;
		}
		risk_add(paramsFeild);
	}

	closeWind(value={}){
		this.setState({
			value
		})
	}

	componentDidMount(){
		let {get_risk_company,get_risk_table,get_risk_people} = this.props;
		get_risk_company({
			count:10,
		});
		get_risk_table();
		get_risk_people()
	}
}

/*返回组件*/
class ButtonBack extends Component{
	render() {
		let ButtonStyle = {width:"80px",height:"30px",float:"right",marginRight:'10px',background:'white',border:"1px solid #0095e2",color:"#0095e2"};
		return (
			<span className={style["title"]}>
				<Button 
					styleCss={ButtonStyle} 
					text={"返回"} 
					onClick={e=>history.go(-1)}>
				</Button>
			</span>
		);
	}
}

/*风险查勘组件*/
class SelectRisk extends Component{
	constructor(props) {
	   super(props);
		this.state={
			isWind:false,
			value:[],
			isValueRisk:true
		}
	}
	render() {
		let {companylist=[]}= this.props;
		let CompanyStyle = {width:"110px",height:"30px",background:"#cbcbcb",color:"#fff"};
		return (
			<div className={style["content_p"]}>
				<span className={style["content_name"]}>选择风勘企业</span>
				<span className={style["content_button"]}>
					{/*{
						this.state.value.organName?<span className={style["sel_com"]}>
						<span className={style["img_warp"]} onClick={e=>this.closeTaskName()}></span>
						{this.state.value.organName}
						</span>:""
					}*/}
					
					{
						this.state.value.length?<div>{this.getriskcompany()}</div>:''
					}
					
					<Button 
						styleCss={CompanyStyle} 
						text={"选择风勘企业"} 
						onClick={(e)=>this.openDialog()}>
					</Button>
					{
						!this.state.isValueRisk?<p className={style["must_p"]}>请输入必填字段</p>:""
					}
				</span>
				{
					this.state.isWind?
					<WindProspecting
						{...this.props}
						closeWind={(value)=>this.closeWind(value)}>
					</WindProspecting>:""
				}
			</div>
		);
	}

	getriskcompany(){
		let { value = [] } = this.state;
		return value.map((g,key)=>{
			if(!g.isSelected){
				return;
			}
			return(
				<span className={style["sel_com"]} key={key}>
					<span className={style["img_warp"]} onClick={(e)=>this.closeTaskName(key)}></span>
					{g.organName}
				</span>
			)
		})
	}

	closeWind(selectValue){
		let {value = []} = this.state;
		let self = this;
		let {closeWind} = this.props;
		this.setState({
			isWind:false,
			value:selectValue?[selectValue]:value,
		},()=>{
			closeWind && closeWind(self.state.value[0])
		})
	}
	openDialog(){
		this.setState({
			isWind:true
		})
	}

	//删除查看企业
	closeTaskName(index){
		let { value = [] } = this.state;
		value[index].isSelected = false;
		let {closeWind} = this.props;
		this.setState({
			value
		},()=>{
			closeWind && closeWind();
		})
	}

	getValue(){
		let {value=[]}=this.state,isValueRisk = true;
		value = value[0] || {};
		if(!value.organName || !value.isSelected){
			isValueRisk = false;
		}
		this.setState({
			isValueRisk
		})

		return {
			organID:value.organID,
			typeID:value.addon && value.addon.typeID,
			gridID:value.gridID,
			isValueRisk
		}
	}
}

/*任务名称组件*/
class TaskName extends Component{
	constructor(props){
		super(props);
		this.state = {
			isValueName:true
		}
	}
	render() {
		let InputStyle = {width:"100%",height:"30px"};
		return (
			<div className={style["content_p"]}>
				<span className={style["content_name"]}>任务名称</span>
				<span className={style["content_button"]}>
					<Input 
						defaultValue={this.filterValue(this.props.defaultValue)}
						type="text" 
						styleCss={InputStyle} 
						ref="name"
						/>
					{
						!this.state.isValueName?<p className={style["must_p"]}>请输入必填字段</p>:""
					}
				</span>
			</div>
		);
	}

	filterValue(value){
		let result = "";
		if( value.organName){
			result = "排查<"+value.organName+">";
		}
		return result;
	}

	getValue(){
		let taskname = this.refs.name.getValue();
		let isValueName = true;
		if(!taskname){
			isValueName = false;
		}
		this.setState({
			isValueName
		})
		return{
			taskname:taskname,
			isValueName
		}
	}
}
/*排查表组件*/
class RiskTable extends Component{
	constructor(props) {
	   super(props);
		this.state={
			isValue: true
		}
	}
	render() {
		let SelectStyle = {width:'100%',height:"30px"};
		return (
			<div className={style["content_p"]}>
				<span className={style["content_name"]}>排查表</span>
				<span className={style["content_button"]}>
					<Select styleCss={SelectStyle} ref="table" options={this.props.industryList}>
					</Select>
					{
						!this.state.isValue?<p className={style["must_p"]}>请输入必填字段</p>:""
					}
					
				</span>
			</div>
		);
	}
	getValue(){
		let industry = this.refs.table.getValue();
		let isValue = true;
		if(!industry){
			isValue = false;
		}
		this.setState({
			isValue
		})
		return{
			industry:industry,
			isValue
		}
	}
}

/*任务排查人组件*/
class TaskPeople extends Component{
	constructor(props) {
	   super(props);
		this.state={
			isTask:false,
			user:[],
			isuser:true
		}
	}
	render() {
		let CompanyStyle = {width:"120px",height:"30px",background:"#cbcbcb",color:"#fff"};
		return (
			<div className={style["content_p"]}>
				<span className={style["content_name"]}>任务排查人</span>
				<span className={style["content_button"]}>
						{this.getSelectedPeople()}
					<Button 
						styleCss={CompanyStyle} 
						text={"选择任务排查人"} 
						onClick={(e)=>this.opentaxk()}>
					</Button>
					{
						!this.state.isuser?<p className={style["must_p"]}>请输入必填字段</p>:""
					}
					
				</span>
				{
					this.state.isTask?
					<Task {...this.props}
						ensureHandle={(action,data)=>this.closeDialog(action,data)}
						cancleHandle={(action,data)=>this.closeDialog(action,data)}
						user={this.state.user}>
					</Task>:''
				}
			</div>
		);
	}

	getSelectedPeople(){
		let {user=[]} = this.state;
		return user.map((g,key)=>{
			if(!g.isSelected){
				return;
			}
			return(
				<span className={style["sel_com"]} key={key}>
					<span className={style["img_warp"]} onClick={e=>this.closeTaskPeople(key)}></span>
					{g.name}
				</span>
			)
		})
	}

	//删除排查人
	closeTaskPeople(index){
		let {user} = this.state;
		user[index].isSelected = false;

		this.setState({
			user
		})
	}
	
	//选择排查人弹出框
	opentaxk(){
		this.setState({
			isTask:true
		})
	}

	// 关闭弹出框
	closeDialog(action,user){
		this.setState({
			isTask:false,
			user:user
		})	
	}



	// 过滤数据
	componentWillReceiveProps(nextProps){
		if(nextProps.examinePeople != this.props.examinePeople){
		 	let {examinePeople=[]} = nextProps,newList=[];
		 	examinePeople.map((l,key)=>{
		 		newList.push({
		 			id:l.userID,
		 			name:l.userName
		 		});
		 	});
		 	this.setState({
		 		user:newList
		 	});
		}
	}

	getValue(){
		let {user=[]}=this.state,userID=[],isuser = true;
		user.map((g,key)=>{
			if(g.isSelected){
				userID.push(g.id)
			}
		})
		if(!userID.length){
			isuser = false;
		}
		this.setState({
			isuser
		})
		return {
			userID,
			isuser
		}
	}
}

/*任务描述组件*/
class TaskDescribe extends Component{
	render() {
		let TextareaStyle = {width:'100%',minHeight:"100px",maxHeight:'150px',minWidth:"100%",maxWidth:"100%"}
		return (
			
				<div className={style["content_p"]}>
					<span className={style["content_task"]}>任务描述</span>
					<span className={style["content_button"]}>
						<Textarea styleCss={TextareaStyle} ref="task_context"></Textarea>
					</span>
				</div>
		);
	}
	getValue(){
		return {
			task_context : this.refs.task_context.getValue()
		}
	}
}

/*风勘企业弹框*/
class WindProspecting extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		index:props.index|| '',
	  		companylist:props.companylist||[]
	  	};
	}
	render() {
		let {companylist=[]}= this.props;
		let InputStyle = {width:"100%",height:"30px"};
		let ButtonStyle ={width:"80px",height:"30px",float:"right",background:'#0194e2',color:"#fff"};
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]} onClick={e=>this.props.closeWind()}></div>
				<div className={style["wind_warp"]}>
					<div className={style["wind_search--warp"]}>
						<span className={style["wind_search-input"]}>
							<Input ref="q" type="text" styleCss={InputStyle} placeholder="请输入企业名称"/>
						</span>
						<Button text={"搜索"} styleCss={ButtonStyle} onClick={e=>this.seachCompany()}/>
					</div>
					<ul className={style["wind_content"]} >
					{this.getListCompany()}

					</ul>
					<div className={style["pagination"]}>
					<Pagination 
						currentPage={this.props.companylistCondition.page}
						totalPage={this.props.companylistCondition.totalPage}
						pageGoTo={(page)=>this.pageGoTo(page)}>
					</Pagination>
				</div>
				</div>
			</div>
		);
	}

	getListCompany(){
		let {companylist=[],index}= this.props;
		return companylist.map((l,key)=>{
			let classname = l.isSelected?style["wind_content--li--hover"]:style["wind_content--li"];
			return (
					<li className={classname} key={key} onClick={e=>this.selectedLi(key)}>
						{l.organName}
					</li>
			)
		})
	}

	// 选中
	selectedLi(index){
		let {companylist=[]} = this.state;
		let {closeWind} =this.props;
		companylist.map((c,key)=>{
			c.isSelected = false;
		});
		companylist[index].isSelected = true;

		this.setState({
			companylist
		},()=>{
			closeWind && closeWind(companylist[index])
		});
	}

	seachCompany(){
		this.pageGoTo(1);
	}

	pageGoTo(page){
		let q = this.refs.q.getValue(),
			{get_risk_company} = this.props;
		let params={q:q,page:page,count:10,};
		
		get_risk_company(params);
	}
}

/*任务排查人弹框*/
class Task extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		user:deepCopy(props.user)||[],
	  		backupUser:deepCopy(props.user)||[],
	  		length:3,
	  	};
	  	
	}
	render() {
		let cancleStyle = {
	  			background:"white",
	  			border:"1px solid #0099de",
	  			color:"black"
	  		};
	  	let ensureStyle = {
	  			background:"#0099de",
	  			
	  		};
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]}></div>
				<div className={style["task_wrap"]}>
					<span className={style["task_title"]}>选择任务排查人(最多可选三人)</span>
					<ul className={style["task_content"]}>
						{this.getRiskPeople()}
					</ul>

					<div className={style["dialog-action"]}>
							<GridLayout width="1.5" offset="4">
								<Button 
									text={"取消"} 
									onClick={(e)=>this.cancleHandle()}
									styleCss={cancleStyle}>
								</Button>
							</GridLayout>
							<GridLayout width="1">&nbsp;</GridLayout>
							<GridLayout width="1.5" >
								<Button 
									text={"确认"} 
									onClick={(e)=>this.ensureHandle()}
									styleCss={ensureStyle}>
								</Button>
							</GridLayout>
						</div>
				</div>
			</div>
		);
	}
	getRiskPeople(){
		let {backupUser=[]} = this.state;
		return backupUser.map((g,key)=>{
			let classname = g.isSelected?style["task_li--hover"]:style["task_li"];
			return(
				<li key={key} className={classname} onClick={e=>this.selectPeople(key)}>
					{g.name}
				</li>
			)
		})
	}
	selectPeople(index){
		let {backupUser=[],length} = this.state;
		let count=this.getSelectValueLength(backupUser);

		if(count>= length){
			alert("超出最大值")
			return
		}

		backupUser[index].isSelected = !backupUser[index].isSelected;

		
		this.setState({
			backupUser
		})
	}

	getSelectValueLength(arr=[]){
		let newArr = [];

		arr.map((k,key)=>{
			if(k.isSelected) {
				newArr.push(k);
			} 
		})

		return newArr.length;
	}
	// ensure确定
	ensureHandle(){
		let {ensureHandle} = this.props;
		ensureHandle && ensureHandle("ensure",this.state.backupUser);
	}
	//取消
	cancleHandle(){
		let {cancleHandle} = this.props;
		cancleHandle && cancleHandle("cancle",this.state.user);
	}
	
}

/*确认按钮组件*/
class SureButton extends Component{
	render() {
		let KeepStyle = {width:"80px",height:"30px",margin:"0 auto"};
		let buttonStyle={background:"#0095e2",color:'#fff'};
		let InputStyle = {width:"100%",height:"30px"};
		return (
			<div className={style["action--componnet"]}>
				<GridLayout width="1" offset="5.5">
					<Button 
						text={"保存"} 
						styleCss={buttonStyle}
						onClick={this.props.closeMoreHandle}>
					</Button>
				</GridLayout>
			</div>
		);
	}

}

/*删除通用组件*/
// class Delete extends Component{
// 	render() {
// 		return (
// 			<span className={style["sel_com"]}>
// 				<span className={style["img_warp"]} onClick={e=>this.closeTaskName()}></span>
// 			</span>
// 		);
// 	}
// }



let mapStateToProps = (state) => {
    return {
    	companylistCondition:state.surveyReducer.companylistCondition,
    	companylist:state.surveyReducer.companylist,
    	industryList:state.surveyReducer.industryList,
    	examinePeople:state.surveyReducer.examinePeople,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
	    risk_add: (obj) => {
	        dispatch(Action.add(obj))
	    },
	    get_risk_company : (obj) => {
	        dispatch(Action.get_risk_company(obj))
	    },
	    get_risk_table:(obj) => {
	        dispatch(Action.get_risk_table(obj))
	    },
	    get_risk_people:(obj) => {
	        dispatch(Action.get_risk_people(obj))
	    },
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RiskAdd);