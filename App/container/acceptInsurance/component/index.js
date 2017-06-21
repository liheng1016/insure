import React,{Component} from "react";
import style from "./index.css";
import Input from "@stararc-component/input";
import Button from "@stararc-component/button";
import Select from "@stararc-component/select";
import GridLayout from "@stararc-component/gridlayout";
import DatePicker from "@stararc-insurance/date-picker";
import Textarea from "@stararc-component/textarea";
import Pagination from "@stararc-component/pagination";

import{
	CommonUpload
} from "@stararc-insurance/upload-file";

import{
	getFormatData,
	convertCookieToObj
} from "@stararc-insurance/help-tools";

/**顶部按钮**/
export class AcceptDetailButton extends Component{
	render(){
		let ButtonStyle={width:'60px',background:'orange',float:'right',marginRight:'17px'}
		return(
			<div className={style["button--return"]}>
				<Button styleCss={ButtonStyle} text={"返回"} onClick={e=>history.go(-1)}/>
			</div>
		)
	}
}

/**
 * li组件
 */
export class LiComponent extends Component{
	render() {
		return (
			<li className={style["content--li"]}>
				<span className={style["labelname"]}>
					{this.props.LabelName} 
				</span>
				<span className={style["labelinput"]}>
					{this.props.children}
				</span>
			</li>
		);
	}
}

/**投保人信息**/
export class AcceptDetailApplicant extends Component{
	constructor(props) {
	  	super(props);
	 	this.state = {
	 		selectValue:""
	 	};
	}
	render() {
		let {selectValue={}} =this.state;
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>投保人信息</span>
				<ChoiceEnterprise 
					{...this.props}
					selectValue={(selectValue)=>this.selectValue(selectValue)}>
				</ChoiceEnterprise>		
				{
					this.state.selectValue ? 
					<EnterpriceInfo selectValue = {this.state.selectValue}>
					</EnterpriceInfo>:""
				}	
			</div>
		);
	}
	selectValue(selectValue){
		let {has_select_company} = this.props;

		this.setState({
			selectValue
		},()=>{
			has_select_company && has_select_company(selectValue);
		})
	}
	getValue(){
		let {selectValue} = this.state;
		return {
			apply_company_name:selectValue.organName,
			apply_company_id:selectValue.organID,
			grid_id:selectValue.gridID
		}	
	}
}

/**
 * 投保人选择按钮
 */
export class ChoiceEnterprise extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isOpenChoicelog:false,
	  	};
	}
	render() {
		let ButtonStyle={
			width:'80px',
			background:'#eec420',
			float:'right',
			marginTop:'5px',
		};
		let accpt=this.props.accpt;
		return (
			<div className={style["choice"]}>
				<span className={style["choice--name"]}>
					<img src={require("../img/pic.png")}/>
					请点击右侧按钮选择企业
				</span>
				<Button 
					styleCss={ButtonStyle} 
					text={"选择企业"}
					onClick={(e)=>this.openChoicelog()}>
				</Button>	
				{
					this.state.isOpenChoicelog ? 
					<EnterprisePopups 
						{...this.props}
						conserveHandle={(selectCompany)=>this.closeReslog(selectCompany)}>
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
	closeReslog(company){
		let self = this,
		{selectCompany} = this.state;

		this.setState({
			selectCompany:company?company:selectCompany,
			isOpenChoicelog:false,
		},function(){
			let {selectValue} = self.props;

			company && selectValue && selectValue(company);
		})	
	}
}

/**
 * 投保人的个人信息
 */
export class EnterpriceInfo extends Component{
	render() {
		let {selectValue={}} = this.props;
		return (
			<div>
				<ul className={style["content"]}>
					<LiComponent LabelName={"投保人名称"}>
						<Input defaultValue={selectValue.organName} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"所属地区"}>
						<Input defaultValue={selectValue.grid_name} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"工商注册号"}>
						<Input defaultValue={selectValue.addon&&selectValue.addon.register} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"行业类型"}>
						<Input defaultValue={selectValue.addon&&selectValue.addon.typeName} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"法人"}>
						<Input defaultValue={selectValue.addon&&selectValue.addon.legalPerson} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"法人联系方式"}>
						<Input defaultValue={selectValue.addon&&selectValue.addon.legalPhone} disabled={"true"}/>
					</LiComponent>
					<LiComponent LabelName={"企业地址"}>
						<Input defaultValue={selectValue.addon&&selectValue.addon.address} disabled={"true"}/>
					</LiComponent>
				</ul>
			</div>
		);
	}
}


