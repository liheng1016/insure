import React,{Component} from "react";
import style from "./index.css";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import GridLayout from "@stararc-component/gridlayout";
import DatePicker from "@stararc-insurance/date-picker";
import Textarea from "@stararc-component/textarea";
import Pagination from "@stararc-component/pagination";

import {
	CommonUpload
} from "@stararc-insurance/upload-file";

import{
	getFormatData
} from "@stararc-insurance/help-tools";

/**
 * 不必要验证的input  li组件
 */
export class LiContent extends Component{
	render() {
		return (
			<li className={style["applicant-content--li"]}>
				<span className={style["content-li--name"]}>
					{this.props.LabelName}
				</span>
				<span className={style["content-li--input"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.helpTips}
					</span>
				</span>
			</li>
		);
	}
}

/**
 * 投保人信息
 */
export class ApplicantInformation extends Component{
	
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>投保人信息</span>
				<ApplicantInformationButton 
					{...this.props} 
					conserveHandle={this.props.conserveHandle}/>
				{
					this.props.selectValue && this.props.selectValue.id ? 
					<ApplicantInformationContent selectValue = {this.props.selectValue}>
					</ApplicantInformationContent>:""
				}
			</div>
		);
	}
	
	getValue(){
		let {selectValue} = this.props;
		return{
			company_insurance_id:selectValue.id,
			apply_company_name:selectValue.apply_company_name,
			
		}
	}
}

/**
 * 投保人信息Button
 */
export class ApplicantInformationButton extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isOpenChoicelog:false,
	  	};
	}
	render() {
		let accpt = this.props;
		let ButtonStyle = {width:'80px',background:'orange',float:'right',marginTop:'10px',marginRight:'20px'}
		return (
			<div className={style["applicantcontent-wrap"]}>
				<span className={style["applicant-select"]}>请点击右侧按钮选择理赔企业</span>
				<Button 
					styleCss={ButtonStyle} 
					text={"选择企业"} 
					onClick={(e)=>this.openChoicelog()}/>
				{
					this.state.isOpenChoicelog ? 
					<EnterprisePopups 
						{...this.props}
						lists={this.state.lists}
						conserveHandle={(action,selectValue,index)=>this.closeReslog(action,selectValue,index)}
						cancleHandle={(action)=>this.closeReslog(action)}
						>
					</EnterprisePopups>:''
				}
			</div>
		);
	}
	// 打开弹出框
	openChoicelog(){
		this.setState({
			isOpenChoicelog:true,
		})
	}
	// 关闭弹出框
	closeReslog(action,selectCompany,companyList){
		let self = this,{lists} = this.state;
		this.setState({
			isOpenChoicelog:false,
			lists:companyList?companyList: lists
		},()=>{
			let {conserveHandle} = self.props;
			selectCompany && conserveHandle && conserveHandle(selectCompany);
		})	
		
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.lists != this.props.lists){
			this.setState({
				lists:nextProps.lists
			})
		}

	}
}

/**
 * 选择企业弹窗
 */
