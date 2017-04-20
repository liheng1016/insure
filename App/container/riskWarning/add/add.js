import React,{Component} from "react";
import { connect } from 'react-redux';

import Button from "@stararc-component/button";
import GridLayout from "@stararc-component/gridlayout";
import Input from "@stararc-component/input";
import Upload from "../../../component/upload";
import {deepCopy} from "../../../helper/function"; 
import Action from "../model/media/action";
import gridAction from "../model/grid/action";


import style from "./add.css";
require('imports?define=>false!../../../lib/kindeditor/kindeditor.min');
require('imports?define=>false!../../../lib/kindeditor/lang/zh_CN');


class AddWarning extends Component{
	render() {
		return (
			<div >
				<GoBack></GoBack>
				<ContentBody {...this.props}></ContentBody>
			</div>
		);
	}
}

/**
 * 返回按钮
 */
export class GoBack extends Component {
	render() {
		return (
			<div className={style["go_back"]}>
				<GridLayout width="1" offset="11">
					<Button text="返回" onClick={e=>this.goBack()}></Button>
				</GridLayout>
			</div>
		);
	}
	goBack(){
		history.go(-1);
	}
}

/**
 * 添加警示内容区
 */
export class ContentBody extends Component{
	render() {
		return (
			<div>
				<Title></Title>
				<MainBody></MainBody>
				<MultiMedia></MultiMedia>
				<Attachment></Attachment>
				<SendArea lists={this.props.lists}></SendArea>
				<SendType></SendType>
				<ActionComponent onClick={e=>this.submitHandle()}></ActionComponent>
			</div>
		);
	}
	submitHandle(){
		console.log("submitHandle")
	}
	componentDidMount(){
		let {getGridsList} = this.props;

		getGridsList();
	}
}

/**
 * 警示标题
 */
export class Title extends Component{
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>警示标题：</label>
				<div className={style["context"]}>
					<div className={style["warning--title"]}>
						<Input></Input>
					</div>
					<span className={style["tip-block"]}>50字以内</span>
				</div>
			</div>
		);
	}
}

/**
 * 警示正文
 */
export class MainBody extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	isValid: true
        };
    }
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>警示正文：</label>
				<div className={style["context"]}>
					<textarea id="noticeEditor" name="" cols="30" rows="10"></textarea>
				</div>
                {this.state.isValid === false ? <span className={style["msg--error"]}>请填写公告内容</span> : ''}

			</div>
		);
	}
	componentDidMount() {
        let self = this;
        // let uploadUrl = process.env.NODE_ENV != 'production' ? LOCAL_DOMAIN + '/Notice/receiveNoticeEditorAttachment' : '/Notice/receiveNoticeEditorAttachment';
        let basePath = process.env.NODE_ENV != 'production' ? '../../../../lib/kindeditor/' : '/Static/lib/kindeditor/';
        KindEditor.ready(function (K) {
            self.K = K;
            self.editor = K.create('#noticeEditor', {
                basePath: basePath,
                // uploadJson: uploadUrl,
                allowImageUpload: false,
                afterUpload: function (url) {

                },
                afterChange: function () {
                    if (!this.isEmpty() && !self.state.isValid) {
                        self.setState({isValid: true})
                    }
                }
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            let {defaultValue:content} = nextProps;
            this.editor.html(content);
        }
    }

    getValue() {
        let value = this.editor.html();
        let isValid = true;
        if (!value) {
            isValid = false;
            this.setState({isValid});
        }
        return {value, isValid};
    }
}

/**
 * 多媒体信息
 */
export class MultiMedia extends Component{
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>多媒体信息：</label>
				<div className={style["context"]}>

				</div>
			</div>
		);
	}
}

/**
 * 附件
 */
