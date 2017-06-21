import React,{Component} from "react";
import {connect} from "react-redux";
import style from "./index.css";

import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Action from "../model/action.js";

class PersonalRegister extends Component{
	constructor(props){
		super(props);
		this.state={
			personMsg:props.personMsg
		}
	}
	render() {
		let CancelButton = {width:'40%',height:'40px',background:'white',color:'#3fa2ff',border:'1px solid #3fa2ff',float:'left'};
		let EnsureButton = {width:'40%',height:'40px',background:'#3fa2ff',color:'white',float:'right'};

		return (
			<div className={style["person_wrap"]}>
				<span className={style["person_title"]}>受邀用户信息验证</span>
				<span className={style["person_center"]}>
					<div className={style["msg_wrap"]}>
					
					{
						this.state.personMsg?<span className={style["person_msg"]}>{this.state.personMsg}</span>:""
					}	
					
					</div>
					<div className={style["person_phone_wrap"]}>
						<InputContant
							placeholder={"请输入手机号码"}
							LableName={"手机号码"}
							ref="phone"
							type={"telphone"} >
						</InputContant>
						<InputContant
							placeholder={"请输入六位纯数字的邀请码"}
							LableName={"邀请码"}
							ref="verifyCode"
							type={"invited"} >
						</InputContant>
					</div>
					<div className={style["button"]}>
						<Button styleCss={CancelButton} text={"取消"} onClick={e=>this.cancelHandle()}/>
						<Button styleCss={EnsureButton} text={"确认"} onClick={e=>this.submitHandle()}/>
					</div>
				</span>
			</div>
		);
	}

	submitHandle(){
		let refs = this.refs,{verify_code} = this.props;

		let phoneIsRight = refs.phone.getValue()["isRight"];
		let inviteIsRight = refs.verifyCode.getValue()["isRight"];
		if(!phoneIsRight || !inviteIsRight){
			
			return;
		}

		let params={
			phone:refs.phone.getValue()["value"],
			verifyCode:refs.verifyCode.getValue()["value"],
		};

		verify_code(params);
	}


	
	cancelHandle(){
		history.go(-1);
		return;
		let value = this.refs.phone.getValue();
		this.setState({
			errorTips:""
		})

		return{
			isRight:"",
			value:""
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.personMsg!=this.props.personMsg){
			this.setState({
				personMsg:nextProps.personMsg
			})
		}
	}
	
}

/*input组件*/
class InputContant extends Component{
	constructor(props) {
	   	super(props);
		this.state = {
			errorTips:""
		};
	}
	render() {
		let InputStyle = {width:'100%',height:'40px'};
		return (
			<p className={style["phone"]}>
				<span className={style["phone_name"]}>
					{this.props.LableName}
				</span>
				<span className={style["phone_input"]}>
					<Input ref="input" styleCss={InputStyle} placeholder={""}/>
					<span className={style["must"]}>
						{this.state.errorTips}
					</span>
				</span>
			</p>
		);
	}

	getValue(){
		let {type=""} = this.props,result="",value = this.refs.input.getValue();
		switch(type){
			case "telphone":
				result = this.TelphoneFeild(value);
				break;
			case "invited":
				result = this.InvitedFeild(value);
				break;
			default:
				result = this.CommonFeild(value);
				break
		}

		this.setState({
			errorTips:result.msg
		});

		return{
			isRight:result.isRight,
			value
		}
	}
	//手机号验证
	TelphoneFeild(value=""){
		let regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		let isRight = regExp.test(value);
		return{
			isRight,
			msg:value?isRight?"":"请输入正确的手机号":"该项为必填项"
		}
	}
	//邀请码验证
	InvitedFeild(value=""){
		let regExp = /^\d{6}$/;
		let isRight = regExp.test(value);
		return{
			isRight,
			msg:value?isRight?"":"请输入正确的邀请码":"该项为必填项"
		}
	}
	//非空字段
	CommonFeild(value=""){
		let isRight = !!value;
		return{
			isRight,
			msg:isRight?"":"该项为必填项"
		}
	}
}

let mapStateToProps = (state) => {
    return {
    	personMsg:state.registerReducer.personMsg,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // 受邀用户验证码校验
        verify_code: (obj) => {
            dispatch(Action.verify_code(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalRegister);