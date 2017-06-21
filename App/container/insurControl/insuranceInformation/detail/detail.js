import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import Input from "@stararc-component/input";
import GridLayout from "@stararc-component/gridlayout";
import TextArea from "@stararc-component/textarea";
import BigImg from "@stararc-component/big-img";
import {
	CommonUpload
} from "@stararc-insurance/upload-file";

import{
	getFormatData,
	getHoursMinutes
}from "@stararc-insurance/help-tools";

import Action from "../../model/acceptInsur/action";
import MediaAction from "../../model/media/action";
import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';
/**
 * 顶部retunButton
 */
class InformationDetail extends Component{
	render(){
		let ButtonStyle={
			background:'#f6a810',
			width:'60px',
			float:'right',
		}
		return(
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<div className={style['return--clear']}>
						<Button 
						styleCss={ButtonStyle}
						text={"返回"}
						onClick={e=>this.goBack()}/>
					</div>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<div className={style["detail_content--wrap"]}>
						<Enterprise enter={this.props.detail}/>
						<Guarantee {...this.props} guarantee={this.props.detail}/>
						<Claim {...this.props} claim={this.props.detail}/>
						<Auditing auditing={this.props.detail} {...this.props}/>
					</div>
				</LayoutContent>
			</div>
		)
	}
	goBack(){
		history.go(-1);
	}
	
	componentDidMount(){
		let {get_detail,params} = this.props;

		get_detail({
			company_id:params.id || "305"
		});
	}
}


/*企业基本信息*/
export class Enterprise extends Component{
	render(){
		let {enter={}} = this.props;
		return(
			<div className={style["enterprise"]}>
				<span className={style["title"]}>
					企业基本信息
				</span>
				<div className={style['enterprise-content']}>
					<span className={style["company-title"]}>
						{enter.organName}
					</span>
					<ul className={style["company-content"]}>
						<LiComponent lableName={"工商注册号 : "} 	
							content={enter.addon&&enter.addon.register}/>
						<LiComponent lableName={"所属网格 : "} 		
							content={enter.grid_name}/>
						<LiComponent lableName={"法人 : "} 				
							content={enter.addon&&enter.addon.legalPerson}/>
						<LiComponent lableName={"行业类型 : "} 			
							content={enter.type_name}/>
						<LiComponent lableName={"企业地址 : "} 				
							content={enter.addon&&enter.addon.address}/>
						<LiComponent lableName={"法人联系方式 : "} 			
							content={enter.addon&&enter.addon.legalPhone}/>
					</ul>
				</div>
			</div>
		)
	}
}

/*保障信息*/
export class Guarantee extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isopenMoreList:false,
	  	};
	}
	render(){
		let {guarantee={}} = this.props;
		return(
			<div className={style["guarantee"]}>
				<span className={style["title"]}>
					保障信息
				</span>
				<div className={style['guarantee-content']}>
					<UlComponentInfo detail = {guarantee.companyInsurance}/>
					{
						guarantee.companyInsurance&&guarantee.companyInsurance.more_data_num?	
						<div className={style['more']} >
							<a href="javascript:;" onClick={(e)=>this.openMoreList()}>更多保单信息({guarantee.companyInsurance.more_data_num})>></a>
						</div>:""
					}
				</div>
				{
					this.state.isopenMoreList ? 
					<MoreWarrantyList lists={this.props.companys} closeHandle={(e)=>this.closeMoreList()}></MoreWarrantyList>:''
				}
			</div>
		)
	}
	
	openMoreList(){
		let {get_guarantee,params} = this.props;
		get_guarantee({
			company_id:params.id,
			status:"1,2"
		})

		this.setState({
			isopenMoreList:true
		})
	}
	closeMoreList(){
		this.setState({
			isopenMoreList:false
		})
	}
}

/**
 * 保障信息部分
 */
