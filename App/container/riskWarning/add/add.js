import React,{Component} from "react";
import { connect } from 'react-redux';
import BigImg from "@stararc-component/big-img";
import Button from "@stararc-component/button";
import GridLayout from "@stararc-component/gridlayout";
import Input from "@stararc-component/input";
import Upload,{UploadMedia} from "@stararc-insurance/upload-file";
import {deepCopy,load_script} from "@stararc-insurance/help-tools"; 
import gridAction from "../model/grid/action";
import riskAction from "../model/riskwarning/action";

import style from "./add.css";

// import Quill from "quill";

import ReactQuill from "react-quill";

require("quill/dist/quill.snow.css");


import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

/**
 * 添加风险警示
 */
class AddWarning extends Component{
	render() {
		return (
			<div >
				<GoBack goBack={e=>this.goBack()}></GoBack>
				<ContentBody ref="argv" {...this.props}></ContentBody>
			</div>
		);
	}
	// 判断页面是有有变动
	goBack(){
		let {formdata} = this.refs.argv.getValue(),flag = false;


		for(let key in formdata){

			flag = flag || !!formdata[key];
		}


		if(flag){
			if(!confirm("确定要放弃已修改的部分吗？")){
				return;
			}
		}

		history.go(-1);
	}
	componentDidMount(){
		let {unmount_attachment} = this.props;

		unmount_attachment();
	}
}

/**
 * 返回按钮
 */
export class GoBack extends Component {
	render() {
		return (
			<LayoutHeader styleCss={{height:50}}>
				<div className={style["go_back"]}>
					<GridLayout width="1" offset="11">
						<Button text="返回" onClick={this.props.goBack}></Button>
					</GridLayout>
				</div>
			</LayoutHeader>
		);
	}
}

/**
 * 添加警示内容区
 */
export class ContentBody extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		alertFlag:false
	  	};
	}
	render() {
		return (
			<div>
				<LayoutContent styleCss={{top:50}}>
					<Title ref="title"></Title>
					<MainBody ref="content"></MainBody>
					<MultiMedia ref="media" {...this.props}></MultiMedia>
					<Attachment ref="attach" {...this.props}></Attachment>
					<SendArea lists={this.props.lists} ref="grid_ids"></SendArea>
					<SendType ref="send_type"></SendType>
				</LayoutContent>
				<LayoutFooter>
					<ActionComponent onClick={e=>this.verify_password(true)}></ActionComponent>
				</LayoutFooter>
				{
					this.state.alertFlag?
					<PassWordVerify 
						{...this.props}
						ref="password" 
						onClick={e=>this.verify_password(false)}>
					</PassWordVerify>:''
				}
			</div>
		);
	}
	submitHandle(){
		let {isValid,formdata} = this.getValue();

		// 暂时先关闭发布按钮
		if(isValid){
			let {add} = this.props;

				
			add(formdata);
		}

		/*return {
			isValid,
			formdata
		}*/
	}
	getValue(){
		let refs = this.refs,isValid = true;
		let title  =  refs.title.getValue();
		let	content = refs.content.getValue();
		let	grid_ids = refs.grid_ids.getValue();
		let	send_type = refs.send_type.getValue();

		if(!title.isValid || !content.isValid || !grid_ids.isValid || !send_type.isValid ){
			isValid = false;
		}
		let formdata = {
			title:title.value,
			content:content.value,
			editorHtml:content.editorHtml,
			grid_ids:refs.grid_ids.getValue()["gridsId"].join(","),
			media_attachment_ids:refs.media.getValue().join(","),
			attachment_ids:refs.attach.getValue().join(","),
			...refs.send_type.getValue()["typeId"]
		};

		return {
			isValid,
			formdata
		};
	}
	verify_password(flag){
		let result = this.submitHandle();
		// this.setState({
		// 	alertFlag:flag && result.isValid
		// })
	}

	componentWillReceiveProps(nextProps){
		let {add} = this.props;
		let self = this;
		if(nextProps.isRight != this.props.isRight && nextProps.isRight){
			this.setState({
				alertFlag:false
			},function(){
				let data = self.submitHandle();
				
				add({...data.formdata});
			})
		}
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
	constructor(props) {
	 	super(props);
	  	this.state = {
	  		isValid: true
	  	};
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label_required"]}>警示标题：</label>
				<div className={style["context"]}>
					<div className={style["warning--title"]}>
						<Input ref="input" maxLength={50} ></Input>
						{
							!this.state.isValid?
							<span className={style["error--tips"]}>
								请填写标题！
							</span>:''
						}
					</div>
					<span className={style["tip-block"]}>50字以内</span>
				</div>
			</div>
		);
	}
	getValue(){
		let value = this.refs.input.getValue(),self = this;
		let isValid = true;

		if(!value){
			isValid = false;
		}

		this.setState({
			isValid
		},()=>{
			self.clearTime = setTimeout(()=>{
				self.setState({
					isValid:true
				})
			},2000)
		})

		return {value,isValid};
	}
	componentWillUnmount(){
		clearTimeout(this.clearTime);
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
				<label className={style["label_required"]}>警示正文：</label>
				<div className={style["context"]}>
                	{/*<div style={{minHeight:200}} id="noticeEditor" className="ql-container ql-snow">
                	</div>*/}
                	<ReactQuill 
                		ref="container" 
                		theme="snow" 
                		modules={this.getToobar()} 
                		value={this.state.editorHtml} 
                		onChange={(val)=>this.changeHandle(val)}>
                	</ReactQuill>	
                	{this.state.isValid === false ? <span className={style["error--tips"]}>请填写警示正文内容</span> : ''}
				</div>
			</div>
		);
	}
	getToobar(){
		return {
			toolbar:[
			['bold', 'italic', 'underline'],        // toggled buttons
			['blockquote', 'code-block'],
			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction
			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],
			['clean']        
		]};
	}
    getValue() {
        let editorHtml = this.state.editorHtml,self = this;

        let value = editorHtml?encodeURIComponent(editorHtml):"";

        let isValid = true;


        if (!editorHtml) {
            isValid = false;
            this.setState({isValid},()=>{
            	self.clearTime = setTimeout(()=>{
            		self.setState({
            			isValid:true
            		})
            	},2000)
            });
        }
        return {value, isValid,editorHtml};
    }
    changeHandle(html){
    	this.setState({
    		editorHtml:html
    	})
    }
    componentWillUnmount(){
		clearTimeout(this.clearTime);
	}
}