export class Attachment extends Component{
	constructor(props) {
	 	super(props);
	
	  	this.state = {
	  		fileArr:[{
	  			id:1,
	  			name:"测试文件one.doc"
	  		},{
	  			id:2,
	  			name:"测试文件two.doc"
	  		}]
	  	};
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>附件：</label>
				<div className={style["context"]}>
					<div className={style["upload--button"]}>
						<Upload ref="attachment" accept="*.doc,*.docx" onChange={(e)=>this.changeHandle()}></Upload>
					</div>
					<span className={style["help--line"]}>已上传4个，还可上传2个</span>
					<div className={style["attachment--area"]}>
						<ul>
							{this.createAttachment()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
	changeHandle(){
        // let {uploadAttachment} = this.props;
        let attachment = this.refs.attachment.getValue();


        console.log(attachment)
        // uploadAttachment(imgdata, type);
	}
	createAttachment(){
		let {fileArr=[]} = this.state;

		return	fileArr.map((f,key)=>{
			return(
				<li className={style["attachment--li"]} key={key}>
					{f.name}
					<span className={style["attachment--delete"]}></span>
				</li>
			)
		})
	}
}

/**
 * 发送地区
 */
export class SendArea extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isOpenDialog:false,
	  		grids:[],
	  		buttonStyle:{
				border:"1px solid #f6a811",
				background:"white",
				color:"#f6a811"
	  		}
	  	};
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>发送地区：</label>
				<div className={style["context"]}>
					<GridLayout width="1">
						<Button 
							styleCss={this.state.buttonStyle} 
							text={"选择"}
							onClick={(e)=>this.openDialog()}>
						</Button>
					</GridLayout>
					<div className={style["attachment--area"]}>
						<ul>
							{this.getSelectedArea()}
						</ul>
					</div>
					{
						this.state.isOpenDialog ? <AreaDialog 
							ensureHandle={(e)=>this.closeDialog("ensure")}
							cancleHandle={(e)=>this.closeDialog("cancle")}
							grids={this.state.grids}>
						</AreaDialog>:''
					}
				</div>
			</div>
		);
	}
	getSelectedArea(){
		let {grids=[]} = this.state;
		return grids.map((g,key)=>{
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
	closeDialog(){
		this.setState({
			isOpenDialog:false
		})	
	}
	// 过滤数据
	componentWillReceiveProps(nextProps){
		if(nextProps.lists != this.props.lists){
			console.log(12345)
		 	let {lists=[]} = nextProps,newList=[];

		 	lists.map((l,key)=>{
		 		newList.push({
		 			id:l.gridID,
		 			name:l.gridName
		 		});
		 	})

		 	this.setState({
		 		grids:newList
		 	})
		}
	}
}

/**
 * 发送对象
 */
export class SendType extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		types:[{
	  			id:1,
	  			type_name:'投保企业'
	  		},{
	  			id:2,
	  			type_name:'潜在客户'
	  		}]
	  	};
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>发送对象：</label>
				<div className={style["context"]}>
					<ul className={style["type--ul"]}>
						{this.getLiContent()}
					</ul>
				</div>
			</div>
		);
	}
	getLiContent(){
		let {types=[]} = this.state;

		return types.map((t,key)=>{
			let classname = t.isSelected?style["selected"]:style["not-selected"];

			return(
				<li key={key} className={classname} onClick={(e)=>this.clickHandle(key)}>{t.type_name}</li>
			)
		})
	}
	clickHandle(index){
		let {types=[]} = this.state;

		types[index].isSelected = !types[index].isSelected;

		this.setState({
			types:types
		})
	}
	getValue(){
		let {types=[]} = this.state,typeId=[];

		types.map((t,key)=>{
			if(t.isSelected){
				typeId.push(t.id)
			}
		});

		console.log(typeId);
	}
}

/**
 * 发布操作
 */
export class ActionComponent extends Component{
	render() {
		let buttonStyle={
			border:"1px solid #f6a811",
			background:"#f6a811",
			color:"black"
		}
		return (
			<div className={style["action--componnet"]}>
				<GridLayout width="1" offset="5">
					<Button text={"发布"} styleCss={buttonStyle} onClick={this.props.onClick}></Button>
				</GridLayout>
			</div>
		);
	}
}

/**
 * 选择地区弹出框
 */
export class AreaDialog extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		grids:deepCopy(props.grids)||[],
	  		backupGrid:deepCopy(props.grids)||[],
	  		cancleStyle:{
	  			background:"white",
	  			border:"1px solid #f6a811",
	  			color:"black"
	  		},
	  		ensureStyle:{
	  			background:"#f6a811",
	  			border:"1px solid #f6a811",
	  			color:"black"
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
						<span className={style["select--all"]}>
							全选
							<input type="checkbox"/>
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
	getAreaContent(){
		let {grids=[]} = this.state;

		return grids.map((g,key)=>{
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
		let {grids=[]} = this.state;

		grids[index].isSelected = !grids[index].isSelected;

		this.setState({
			grids:grids
		})
	}
	// cancle
	cancleHandle(){
		let {cancleHandle} = this.props;

		cancleHandle && cancleHandle();
		console.log("cancle")
	}
	// ensure
	ensureHandle(){
		let {ensureHandle} = this.props;

		ensureHandle && ensureHandle();
		console.log("ensure")
	}
}

let mapStateToProps = (state) => {
    return {
    	condition:state.riskwarningReducer.condition,
    	lists:state.gridReducer.List
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 上传附件
        upload: (obj) => {
            dispatch(Action.upload(obj))
        },
        // 获取授权区域
        getGridsList:(params={})=>{
        	dispatch(gridAction.list(params))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWarning);