export class UlComponentInfo extends Component{
	render() {
		let detail = this.props.detail || {};
		return (
			<ul className={style["guarantee-list"]}>
				<LiComponent lableName={"保险经纪公司 : "} 
					content={detail.broker_name}/>
				<LiComponent lableName={"承保公司 : "}
					content={detail.insurance_company}/>
				<LiComponent lableName={"投保人 : "}
					content={detail.apply_company_name}/>
				<LiComponent lableName={"被保人 : "}
					content={detail.company_name}/>	
				<LiComponent lableName={"投保单号 : "}
					content={detail.apply_number}/>
				<LiComponent lableName={"保单号 : "}
					content={detail.nsurance_number}/>
				<LiComponent lableName={"投保产品 : "}
					content={detail.insurance_type}/>
				<LiComponent lableName={"投保人数 : "}
					content={detail.insurance_population}/>
				<LiComponent lableName={"保费(元) : "}
					content={detail.insure_money}/>
				<LiComponent lableName={"累计责任限额(万元) : "}
					content={detail.add_up_liability_limit}/>
				<LiComponent lableName={"每次事故责任限额(万元) : "}
					content={detail.every_liability_limit}/>
				<LiComponent lableName={"每次事故每人责任限额(万元) : "}
					content={detail.person_avg_insurance}/>	
				<LiComponent lableName={"投保日期 : "}
					content={getFormatData(detail.insure_date)}/>
				<LiComponent lableName={"保险期限 : "}
					content={getFormatData(detail.start_date) + "~" + getFormatData(detail.done_at)}/>
				<div className={style["guarantee-img"]}>
					<img src={detail.status=="2"?require("../img/insur_ok.png"):require("../img/insur_outline.png")}/>
				</div>
			</ul>
		);
	}
}

/**
 * small pies 
 */
export class LiComponent extends Component{
	render(){
		return(
			<li>
				<span>{this.props.lableName} </span>
				<span>{this.props.content}</span>
			</li>
		)
	}
}

/*理赔信息*/
export class Claim extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isopenDetailRecord:false,
	  	};
	}
	render(){
		let {claim={}} = this.props;
		return(
			<div className={style["claim"]}>
				<span className={style["claim-title"]}>理赔信息</span>
				{
					!claim.compensate?
					<div className={style['claim-content']}>
						<span className={style["claim_tips"]}>暂无理赔相关信息</span>
					</div>
					:
					<div className={style['claim-content']}>
						<UlContentInfo claim = {claim.compensate}></UlContentInfo>
						{   
							claim.compensate&&claim.compensate.more_data_num?
							<div className={style['more']} >
								<a onClick={(e)=>this.openDetailRecord()} href="javascript:;">理赔详细记录({claim.compensate.more_data_num})>></a>
							</div>:""
						}
						{
							this.state.isopenDetailRecord?
							<DetailRecord claim={this.props.list} closeClaimHandle={(e)=>this.closeMoreClaimList()}></DetailRecord> : ''
						}
					</div>
				}
			</div>
		)
	}
	openDetailRecord(){
		let {get_toexamine,params} = this.props;
		get_toexamine({
			company_id:params.id,
			status:"3"
		})
		this.setState({
			isopenDetailRecord:true,
		})
	}
	closeMoreClaimList(){
		this.setState({
			isopenDetailRecord:false
		})
	}
}

/**
 * 理赔信息content
 */
export class UlContentInfo extends Component{
	render() {
		let claim = this.props.claim || {};
		return (
			<ul className={style["claim-list"]}>
				<LiComponent lableName={"出险时间 : "}
					content={getFormatData(claim.accident_at)}/>
				<LiComponent lableName={"赔付金额(元) : "} 				
					content={claim.comp_money}/>
				<LiComponent lableName={"事故类型 : "} 					
					content={claim.accident_type_name}/>
				<LiComponent lableName={"是否涉及人伤 : "} 					
					content={claim.is_involve_people=="2"?"是":"否"}/>
			</ul>
		);
	}
}
/*保险审核记录*/
export class Auditing extends Component{
	render(){
		return(
			<div className={style["andit"]}>
				<AuditingTitle />
				<AuditingContent {...this.props}/>
			</div>
		)
	}
}

/*保险审核记录标题*/
export class AuditingTitle extends Component{
	render(){
		return(
			<div className={style["andit-title"]}>保险审核记录</div>
		)
	}
}