export class EnterprisePopups extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		index:props.index|| '',
	  		companyList:props.lists||[]
	  	};
	}
	render() {
		let Buttonstyle={width:'64px',display:'inline-block',background:'#efc420',borderRadius:'0px'};
		let InputStyle={width:'100%',borderRight:'0px'};
		let accpt=this.props.accpt;
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
				<div className={style["enterprisepopups"]}>
					<div className={style["search--warp"]}>
						<div className={style["search"]}>
							<span className={style["search--input"]}>
								<Input  ref="q" styleCss={InputStyle} placeholder="企业名称关键字"/>
							</span>
							<span className={style["search_button"]}>
							<Button text={'搜索'} styleCss={Buttonstyle} onClick={e=>this.search()}/>
							</span>
						</div>
					</div>
					<div className={style["search-content"]}>
						<table  className={style["table--main"]}>
							<thead>
								<tr className={style["table_title"]}>
								    <th className={style["table_select"]}>操作</th>
								    <th>被保企业名称</th>
								    <th>投保单号</th>
								    <th>投保产品</th>
								    <th>注册号</th>
								    <th>保单状态</th>
								</tr>
							</thead>
							<tbody>
								{this.getTrPopupsContent()}		
							</tbody>
						</table>
						<div className={style["pagination--box"]}>
							<Pagination 
								currentPage={this.props.condition.page} 
								totalPage={this.props.condition.totalPage} 
								pageGoTo={(page)=>this.pageGoTo(page)}>
							</Pagination>
						</div>
					</div>

					<div className={style["action--componnet"]}>
						<GridLayout width="1"  offset="4.9">
							<Button text={"取消"} 
								styleCss={cancelStyle} 
								onClick={(e)=>this.cancleHandle()}>
							</Button>
						</GridLayout>
						
						<GridLayout width="0.2">
							&nbsp;
						</GridLayout>
						<GridLayout width="1">
							<Button text={"确认"} 
								styleCss={buttonStyle} 
								onClick={(e)=>this.conserveHandle()}>
							</Button>
						</GridLayout>
					</div>
				</div>
			</div>
		);
	}

	getTrPopupsContent(){
		let {companyList=[],index} = this.state,
			status={
				1:"脱保",
				2:"在保 ",
				3:"待出单"
			};;
		return companyList.map((l,key)=>{
			let classname =l.isSelected?style["table_row--hover"]:style["table_row"];
			return (
				<tr className={classname} key={key}>
					<td onClick={e=>this.selectedTr(key)}>
						<span  className={ l.isSelected?style["company_select"]:style["company_select--not"]}> </span>
					</td>
				    <td title={l.company_name}>{l.company_name}</td>
				    <td title={l.apply_number}>{l.apply_number}</td>
				    <td title={l.insurance_type}>{l.insurance_type}</td>
				    <td title={l.register}>{l.register}</td>
				    <td title={status[l.status]}>{status[l.status]}</td>
				</tr>
			)
		})
	}
	search(){
		this.pageGoTo(1);
	}
	pageGoTo(page){
		let q = this.refs.q.getValue(),
			{get_insur_company} = this.props;
		let params={
			q:q,
			page:page,
			count:8,
			status:2   //在保
		};

		get_insur_company(params);
	}
	// 选中
	selectedTr(index){
		let {companyList=[]} = this.state;
		companyList.map((c,key)=>{
			c.isSelected = false;
		});
		companyList[index].isSelected = true;
		this.setState({
			companyList
		});
	}
	
	// conserve
	conserveHandle(){
		let {conserveHandle} = this.props,
			{companyList} = this.state,
			selectValue={};

			companyList.map((c,key)=>{
				if(c.isSelected){
					selectValue = c;
					return;
				}
			});

		conserveHandle && conserveHandle("cancle",selectValue,companyList);
	}

	// cancle
	cancleHandle(){
		let {cancleHandle} = this.props;
		cancleHandle && cancleHandle("cancle");
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.lists != this.props.lists){
			this.setState({
				companyList:nextProps.lists
			})
		}
	}
}

/**
 * 投保人信息内容
 */
export class ApplicantInformationContent extends Component{
	render() {
		let InputStyle = {width:'100%'};
		let {selectValue={}} = this.props;
		return (
			<ul className={style["applicant-content"]}>
				<LiContent LabelName={"投保人名称"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.apply_company_name} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"所属地区"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.grid_name} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"工商注册号"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.register} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"行业类型"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.type_name} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"法人"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.legalPerson} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"法人联系方式"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.legalPhone} disabled={"true"}/>
				</LiContent>
				<LiContent LabelName={"企业地址"}>
					<Input styleCss={InputStyle} defaultValue={selectValue.address} disabled={"true"}/>
				</LiContent>
			</ul>
		);
	}
}

