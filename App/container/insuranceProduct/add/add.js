import React,{Component} from "react";
import { connect } from 'react-redux';

import style from "../component/index.css";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import GridLayout from "@stararc-component/gridlayout";
import DatePicker from "@stararc-insurance/date-picker";
import Action from "../model/action.js";
import {
	CommonUpload
} from "@stararc-insurance/upload-file";


import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

import {
	ManagementEditButton,
	EssentialInformation,
	DeductibleExcess,
	ClauseContent,
	AuthorizedArea,
	ActionComponent
}from "../component";


class ManagementEditWarp extends Component{
	render() {
		return(
			<div className={style["acceptin-wrap"]}>
				<LayoutHeader styleCss={{height:50}}>
					<ManagementEditButton>
					</ManagementEditButton>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50}}>
					<EssentialInformation
						ref="essential"
						{...this.props} >
					</EssentialInformation>
					<DeductibleExcess
						ref="deductible"
						{...this.props} >
					</DeductibleExcess>
					<ClauseContent
						ref="upload"
						{...this.props} >
					</ClauseContent>
					<AuthorizedArea
						ref="authorizedarea"
						{...this.props} >
					</AuthorizedArea>
				</LayoutContent>
				<LayoutFooter>
					<ActionComponent 
						{...this.props} 
						onClick={e=>this.submitHandle()}>
					</ActionComponent>
				</LayoutFooter>	
			</div>
		)
	}
	submitHandle(){
		let {product_add}=this.props;
		let refs = this.refs,paramsFeild={};
		
		for(let r in refs){
			paramsFeild = Object.assign(paramsFeild,paramsFeild,{...refs[r].getValue()});
		}
		if(!paramsFeild.isVerify || !paramsFeild.isVerifyExcess || !paramsFeild.isValue || !paramsFeild.isValueArea){
			return;
		}
		product_add(paramsFeild);
	}

	componentDidMount(){
		let {get_insur_company,get_authorized_area} = this.props;
		get_insur_company();
		get_authorized_area();
	}	

	componentWillUnmount() {
		let {unmout_claim_detail} = this.props;
		unmout_claim_detail()
	}
}

let mapStateToProps = (state) => {
    return {
    	condition:state.productReducer.productCondition,
    	add:state.productReducer.productAdd,
    	insurCompany:state.productReducer.insurCompany,
    	lists:state.productReducer.list,
    	uploadClausecontent:state.productReducer.uploadClausecontent,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	product_add: (obj) => {
            dispatch(Action.product_add(obj))
        },
        get_insur_company: (obj) => {
            dispatch(Action.get_insur_company(obj));
        },
        get_authorized_area: (params={})=>{
        	dispatch(Action.get_authorized_area(params))
        },
       	upload_clausecontent: (params={})=>{
        	dispatch(Action.upload_clausecontent(params))
        },
        unmout_claim_detail: (obj) => {
            dispatch(Action.unmout_claim_detail(obj))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagementEditWarp);
