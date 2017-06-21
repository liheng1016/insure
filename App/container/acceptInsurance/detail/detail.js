import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Button from "@stararc-component/button";
import Action from "../model/acceptInsur/action";
import {
	getFormatData
} from "@stararc-insurance/help-tools";

import{
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";


/**
 * 承保的保单详情
 */
class InformationDetail extends Component{
	render(){
		return(
			<div className={style["wrap"]}>
				<LayoutHeader styleCss={{height:50}}>
					<AcceptDetailButton {...this.props}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<AcceptDetailContent {...this.props}/>
				</LayoutContent>
			</div>
		)
	}
	componentDidMount(){
		let {get_detail,params} = this.props;
		get_detail({
			id:params.id
		});
	}
}

/**顶部按钮**/
export class AcceptDetailButton extends Component{
	render(){
		let ButtonStyle={width:'60px',background:'#f5a70f',float:'right',marginLeft:'15px'};
		let backStyle={width:'60px',background:'#f2c01f',float:'right',marginLeft:'15px'};
		return(
			<div className={style["button--return"]}>
				<Button styleCss={ButtonStyle} text={"返回"} onClick={e=>history.go(-1)}/>
				<Button styleCss={backStyle} text={"编辑"} onClick={e=>this.go_to_edit()}/>
			</div>
		)
	}
	go_to_edit(){
		let {params} = this.props;
		this.context.router.push("/acceptInsurance/edit/"+params.id);
	}
}

/**主体内容**/
export class AcceptDetailContent extends Component{
	render(){
		return(
			<div className={style["content-wrap"]}>
				<AcceptDetailApplicant applicant={this.props.detail}/>
				<ApplicantPassive passive={this.props.detail}/>
				<SecurityInformation security={this.props.detail}/>
				<DeductibleExcess deductible={this.props.detail}/>
				<DataUpload dataupload={this.props.detail}/>
				<Clause clause={this.props.detail}/>
			</div>
		)
	}
}

/*li组件*/
export class LiComponent extends Component{
	render(){
		return(
			<li>
				<span className={style["lable--name"]}>{this.props.lableName} </span>
				<span className={style["lable--content"]}>{this.props.content}</span>
			</li>
		)
	}
}

/**投保人信息**/
export class AcceptDetailApplicant extends Component{
	render(){
		let applicant = this.props.applicant||{};
		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>投保人信息</span>
				<ul className={style["content"]}>
					<LiComponent lableName={"投保人名称 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.organName}/>
					<LiComponent lableName={"所属地区 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.gridName}/>
					<LiComponent lableName={"工商注册号 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.register}/>
					<LiComponent lableName={"行业类型 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.typeName}/>
					<LiComponent lableName={"法人 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.legalPerson}/>
					<LiComponent lableName={"法人联系方式 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.legalPhone}/>
					<LiComponent lableName={"企业地址 : "} 
						content={applicant.applyCompany&&applicant.applyCompany.address}/>
				</ul>
			</div>
		)
	}
}


/**被投保人信息**/
export class ApplicantPassive extends Component{
	render(){
		let passive = this.props.passive || {};

		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>被投保人信息</span>
				<ul className={style["content"]}>
					<p className={style["content--span"]}>
						<span className={style["content--left"]}>和投保人一致 : </span>
						<span className={style["content--right"]}>
							{passive.company_id == passive.apply_company_id?"是":"否"}
						</span>
					</p>
					{
						passive.company_id !== passive.apply_company_id?
						<div>
							<LiComponent lableName={"被保人名称 : "} 
								content={passive.company && passive.company.organName}/>
							<LiComponent lableName={"所属地区 : "} 
								content={passive.company && passive.company.gridName}/>
							<LiComponent lableName={"工商注册号 : "} 
								content={passive.company && passive.company.register}/>
							<LiComponent lableName={"行业类型 : "} 
								content={passive.company && passive.company.typeName}/>
							<LiComponent lableName={"法人 : "} 
								content={passive.company && passive.company.legalPerson}/>
							<LiComponent lableName={"法人联系方式 : "} 
								content={passive.company && passive.company.legalPhone}/>
							<LiComponent lableName={"企业地址 : "} 
								content={passive.company && passive.company.address}/>
						</div>:""
					}
				</ul>
			</div>
		)
	}
}

/*保障信息*/
export class SecurityInformation extends Component{
	render(){
		let security = this.props.security||{};
		let status={
				1:"脱保",
				2:"在保 ",
				3:"待出单"
			};
		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>保障信息</span>
				<ul className={style["content"]}>
					<LiComponent lableName={"保险经纪公司 : "} 
						content={security.broker_name}/>
					<LiComponent lableName={"承保公司 : "} 
						content={security.insurance_company}/>
					<LiComponent lableName={"投保单号 : "} 
						content={security.apply_number}/>
					<LiComponent lableName={"保单号 : "} 
						content={security.insurance_number}/>
					<LiComponent lableName={"投保产品 : "} 
						content={security.insurance_type}/>
					<LiComponent lableName={"投保人数 : "} 
						content={security.insurance_population}/>
					<LiComponent lableName={"保费(元) : "} 
						content={security.insure_money}/>
					<LiComponent lableName={"累计责任限额(万元) : "} 
						content={security.add_up_liability_limit}/>
					<LiComponent lableName={"每次事故责任限额(万元) : "} 
						content={security.every_liability_limit}/>
					<LiComponent lableName={"每次事故每人责任限额(万元) : "} 
						content={security.person_avg_insurance}/>
					<LiComponent lableName={"投保日期 : "} 
						content={getFormatData(security.insure_date)}/>
					<LiComponent lableName={"保险期限 : "} 
						content={security.status=="3"?'':getFormatData(security.start_date)+"~"+getFormatData(security.done_at)}/>
				</ul>
			</div>
		)
	}
}

/*免赔额条例 */
export class DeductibleExcess extends Component{
	render(){
		let deductible = this.props.deductible||{};
		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>免赔额条例</span>
				<ul className={style["content"]}>
					<LiDeductible DeductibleName={"从业人员 : "}
						DeductibleContent={deductible.practitioners}/>
					<LiDeductible DeductibleName={"第三者责 : "}
						DeductibleContent={deductible.third_party}/>
				</ul>
			</div>
		)
	}
}

/*免赔额条例中li组件*/
export class LiDeductible extends Component{
	render(){
		return(
			<li className={style["deductible"]}>
				<span className={style["deductible--title"]}>
					{this.props.DeductibleName}
				</span>
				<span className={style["deductible--content"]}>
					{this.props.DeductibleContent}
				</span>
			</li>
		)
	}
}


/*资料上传*/
export class DataUpload extends Component{
	render(){
		let upload = this.props.dataupload ||{};
		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>资料上传</span>
				<ul className={style["content"]}>
					<LiDataUpload UploadName={"营业执照 : "}
						UploadContent={upload.businessAttachment}/>
					<LiDataUpload UploadName={"全员投保证明 : "}
						UploadContent={upload.fullAttachment}/>
					<LiDataUpload UploadName={"社保征缴通知单 : "}
						UploadContent={upload.socialAttachment}/>
					<LiDataUpload UploadName={"投保单盖章上传 : "}
						UploadContent={upload.sealAttachment}/>
					<LiDataUpload UploadName={"人员清单 : "}
						UploadContent={upload.peopleAttachment}/>
					<LiDataUpload UploadName={"其他 : "}
						UploadContent={upload.otherAttachment}/>
				</ul>
			</div>
		)
	}
}

/*资料上传中li组件*/
export class LiDataUpload extends Component{
	render(){
		let UploadContent = this.props.UploadContent && this.props.UploadContent[0] ||{}
		return(
			<li className={style["upload--li"]}>
				<span className={style["upload--title"]}>
					{this.props.UploadName}
				</span>
				<span className={style["upload--content"]}>
					<a href={UploadContent.attachment_path} download="">{UploadContent.name}</a>
				</span>
			</li>
		)
	}
}

/*条款内容*/
export class Clause extends Component{
	render(){
		let insuranceProduct = this.props.clause&&this.props.clause.insuranceProduct&&this.props.clause.insuranceProduct.attachment&&this.props.clause.insuranceProduct.attachment[0]||{};
		return(
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>条款内容</span>
				<div className={style["content"]}>
					<span className={style["clause--title"]}>保险条款 : </span>
					<span className={style["clause--content"]}>
						<a href={insuranceProduct.attachment_path} download="">{insuranceProduct.name}</a>
					</span>
				</div>
			</div>
		)
	}
}


let mapStateToProps = (state) => {
    return {
    	detail:state.acceptInsurReducer.detail,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取承保保单详情
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        }
    }
};     

AcceptDetailButton.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationDetail);