/**
 * 保障信息
 */
export class SecurityInformation extends Component{
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>保障信息</span>
				{
					this.props.selectValue && this.props.selectValue.id?
					<SecurityInformationContent selectValue = {this.props.selectValue}/>
					:
					<ul className={style["applicant-content--tips"]}>
						提示:在选择理赔企业完成后会显示该企业对应的保障信息。
					</ul>
				}
			</div>
		);
	}
}

/**
 * 保障信息内容
 */
export class SecurityInformationContent extends Component{
	render() {
		let InputStyle = {width:'100%'};
		let MaxInputStyle={width:'100%',marginTop:'0px'};
		let DateStyle={
			width:'100%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			paddingLeft:'8px',
			color:'#666',
		
		};
		let CoverStyle={ 
			width:'45%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			textAlign:'center',
			color:'#666',
		
		};

		let security = this.props.selectValue||{};

		return (
			<ul className={style["applicant-content"]}>
				<LiContent LabelName={'保险经纪公司'}>

					<Input styleCss={InputStyle} defaultValue={security.broker_name} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'承保公司'}>
					<Input styleCss={InputStyle} defaultValue={security.insurance_company} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'投保人'}>
					<Input styleCss={InputStyle} defaultValue={security.apply_company_name} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'被保人'}>
					<Input styleCss={InputStyle} defaultValue={security.company_name} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'投保单号'}>
					<Input styleCss={InputStyle} defaultValue={security.apply_number} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'保单号'}>
					<Input styleCss={InputStyle} defaultValue={security.insurance_number } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'投保产品'}>
					<Input styleCss={InputStyle} defaultValue={security.insurance_type } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'投保人数'}>
					<Input styleCss={InputStyle} defaultValue={security.insurance_population } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'保费(元)'}>
					<Input styleCss={InputStyle} defaultValue={security.insure_money } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'累计责任限额(万元)'}>
					<Input styleCss={InputStyle} defaultValue={security.add_up_liability_limit } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'每次事故责任限额(万元)'}>
					<Input styleCss={InputStyle} defaultValue={security.every_liability_limit } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'每次事故每人责任限额(万元)'}>
					<Input styleCss={InputStyle} defaultValue={security.person_avg_insurance } disabled={true}/>
				</LiContent>
				<LiContent LabelName={'投保日期'}>
					<DatePicker inputCss={DateStyle} defaultValue={getFormatData(security.insure_date)} disabled={true}/>
				</LiContent>
				<LiContent LabelName={'保险期限'}>
					<DatePicker inputCss={CoverStyle} defaultValue={getFormatData(security.start_date)} disabled={true}/>
	                <span className={style["separator"]}>~</span>
	                <DatePicker inputCss={CoverStyle} defaultValue={getFormatData(security.done_at)} disabled={true}/>
				</LiContent>
			</ul>
		);
	}
}

/**
 * 报案人信息
 */
export class InformantInformation extends Component{
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>报案人信息</span>
				<InformantInformationContent ref="info" selectValue={this.props.selectValue} {...this.props}/>
			</div>
		);
	}
	getValue(){
		return{
			...this.refs.info.getValue()
		}
	}
}

/**
 * 必填input li组件
 */
export class LiMustContent extends Component{

	render() {
		return (
			<li className={style["applicant-content--mustli"]}>
				<div className={style["content-li--name"]}>
					<span className={style["name"]}>{this.props.LabelName}</span>
					<span className={style["informant-pic"]}></span>
				</div>
				<div className={style["content-li--input"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.errorTips}
					</span>
				</div>
			</li>
		);
	}
}
/**
 * 报案人内容组件
 */

export class InformantInformationContent extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		contacts_phone_tips:''
	  	};
	}
	render() {
		let InputStyle = {width:'100%'};
		let SelectStyle = {width:'100%'};
		let CoverStyle={ 
			width:'100%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			paddingLeft:'8px',
			color:'#666',
		
		};
		let selectValue = this.props.selectValue||{};
		return (
			<ul className={style["applicant-mustcontent"]}>
				<LiMustContent LabelName={"报案人名称"} errorTips={this.state.user_name_error}>
					<Input ref="user_name" defaultValue={this.props.user_name} styleCss={InputStyle}/>

				</LiMustContent>
				<LiMustContent LabelName={"报案人联系方式"} errorTips={this.state.phone_error}>
					<Input ref="phone" defaultValue={this.props.phone} styleCss={InputStyle} type={"telphone"}/>

				</LiMustContent>
				<LiMustContent LabelName={"报案类型"} helpTips={"选择企业后会自动带出相关信息"}>
					<Input  defaultValue={selectValue.insurance_type || ""} styleCss={InputStyle} disabled={true}/>
				</LiMustContent>
				<LiMustContent LabelName={"报案时间"} errorTips={this.state.report_at_error}>
					<DatePicker ref="report_at" defaultValue={getFormatData(this.props.report_at)} inputCss={CoverStyle} />
				</LiMustContent>
				<LiContent LabelName={'现场联系人'}>
					<Input ref="contacts" styleCss={InputStyle} defaultValue={this.props.contacts}/>
				</LiContent>
				<LiContent LabelName={'现场联系方式'} helpTips={this.state.contacts_phone_error}>
					<Input ref="contacts_phone" styleCss={InputStyle} defaultValue={this.props.contacts_phone} type={"telphone"}/>
				</LiContent>
			</ul>
		);
	}

	getValue(){
		let refs = this.refs,result={},errorTips={},isVerify=true,RegExpPhone={},RegExpContactsPhone={};
		for(let r in refs){
			let value = refs[r].getValue()
			if(!value && r !== 'contacts_phone'){
				errorTips[r+"_error"] = "该项是必填项";
			}else{
				if(r == 'phone'){
					RegExpPhone = RegExpPhoneFeild(value,true);
					errorTips[r+"_error"] = RegExpPhone.msg;

				}else if(r == 'contacts_phone'){
					RegExpContactsPhone = RegExpPhoneFeild(value);

					errorTips[r+"_error"] = RegExpContactsPhone.msg;
				}else{
					errorTips[r+"_error"] = "";
				}
			}

			result[r] = value;
		}

		this.setState({
			...errorTips
		})
		isVerify = !!result["user_name"] && !!result["phone"] && !!result["report_at"] &&  RegExpPhone.isRight &&  RegExpContactsPhone.isRight;
		return {
			infoVerify:isVerify,
			...result
		}
	}


}

/**
 * 案件受理信息
 */
export class HearingCases extends Component{
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>案件受理信息</span>
				<HearingCasesContent ref="hearing" {...this.props}/>
			</div>
		);
	}
	getValue(){
		return {
			...this.refs.hearing.getValue()
		}
	}
}

/**
 * 案件受理内容组件
 */

