import React,{Component} from "react";
import{
	UserName,
	UserPhone,
	PassWord,
	EnsurePassWord,
	VerifyCode
}from "../../component/core.js";

/**
 * 注册的第二步
 * create by liheng at 2017.6.12
 */
export default class Index extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		registerFlag:false,
	  		passwordErrorMsg:""
	  	};
	}
	render() {
		return (
			<div>
				<UserName 
					ref="userName" 
					defaultValue={this.props.userName} 
					{...this.props}>
				</UserName>
				<UserPhone 
					ref="phone" 
					registerHandle={(flag)=>this.registerHandle(flag)}
					defaultValue={this.props.phone} 
					{...this.props}>
				</UserPhone>
				<PassWord 
					ref="password" 
					defaultValue={this.props.password} 
					{...this.props}>
				</PassWord>
				<EnsurePassWord 
					ref="passwordAgain"
					msg = {this.state.passwordErrorMsg}
					defaultValue={this.props.passwordAgain} 
					{...this.props}>
				</EnsurePassWord>
				<VerifyCode 
					ref="verifyCode"
					registerFlag={this.state.registerFlag}
					getVerifyCode={e=>this.getVerifyCode()}
					defaultValue={this.props.verifyCode} 
					{...this.props}>
				</VerifyCode>
			</div>
		);
	}
	/**
	 * 获取验证码的控制标志位
	 * @date   2017-06-18T11:39:19+0800
	 * @author liheng
	 */
	registerHandle(registerFlag){
		this.setState({
			registerFlag
		})
	}
	/**
	 * 收集第三步参数
	 * @date   2017-06-18T11:40:29+0800
	 * @author liheng
	 */
	getValue(){
		let result = {},refs = this.refs,self = this;

		for(let key in refs){

			result = Object.assign(result,result,{...refs[key].getValue()})
		}

		if(result["passwordAgainVerify"] && (result["password"] !== result["passwordAgain"])){
			result["passwordAgainVerify"] = false;
			self.setState({
				passwordErrorMsg:"两次密码不一致"
			})
		}

		return result;
	}
	/**
	 * 获取验证码
	 * @date   2017-06-16T16:49:28+0800
	 * @author liheng
	 */
	getVerifyCode(){
		let result = this.refs.phone.getValue();

		if(!result.phoneVerify){
			return;
		}

		let {get_verify_code} = this.props;

		get_verify_code({
			phone:result.phone
		});
	}

}

