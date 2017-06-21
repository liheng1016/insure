import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import TextArea from "@stararc-component/textarea";
import Action from "../model/claim/action";
import {getFormatData,getHoursMinutes} from "@stararc-insurance/help-tools";
import BigImg from "@stararc-component/big-img";
import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';
/*主体*/
class SettlementDetail extends Component{
	render() {
		return (
			<div className={style["detailwarp"]}>
				<LayoutHeader styleCss={{height:50}}>
					<ActionBar {...this.props} actionbar={this.props.detail}></ActionBar>
				</LayoutHeader>

				<LayoutContent styleCss={{top:50,bottom:0}}>
					<div className={style["detail_content--wrap"]}>
						<ApplicantInformation applicant={this.props.detail}/>
						<SecurityInformation security={this.props.detail}/>
						<InformantInformation informant={this.props.detail}/>
						<CaseAcceptanceInformation caseacceptance={this.props.detail}/>
						<AccidentDetails accident={this.props.detail}/>
						<LossSituation loss={this.props.detail}/>
						<PaymentInformation payment={this.props.detail}/>
					</div>
				</LayoutContent>
			</div>
		);
	}

	componentDidMount(){
		let {get_detail,params} = this.props;
		get_detail({
			id:params.id,
			api_path: '1'
		});
	}
	componentWillUnmount() {
		let {unmout_claim_detail} = this.props;
		unmout_claim_detail()
	}

}

export class ActionBar extends Component{
	render() {
		let actionbar = this.props.actionbar || {};
		let ButtonStyle={width:'60px',background:'#f2c01f',float:'right',marginLeft:'10px'};
		let backStyle={width:'60px',background:'#f5a70f',float:'right',marginLeft:'10px'};
		let status = {
			1:'报案',
			2:'定损',
			3:'结案',
			4:'销案'
		};
		return (
			<div className={style['return--clear']}>
				<Button 
					styleCss={backStyle}
					text={"返回"}
					onClick={e=>history.go(-1)}/>
				{
					actionbar.status== "2"||actionbar.status=="1"?
					<Button
						onClick={e=>this.go_to_edit()} 
						styleCss={ButtonStyle}
						text={"编辑"}/>:''
				}	
			</div>
		);
	}
	go_to_edit(){
		let {params} = this.props;
		this.context.router.push("/claimManagement/edit/"+params.id)
	}
}

/**
 * 投保人信息
 */
export class ApplicantInformation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>投保人信息</span>
				<ApplicantContent {...this.props}/>
			</div>
		);
	}
}

/*投保人内容*/
export class ApplicantContent extends Component{
	render() {
		let applicant = this.props.applicant && this.props.applicant.company||{};
		return (
			<ul className={style["applicant"]}>
				<LiComponent lableName={'投保人名称 : '}
					content={applicant.organName}/>
				<LiComponent lableName={'所属地区 : '}
					content={applicant.gridName}/>
				<LiComponent lableName={'工商注册号 : '}
					content={applicant.register}/>
				<LiComponent lableName={'行业类型 : '}
					content={applicant.typeName}/>
				<LiComponent lableName={'法人 : '}
					content={applicant.legalPerson}/>
				<LiComponent lableName={'法人联系方式 : '}
					content={applicant.legalPhone}/>
				<LiComponent lableName={'企业地址 : '}
					content={applicant.address}/>
			</ul>
		);
	}
}
/**
 * li公用组件
 */
export class LiComponent extends Component{
	render(){
		return(
			<li className={style["applicant-content--li"]}>
				<span className={style["applicant-li--name"]}>{this.props.lableName}</span>
				<span className={style["applicant-li--content"]}>{this.props.content}</span>
			</li>
		)
	}
}

/**
 * 保障信息
 */
export class SecurityInformation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>保障信息</span>
				<SecurityContent {...this.props}/>
			</div>
		);
	}
}
/**
 * 保障信息内容组件
 */
export class SecurityContent extends Component{
	render() {
		let security = this.props.security.companyInsurance||{};
		return (
			<ul className={style["applicant"]}>
				<LiComponent lableName={'保险经纪公司 : '}
					content={security.broker_name}/>
				<LiComponent lableName={'承保公司 : '}
					content={security.insurance_company}/>
				<LiComponent lableName={'投保人 : '}
					content={security.apply_company_name}/>
				<LiComponent lableName={'被保人 : '}
					content={security.company_name}/>
				<LiComponent lableName={'投保单号 : '}
					content={security.apply_number}/>
				<LiComponent lableName={'保单号 : '}
					content={security.insurance_number}/>
				<LiComponent lableName={'投保产品 : '}
					content={security.insurance_type}/>
				<LiComponent lableName={'投保人数 : '}
					content={security.insurance_population}/>
				<LiComponent lableName={'保费(元) : '}
					content={security.insure_money}/>
				<LiComponent lableName={'累计责任限额(万元) : '}
					content={security.add_up_liability_limit}/>
				<LiComponent lableName={'每次事故责任限额(万元) : '}
					content={security.every_liability_limit}/>
				<LiComponent lableName={'每人每次事故责任限额(万元) : '}
					content={security.person_avg_insurance}/>
				<LiComponent lableName={'投保日期 : '}
					content={getFormatData(security.insure_date)}/>
				<LiComponent lableName={'保险期限 : '}
					content={getFormatData(security.start_date)+"~"+getFormatData(security.done_at)}/>
				<div className={style["picture"]}>
					<img src={security.status=="2"?require("../img/insur_ok.png"):require("../img/insur_outline.png")}/>
				</div>
			</ul>
		);
	}
}

/**
 * 报案人信息
 * 
 */

export class InformantInformation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>报案人信息</span>
				<InformantContent {...this.props}/>
			</div>
		);
	}
}