export class HearingCasesContent extends Component{
	constructor(props) {
	  	super(props);

	  	this.state = {
	  		status:[{
				id:1,
				name:"报案"
			},{
				id:2,
				name:"定损"
			},{
				id:3,
				name:"结案"
			},{
				id:4,
				name:"销案"
			}],
			errorFlag:false
	  	};
	}
	render() {
		let InputStyle = {width:'100%'};
		let SelectStyle = {width:'100%'};
		let CoverStyle={ 
			width:'100%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			paddingLeft:'8px',
			color:'#666',
		
		};
		return (
			<ul className={style["applicant-mustcontent"]}>
				<LiMustContent LabelName={"报案状态"} errorTips={this.state.status_error}>
					<Select ref="status" styleCss={InputStyle} defaultValue={this.props.status} options={this.state.status}></Select>
				</LiMustContent>
				<LiMustContent LabelName={"保险公司报案号"} errorTips={this.state.compensate_number_error}>
					<Input ref="compensate_number" defaultValue={this.props.compensate_number} styleCss={InputStyle}/>
				</LiMustContent>
				<LiMustContent LabelName={"受理时间"} errorTips={this.state.compensate_at_error}>
					<DatePicker ref="compensate_at" defaultValue={getFormatData(this.props.compensate_at)} inputCss={CoverStyle}/>
				</LiMustContent>
			</ul>
		);
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.status != this.props.status){
			let  status = this.state.status,newStatus=[];
			newStatus=status.slice(Number(nextProps.status)-1);
			this.setState({
				status:newStatus,
				errorFlag:true
			})

		}
	}

	shouldComponentUpdate(nextProps, nextState) {
      return this.props.status !== nextProps.status || nextState.errorFlag;
	}
	getValue(){
		let refs = this.refs,result={},errorTips={},isVerify=true;
		for(let r in refs){
			let value = refs[r].getValue()
			if(!value){
				errorTips[r+"_error"] = "该项是必填项";
			}else{
				errorTips[r+"_error"] = "";
			}

			isVerify = isVerify && !!value;
			result[r] = value;
		}

		this.setState({
			...errorTips,
			errorFlag:true
		})
		return {
			hearVerify:isVerify,
			...result
		}
	}
}


/**
 * 事故详情
 */
export class AccidentDetails extends Component{
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>事故详情</span>
				
				<AccidentDetailsContent ref="detail" {...this.props}/>
			</div>
		);
	}
	getValue(){
		return {
			...this.refs.detail.getValue()
		}
	}
}
/**
 * 文本域组件
 */
export class LiDeductible extends Component{
	render() {
		return (
			<li className={style["deductible"]}>
				<span className={style["deductible--name"]}>
					{this.props.LabelName}
				</span>
				<span className={style["deductible--content"]}>
					{this.props.children}
				</span>
			</li>
		);
	}
}
/**
 * 事故详情内容
 */

