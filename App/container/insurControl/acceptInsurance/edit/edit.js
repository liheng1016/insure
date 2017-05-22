import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "../component/index.css";
import{
	AcceptDetailButton,
	EnterpriceInfo,
	InsuredContent,
	SecurityInformation,
	DeductibleExcess,
	Upload,
	ArticleContent,
	ActionComponent
} from "../component/index";

import Action from "../../model/insurInfo/action";
import UploadAction from "../../model/media/action";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

class AcceptinEdit extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		deductibleExcess:{},
	  		selectValue:{},
	  		selectCompany:{},
	  		securityInformation:{}
	  	};
	}
	render() {
		return (
			<div className={style["acceptin-wrap"]}>
				<LayoutHeader styleCss={{height:50}}>
					<AcceptDetailButton/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50}}>
					<div className={style["content-wrap"]}>
						<div className={style["applicant-wrap"]}>
							<span className={style["title"]}>投保人信息</span>
							<EnterpriceInfo selectValue = {this.state.selectValue} />
						</div>
						<div className={style["applicant-wrap"]}>
							<span className={style["title"]}>被保人信息</span>
							<InsuredContent info = {this.state.selectCompany}/>
						</div>
						<SecurityInformation 
							ref="security"
							{...this.props} 
							{...this.props.detail}
							applyNumber={this.props.detail&&this.props.detail.apply_number}
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
							{...this.props.detail}
							articleContent={this.state.deductibleExcess}>
						</ArticleContent>	
					</div>
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
	// 点击和被保人一致为是的时候
	sameInforHandle(){
		let params = this.refs.accept.getValue();
		this.insuredChangeHandle({
			gridID:params.grid_id
		})
	}
	// 点击被保人信息的回调方法,获取生成的投保单号
	insuredChangeHandle(selectCompany){
		let {get_apply_number} = this.props;
		if(selectCompany){
			get_apply_number({
				grid_id:selectCompany.gridID
			})
		}
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
			{update_insur,params} = this.props,
			paramsFeileds={};
		for(let r in refs){
			Object.assign(paramsFeileds,paramsFeileds,{...refs[r].getValue()})
		}
		if(!paramsFeileds.isVerify){
			return;
		}
		// 被保人和投保人信息一样
		if(paramsFeileds.isTheSame){
			paramsFeileds["company_name"] = paramsFeileds.apply_company_name;
			paramsFeileds["company_id"] = paramsFeileds.apply_company_id;
		}
		paramsFeileds["id"] = params["id"];
		update_insur(paramsFeileds)
	}
	componentDidMount(){
		let {get_company_list,get_accept_company,get_detail,params,detail} = this.props;
		get_company_list();
		get_accept_company();
		get_detail({
			id:params.id
		})
	}
	componentWillReceiveProps(nextProps){
		let self = this;
		if(nextProps.detail != this.props.detail){
			this.setState({
				selectValue:nextProps.detail && self.getSelectValue(nextProps.detail.applyCompany),
				selectCompany:nextProps.detail && self.getSelectValue(nextProps.detail.company),
				deductibleExcess:{
					attachment:nextProps.detail && nextProps.detail.insuranceProduct && nextProps.detail.insuranceProduct["attachment"][0],
					practitioners:nextProps.detail && nextProps.detail.practitioners,
					third_party:nextProps.detail && nextProps.detail.third_party
				}
			})
		}
	}
	componentWillUnmount(){
		let {unmout_upload_insur} = this.props;

		unmout_upload_insur();
	}
	// 整合投保人,被保人信息
	getSelectValue(detail){
		return{
			organName:detail.organName,
			grid_name:detail.gridName,
			addon:{
				...detail
			}
		}
	}
}

let mapStateToProps = (state) => {
    return {
    	companyList:state.insurInfoReducer.companyList,
    	companyCondition:state.insurInfoReducer.companyCondition,
    	acceptCompany:state.insurInfoReducer.acceptCompany,
    	applyNumber:state.insurInfoReducer.applyNumber,
    	insurProductList:state.insurInfoReducer.insurProductList,
    	insureAcctach:state.insurInfoReducer.insureAcctach,
    	detail:state.insurInfoReducer.detail
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
        // 编辑保单
        update_insur: (obj) => {
            dispatch(Action.update_insur(obj));
        },
        // 获取保单详情
        get_detail:(obj) => {
            dispatch(Action.detail(obj));
        },
        // 卸载
        unmout_upload_insur:(obj) => {
            dispatch(Action.unmout_upload_insur(obj));
        }
        
    }
};        

export default connect(mapStateToProps, mapDispatchToProps)(AcceptinEdit);