/**
 * 选择企业弹窗
 */
export class EnterprisePopups extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		index:'',
	  		companyList:props.companyList||[]
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
		}
		let cancelStyle={
			border:"1px solid #f6a811",
			background:"white",
			color:"black",
		}
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
									<Button text={'搜索'} styleCss={Buttonstyle} onClick={e=>this.search()} />
								</span>
							</div>
						</div>
						<div className={style["search-content"]}>
							<table  className={style["table--main"]}>
								<thead>
									<tr className={style["table_title"]}>
									    <th className={style["table_select"]}>操作</th>
									    <th>企业名称</th>
									    <th>所属地区</th>
									    <th>注册号</th>
									    <th>行业类型</th>
									    <th>地址</th>
									</tr>
								</thead>
								<tbody>
									{this.getTrPopupsContent()}		
								</tbody>
							</table>
							<div className={style["pagination--box"]}>
								<Pagination 
									currentPage={this.props.companyCondition&&this.props.companyCondition.page} 
									totalPage={this.props.companyCondition&&this.props.companyCondition.totalPage} 
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
							<GridLayout width="1" >
								<Button text={"确定"} 
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
		let {companyList=[]} = this.state;
		return companyList.map((l,key)=>{
			let classname = l.isSelected?style["table_row--hover"]:style["table_row"];
			return (
				<tr className={classname} key={key}>
					<td onClick={e=>this.selectedTr(key)}>
						<span className={l.isSelected?style["company_select"]:style["company_select--not"]}> </span>
					</td>
				    <td title={l.organName}>{l.organName}</td>
				    <td title={l.grid_name}>{l.grid_name}</td>
				    <td title={l.addon&&l.addon.register}>{l.addon&&l.addon.register}</td>
				    <td title={l.addon&&l.addon.typeName}>{l.addon&&l.addon.typeName}</td>
				    <td title={l.addon&&l.addon.address}>{l.addon&&l.addon.address}</td>
				</tr>
			)
		})
	}
	search(){
		this.pageGoTo(1);
	}
	pageGoTo(page){
		let q = this.refs.q.getValue(),
			{get_company_list} = this.props;
		let params={
			q:q,
			page:page,
			count:8
		};
		get_company_list(params);
	}
	// 选中
	selectedTr(index){
		let {companyList=[]} = this.state;
		companyList.map((c,key)=>{
			c.isSelected = false;
		});
		companyList[index].isSelected = true;
		this.setState({
			companyList,
			index
		});
	}
	
	// conserve
	conserveHandle(){
		let {conserveHandle} = this.props,
			{companyList,index} = this.state;
		conserveHandle && conserveHandle(companyList[index]);
	}

	// cancle
	cancleHandle(){
		let {conserveHandle} = this.props;
		conserveHandle && conserveHandle();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.companyList != this.props.companyList){
			this.setState({
				companyList:nextProps.companyList
			})
		}
	}
}

/**
 * 被保人信息
 */