export class AccidentDetailsContent extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		casualty:[{
	  			id:1,
	  			name:"是"
	  		},{
	  			id:2,
	  			name:"否"
	  		}],
	  		maxLength:4
	  	};
	}

	
	render() {
		let InputStyle = {width:'100%'};
		let SelectStyle = {width:'100%'};
		let DateStyle={ 
			width:'100%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			paddingLeft:'8px',
			color:'#666',
		
		};
		return (
			<div className={style["applicant-mustcontent"]}>
				<LiContent LabelName={'出险地址'}>
					<Input 
						ref="accident_address" 
						styleCss={InputStyle} 
						defaultValue={this.props.accident_address}>
					</Input>	
				</LiContent>
				<LiContent LabelName={'出险时间'}>
					<DatePicker 
						ref="accident_at" 
						inputCss={DateStyle} 
						defaultValue={getFormatData(this.props.accident_at)}>
					</DatePicker>	
				</LiContent>
				<LiContent LabelName={'事故类型'}>
					<Select 
						ref="accident_type_id"
						styleCss={InputStyle} 
						defaultValue={this.props.accident_type_id}
						options={this.props.accidentTypes}>
					</Select>
				</LiContent>
				<LiContent LabelName={'是否涉及人伤'}>
					<Select
						ref="is_involve_people" 
						styleCss={InputStyle}
						defaultValue={this.props.is_involve_people}
						options={this.state.casualty}>
					</Select>
				</LiContent>
				<LiDeductible LabelName={"事故经过"}>
					<Textarea
						ref="accident_desc"
						placeholder={"事故详情"} 
						defaultValue={this.props.accident_desc}>
					</Textarea>
				</LiDeductible>

				<div className={style["res--picture"]}>
					<span className={style["deductible--name"]}>
						<p>现场图片 </p>
						{/*<p>
							<span>{this.props.sceneAttachment && this.props.sceneAttachment.length || 0}</span>/4
						</p>*/} 
					</span>
					<ul className={style["deductible--content"]}>
						{this.getListImg()}
						<li className={style["res-remark--upload"]}>
							<div className={style["upload--icon"]}>
								<CommonUpload 
									ref="uploadFile"
									disabled={this.getIsDisabled()} 
									onChange={(e)=>this.uploadChangeHandle()}
									accept={"image/gif,image/jpeg,image/jpg,image/png,image/svg"}>
								</CommonUpload>
							</div>
						</li>
						<span className={style["help--line"]}>
							已上传{this.getMediaLength()}个，还可上传{this.state.maxLength-this.getMediaLength()}个
						</span>
						
					</ul>
				</div>
				<LiDeductible LabelName={"其他信息"}>
					<Textarea 
						ref="remark"
						placeholder={"其他备注信息"}
						defaultValue={this.props.remark}>
					</Textarea>
					
				</LiDeductible>
			</div>
		);
	}
	getIsDisabled(){
		let hasUploadLenth = this.getMediaLength();
		return hasUploadLenth>=this.state.maxLength?true:false; 
	}
	// 获取上传的个数
	getMediaLength(){
		let {sceneAttachment=[]} = this.props;
		return sceneAttachment && sceneAttachment.length?sceneAttachment.length:0;
	}
	uploadChangeHandle(){
		let {upload_claim} = this.props;
		let formdata = this.refs.uploadFile.getValue();
		upload_claim(formdata,"scene");
	}
	delete_attach(index){
		let {delete_claim} = this.props;
		delete_claim(index)
	}
	getListImg(){
		let attachment =this.props.sceneAttachment|| [],self = this;
		return attachment.map((m,key)=>{
			return(
				<li key={key}>
					<img src={m.attachment_path}/>
					<span className={style["delete--icon"]} onClick={e=>self.delete_attach(key)}></span>
				</li> 
			)
		})
	}
	getValue(){
		let refs = this.refs,
			result={},
			attachment_ids=[],
			{sceneAttachment=[]} = this.props;

		for(let r in refs){
			result[r] = refs[r].getValue();
		}

		sceneAttachment.map((s)=>{
			attachment_ids.push(s.attachment_id);
		})

		result["attachment_ids"] = attachment_ids.join(",");
		return result;
	}
}

/**
 * 损失情况LiUpLoad组件
 */
export class LiUpLoad extends Component{
	render() {
		let ButtonStyle={width:'80px',background:'white',color:'black',border:'1px solid orange'};
		return (
			<li className={style["upload"]}>
				<span className={style["upload--name"]}>
					{this.props.LabelName}
				</span>
				<span className={style["upload--button"]}>
					{this.props.children}
				</span>
			</li>
		);
	}
}
/**
 * 损失情况
 */