/*保险审核记录内容组件*/
export class AuditingContent extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isOpenDialog:false,
	  		isOpenTokelog:false
	  	};
	}
	render(){
		let ButtonStyle={
			width:'90px',
			float:'right',
			background:'orange',
		};
		let insuranceApply = this.props.auditing && this.props.auditing.insuranceApply||{};
		return(
			<div className={style["audit-content"]}>
				<div className={style["audit-button"]}>
					{
						insuranceApply.is_approval?
						<Button 
							styleCss={ButtonStyle}
							text={"保险审核"}
							onClick={(e)=>this.openReslog()}>
						</Button>:""
					}
				</div>
				{this.getTimeLine(insuranceApply)}
				{	
					insuranceApply.more_data_num ?
					<div className={style["audit-more"]}><a href="javascript:;" onClick={(e)=>this.openTokeList()}>更多投保记录({insuranceApply.more_data_num}条)>></a></div>:""
				}
				{
					this.state.isOpenTokelog ? 
					<MoreTakeNode insuranceApply={this.props.insurList} closeMoreHandle={(e)=>this.closeTokeList()}></MoreTakeNode>:''
				}
				{
					this.state.isOpenDialog ? 
					<AuditingResult
						{...this.props}
						insurId = {insuranceApply.is_approval}
						conserveHandle={(action)=>this.closeReslog(action)}
						cancleHandle={(action)=>this.closeReslog(action)}>
					</AuditingResult>:''
				}
			</div>
		)
	}

	//打开
	openTokeList(){
		let {insur_list,params} = this.props;

		insur_list({
			effect_insuce_id:params.id,
			show_page:2
		})
		this.setState({
			isOpenTokelog:true,
		})
	}
	//关闭
	closeTokeList(){
		this.setState({
			isOpenTokelog:false,
		})
	}
	// 打开弹出框
	openReslog(){
		this.setState({
			isOpenDialog:true,
		})
	}
	// 关闭弹出框
	closeReslog(action){
		this.setState({
			isOpenDialog:false
		})	
	}
	// 获取审核记录的时间轴
	getTimeLine(insuranceApply={}){
		let list = insuranceApply.list||[];
		return list.map((l,key)=>{
			return (
				<div key={key}>		
					{l.status != '1' ? <AuditingContentInsur  auditing={l}/>:""}
					<AuditingContentCompany auditing={l}/>
				</div>	
			)
		})
	}
}

/*保险审核记录保险审核人部分*/
export class AuditingContentInsur extends Component{
	render(){
		let {auditing={}}= this.props;
		let auditing_img= auditing.attachment || [];
		let type={
			2:"拒绝投保",
			3:"同意投保"
		};

		return(
			<div className={style["audit-content--onelist"]}>
				<div className={style["circle"]}>保</div>
				<div className={style["time"]}>{getFormatData(auditing.approval_at)+" "+getHoursMinutes(auditing.approval_at)}</div>
				<div className={style["main"]}>
					<div className={style["information"]}>
						<p className={style["name"]}>审核人 : <span>{auditing.approval_user_name}</span></p>
						<p className={style["name"]}>审核结果 : <span>{type[auditing.status]}</span></p>
						<p className={style["name"]}>
							备注 : 
							<span>{auditing.approval_remark} </span>
						</p>
						<ul className={style["name-img"]}>
							{this.auditingImg(auditing_img)}
						</ul>
					</div>
				</div>
			</div>
		)
		
	}
	auditingImg(auditing_img){
		auditing_img= auditing_img ||[];
		return auditing_img.map((m,key)=>{
			return(
				<li className={style["name-img_li"]} key={key} onClick={e=>this.big_img(auditing_img,key)}>
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

/*保险审核记录 企业申请部分*/
export class AuditingContentCompany extends Component{
	render(){
		let {auditing={}}= this.props;
		let auditing_img= auditing.attachment || [];
		return(
			<div className={style["audit-content--onelist"]}>
				<div className={style["circle--enterprise"]}>企</div>
				<div className={style["time--enterprise"]}>{getFormatData(auditing.apply_at)+" "+getHoursMinutes(auditing.apply_at)}</div>
				<div className={style["main"]}>
					<div className={style["information"]}>
						<p className={style["name"]}>申请人 : <span>{auditing.apply_user_name}</span></p>
						<p className={style["name"]}>联系方式 : <span>{auditing.apply_phone}</span></p>
						<p className={style["name"]}>
							备注 : 
							<span> {auditing.apply_remark}</span>
						</p>
					</div>
				</div>
			</div>
		)
		
	}
}

/**
 * 审核结果弹窗
 */
export class AuditingResult extends Component{
	constructor(props){
		super(props);
		this.state={
			status:[{
				id:'2',
				name:"拒绝投保",
				params:"reject"
			},{
				id:'3',
				name:"同意投保",
				params:"agree"
			}],
			type:{
				2:'reject',
				3:'agree',
			},
			create_insurance:2,
			resultFlag:true,
			insuranceFlag:true
		}
	}
	render() {
		let InputStyle={width:'14px',height:'14px',border:'#46b0d7'};

		let buttonStyle={
			border:"1px solid #f6a811",
			background:"#f6a811",
			color:"black",
		};

		let cancelStyle={
			border:"1px solid #f6a811",
			background:"white",
			color:"black",
		};

		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]}></div>
				<div className={style["auditingresult"]}>
					<p className={style["res--title"]}>保险审核</p>
					<div className={style["res-select"]}>
						<span className={style["res-selest_name"]}>
							<img src={require("../img/pic.png")}/>
							审核结果 : 
						</span>
						<span className={style["res-selest_content"]}>
							<Select ref="approval_status" options={this.state.status}></Select>
						</span>
						{
							!this.state.resultFlag?
							<p className={style["must_p"]}>请输入必填字段</p>:''
						}

					</div>
					<div className={style["res--radio"]}>
						<span className={style["res-selest_name"]}>
							<img src={require("../img/pic.png")}/>
							是否创建新保单 : 
						</span>
						<span className={style["res-selest_radios"]}>
							<span onClick={e=>this.isCreateNewItem(1)} 
								className={this.state.create_insurance==1?style["res--active"]:""}>
								是
							</span>
							<span onClick={e=>this.isCreateNewItem(2)} 
								className={this.state.create_insurance==2?style["res--active"]:""}>
								否
							</span>
						</span>
						{
							!this.state.insuranceFlag?
							<span className={style["must"]}>请输入必填字段</span>:''
						}
						

					</div>
					<div className={style["res--remark"]}>
						<span className={style["res-remark_name"]}>
							备注 : 
						</span>
						<span className={style["res-remark_content"]}>
							<TextArea ref="approval_remark"></TextArea>
						</span>
					</div>

					<div className={style["res--picture"]}>
						<span className={style["res-picture_name"]}>
							<p>现场图片 :</p>
							<p>
								(<span>{this.props.attachList && this.props.attachList.length || 0}</span>/4)
							 </p> 
						</span>
						<ul className={style["res-picture_pic"]}>
							{this.getListImg()}
							{
								this.props.attachList&& this.props.attachList.length<4?
								<li className={style["res-remark--upload"]}>
									<CommonUpload 
										ref="attach"
										accept={"image/jpeg,image/jpg,image/png,image/svg"} 
										onChange={e=>this.changeHandle()}></CommonUpload>
								</li>:""
							}
						</ul>
					</div>

					<div className={style["action--componnet"]}>

						<GridLayout width="1.5" offset="4.4">
							<Button text={"取消"} 
								styleCss={cancelStyle} 
								onClick={(e)=>this.cancleHandle()}>
							</Button>
						</GridLayout>
						
						<GridLayout width="0.2">
							&nbsp;
						</GridLayout>
						<GridLayout width="1.5">
							<Button text={"确定"} 
								styleCss={buttonStyle} 
								onClick={(e)=>this.conserveHandle()}>
							</Button>
						</GridLayout>
					</div>
				</div>
			</div>
		)
	}
	getListImg(){
		let {attachList=[]} =this.props;
		return attachList.map((m,key)=>{
			return(
				<li  key={key}>
					<img src={m.attachment_path}/>
					<span className={style["delete_attach"]} onClick={e=>this.deleteAttach(m)}></span>
				</li>
			)
		})
	}
	isCreateNewItem(create_insurance){
		this.setState({
			create_insurance
		})
	}
	// conserve确认
	conserveHandle(){
		let {conserveHandle,approval} = this.props;
		let params = this.getValue();
		let resultFlag = true;
		let value = params.approval_status;
		if(!value){
			resultFlag = false;
		}
		this.setState({
			resultFlag
		},function(){
			resultFlag && approval(params);
			resultFlag && conserveHandle && conserveHandle("cancle");
		})
		
	}

	// cancle取消
	cancleHandle(){
		let {cancleHandle} = this.props;
		cancleHandle && cancleHandle("cancle");
	}
	// 上传附件
	changeHandle(){
		let {upload_attach} = this.props,formdata = this.refs.attach.getValue();
		upload_attach(formdata);
	}
	// 删除附件
	deleteAttach(data){
		let {delete_attach} = this.props;
		delete_attach(data);
	}
	getValue(){
		let refs = this.refs,result={},type=this.state.type;

		result={
			approval_status:type[refs.approval_status.getValue()],
			create_insurance:this.state.create_insurance,
			approval_remark:refs.approval_remark.getValue(),
			attachment_ids:this.getAttachIds(),
			id:this.props.insurId
		};

		return result;
	}
	getAttachIds(){
		let {attachList=[]} = this.props,ids=[];
		attachList.map((l,key)=>{
			ids.push(l.attachment_id)
		});
		return ids.join(",");
	}
}


/**
 * 更多保单信息
 */
export class MoreWarrantyList extends Component{
	render() {
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]} onClick={this.props.closeHandle}></div>
				<div className={style["more-warrant-list"]}>
					{this.getDialogContent()}
				</div>
			</div>
		);
	}
	getDialogContent(){
		let {lists=[]} = this.props;
		return lists.map((l,key)=>{
			return (
				<div key={key} className={style["more--warranty--list"]}>
					<UlComponentInfo  detail={l} />
				</div>
			)
		})
	}
}


/**
 * 更多投保记录弹框(当前数据为测试数据)
 */
export class MoreTakeNode extends Component{
	render() {
		let insuranceApply = this.props.insuranceApply||[];
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]} onClick={this.props.closeMoreHandle}></div>
				<div className={style["more-warrant-list"]}>
					{this.getTimeLine(insuranceApply)}
				</div>
			</div>
		);
	}

	getTimeLine(insuranceApply=[]){
		let list = insuranceApply||[];
		return list.map((l,key)=>{
			return (
				<div key={key}>		
					{l.status != '1' ? <AuditingContentInsur  auditing={l}/>:""}
					<AuditingContentCompany auditing={l}/>
				</div>	
			)
		})
	}
}
/**
 * 理赔详细信息
 */
export class DetailRecord extends Component{
	render() {
		return (
			<div className={style["area--dialog"]}>
				<div className={style["dialog--shade"]} onClick={this.props.closeClaimHandle}></div>
				<div className={style["more-warrant-list"]}>
					{this.getClaimlogContent()}
				</div>
			</div>
		);
	}
	getClaimlogContent(){
		let {claim=[]} = this.props;
		return claim.map((l,key)=>{
			return (
				<div key={key} className={style["more--warranty--list"]}>
					<UlContentInfo  claim={l}/>
				</div>
			)
		})
	}
}

let mapStateToProps = (state) => {
    return {
    	detail:state.acceptInsurReducer.detail,
    	attachList:state.insurUploadReducer.attachList,
    	companys:state.acceptInsurReducer.companys,
    	list:state.acceptInsurReducer.toexamine,
	    insurList:state.acceptInsurReducer.insurList,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取投保申请
        get_detail: (obj) => {
            dispatch(Action.detail(obj));
        },
        // 上传附件
        upload_attach: (obj) => {
            dispatch(MediaAction.upload(obj));
        },
        // 删除附件
        delete_attach:(obj) => {
            dispatch(MediaAction.delete_attach(obj));
        },
        // 审核
        approval:(obj) => {
            dispatch(Action.approval(obj));
        },
        //更多保障信息
        get_guarantee:(obj) => {
        	dispatch(Action.guarantee(obj));
        },
        //理赔信息
        get_toexamine:(obj) => {
        	dispatch(Action.toexamine(obj));
        },
        // 更多投保记录
        insur_list:(obj) => {
        	dispatch(Action.insur_list(obj));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InformationDetail);
