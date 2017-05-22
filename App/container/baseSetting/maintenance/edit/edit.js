import React,{Component} from "react";
import { connect } from 'react-redux';

import style from "../maintenance.css";
import Button from "@stararc-component/button";
import Input from "@stararc-component/input";
import GridLayout,{Row} from "@stararc-component/gridlayout";
import Action from "../../model/basesetting/action";
import {CommonUpload} from "@stararc-insurance/upload-file";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

/**
 * 基础信息编辑页面
 */
class MainTenance extends Component{
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<ActionBar/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50}}>
					<Maint ref="maint" {...this.props}/>
					<Claim ref="claim" {...this.props}/>
					<Cover ref="cover" {...this.props}/>
					<Daily ref="daily" {...this.props}/>
				</LayoutContent>
				<LayoutFooter>
					<SubmitBar onClick={e=>this.submitHandle()}/>
				</LayoutFooter>
			</div>
		);
	}
	componentDidMount(){
		let {get_detail} = this.props;

		get_detail();
	}
	submitHandle(){
		let {modify} = this.props;
		let refs = this.refs;
		// one
		let claimIsRight = refs.claim.getValue()["isRight"];		
		let coverIsRight = refs.cover.getValue()["isRight"];		
		let dailyIsRight = refs.daily.getValue()["isRight"];		


		if(!claimIsRight || !coverIsRight || !dailyIsRight){
			return;
		}


		let params={
			...refs.maint.getValue(),
			...refs.claim.getValue()["value"],
			...refs.cover.getValue()["value"],
			...refs.daily.getValue()["value"],
		};

		modify(params);
	}
}

/**
 * 操作栏
 */
class ActionBar extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
		};
		return (
			<div className={style['clear']}>
				<Button 
				styleCss={ButtonStyle}
				text={"返回"}
				onClick={e=>history.go(-1)}/>
			</div>
		);
	}
}

/**
 * 提交按钮
 */
class SubmitBar extends Component{
	render() {
		return (
			<div className={style["base--submit"]}>
				<GridLayout width="1" offset="5.5">
					<Button text={"保存"} type="button" onClick={this.props.onClick}></Button>
				</GridLayout>
			</div>
		);
	}
}

/**
 * 保险基础信息组件
 */
export class Information extends Component{
	render() {
		return (
			<div className={style["company"]}> 
				<span className={style["company--name"]}>
					{this.props.LableName}
				</span>
				<span className={style["company--name--title"]}>
					{this.props.children}
				</span>
			</div>
		);
	}
}

/**
 * 保险基础信息
 */
export class Maint extends Component{
	constructor(props) {
	  	super(props);
		let detail = this.props.detail && this.props.detail.addon||{};

	  	this.state = {
	  		imagePath:detail.imagePath || require("../../img/logo.png"),
	  		showTips:false
	  	};
	}
	render(){
		let ButtonStyle={background:"orange",width:'60px',marginLeft:'60%',marginTop:'3%'};
		let {detail={}} = this.props;
		return(
			<div className={style ["maint--container"]}>
				<div className={style["wrap--img"]}>
					<div className={style["information--login"]}>
						<img src={this.state.imagePath} alt=""/>
					</div>
					<div className={style["common--upload"]} onMouseOver={e=>this.mouseOverHadnle(true)} onMouseOut={e=>this.mouseOverHadnle(false)}>
						<CommonUpload 
							ref="logo"
							accept={"image/jpeg,image/jpg,image/png,image/svg"}
							onChange={e=>this.onChangeHandle()}>
						</CommonUpload>
					</div>
					{
						this.state.showTips?
						<div className={style["logo--tips"]}>
							<p>点击更换LOGO</p>
						</div>:""
					}
					{/*<Button styleCss={ButtonStyle} text={"浏览"}/>*/}
				</div>
				<div className={style["wrap--right"]}>
					<div className={style["information--title"]}>
						<Information LableName={"公司名称 :"}>
							<Input disabled={true} defaultValue={detail.organName}/>
						</Information>
						<Information LableName={"公司地址 :"}>
							<Input ref="address" defaultValue={detail.addon&& detail.addon.address}/>
						</Information>
					</div>
				</div>
			</div>
		)
	}
	// 鼠标移动到logo上面出现提示
	mouseOverHadnle(flag){
		this.setState({
			showTips:flag
		})
	}
	// 点击logo触发事件
	onChangeHandle(){
		let formdata = this.refs.logo.getValue();
		let {upload} = this.props;

		upload(formdata);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.detail != this.props.detail){
			let detail = nextProps.detail && nextProps.detail.addon||{};
			if(detail.imagePath){
				this.setState({
					imagePath:detail.imagePath
				})
			}
		}

		if(nextProps.logoImg != this.props.logoImg){
			let logoImg = nextProps.logoImg;
			this.setState({
				imagePath:logoImg.attachment_path
			})
		}
	}
	getValue(){
		let address = this.refs.address.getValue();
		let {imagePath} = this.state;
		return {
			address,
			imagePath
		}
	}
}