export class Upload extends Component{
	render() {
		let ButtonStyle={
			width: "90px",
		    background: "white",
		    color: "orange",
		    border: "1px solid orange",
		    position: "absolute",
		    top: "0",
		    left: "0"
		};
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>损失情况</span>
				<ul className={style["applicant-mustcontent"]}>
					<LiUpLoad LabelName={'伤亡人员清单'} >
						<div className={style["file--upload"]}>
							<CommonUpload 
								ref="accident"
								accept={".csv,.xlsx,.xls,.pdf,.doc,.docx"}
								onChange={(e)=>this.uploadChangeHandle("accident")}>
							</CommonUpload>
							<Button styleCss={ButtonStyle} text={"添加文件"}/>
						</div>
						<span className={style["upload--limit"]}>
							请上传pdf、xlsx、word格式附件
						</span>
						<a href={this.props.accidentAttachment.attachment_path}>{this.props.accidentAttachment&&this.props.accidentAttachment.name}</a>
					</LiUpLoad>
					<LiUpLoad LabelName={'物损清单'} >
						<div className={style["file--upload"]}>
							<CommonUpload 
								ref="things"
								accept={".csv,.xlsx,.xls,.pdf,.doc,.docx"}
								onChange={(e)=>this.uploadChangeHandle("things")}>
							</CommonUpload>
							<Button styleCss={ButtonStyle} text={"添加文件"}/>
						</div>
						<span className={style["upload--limit"]}>
							请上传pdf、xlsx、word格式附件
						</span>
						<a href={this.props.thingsAttachment.attachment_path}>{this.props.thingsAttachment&&this.props.thingsAttachment.name}</a>
					</LiUpLoad>
				</ul>
			</div>
		);
	}
	uploadChangeHandle(type){
		let {upload_claim} = this.props;
		let fileValue = this.refs[type].getValue();
		upload_claim(fileValue,type);
	}

	getValue(){
		let {thingsAttachment={},accidentAttachment={}} = this.props;
		return {
			accident_attachment_ids:accidentAttachment.attachment_id,
			things_attachment_ids:thingsAttachment.attachment_id
		}
	}
}


/**
 * 赔付时间
 */

export class PaymentTime extends Component{
	render() {
		return (
			<div className={style["applicant"]}>
				<span className={style["applicant--title"]}>赔付信息</span>
				<PaymentTimeContent ref="pay" {...this.props}/>
			</div>
		);
	}
	getValue(){
		return{
			...this.refs.pay.getValue()
		}
	}
}

/**
 * 赔付信息内容组件
 */
export class PaymentTimeContent extends Component{
	constructor(props){
		super(props);
		this.state={
			comp_money:props.comp_money,
			apply_money:props.apply_money
		}

	}
	render() {
		let InputStyle = {width:'100%'};
		let DateStyle={
			width:'100%',
			float:'left',
			height:'30px',
			border:'1px solid #ccc',
			paddingLeft:'8px',
			color:'#666',
		
		};
		return (
			<ul className={style["applicant-content"]}>
				<LiContent LabelName={'报损金额 (元)'}>
					<Input 
						ref="apply_money" 
						styleCss={InputStyle} 
						defaultValue={this.state.apply_money}>
						
					</Input>	
				</LiContent>
				<LiContent LabelName={'赔付金额 (元)'}>
					<Input 
						ref="comp_money" 
						styleCss={InputStyle} 
						defaultValue={this.state.comp_money}>
					</Input>	
				</LiContent>
				<LiContent LabelName={'赔付时间'}>
					<DatePicker 
						ref="comp_at" 
						inputCss={DateStyle} 
						defaultValue={getFormatData(this.props.comp_at)}>
					</DatePicker>	
				</LiContent>
			</ul>
		);
	}
	getValue(){
		let refs = this.refs,result={};
		for(let r in refs){
			result[r] = refs[r].getValue();
		}
		return result;
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.apply_money != this.props.apply_money){
			this.setState({
				apply_money:nextProps.apply_money
			})
		}
		if(nextProps.comp_money != this.props.comp_money){
			this.setState({
				comp_money:nextProps.comp_money
			})
		}
	}
}

/**
 * footerButton
 */
export class FooterButton extends Component{
	render() {
		let buttonStyle={
			border:"1px solid #f6a811",
			background:"#f6a811",
			color:"black",
			float:'right',
			color:'white'
		};
		
		return (
			<div className={style["action--componnet"]}>
				<GridLayout  width="1" offset="5.5">
					<Button text={"保存"}
						onClick={this.props.onClick} 
						styleCss={buttonStyle}>
					</Button>
				</GridLayout>
			</div>
		);
	}
}


function RegExpPhoneFeild(value="",isMust=false){
	let regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

	let isRight = regExp.test(value);

	return {
		isRight:(isMust && !value) || (value && !isRight) ? false:true,
		msg:value?isRight?"":"手机号格式不正确":""
	}
}
