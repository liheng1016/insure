import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./index.css";
import Button from "@stararc-component/button";
import Input from "@stararc-component/input";
import Select from "@stararc-component/select";
import Textarea from "@stararc-component/textarea";
import {deepCopy} from "@stararc-insurance/help-tools"; 
import {
	CommonUpload
} from "@stararc-insurance/upload-file";
import GridLayout from "@stararc-component/gridlayout";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';


/*返回按钮*/
export class ManagementEditButton extends Component{
	render(){
		let ButtonStyle = {width:"60px",background:'#f9d865',color:'white',marginLeft:'10px'}; 
		return(
			<div className={style["list_button"]}>
				<Button 
					styleCss={ButtonStyle}
					text={"返回"}
					onClick={e=>history.go(-1)}/>
			</div>
		)
	}
}



/*保险产品基本信息组件*/
export class EssentialInformation extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {};
	}
	render() {
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>保险产品基本信息</span>
				<ul className={style["content"]}>
					<LiMustComponent LabelName={"保险产品名称"} errorTips={this.state.name_error}>
						<Input ref="name"></Input>	
					</LiMustComponent>
					<LiMustComponent LabelName={"保险经纪公司"} errorTips={this.state.borker_name_error}>
						<Select 
							ref="borker_name"
							options={this.props.insurCompany}>
						</Select>
					</LiMustComponent>
				</ul>
			</div>
		);
	}
	getValue(){
		let refs = this.refs,result={},errorTips={},isVerify=true;
		for(let r in refs){
			let value = refs[r].getValue();
			result[r] = refs[r].getValue();
			result[r] = value;
			isVerify = isVerify && !!value;
			if(!value){
				errorTips[r+"_error"] = "该项是必填项";
			}else{
				errorTips[r+"_error"] = "";
			}
		}
		this.setState({
			...errorTips
		})
		return {
			...result,
			isVerify
		};
	}
	
}
/**
 * LiMustComponent组件
 */
export class LiMustComponent extends Component{
	render() {
		return (
			<li className={style["content--li"]}>
				<span className={style["labelname"]}>
					<img src={require("../img/pic.png")}/>
					{this.props.LabelName} 
				</span>
				<span className={style["labelinput"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.errorTips}
					</span>
				</span>
			</li>
		);
	}
}

/**
 * 免赔额条例组件
 */
export class LiDeductible extends Component{
	render() {
		return (
			<li className={style["deductible"]}>
				<span className={style["deductible--name"]}>
					<img src={require("../img/pic.png")}/>
					{this.props.LabelName}
				</span>
				<span className={style["deductible--content"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.errorTips}
					</span>
				</span>
			</li>
		);
	}
}
/**
 * 免赔额条例
 */
export class DeductibleExcess extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {};
	}
	render() {
		let {deductibleExcess={}} = this.props;
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>赔偿限额和免限额条例</span>
				<ul className={style["content"]}>
					<LiDeductible LabelName={"从业人员"} errorTips={this.state.practitioners_error}>
						<Textarea 
							ref="practitioners" 
							defaultValue={deductibleExcess.practitioners}>
						</Textarea>
					</LiDeductible>
					<LiDeductible LabelName={"第三者责任"} errorTips={this.state.third_party_error}>
						<Textarea 
							ref="third_party"
							defaultValue={deductibleExcess.third_party}>
						</Textarea>
					</LiDeductible>
				</ul>
			</div>
		);
	}
	getValue(){
		// return{
		// 	practitioners:this.refs.practitioners.getValue(),
		// 	third_party:this.refs.third_party.getValue()
		// }
		let refs = this.refs,result={},errorTips={},isVerifyExcess=true;
		for(let r in refs){
			let value = refs[r].getValue();
			result[r] = refs[r].getValue();
			result[r] = value;
			isVerifyExcess = isVerifyExcess && !!value;
			if(!value){
				errorTips[r+"_error"] = "该项是必填项";
			}else{
				errorTips[r+"_error"] = "";
			}
		}
		this.setState({
			...errorTips
		})
		return {
			...result,
			isVerifyExcess
		};
	}
}