/*MiddleContent组件*/
export class MiddleContent extends Component{
	constructor(props) {
	   	super(props);
		this.state = {
			errorTips:""
		};
	}
	render() {
		return (
			<div className={style["claim--person"]}> 
				<span className={style["person--name"]}>
					{this.props.LableName}
				</span>
				<span className={style["person--input"]}>
					<Input ref="input" defaultValue={this.props.defaultValue}/>
					{/*this.props.children*/}
					<span className={style["prompt"]}>
						{this.state.errorTips}
					</span>
				</span>
			</div>
		);
	}
	getValue(){
		let {type=""} = this.props,
			result="",
			value = this.refs.input.getValue();
		switch(type){
			case "phone":
				result = this.RegExpPhoneFeild(value);		
				break;
			case "email":
				result = this.RegExpEmailFeild(value);
				break;
			default:
				result = this.RegExpCommonFeild(value);
				break
		}
		this.setState({
			errorTips:result.msg
		});
		return {
			isRight:result.isRight,
			value
		}	
	}
	//校验手机号
	RegExpPhoneFeild(value=""){
		let regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		let isRight = regExp.test(value);
		return {
			isRight,
			msg:value?isRight?"":"手机号格式不正确":"该项为必填项"
		}
	}
	// 校验邮箱
	RegExpEmailFeild(value=""){
		let regExp =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		let isRight = regExp.test(value);
		return {
			isRight,
			msg:value?isRight?"":"邮箱格式不正确":"该项为必填项"
		}
	}
	// 校验是非为空
	RegExpCommonFeild(value=""){
		let isRight = !!value;
		return {
			isRight,
			msg:isRight?"":"该项为必填项"
		}
	}
}

/**
 * 理赔联系人
 */
export class Claim extends Component{
	render(){
		let detail = this.props.detail && this.props.detail.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<MiddleContent
					ref="socPerson" 
					defaultValue={detail.socPerson}
					LableName={"理赔联系人"}>
				</MiddleContent>
				<MiddleContent
					ref="socContact"
					type={"phone"} 
					defaultValue={detail.socContact}
					LableName={"联系方式"}>
				</MiddleContent>
				<MiddleContent 
					ref="socEmail"
					type={"email"}
					defaultValue={detail.socEmail}
					errorTips={""}
					LableName={"邮箱"}>
				</MiddleContent>
			</div>
		)
	}

	getValue(){
		let socPerson = this.refs.socPerson.getValue();
		let socContact = this.refs.socContact.getValue();
		let socEmail = this.refs.socEmail.getValue();
		return{
			isRight:socPerson.isRight && socContact.isRight && socEmail.isRight,
			value:{
				socPerson:socPerson.value,
				socContact:socContact.value,
				socEmail:socEmail.value
			} 
		}
	}
}

/**
 * 投保联系人
 */
export class Cover extends Component{
	render(){
		let detail = this.props.detail && this.props.detail.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<MiddleContent 
					ref="insurePerson"
					defaultValue={detail.insurePerson}
					LableName={"投保联系人"}>
				</MiddleContent>
				<MiddleContent 
					ref="insureContact"
					type={"phone"}
					defaultValue={detail.insureContact}
					LableName={"联系方式"}>
				</MiddleContent>
				<MiddleContent 
					ref="insureEmail"
					type={"email"}
					defaultValue={detail.insureEmail}
					LableName={"邮箱"}>
				</MiddleContent>
			</div>
		)
	}
	getValue(){
		let insurePerson = this.refs.insurePerson.getValue();
		let insureContact = this.refs.insureContact.getValue();
		let insureEmail = this.refs.insureEmail.getValue();
		return{
			isRight:insurePerson.isRight && insureContact.isRight && insureEmail.isRight,
			value:{
				insurePerson:insurePerson.value,
				insureContact:insureContact.value,
				insureEmail:insureEmail.value
			} 
		}
	}
}

/**
 * 日常联系人
 */
export class Daily extends Component{
	render(){
		let detail = this.props.detail && this.props.detail.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<MiddleContent 
					ref="dailyPerson"
					defaultValue={detail.dailyPerson}
					LableName={"日常联系人"}>
				</MiddleContent>
				<MiddleContent 
					ref="dailyContact"
					type={"phone"}
					defaultValue={detail.dailyContact}
					LableName={"联系方式"}>
				</MiddleContent>
				<MiddleContent 
					ref="dailyEmail"
					type={"email"}
					defaultValue={detail.dailyEmail}
					LableName={"邮箱"}>
				</MiddleContent>
			</div>
		)
	}
	getValue(){
		let dailyPerson = this.refs.dailyPerson.getValue();
		let dailyContact = this.refs.dailyContact.getValue();
		let dailyEmail = this.refs.dailyEmail.getValue();

		return{
			isRight:dailyPerson.isRight && dailyContact.isRight && dailyEmail.isRight,
			value:{
				dailyPerson:dailyPerson.value,
				dailyContact:dailyContact.value,
				dailyEmail:dailyEmail.value
			} 
		}
	}
}


let mapStateToProps = (state) => {
    return {
    	detail:state.basesettingReducer.detail,
    	logoImg:state.basesettingReducer.logoImg
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        },
        modify: (obj) => {
            dispatch(Action.modify(obj))
        },
        upload: (obj) => {
            dispatch(Action.upload(obj))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTenance);