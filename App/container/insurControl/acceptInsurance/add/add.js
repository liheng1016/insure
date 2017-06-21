import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "../component/index.css";

import{
	AcceptDetailButton,
	AcceptDetailApplicant,
	InsuredInformation,
	SecurityInformation,
	DeductibleExcess,
	Upload,
	ArticleContent,
	ActionComponent
} from "../component/index";

import Action from "../../model/insurInfo/action";

import{
	LayoutHeader,
	LayoutContent,
	LayoutFooter
}from "@stararc-insurance/layout";

import{
	convertCookieToObj
} from "@stararc-insurance/help-tools";


class AcceptinAdd extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		deductibleExcess:{},
	  		selectValue:""
	  	};
	}
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<AcceptDetailButton/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50}}>
					<AcceptDetailApplicant  
						ref="accept"
						{...this.props}
						has_select_company={(selectValue)=>this.has_select_company(selectValue)}>
					</AcceptDetailApplicant>	
					<InsuredInformation 
						ref="insured"
						{...this.props}
						acceptDetail={this.state.selectValue}
						onChange={e=>this.insuredChangeHandle()}>
					</InsuredInformation>	
					<SecurityInformation 
						ref="security" 
						{...this.props}
						insuranceChangeHandle={(value)=>this.insuranceChangeHandle(value)} 
						productChangeHandle={(value)=>this.productChangeHandle(value)}>
					</SecurityInformation>	
					<DeductibleExcess 
						ref="deductible"
						{...this.props}
						deductibleExcess={this.state.deductibleExcess}>
					</DeductibleExcess>
					<Upload 
						ref="upload"
						{...this.props}
						uploadHandle={(value,type)=>this.uploadHandle(value,type)}>
					</Upload>	
					<ArticleContent 
						{...this.props}
						articleContent={this.state.deductibleExcess}>
					</ArticleContent>	
				</LayoutContent>
				<LayoutFooter>
					<ActionComponent 
						{...this.props}
						submitHandle={e=>this.submitHandle()}>
					</ActionComponent>	
				</LayoutFooter>	
			</div>
		);
	}
	// 选择投保人信息
	has_select_company(selectValue){
		this.setState({
			selectValue
		})
	}
	// 点击被保人信息的回调方法,获取生成的投保单号
	insuredChangeHandle(){
		let {get_apply_number} = this.props;
		let company = this.refs.insured.getValue();

		get_apply_number({
			grid_id:company.grid_id
		});
	}
	// 选择不同的承保公司获取到不同的投保产品
	insuranceChangeHandle(organ_id){
		let {get_insur_product} = this.props;


		get_insur_product({
			organ_id
		});
	}
	// 选择投保产品的回调方法，为了设置免赔额条例
	productChangeHandle(deductibleExcess){
		this.setState({
			deductibleExcess
		})
	}
	// 选择附件上传
	uploadHandle(value,type){
		let {upload_insur} = this.props;
		upload_insur(value,{fileType:type});
	}
	// 提交保存
	submitHandle(){
		let refs = this.refs,
			{create_insur} = this.props,
			params={};
		for(let r in refs){
			Object.assign(params,params,{...refs[r].getValue()})
		}
		if(!params.isVerify){
			return;
		}
		// 被保人和投保人信息一样
		if(params.isTheSame){
			params["company_name"] = params.apply_company_name;
			params["company_id"] = params.apply_company_id;
		}
		create_insur(params);
	}
	componentDidMount(){
		let {get_company_list,unmout_upload_insur} = this.props;

		unmout_upload_insur();

		get_company_list({
			page:1,
			count:8
		});
	}
	componentWillUnmount(){
		let {unmout_upload_insur} = this.props;

		unmout_upload_insur();
	}
}

let mapStateToProps = (state) => {
    return {
    	companyList:state.insurInfoReducer.companyList,
    	companyCondition:state.insurInfoReducer.companyCondition,
    	acceptCompany:state.insurInfoReducer.acceptCompany,
    	applyNumber:state.insurInfoReducer.applyNumber,
    	insurProductList:state.insurInfoReducer.insurProductList,
    	insureAcctach:state.insurInfoReducer.insureAcctach
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取企业列表
        get_company_list: (obj) => {
            dispatch(Action.company_list(obj));
        },
        // 获取承保企业数据
        get_accept_company: (obj) => {
            dispatch(Action.get_accept_company(obj));
        },
        // 获取投保单号
        get_apply_number: (obj) => {
            dispatch(Action.get_apply_number(obj));
        },
        // 获取保险产品
        get_insur_product: (obj) => {
            dispatch(Action.get_insur_product(obj));
        },
        // 上传投保相关资料
        upload_insur: (obj,type) => {
            dispatch(Action.upload_insur(obj,type));
        },
        // 创建保单
        create_insur: (obj) => {
            dispatch(Action.create_insur(obj));
        },
        // 卸载附件
        unmout_upload_insur:(obj) => {
            dispatch(Action.unmout_upload_insur(obj));
        }
    }
};        

export default connect(mapStateToProps, mapDispatchToProps)(AcceptinAdd);