/**
 * 条款内容LiUpLoad组件
 */
export class LiClauseContent extends Component{
	render() {
		let ButtonStyle={width:'80px',background:'white',color:'black',border:'1px solid orange'};
		return (
			<li className={style["upload"]}>
				<span className={style["upload--name"]}>
				<img src={require("../img/pic.png")}/>
					{this.props.LabelName}
				</span>
				<span className={style["upload--button"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.errorTips}
					</span>
				</span>
			</li>
		);
	}
}
/**
 * 条款内容
 */
export class ClauseContent extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isValue: true
	  	};
	}
	render() {
		let ButtonStyle={
			width: "90px",
		    background: "white",
		    color: "orange",
		    border: "1px solid orange",
		    position: "absolute",
		    top: "0",
		    left: "0"
		};
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>条款内容</span>
				<ul className={style["applicant-mustcontent"]}>
					<LiClauseContent LabelName={'保险条款'}>
						<div className={style["file--upload"]}>
							<CommonUpload 
								ref="attachment_id"
								accept={".pdf,.doc,.docx"}
								onChange={(e)=>this.uploadChangeHandle()}>
							</CommonUpload>
							<Button styleCss={ButtonStyle} text={"添加文件"}/>
						</div>
						<span className={style["upload--limit"]}>
							请上传pdf、doc、docx格式附件
						</span>
						<a href={this.props.uploadClausecontent.attachment_path} className={style["upload_path"]}>{this.props.uploadClausecontent.name}</a>
						{
							!this.state.isValue?<p className={style["must_p"]}>该项是必填项</p>:''
						}
					</LiClauseContent>
					
				</ul>
			</div>
		);
	}
	uploadChangeHandle(){
		let {upload_clausecontent} = this.props;
		let fileValue = this.refs.attachment_id.getValue();
		upload_clausecontent(fileValue);
	}

	getValue(){
		let attachment_id = this.props.uploadClausecontent.attachment_id;
		let value = attachment_id;
		value = attachment_id;
		let isValue = true;
		if(!value){
			isValue = false;
		}
		this.setState({
			isValue
		})
		return{
			attachment_id:attachment_id,
			isValue
		}
	}
}

/*授权地区*/
export class AuthorizedArea extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isOpenDialog:false,
	  		grids:[],
	  		isValueArea: true
	  		
	  	};
	}
	render() {
		let buttonStyle={
				border:"1px solid #f6a811",
				background:"white",
				color:"#f6a811",
				width:'120px'
	  		}
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>授权地区</span>
				<ul className={style["applicant-mustcontent"]}>
					<LiClauseContent LabelName={'授权地区'} >
						<div className={style["file--upload"]}>
							<Button
								styleCss={buttonStyle} 
								text={"选择授权地区"}
								onClick={(e)=>this.openDialog()}/>
						</div>
						{
							!this.state.isValueArea?<p className={style["must_p"]}>该项是必填项</p>:''
						}
						<ol>
							{this.getSelectedArea()}
						</ol>
						{
							this.state.isOpenDialog ? <AreaDialog 
								ensureHandle={(action,data)=>this.closeDialog(action,data)}
								cancleHandle={(action,data)=>this.closeDialog(action,data)}
								grids={this.state.grids}>
							</AreaDialog>:''
						}
					</LiClauseContent>
				</ul>
			</div>
		);
	}

	getSelectedArea(){
		let {grids=[]} = this.state;
		return grids.map((g,key)=>{
			if(!g.isSelected){
				return;
			}
			return(
				<li className={style["attachment--li"]} key={key}>{g.name}</li>
			)
		})
	}
	// 打开弹出框
	openDialog(){
		this.setState({
			isOpenDialog:true
		})
	}
	// 关闭弹出框
	closeDialog(action,grids){
		this.setState({
			isOpenDialog:false,
			grids:grids
		})	
	}
	// 过滤数据
	componentWillReceiveProps(nextProps){
		if(nextProps.lists != this.props.lists){
		 	let {lists=[]} = nextProps,newList=[];
		 	lists.map((l,key)=>{
		 		newList.push({
		 			id:l.gridID,
		 			name:l.gridName
		 		});
		 	});
		 	this.setState({
		 		grids:newList
		 	});
		}
	}
	getValue(){
		let {grids=[]}=this.state,gridsId=[],isValueArea = true;

		grids.map((g,key)=>{
			if(g.isSelected){
				gridsId.push(g.id)
			}
		})

		if(!gridsId.length){
			isValueArea = false;
		}
		this.setState({
			isValueArea
		})
		return {
			gridsId,
			isValueArea
		}
	}
}

/**
 * 保存操作
 */
export class ActionComponent extends Component{
	render() {
		let buttonStyle={
			border:"1px solid #f6a811",
			background:"#f6a811",
		};
		return (
			<div className={style["action--componnet"]}>
				<GridLayout width="1" offset="5.5">
					<Button text={"保存"} styleCss={buttonStyle} onClick={this.props.onClick}></Button>
				</GridLayout>
			</div>
		);
	}
};

/*选择地区弹框*/
export class AreaDialog extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		grids:deepCopy(props.grids)||[],
	  		backupGrid:deepCopy(props.grids)||[],
	  		isSelectedAll:false,
	  		cancleStyle:{
	  			background:"white",
	  			border:"1px solid #f6a811",
	  			color:"black"
	  		},
	  		ensureStyle:{
	  			background:"#f6a811",
	  			border:"1px solid #f6a811",
	  		}
	  	};
	}
	render() {
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]}></div>	
				<div className={style["dialog--content"]}>
					<p className={style["dialog--title"]}>请选择发送地区</p>
					<p>
						<span 
							className={this.state.isSelectedAll?style["selected--all"]:style["selected"]} 
							onClick={e=>this.selectedAll()}>
							全选
						</span>
					</p>
					<ul>
						{this.getAreaContent()}
					</ul>
					<div className={style["dialog-action"]}>
						<GridLayout width="1.5" offset="4">
							<Button 
								text={"取消"} 
								onClick={(e)=>this.cancleHandle()}
								styleCss={this.state.cancleStyle}>
							</Button>
						</GridLayout>
						<GridLayout width="1">&nbsp;</GridLayout>
						<GridLayout width="1.5" >
							<Button 
								text={"确认"} 
								onClick={(e)=>this.ensureHandle()}
								styleCss={this.state.ensureStyle}>
							</Button>
						</GridLayout>
					</div>
				</div>
			</div>
		);
	}
	// 全选
	selectedAll(){
		let {isSelectedAll,backupGrid=[]} = this.state;
		backupGrid.map((b)=>{
			b.isSelected = !isSelectedAll;
		})
		this.setState({
			isSelectedAll:!isSelectedAll,
			backupGrid
		})
	}

	// 获取地区
	getAreaContent(){
		let {backupGrid=[]} = this.state;
		return backupGrid.map((g,key)=>{
			let classname = g.isSelected?style["li-active"]:style["li-com"];
			return(
				<li key={key} className={classname} onClick={(e)=>this.clickHandle(key)}>
					{g.name}
				</li>
			)
		})
	}
	// 点击li
	clickHandle(index){
		let {backupGrid=[],isSelectedAll} = this.state;
		backupGrid[index].isSelected = !backupGrid[index].isSelected;
		if(!backupGrid[index].isSelected){
			isSelectedAll = false;
		}

		this.setState({
			backupGrid:backupGrid,
			isSelectedAll
		})
	}
	// cancle
	cancleHandle(){
		let {cancleHandle} = this.props;
		cancleHandle && cancleHandle("cancle",this.state.grids);
	}
	// ensure
	ensureHandle(){
		let {ensureHandle} = this.props;
		ensureHandle && ensureHandle("ensure",this.state.backupGrid);
	}
}