/**
 * 多媒体信息
 */
export class MultiMedia extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	maxLength:4
	    };
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>多媒体信息：</label>
				<div className={style["context"]}>
					<ul className={style["media--ul"]}>
						{this.createMultiMedia()}
					</ul>
					<div className={style["media"]}>
						<UploadMedia 
							ref="upload_img"
							accept={"image/gif,image/jpeg,image/jpg,image/png,image/svg"} 
							disabled={this.getIsDisabled()}
							onChange={(e)=>this.changeHandle()}>
						</UploadMedia>
						<span className={style["help--line"]}>
							已上传{this.getMediaLength()}个，还可上传{this.state.maxLength-this.getMediaLength()}个
						</span>
					</div>
				</div>
			</div>				
		
		);
	}
	changeHandle(){
        let {uploadMedia} = this.props;
        let attachment = this.refs.upload_img.getValue();
        uploadMedia(attachment);
	}
	getIsDisabled(){
		let hasUploadLenth = this.getMediaLength();
		return hasUploadLenth>=this.state.maxLength?true:false; 
	}
	// 获取上传的个数
	getMediaLength(){
		let {mediaList=[]} = this.props;
		return mediaList && mediaList.length?mediaList.length:0;
	}
	// 生成附件
	createMultiMedia(){
		let {mediaList=[]} = this.props;
		return mediaList.map((m,key)=>{
			return(
				<li key={key} className={style["media--li"]}>
					<img src={m.attachment_path} alt=""/>
					<span className={style["delete__img"]} onClick={e=>this.deleteMedia(m.attachment_id)}></span>
				</li>
			)
		})
	}
	// 删除附件
	deleteMedia(attach_id){
		let {delete_media} = this.props;
		delete_media({
			attachment_id:attach_id
		})
	}
	getValue(){
		let {mediaList=[]} = this.props,attachmentIds=[];
		mediaList.map((attach,key)=>{
			attachmentIds.push(attach.attachment_id)
		})
		return attachmentIds;
	}
}

