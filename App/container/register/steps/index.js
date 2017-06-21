import React,{Component} from "react";
import {connect} from "react-redux";

import style from "./index.css";
import {
	RegisterNav,
	StepController
} from "../component/core";

import StepOne from "./component/StepOne";

import StepTwo from "./component/StepTwo";

import StepThree from "./component/StepThree";

import Action from "../model/action.js";


class RegisterStep extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		step:1,
	  		isAgreeFlag:true,
	  		formData:""
	  	};
	}
	render(){
		return(
			<div className={style["wrap_p"]}>
				<RegisterNav currentStep={this.state.step}></RegisterNav>
				{
					this.getCurrentStep()
				}
				<StepController
					{...this.state}
					prevStepHandle={e=>this.stepHandle("prev")} 
					nextStepHandle={e=>this.stepHandle("next")}
					submitHandle={e=>this.submitHandle()}
					currentStep={this.state.step}>
				</StepController>
				{this.props.children}
			</div>
		)
	}
	/**
	 * 获取对应的步骤
	 * @date   2017-06-18T11:31:36+0800
	 * @author liheng
	 */
	getCurrentStep(){
		let {step=1}=this.state,component="",self = this;

		switch(step){
			case 1:
				component = <StepOne ref="one" onChange={(obj)=>self.changeHandle(obj)} {...self.state.formData} {...self.props}></StepOne>;
				break;
			case 2:
				component = <StepTwo ref="two"  {...this.state.formData} {...self.props}></StepTwo>;
				break;
			case 3:
				component = <StepThree ref="three" isAgree={(obj)=>self.agreeHandle(obj)} {...this.state.formData} isAgreeFlag={this.state.isAgreeFlag} {...self.props}></StepThree>;
				break;
			default:
				break;		
		}

		return component;
	}
	/**
	 * 是否同意协议
	 * @date   2017-06-18T11:01:46+0800
	 * @author liheng
	 */
	agreeHandle(isAgreeFlag){
		this.setState({
			isAgreeFlag
		})
	}
	/**
	 * 步骤控制
	 * @date   2017-06-14T12:06:29+0800
	 * @author liheng
	 */
	stepHandle(type){
		let {step} = this.state,
			self = this;

		if(step == 1){
			let formData = self.collectValue("one");

			if(!formData.gridVerify||!formData.organVerify||!formData.typeVerify){
				if(type == "next"){
					return;
				} 
			}
		}else if(step == 2){
			let formData = self.collectValue("two");

			if(!formData.userNameVerify||!formData.phoneVerify||!formData.passwordVerify||!formData.passwordAgainVerify||!formData.verifyCodeVerify){
				if(type == "next"){
					return;
				}	
			}
		}else if(step == 3){
			self.collectValue("three");
		}
		

		this.setState({
			step:type=="prev"?(--step):(++step)
		})
	}
	/**
	 * 收集对应步骤数据
	 * @date   2017-06-16T14:48:17+0800
	 * @author liheng
	 */
	collectValue(type){
		let	refs = this.refs,newFormData = {},{formData}=this.state;

		let result = refs[type].getValue();

		newFormData = Object.assign({},formData,{...result});

		this.setState({
			formData:newFormData
		})
		
		return newFormData;
	}
	/**
	 * 区域发生变动
	 * @date   2017-06-15T14:25:45+0800
	 * @author liheng
	 */
	changeHandle(obj){
		let {get_company_area} = this.props;

		get_company_area(obj);
	}
	/**
	 * 提交表单
	 * @date   2017-06-18T11:29:16+0800
	 * @author liheng
	 */
	submitHandle(){
		let {formData}=this.state,{company_register} = this.props;

		company_register(formData);
	}
	componentDidMount(){
		let {get_industry_list,get_company_area} = this.props;

		get_industry_list();
		get_company_area();
	}
} 

let mapStateToProps = (state) => {
    return {
    	industryList:state.registerReducer.industryList,
    	checkCompanyFlag:state.registerReducer.checkCompanyFlag,
    	grids:state.registerReducer.grids
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取行业类型
        get_industry_list: (obj) => {
            dispatch(Action.get_industry_list(obj));
        },
        // 校验企业是否存在
        check_company_isexist: (obj) => {
            dispatch(Action.check_company_isexist(obj));
        },
        // 获取网格区域
        get_company_area: (obj) => {
            dispatch(Action.get_company_area(obj));
        },
        // 获取手机验证码
        get_verify_code: (obj) => {
            dispatch(Action.get_verify_code(obj));
        },
        // 企业注册
        company_register: (obj) => {
            dispatch(Action.company_register(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep);