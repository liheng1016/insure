import React,{Component} from "react";
import { connect } from 'react-redux';

import style from "../component/index.css";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import GridLayout from "@stararc-component/gridlayout";
import DatePicker from "@stararc-insurance/date-picker";

import {
	CommonUpload
} from "@stararc-insurance/upload-file";


import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

import {
	ApplicantInformationContent,
	SecurityInformation,
	InformantInformation,
	HearingCases,
	AccidentDetails,
	Upload,
	PaymentTime,
	FooterButton
}from "../component";

import Action from "../model/claim/action";

/**
 * 理赔管理编辑主体
 */
class SettleEditWrap extends Component{
	constructor(props){
		super(props)
		this.state={
			selectValue:{}
		}
	}
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
			marginLeft:'10px',
		};
		return (
			<div className={style["settleeditwrap"]}>
				
				<LayoutHeader styleCss={{height:50}}>
					<div className={style["back_button"]}>
						<Button 
							styleCss={ButtonStyle}
							text={"返回"}
							onClick={e=>history.go(-1)}>
						</Button>	
					</div>
				</LayoutHeader>
				
				<LayoutContent styleCss={{top:50}}>
						<div className={style["applicant"]}>
							<span className={style["applicant--title"]}>投保人信息</span>
							<ApplicantInformationContent  
								{...this.props}
								selectValue={this.state.selectValue}
								conserveHandle={(selectValue)=>this.conserveHandle(selectValue)}>
							</ApplicantInformationContent>	
						</div>	
						<SecurityInformation 
							{...this.props}
							selectValue={this.state.selectValue}>
						</SecurityInformation>
						<InformantInformation 
							ref="info"
							{...this.props}
							{...this.props.detail}
							selectValue={this.state.selectValue}>
						</InformantInformation>
						<HearingCases 
							ref="hear"
							{...this.props}
							{...this.props.detail}>
						</HearingCases>
						<AccidentDetails 
							ref="accident"
							{...this.props}
							{...this.props.detail}>
						</AccidentDetails>
						<Upload
							ref="upload" 
							{...this.props}>
						</Upload>
						<PaymentTime 
							ref="pay"
							{...this.props}
							{...this.props.detail}>
						</PaymentTime>
				</LayoutContent>
				<LayoutFooter>
					<FooterButton 
						{...this.props} 
						onClick={e=>this.submitHandle()}>
					</FooterButton>
				</LayoutFooter>	
			</div>
		);
	}
	conserveHandle(selectValue){
		this.setState({
			selectValue
		})
	}
	submitHandle(){
		let {update_compensate,params}=this.props;
		let refs = this.refs,paramsFeild={};
		for(let r in refs){
			paramsFeild = Object.assign(paramsFeild,paramsFeild,{...refs[r].getValue()})
		};
		// 报案人信息，案件受理信息 必填字段不通过不发送请求
		if(!paramsFeild["infoVerify"] || !paramsFeild["hearVerify"]){
			return;
		}
		paramsFeild["id"] = params.id;
		update_compensate(paramsFeild);
	}
	componentDidMount(){
		let {get_insur_company,get_accident_types,get_detail,params} = this.props;
		get_insur_company({
			count:8
		});
		get_detail({
			id:params.id,
			api_path:"1"
		});
		get_accident_types();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.detail != this.props.detail){
			this.setState({
				selectValue:{
					...nextProps.detail.companyInsurance,
					...nextProps.detail.company
				}	
			})
		}
	}
}

let mapStateToProps = (state) => {
    return {
    	condition:state.claimReducer.insurCompanyCondition,
    	lists:state.claimReducer.insurCompanyList,
    	accidentTypes:state.claimReducer.accidentTypes,
    	sceneAttachment:state.claimReducer.sceneAttachment,
		accidentAttachment:state.claimReducer.accidentAttachment,
		thingsAttachment:state.claimReducer.thingsAttachment,
    	detail:state.claimReducer.detail
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        update_compensate: (obj) => {
            dispatch(Action.update(obj));
        },
        get_insur_company: (obj) => {
            dispatch(Action.get_insur_company(obj));
        },
        get_accident_types: (obj) => {
            dispatch(Action.get_accident_types(obj));
        },
        // 上传附件
        upload_claim: (obj,type) => {
            dispatch(Action.upload_claim(obj,{
            	fileType:type
            }));
        },
        // 删除现场附件
        delete_claim:(index) => {
            dispatch(Action.delete_claim({index}));
        },
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        }
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettleEditWrap);