export class InsuredInformation extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isOpenChoicelog:false,
	  		isTheSame:"",
	  		selectCompany:""
	  	};
	}
	render() {
		let ButtonStyle={
			width:'76px',
			background:'#eec420',
			float:'right',
			marginTop:'5px'
		};
		let InputStyle={width:'14px',height:'14px',border:'#46b0d7'}

		let accpt=this.props.accpt;

		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>被保人信息</span>
				{
					!this.props.acceptDetail ?
					<div className={style["insured-content"]}>
						<p className={style["insured--tips"]}>提示: 请先选择投保人相关信息！</p>
					</div>
					:
					<div className={style["insured-content"]}>
						<div className={style["insured--name"]}>
							<img src={require("../img/pic.png")}/>
							和被保人一致 : 
						</div>
						<div className={style["insured--input"]}>
							<span className={this.state.isTheSame=="yes"?style["insure__select"]:style["insure__select--not"]} onClick={e=>this.checkInformation("yes")}>是</span>
							<span className={this.state.isTheSame=="no"?style["insure__select"]:style["insure__select--not"]} onClick={e=>this.checkInformation("no")}>否</span>
						</div>

						{
							this.state.isTheSame == "no" ?
							<Button 
								styleCss={ButtonStyle} 
								text={"选择企业"}
								onClick={(e)=>this.openChoicelog()}>
							</Button>:""
						}

						{
							this.state.isOpenChoicelog ? 
							<EnterprisePopups 
								{...this.props}
								conserveHandle={(selectCompany)=>this.closeReslog(selectCompany)}>
							</EnterprisePopups>:''
						}
					</div>
				}

				{
					this.state.selectCompany ? 
					<InsuredContent info = {this.state.selectCompany}/>:""
				}

			</div>

		);
	}
	checkInformation(type){
		let self = this,{selectCompany} = this.state;

		this.setState({
			isTheSame:type,
			selectCompany:type=="yes"?"":selectCompany
		},function(){
			let {onChange} = self.props;

			(type == "yes") && onChange && onChange();
		})
	}
	openChoicelog(){
		this.setState({
			isOpenChoicelog:true,
		})
	}

	// 关闭弹出框
	closeReslog(company){
		let {onChange} = this.props,
			{selectCompany} = this.state;

		this.setState({
			isOpenChoicelog:false,
			selectCompany:company?company:selectCompany
		},()=>{
			company && onChange && onChange();
		})	
	}
	getValue(){
		let { selectCompany,isTheSame } = this.state,
			{ acceptDetail } = this.props;

		if(isTheSame == 'yes'){
			return {
				company_name:acceptDetail.organName,
				company_id:acceptDetail.organID,
				grid_id:acceptDetail.gridID
			}
		}else{
			return {
				company_name:selectCompany.organName,
				company_id:selectCompany.organID,
				grid_id:selectCompany.gridID
			}
		}
	}
}

/**
 * 被保人content信息
 */
export class InsuredContent extends Component{
	render() {
		let {info={}} = this.props;
		return (
			<ul className={style["content"]}>
				<LiComponent LabelName={"被保人名称"}>
					<Input defaultValue={info.organName} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"所属地区"}>
					<Input defaultValue={info.grid_name} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"工商注册号"}>
					<Input defaultValue={info.addon&&info.addon.register} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"行业类型"}>
					<Input defaultValue={info.addon&&info.addon.typeName} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"法人"}>
					<Input defaultValue={info.addon&&info.addon.legalPerson} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"法人联系方式"}>
					<Input defaultValue={info.addon&&info.addon.legalPhone} disabled={"true"}/>
				</LiComponent>
				<LiComponent LabelName={"企业地址"}>
					<Input defaultValue={info.addon&&info.addon.address} disabled={"true"}/>
				</LiComponent>
			</ul>
		);
	}
}

/**
 * LiMustComponent组件
 */
export class LiMustComponent extends Component{
	render() {
		return (
			<li className={style["content--li"]}>
				<span className={style["labelname"]}>
					<img src={require("../img/pic.png")}/>
					{this.props.LabelName} 
				</span>
				<span className={style["labelinput"]}>
					{this.props.children}
					<span className={style["prompt"]}>
						{this.props.errorTips}
					</span>
				</span>
			</li>
		);
	}
}

/**
 * 保障信息
 */
export class SecurityInformation extends Component{
	constructor(props) {
	  	super(props);
	  	this.cookiesObj={};
	  	this.state = {};
	}
	render() {
		let InputStyle={width:'100%',marginTop:'-4px'};
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
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>保障信息</span>
				<ul className={style["content"]}>
					{/*<LiComponent LabelName={"保险经纪公司"}>
						<Input styleCss={InputStyle} 

							ref="broker_name" 
							defaultValue={this.props.broker_name} 
							disabled={true}>
						</Input>	
					</LiComponent>*/}
					<LiMustComponent LabelName={"承保公司"} errorTips={this.state.insurance_id_error}>
						{
							this.cookiesObj["organ_type"]=='3'?
							<Input  
								ref="insurance_id" 
								defaultValue={this.cookiesObj["organName"]} 
								disabled={true}>
							</Input>	
							:
							<Select 
								ref="insurance_id"
								defaultValue={this.props.insurance_id}
								onChange={e=>this.insuranceChangeHandle()} 
								options={this.props.acceptCompany}>
							</Select>
						}
					</LiMustComponent>
					<LiComponent LabelName={"投保单号"}>
						<Input  
							ref="apply_number" 
							defaultValue={this.props.applyNumber} 
							disabled={true}>
						</Input>	
					</LiComponent>
					<LiMustComponent LabelName={"保单号"} errorTips={this.state.insurance_number_error}>
						<Input  
							ref="insurance_number" 
							defaultValue={this.props.insurance_number}>
						</Input>	
					</LiMustComponent>
					<LiMustComponent LabelName={"投保产品"} errorTips={this.state.insurance_type_id_error}>
						<Select 
							ref="insurance_type_id" 
							defaultValue={this.props.insurance_type_id}
							options={this.props.insurProductList} 
							onChange={e=>this.productChangeHandle()}>
						</Select>
					</LiMustComponent>
					<LiMustComponent LabelName={"投保人数"} errorTips={this.state.insurance_population_error}>
						<Input 
							ref="insurance_population" 
							defaultValue={this.props.insurance_population}>
						</Input>	
					</LiMustComponent>
					
					<LiMustComponent LabelName={"保费(元)"} errorTips={this.state.insure_money_error}>
						<Input 
							ref="insure_money" 
							defaultValue={this.props.insure_money}>
						</Input>
					</LiMustComponent>
					<LiMustComponent LabelName={"累计责任限额(万元)"} errorTips={this.state.add_up_liability_limit_error}>
						<Input 
							ref="add_up_liability_limit" 
							defaultValue={this.props.add_up_liability_limit}/>
					</LiMustComponent>
					<LiMustComponent LabelName={"每次事故责任限额(万元)"} errorTips={this.state.every_liability_limit_error}>
						<Input  
							ref="every_liability_limit" 
							defaultValue={this.props.every_liability_limit}/>
					</LiMustComponent>
					<LiMustComponent LabelName={"每次事故每人责任限额(万元)"} errorTips={this.state.person_avg_insurance_error}>
						<Input
							ref="person_avg_insurance" 
							defaultValue={this.props.person_avg_insurance}/>
					</LiMustComponent>
					<LiMustComponent LabelName={"投保日期"} errorTips={this.state.insure_date_error}>
						<DatePicker 
							ref="insure_date" 
							defaultValue={getFormatData(this.props.insure_date)}
							inputCss={DateStyle}/>
		                <div className={style["clear"]}></div>
					</LiMustComponent>
					<LiMustComponent LabelName={"投保期限"} errorTips={this.state.start_date_error}>
						<DatePicker 
							ref="start_date" 
							defaultValue={getFormatData(this.props.start_date)}
							inputCss={CoverStyle}/>
		                <span className={style["separator"]}>~</span>
		                <DatePicker 
		                	ref="done_at" 
		                	defaultValue={getFormatData(this.props.done_at)}
		                	inputCss={CoverStyle}/>
		                <div className={style["clear"]}></div>
					</LiMustComponent>
				</ul>
			</div>
		);
	}
	// 承保公司发生改变获取保险产品
	insuranceChangeHandle(){
		let value = this.refs.insurance_id.getValue(),
			{insuranceChangeHandle} = this.props;
		insuranceChangeHandle && insuranceChangeHandle(value);
	}
	// 保险产品的变动会获取免责条例
	productChangeHandle(){
		let {productChangeHandle} = this.props,
			value = this.refs.insurance_type_id.getAllValue();
		productChangeHandle && productChangeHandle(value);
	}
	// 获取值
	getValue(){
		let refs = this.refs,
			result={},
			errorTips={},
			isVerify=true;

		for(let r in refs){
			let value = refs[r].getValue();

			result[r] = value;
			isVerify = isVerify && !!value;

			if(!value){
				errorTips[r+"_error"] = "该项是必填项";
			}else{
				errorTips[r+"_error"] = "";
			}
		}

		// 如果是保险公司登录创建保单
		if(this.cookiesObj["organ_type"] == "3"){
			result["insurance_id"] = this.cookiesObj["organ_id"];
		}

		this.setState({
			...errorTips
		})

		return {
			...result,
			isVerify
		};
	}
	componentWillReceiveProps(nextProps){
		// 承保公司id发生变化
		if(nextProps.insurance_id != this.props.insurance_id){
			this.insuranceChangeHandle();
		}
	}
	// 首先判断是不是保险公司，
	// 如果是直接请求投保产品
	// 如果不是，发出获取承保公司请求
	componentDidMount(){
		let organ_id = "",
		 {insuranceChangeHandle,get_accept_company} = this.props;
		
		this.cookiesObj = convertCookieToObj();

		// 如果是保险公司创建保单
		if(this.cookiesObj["organ_type"] == "3"){
			organ_id = this.cookiesObj["organ_id"];

			insuranceChangeHandle && insuranceChangeHandle(organ_id);
		}else{
			get_accept_company();
		}

	}
}