/**
 * 报案人信息内容组件
 */
export class InformantContent extends Component{
	render() {
		let informant = this.props.informant;
		return (
			<ul className={style["applicant-content"]}>
				<LiComponent lableName={'报案人名称 : '}
					content={informant.user_name}/>
				<LiComponent lableName={'报案人联系方式 : '}
					content={informant.phone}/>
				<LiComponent lableName={'报案类型 : '}
					content={informant.insurance_type}/>
				<LiComponent lableName={'报案时间 : '}
					content={getFormatData(informant.report_at)}/>
				<LiComponent lableName={'现场联系人 : '}
					content={informant.contacts}/>
				<LiComponent lableName={'现场联系方式 : '}
					content={informant.contacts_phone}/>
			</ul>
		);
	}
}

/**
 * 案件受理信息
 */
export class CaseAcceptanceInformation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>案件受理信息</span>
				<CaseAcceptanceContent {...this.props}/>
			</div>
		);
	}
}
/**
 * 案件受理内容组件
 */
export class CaseAcceptanceContent extends Component{

	render() {
		let caseacceptance = this.props.caseacceptance;
		let status = {
			1:'报案',
			2:'定损',
			3:'结案',
			4:'销案'
		};
		return (
			<ul className={style["applicant-content"]}>
				<LiComponent lableName={'案件状态 : '}
					content={status[caseacceptance.status]}/>
				<LiComponent lableName={'保险公司报案号 : '}
					content={caseacceptance.compensate_number}/>
				<LiComponent lableName={'受理时间 : '}
					content={getFormatData(caseacceptance.compensate_at)}/>
			</ul>
		);
	}
}

/**
 * 事故详情
 */
export class AccidentDetails extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>事故详情</span>
				<AccidentDetailsContent {...this.props}/>
			</div>
		);
	}
}

/**
 * 事故详情内容组件
 */
export class AccidentDetailsContent extends Component{
	render() {
		let accident =this.props.accident || {};
		let auditing_img= accident.attachment || [];
		return (
			<ul className={style["applicant-content"]}>
				<LiComponent lableName={'出险地点 : '}
					content={accident.accident_address}/>
				<LiComponent lableName={'出险时间 : '}
					content={getFormatData(accident.accident_at)}/>
				<LiComponent lableName={'事故类型 : '}
					content={accident.accident_type_name}/>
				<LiComponent lableName={'是否涉及人伤 : '}
					content={accident.is_involve_people=="2"?"是":"否"}/>
				<LiPass lableName={'事故经过 : '}
					content={accident.accident_desc}/>
				<ol className={style["accident-pic"]}>
					{this.getAccidentImg(auditing_img)}
				</ol>
			</ul>
		);
	}

	getAccidentImg(auditing_img){
		auditing_img= auditing_img ||[];
		return auditing_img.map((m,key)=>{
			return(
				<li className={style["pic--li"]}  key={key} onClick={e=>this.big_img(auditing_img,key)}>
					<img src={m.attachment_path}/>
				</li>
			)
		})
	} 

	big_img(imgArr=[],index){
		let newImgArr = [];
		
		imgArr.map((img)=>{
			newImgArr.push({
				id:img.attachment_id,
				path:img.attachment_path
			})
		});

		BigImg(newImgArr,index);
	}
}

/**
 * 事故经过组件
 */

export class LiPass extends Component{
	render() {
		return (
			<li className={style["accidentpassing"]}>
				<span className={style["passing-name"]}>{this.props.lableName}</span>
				<span className={style["passing-content"]}>{this.props.content}</span>
			</li>
		);
	}
}
/**
 * 损失情况
 */
export class LossSituation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>损失情况</span>
				<LossSituationContent {...this.props}/>
			</div>
		);
	}
}

/**
 * 损失情况内容组件
 */
export class LossSituationContent extends Component{
	render() {
		let accident = this.props.loss && this.props.loss.accidentAttachment && this.props.loss.accidentAttachment[0] ||{};
		let things = this.props.loss && this.props.loss.thingsAttachment && this.props.loss.thingsAttachment[0] ||{};

		return (
			<ul className={style["applicant-content"]}>
				<li className={style["losssituation"]}>
					<span className={style["loss-name"]}>伤亡人员清单 : </span>
					<span className={style["loss-content"]}>
						<a href={accident.attachment_path} download="">{accident.name}</a>
					</span>
				</li>
				<li className={style["losssituation"]}>
					<span className={style["loss-name"]}>物损清单 : </span>
					<span className={style["loss-content"]}>
						<a href={things.attachment_path} download="">{things.name}</a>
					</span>
				</li>
			</ul>
		);
	}
}
/**
 * 赔付信息
 */
export class PaymentInformation extends Component{
	render() {
		return (
			<div className={style["applicantinformation"]}>
				<span className={style["applicant-title"]}>赔付信息</span>
				<PaymentContent {...this.props}/>
			</div>
		);
	}
}

export class PaymentContent extends Component{
	render() {
		let payment = this.props.payment;
		return (
			<ul className={style["applicant-content"]}>
				<LiComponent lableName={'报损金额(元) : '}
					content={payment.apply_money}/>
				<LiComponent lableName={'赔付金额(元) : '}
					content={payment.comp_money}/>
				<LiComponent lableName={'赔付时间 : '}
					content={getFormatData(payment.comp_at)}/>
			</ul>
		);
	}
}



let mapStateToProps = (state) => {
    return {
    	detail:state.claimReducer.detail,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        },
        unmout_claim_detail: (obj) => {
            dispatch(Action.unmout_claim_detail(obj))
        },
    }
};

ActionBar.contextTypes={
	router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SettlementDetail);