/**
 * 附件
 */
export class Attachment extends Component{
	constructor(props) {
	 	super(props);
	  	this.state = {
	  		attachmentList:[],
	  		maxLength:4
	  	};
	}
	render() {
		let buttonstyle = {width:'90px'}
		return (
			<div className={style["form-pie"]}>
				<label className={style["label"]}>附件：</label>
				<div className={style["context"]}>
					<div className={style["upload--button"]}>
						<Upload ref="attachment"
							styleCss={buttonstyle}
							disabled={this.getIsDisabled()}
							accept={".doc,.xls,.pdf,.ppt,.docx,.xlsx,.pptx"} 
							buttonName={"选择文件"}
							onChange={(e)=>this.changeHandle()}>
						</Upload>
					</div>
					<span className={style["help--line"]}>
						已上传{this.getMediaLength()}个，还可上传{this.state.maxLength-this.getMediaLength()}个
					</span>
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
        let {upload} = this.props;
        let attachment = this.refs.attachment.getValue();

        upload(attachment);
	}
	createAttachment(){
		let {attachmentList=[]} = this.props;
		return	attachmentList.map((f,key)=>{
			return(
				<li className={style["attachment--li"]} key={key}>
					<a href={f.attachment_path} download="">{f.name}</a>
					<span className={style["attachment--delete"]} onClick={e=>this.delete_attach(f.attachment_id)}></span>
				</li>
			)
		})
	}
	// 判断
	getIsDisabled(){
		let hasUploadLenth = this.getMediaLength();
		return hasUploadLenth >= this.state.maxLength ? true : false; 
	}
	// 获取上传的个数
	getMediaLength(){
		let {attachmentList=[]} = this.props;
		return attachmentList && attachmentList.length?attachmentList.length:0;
	}
	// 删除附件
	delete_attach(media_id){
		let {delete_attach} = this.props;
		delete_attach({
			attachment_id:media_id
		})
	}
	getValue(){
		let {attachmentList=[]} = this.props,attachmentIds=[];
		attachmentList.map((attach,key)=>{
			attachmentIds.push(attach.attachment_id)
		})
		return attachmentIds;
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
	  		isValid:true,
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
				<label className={style["label_required"]}>发送地区：</label>
				<div className={style["context"]}>
					<GridLayout width="1">
						<Button 
							styleCss={this.state.buttonStyle} 
							text={"选择"}
							onClick={(e)=>this.openDialog()}>
						</Button>
					</GridLayout>
					{
						!this.state.isValid?
						<span className={style["error--tips"]} style={{clear:"both",display:"block"}}>
							请选择发送地区！
						</span>:""
					}
					<div className={style["attachment--area"]}>
						<ul>
							{this.getSelectedArea()}
						</ul>
					</div>
					{
						this.state.isOpenDialog ? <AreaDialog 
							ensureHandle={(action,data)=>this.closeDialog(action,data)}
							cancleHandle={(action,data)=>this.closeDialog(action,data)}
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
		let {grids=[]}=this.state,gridsId=[],isValid = true,self = this;
		grids.map((g,key)=>{
			if(g.isSelected){
				gridsId.push(g.id)
			}
		})

		if(gridsId && !gridsId.length){
			isValid = false;
		}

		this.setState({
			isValid
		},()=>{
			self.clearTime = setTimeout(()=>{
				self.setState({
					isValid:true
				})
			},2000)
		})

		return {
			isValid,
			gridsId
		} 
	}
	componentWillUnmount(){
		clearTimeout(this.clearTime);
	}
}

/**
 * 发送对象
 */
export class SendType extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isValid:true,
	  		types:[{
	  			id:1,
	  			param:"effect_insuce_ids",
	  			type_name:'投保企业'
	  		},{
	  			id:2,
	  			param:"potial_cusmers_ids",
	  			type_name:'潜在客户'
	  		}]
	  	};
	}
	render() {
		return (
			<div className={style["form-pie"]}>
				<label className={style["label_required"]}>发送对象：</label>
				<div className={style["context"]}>
					<ul className={style["type--ul"]}>
						{this.getLiContent()}
					</ul>
					{
						!this.state.isValid?
						<span className={style["error--tips"]}>
							请选择发送对象！
						</span>:""
					}	
				</div>
			</div>
		);
	}
	getLiContent(){
		let {types=[]} = this.state;
		return types.map((t,key)=>{
			let classname = t.isSelected?style["selected-obj"]:style["not-selected"];
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
		let {types=[]} = this.state,typeId={},isValid = false,self = this;
		types.map((t,key)=>{
			typeId[t.param] = !!t.isSelected?1:0;
			isValid = !!t.isSelected || isValid;
		});

		this.setState({
			isValid
		},()=>{
			self.clearTime = setTimeout(()=>{
				self.setState({
					isValid:true
				})
			},2000)
		})

		return {
			isValid,
			typeId
		}; 
	}
	componentWillUnmount(){
		clearTimeout(this.clearTime);
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
		};
		return (
			<div className={style["action--componnet"]}>
				<GridLayout width="1" offset="5.5">
					<Button text={"发布"} styleCss={buttonStyle} onClick={this.props.onClick}></Button>
				</GridLayout>
			</div>
		);
	}
};



/**
 * 选择地区弹出框
 */
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

/**
 * 校验发布密码
 */
export class PassWordVerify extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isRight:true
	  	};
	}
	render() {
	  	let buttonStyle = {
	  		cancle:{
	  			background:"white",
	  			border:"1px solid #ffd63f",
	  			color:"black",
	  			float:"left"
	  		},
	  		ensure:{
	  			background:"#ffd63f",
	  			border:"1px solid #ffd63f",
	  			color:"black",
	  			float:"right"	
	  		}
	  	};
		return (
			<AlertContainer>
				<div className={style["verify--box"]}>
					<p>发布密码</p>
					<div className={style["password--group"]}>
						<Input ref="password" type={"password"}></Input>
						{
							this.state.isRight===false?
							<span className={style["error--tips"]}>
								密码错误，请重新输入！
							</span>:""
						}
					</div>
					<div className={style["action--button"]}>
						<Button 
							text={"取消"} 
							type={"button"}
							styleCss={buttonStyle.cancle}
							onClick={e=>this.props.onClick()}>
						</Button>
						<Button 
							text={"确认"} 
							type={"button"}
							styleCss={buttonStyle.ensure}
							onClick={e=>this.publishHandle()}>
						</Button>
					</div>
				</div>
			</AlertContainer>
		);
	}
	// 校验发布密码
	publishHandle(){
		let params={
			push_pwd:this.refs.password.getValue()
		},{publish_verify} = this.props;

		publish_verify(params);
	}
	componentWillReceiveProps(nextProps){
		let self = this;
		
		if(nextProps.isRight===false){
			self.setState({
				isRight:false
			},()=>{
				setTimeout(()=>{
					self.setState({
						isRight:true
					})
				},2000)
			})
		}
	}
}

/**
 * 弹出框的外层
 */
export class  AlertContainer  extends Component{
	render() {
		return (
			<div className={style["alert--container"]}>
				<div className={style["alert--shade"]}></div>
				{this.props.children}
			</div>
		);
	}
}


let mapStateToProps = (state) => {
    return {
    	...state.riskWarningReducer,
    	lists:state.gridReducer.List,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 上传附件
        upload: (obj) => {
            dispatch(riskAction.upload(obj))
        },
        // 上传多媒体
        uploadMedia: (obj) => {
            dispatch(riskAction.media(obj))
        },
        // 删除多媒体
        delete_media: (obj) => {
            dispatch(riskAction.delete_media(obj))
        },
        // 删除附件
        delete_attach: (obj) => {
            dispatch(riskAction.delete_attach(obj))
        },
        // 获取授权区域
        getGridsList:(params={})=>{
        	dispatch(gridAction.list(params))
        },
        // 添加风险警示
        add:(params={})=>{
        	dispatch(riskAction.add(params))
        },
        // 校验发布密码
        publish_verify:(params)=>{
        	dispatch(riskAction.verify_password(params));
        },
        // 清除附件数据
        unmount_attachment:(params)=>{
        	dispatch(riskAction.unmount_attachment(params));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWarning);