/**
 * 免赔额条例组件
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
 * 免赔额条例
 */
export class DeductibleExcess extends Component{
	render() {
		let {deductibleExcess={}} = this.props;
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>免赔额条例</span>
				<ul className={style["content"]}>
					<LiDeductible LabelName={"从业人员"}>
						<Textarea 
							disabled={true} 
							ref="practitioners" 
							defaultValue={deductibleExcess.practitioners}>
						</Textarea>
					</LiDeductible>
					<LiDeductible LabelName={"第三者责任"}>
						<Textarea 
							disabled={true} 
							ref="third_party"
							defaultValue={deductibleExcess.third_party}>
						</Textarea>
					</LiDeductible>
				</ul>
			</div>
		);
	}
	getValue(){
		return{
			practitioners:this.refs.practitioners.getValue(),
			third_party:this.refs.third_party.getValue()
		}
	}
}

/**
 * 资料上传LiUpLoad组件
 */
export class LiUpLoad extends Component{
	render() {
		let ButtonStyle={width:'80px',background:'white',color:'black',border:'1px solid orange'};
		return (
			<li className={style["upload"]}>
				<div className={style["upload--name"]}>
					{this.props.LabelName}
				</div>
				<div className={style["upload--button"]}>
					{this.props.children}
					<span className={style["upload--limit"]}>
						{this.props.LabelContent}
					</span>
				</div>
			</li>
		);
	}
}
/**
 * 资料上传
 */
export class Upload extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		insureAcctach:{}
	  	};
	}
	render() {
		let {insureAcctach={}} = this.props;
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>资料上传</span>
				<ul className={style["content"]}>
					<LiUpLoad LabelName={'营业执照 '} 
						LabelContent={'请上传pdf、jpg、jpeg、png格式附件'}>
						
						<UploadFile
							accept={".jpg, .jpeg,.png,.pdf"}
							uploadHandle={this.props.uploadHandle} 
							type={"business"}>
						</UploadFile>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.business.attachment_path} download="">{insureAcctach.business.name}</a>
						</span>
					</LiUpLoad>
					<LiUpLoad LabelName={'全员投保证明 '} 
						LabelContent={'请上传pdf、jpg、jpeg、png格式附件'}>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.full.attachment_path} download="">{insureAcctach.full.name}</a>
						</span>
						<UploadFile 
							accept={".jpg, .jpeg,.png,.pdf"}
							uploadHandle={this.props.uploadHandle} 
							type={"full"}>
						</UploadFile>
					</LiUpLoad>
					<LiUpLoad LabelName={'社保征缴通知单 '} 
						LabelContent={'请上传pdf、jpg、jpeg、png格式附件'}>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.social.attachment_path} download="">{insureAcctach.social.name}</a>
						</span>
						<UploadFile 
							accept={".jpg, .jpeg,.png,.pdf"}
							uploadHandle={this.props.uploadHandle} 
							type={"social"}>
						</UploadFile>
					</LiUpLoad>
					<LiUpLoad LabelName={'投保单盖章上传 '} 
						LabelContent={'请上传pdf、jpg、jpeg、png格式附件'}>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.seal.attachment_path} download="">{insureAcctach.seal.name}</a>
						</span>
						<UploadFile
							accept={".jpg, .jpeg,.png,.pdf"}
							uploadHandle={this.props.uploadHandle} 
							type={"seal"}>
						</UploadFile>
					</LiUpLoad>
					<LiUpLoad LabelName={'人员清单 '} 
						LabelContent={'请上传word、excel、pdf格式附件'}>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.people.attachment_path} download="">{insureAcctach.people.name}</a>
						</span>
						<UploadFile 
							accept={".csv,.xlsx,.xls,.pdf,.doc,.docx"}

							uploadHandle={this.props.uploadHandle} 
							type={"people"}>
						</UploadFile>
					</LiUpLoad>
					<LiUpLoad LabelName={'其他 '} 
						LabelContent={'请上传word、excel、pdf、jpg、jpeg、png格式附件'}>
						<span className={style["attach--display"]}>
							<a href={insureAcctach.other.attachment_path} download="">{insureAcctach.other.name}</a>
						</span>
						<UploadFile 
							accept={".csv,.xlsx,.xls,.pdf,.doc,.docx,.jpg, .jpeg,.png"}
							uploadHandle={this.props.uploadHandle} 
							type={"other"}>
						</UploadFile>
					</LiUpLoad>
				</ul>
			</div>
		);
	}
	getValue(){
		let {insureAcctach={}} = this.props,result={};
		return {
			business_attachment_ids:insureAcctach["business"]["attachment_id"]||"",	
			full_attachment_ids:	insureAcctach["full"]["attachment_id"]||"",	
			social_attachment_ids:	insureAcctach["social"]["attachment_id"]||"",	
			seal_attachment_ids:	insureAcctach["seal"]["attachment_id"]||"",	
			people_attachment_ids:	insureAcctach["people"]["attachment_id"]||"",	
			other_attachment_ids: 	insureAcctach["other"]["attachment_id"]||"",	
		};
	}
}

/**
 * 上传附件的句柄
 */
export class UploadFile extends Component{
	render() {
		let ButtonStyle={
			position:"absolute",
			width:'90px',
			background:'white',
			color:'orange',
			border:'1px solid orange',
			marginRight:'5px'
		};

		return (
			<div className={style["upload--file"]}>
				<div className={style["upload--handle"]}>
					<CommonUpload 
						ref="file"
						accept={this.props.accept}
						onChange={e=>this.upload()}>
					</CommonUpload>
				</div>
				<Button styleCss={ButtonStyle} text={"选择文件"}/>
			</div>
		);
	}
	upload(){
		let value = this.refs.file.getValue();
		let {uploadHandle,type} = this.props;
		uploadHandle && uploadHandle(value,type);
	}
}


/**
 * 条款内容
 */
export class ArticleContent extends Component{
	render() {
		let articleContent= this.props.articleContent.attachment||{};
		return (
			<div className={style["applicant-wrap"]}>
				<span className={style["title"]}>条款内容</span>
				<div className={style["content"]}>
					<span className={style["article--name"]}>保险条款 : </span>
					<span className={style["article--content"]}>
						<a href={articleContent.attachment_path} download="">{articleContent.name}</a>
					</span>					
				</div>
			</div>
		);
	}
}

/**
 * 保存按钮
 */
export class ActionComponent extends Component{
	render() {
		let buttonStyle={
			border:"1px solid #f6a811",
			background:"#f6a811",
			color:"white"
		}
		return (
			<div className={style["action--componnet"]}>
				<GridLayout width="1" offset="5.5">
					<Button text={"保存"} styleCss={buttonStyle} onClick={this.props.submitHandle}></Button>
				</GridLayout>
			</div>
		);
	}

}