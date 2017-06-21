import React,{Component} from "react";
import  style from "./core.css";
import Input from "@stararc-component/input";
import Select from "@stararc-component/select";
import Button from "@stararc-component/button";



/**
 * 注册的导航条
 * create by liheng at 2017.6.12
 */
export class RegisterNav extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		currentStep:3,
	  		stepNavs:[{
	  			id:1,
	  			title:"1.填写企业信息"
	  		},{
	  			id:2,
	  			title:"2.填写个人信息"
	  		},{
	  			id:3,
	  			title:"3.注册成功"
	  		}]
	  	};
	}
	render() {
		return (
			<div>
				<ul className={style["nav"]}>
					{this.getNavs()}
				</ul>
			</div>
		);
	}
	getNavs(){
		let {stepNavs=[]} = this.state,{currentStep="1"} = this.props;

		return	stepNavs.map((step,index)=>{
				let ClassName = currentStep == index+1 ? style["active"] :'';

			return <li key={index} className={ClassName}>{step.title}</li>
		})
	}
}

/**
 * 步骤底部的按钮控制部分
 */

export class StepController extends Component{
	render() {
		return (
			<div>
				{this.getActionContrl()}
			</div>
		);
	}
	getActionContrl(){
		let {currentStep = 1} = this.props,
			component="",
			self = this;

		switch(currentStep){
			case 1:
				component = <StepOneAction nextStepHandle={self.props.nextStepHandle}></StepOneAction>;
				break;
			case 2:
				component = <StepTwoAction nextStepHandle={self.props.nextStepHandle} prevStepHandle={self.props.prevStepHandle}></StepTwoAction>;
				break;
			case 3:
				component = <StepThreeAction {...this.props} prevStepHandle={self.props.prevStepHandle} submitHandle={self.props.submitHandle}></StepThreeAction>;
				break;
			default:
				break;		
		}

		return component;
	}
}

/**
 * 第一步按钮控件
 */
export class StepOneAction extends Component{
	render() {
		let NextButtonStyle = {
			"width":"260px",
			"background":"#3399ff",
			"height":"40px",
			"lineHeight":"40px",
		};

		return (
			<div className={style["step-one"]}>
				<Button text={`下一步`} styleCss={NextButtonStyle} onClick={this.props.nextStepHandle}></Button>
			</div>
		);
	}
}

/**
 * 第二步按钮控件
 */
export class StepTwoAction extends Component{
	render() {
		let PrevButtonStyle = {
			"width":"260px",
			"background":"white",
			"height":"40px",
			"lineHeight":"40px",
			"border":"1px solid #3fa2ff",
			"color":"#3fa2ff",
		};
		let NextButtonStyle = {
			"width":"260px",
			"background":"#3399ff",
			"height":"40px",
			"lineHeight":"40px",
			"marginLeft":"40px"
		};

		return (
			<div className={style["step-one"]}>
				<Button 
					onClick={this.props.prevStepHandle}
					text={`上一步`}
					styleCss={PrevButtonStyle}>
				</Button>
				<Button
					onClick={this.props.nextStepHandle}
					text={`下一步`} 
					styleCss={NextButtonStyle}>
				</Button>
			</div>
		);
	}
}

/*第三步按钮控件*/
export class StepThreeAction extends Component{
	render() {
		let {isAgreeFlag} = this.props;

		let CancelButton = {
				width:'50%',
				height:'40px',
				background:'white',
				color:'#3fa2ff',
				border:'1px solid #3fa2ff',
				float:'right',
				marginRight:'35px'
			};

		let EnsureButton = {
				width:'50%',
				height:'40px',
				background:isAgreeFlag?"#3fa2ff":"#e2e2e2",
				color:'white',
				float:'left',
				marginLeft:'35px'
			};

		return (
			<span className={style["success_button"]}>
				<span className={style["success_button--left"]}>
					<Button
						onClick={this.props.prevStepHandle}
						styleCss={CancelButton} 
						text={"上一步"}>
					</Button>
				</span>
				<span className={style["success_button--right"]}>
					<Button 
						onClick={this.props.submitHandle}
						disabled={!isAgreeFlag}
						styleCss={EnsureButton} 
						text={"完成注册"}>
					</Button>
				</span>
			</span>
		);
	}
}


/*======================================第一步的相关组件==================================*/ 
/**
 * 企业名称
 */
export class CompanyName extends Component{
	constructor(props) {
	  	super(props);
	
	 	this.state = {
	 		isPass:"",
	 		isEmpty:false,
	 		errorMsg:"",
	 		value:""
	 	};
	}
	render() {
		let InputStyle={
			"width":"80%",
			"float":"left"
		};
		
		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>企业名称</label>
				<div className={style["form-text"]}>
					<Input 
						ref="input"
						defaultValue={this.props.defaultValue} 
						onBlur={e=>this.blurHandle()} 	
						maxLength={50}
						placeholder={`请填写企业名称(50字以内)`} 
						styleCss={InputStyle}>
					</Input>
					{this.state.isPass?<span className={this.state.isPass=="yes"?style["true--flag"]:style["error--flag"]}></span>:""}
				</div>
				{
					this.state.isEmpty?
					<span className={style['error-tips']}>{this.state.errorMsg}</span>:""
				}	
			</div>
		);
	}
	
	blurHandle(){
		let value = this.refs.input.getValue();
		let {check_company_isexist} = this.props;

		if(!value){
			this.setState({
				errorMsg:"请填写企业名称",
				isEmpty:true,
				isPass:""
			})
		}else{
			check_company_isexist && check_company_isexist({
				name:value
			})
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.checkCompanyFlag !=this.props.checkCompanyFlag){
			let {checkCompanyFlag} = nextProps;

			if(checkCompanyFlag === 'yes'){
				this.setState({
					isPass:checkCompanyFlag,
					isEmpty:false
				})
			}else{
				this.setState({
					isPass:checkCompanyFlag,
					isEmpty:true,
					errorMsg:"该企业已经注册，请勿重复注册",
				})
			}
		}
	}
	getValue(){
		let value = this.refs.input.getValue(),
			verify=true,
			isEmpty = false,
			errorMsg="",
		 	{isPass} = this.state;
		
		if(!value){
			isEmpty = true;
			errorMsg = "请填写企业名称";
		}

		this.setState({
			isEmpty,
			errorMsg
		})

		verify = isEmpty && (isPass!='yes');


		return {
			organVerify:!verify,
			organName:value
		}
	}
}

/**
 * 企业所在区域
 */
export class CompanyArea extends Component{
	constructor(props) {
	 	super(props);
	
	  	this.state = {
	  		isEmpty:false,
	  		value: props.defaultValue || ''
	  	};
	}
	render() {

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>企业所在区域</label>
				<div className={style["form-text"]}>
					{this.getSelect()}
				</div>
				{
					this.state.isEmpty?
					<span className={style['error-tips']}>请选择企业所在区域</span>:""
				}	
			</div>
		);
	}
	getSelect(){
		let {grids} = this.props,self = this;

		grids = grids || [];

		return grids.map((g,index)=>{

			let opts = g.subs.map(function (v, index) {
	            return (<option key={index} value={v.id} name={v.name}>{v.name}</option>)
	        });

			return (
				<select
					value={g.selectedId}
                    key={index}
                    className={style["select"]}
                    onChange={(event) => this.changeHandle(event,index)}>
                    <option value="">请选择区域</option>
	                {opts}
	            </select>
			)
		})
	}
	changeHandle(e,index){

		let result =this.getAllValue(e.target.value,index),
			{onChange} = this.props,
			self = this;

		this.setState({
			value:result.id
		},()=>{
			onChange && onChange({
				index,
				gridID:result.id,
				gridName:result.name,
				oneLevel:true//只取子类
			})
		})
	}
	getAllValue(value,index){
		let {grids=[]} = this.props,result = {};

		grids[index]['subs'].map((g)=>{
			if(g.id == value){
				result = g;
				return; 
			}
		})

		return result;
	}
	getValue(){
		let {grids=[]} = this.props,
			{value} = this.state,
			isEmpty = true,
			gridID="",
			gridName="";

		grids.map((g)=>{
			if(g.selectedId){
				// 获取下拉框选择的值
				gridName += ((gridName?"-":"")+g.selectedName);
				gridID = g.selectedId;
				isEmpty = false;
			}
		})

		this.setState({
			isEmpty
		})

		return {
			gridVerify:!isEmpty,
			gridName,
			gridID
		}
	}
}

/**
 * 企业所属行业类型
 */
export class CompanyIndustry extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		selectValue:props.defaultValue||{},
	  		isEmpty:false,
	  		isOpen:true
	  	};
	}	
	render() {
		let ButtonStyle ={
			"width":"150px",
			"background":"#e2e2e2",
			"color":"#333333",
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>所属行业类型</label>
				<div className={style["form-text"]}>
					{
						this.state.selectValue&&this.state.selectValue.name?<span className={style["industry"]}>{this.state.selectValue.name}</span>:""
					}	
					<Button text={`选择行业类型`} styleCss={ButtonStyle} onClick={e=>this.openDialog()}></Button>
				</div>
				{
					this.state.isEmpty?<span className={style['error-tips']}>请选择行业类型</span>:""
				}	
				{
					this.state.isOpen?<DialogIndustry closeDialog={(item)=>this.closeDialog(item)} industryArr={this.props.industryList}></DialogIndustry>:""
				}	

			</div>
		);
	}
	openDialog(){
		this.setState({
			isOpen:true
		})
	}
	closeDialog(item){

		let {selectValue} = this.state;

		this.setState({
			isOpen:false,
			selectValue:item || selectValue
		})
	}
	getValue(){
		let {selectValue} = this.state,isEmpty =false;

		if(!selectValue.id){
			isEmpty = true;
		}

		this.setState({
			isEmpty
		})

		return {
			typeVerify:!isEmpty,
			typeID:selectValue.id,
			type_name:selectValue.name,
			type:selectValue
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.defaultValue!= this.props.defaultValue){
			this.setState({
				selectValue:nextProps.defaultValue
			})
		}
	}
}

/**
 * 统一社会信用代码
 */
export class CompanyCreditCode extends Component{
	render() {
		let InputStyle={
			"width":"45%"
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label"]}>统一社会信用代码</label>
				<div className={style["form-text"]}>
					<Input ref="input" defaultValue={this.props.defaultValue} styleCss={InputStyle} placeholder={`请输入社会信用代码`}></Input>
				</div>
				<span className={style['help-tips']}>如您的企业未完成三证合一，请填写工商注册号</span>
			</div>
		);
	}
	getValue(){
		return {
			register:this.refs.input.getValue()
		}
	}
}

/**
 * 选择行业类型
 */
export class DialogIndustry extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		industryArr:props.industryArr,
	  		q:"",
	  		currentIndustry:props.industryArr&& props.industryArr.length&&props.industryArr[0]||{}
	  	};
	}
	render() {
		return (
			<div className={style["dialog"]}>
				<div className={style["dialog--shade"]} onClick={e=>this.ItemClickHandle()}></div>
				<div className={style["dialog--content"]}>
					<div className={style['condition']}>
						<span>所属行业类型</span>
						<div className={style["condition--search"]}>
							<span className={style["search_icon"]} onClick={e=>this.search_type()}></span> 
							<Input ref="q" placeholder={`请输入行业类型关键字进行搜索`}></Input>
						</div>
					</div>
					<div className={style["items"]}>
						<div className={style["items--left"]}>
							<ul>
								{this.getMenu()}
							</ul>
						</div>
						<div className={style["items--right"]}>
							<ul>
								{this.getSubs()}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
	/**
	 * 左侧菜单
	 * @date   2017-06-14T10:08:13+0800
	 * @author liheng
	 * @param  {[type]}                 item [description]
	 */
	getMenu(){
		let {industryArr=[],currentIndustry} = this.state;

		return industryArr.map((industry,key)=>{

			let ClassName = industry.id == currentIndustry.id ? style["item--left__active"]:"";

			return (
				<li  key={key} className={ClassName} onClick={e=>this.MenuClickHandle(industry)}>{industry.name}</li>
			)
		})
	}
	search_type(){
		let q = this.refs.q.getValue();
		// let {industryArr} = this.state;
		this.setState({
			q
		})
	}
	MenuClickHandle(item){
		this.setState({
			currentIndustry:item
		})
	}
	/**
	 * 右侧类型选项
	 * @date   2017-06-14T10:08:36+0800
	 * @author liheng
	 * @return {[type]}                 [description]
	 */
	getSubs(){
		let {currentIndustry={},q} = this.state;
		let types = currentIndustry.subs||[];

		return types.map((t,key)=>{
			
			if(t.name.indexOf(q)<0){
				return;
			}

			return (
				<li key={key} onClick={e=>this.ItemClickHandle(t)} title={t.name}>{t.name}</li>
			)
		})
	}
	ItemClickHandle(selectValue){
		let {closeDialog} = this.props;

		closeDialog && closeDialog(selectValue);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.industryArr != this.props.industryArr){
			this.setState({
				currentIndustry:nextProps.industryArr[0]
			})
		}
	}
}

/*================================================第二步骤相关组件=======================================*/

/**
 * 姓名
 */
export class UserName extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isEmpty:false,

	  	};
	}
	render() {
		let InputStyle={
			"width":"70%",
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>姓名</label>
				<div className={style["form-text"]}>
					<Input ref="userName" defaultValue={this.props.defaultValue} placeholder={`该用户默认为企业初始管理员`} styleCss={InputStyle}></Input>
				</div>
				{
					this.state.isEmpty?
					<span className={style['error-tips']}>请填写姓名</span>:""
				}	
			</div>
		);
	}
	getValue(){
		let value = this.refs.userName.getValue(),isEmpty=false;
		if(!value){
			isEmpty=true;
		}

		this.setState({
			isEmpty
		})

		return {
			userNameVerify:!isEmpty,
			userName:value
		}
	}
}

/**
 * 手机号
 */
export class UserPhone extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isVerify:false,
	  		msg:""
	  	};
	}
	render() {
		let InputStyle={
			"width":"70%",
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>手机号</label>
				<div className={style["form-text"]}>
					<Input ref="phone" onBlur={e=>this.blurHandle()} defaultValue={this.props.defaultValue} placeholder={`所填写手机号即为登录账号`} styleCss={InputStyle}></Input>
				</div>
				<span className={style['error-tips']}>{this.state.msg}</span>
			</div>
		);
	}
	blurHandle(){
		let result = this.getVerifyResult();
		let {registerHandle} = this.props;

		this.setState({
			isVerify:result.isRight,
			msg:result.msg
		},()=>{
			registerHandle && registerHandle(result.isRight);
		})
	}
	getVerifyResult(){
		let value = this.refs.phone.getValue();

		let verifyResult = verifyPhone(value);

		return verifyResult;
	}
	getValue(){
		let result = this.getVerifyResult();

		this.blurHandle();

		return {
			phoneVerify:result.isRight,
			phone:result.value
		}
	}
}

/**
 * 登录密码
 */
export class PassWord extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isVerify:false,
	  		msg:""
	  	};
	}
	render() {
		let InputStyle={
			"width":"40%",
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>登录密码</label>
				<div className={style["form-text"]}>
					<Input 
						ref="password" 
						defaultValue={this.props.defaultValue} 
						placeholder={`请输入6位以上数字或字母`} 
						type={"password"} 
						onBlur={e=>this.blurHandle()}
						styleCss={InputStyle}>
					</Input>
				</div>
				<span className={style['error-tips']}>{this.state.msg}</span>
			</div>
		);
	}
	blurHandle(){
		let result = this.getVerifyResult();
		let {blurHandle} = this.props;

		this.setState({
			msg:result.msg,
			isVerify:result.isRight
		})
	}
	getVerifyResult(){
		let value = this.refs.password.getValue();

		return verfiyPassWord(value);
	}
	getValue(){
		let result = this.getVerifyResult();
			
		this.blurHandle();	

		return {
			passwordVerify:result.isRight,
			password:result.value
		}
	}
}
/**
 * 确认密码
 */
export class EnsurePassWord extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isVerify:false,
	  		msg:""
	  	};
	}
	render() {
		let InputStyle={
			"width":"40%",
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>确认密码</label>
				<div className={style["form-text"]}>
					<Input 
						ref="passwordAgain" 
						type="password"
						onBlur={e=>this.blurHandle()} 
						defaultValue={this.props.defaultValue} 
						placeholder={`请再次输入登录密码`} 
						styleCss={InputStyle}>
					</Input>
				</div>
				<span className={style['error-tips']}>{this.state.msg}</span>
			</div>
		);
	}
	blurHandle(){
		let result = this.getVerifyResult();

		this.setState({
			msg:result.msg,
			isVerify:result.isRight
		})
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.msg){
			this.setState({
				msg:nextProps.msg
			})
		}
	}
	getVerifyResult(){
		let value = this.refs.passwordAgain.getValue();

		return verfiyPassWord(value,"more");
	}
	getValue(){
		let result = this.getVerifyResult();
			
		this.blurHandle();	

		return {
			passwordAgainVerify:result.isRight,
			passwordAgain:result.value
		}
	}
}

/**
 * 验证码
 */
export class VerifyCode extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isVerify:false,
	  		disabled:props.registerFlag,
	  		maxSeconds:60,
	  		seconds:60,
	  		text:"获取验证码",
	  		msg:""
	  	};
	}
	render() {
		let InputStyle={
			"width":"40%",
		};
		let ButtonStyle ={
			"width":"150px",
			"background":"#e2e2e2",
			"color":this.state.disabled?"#333333":"#ccc",
			"marginLeft":"20px",
			"boxShadow":"2px 5px 5px #a7a7a7"
		};

		return (
			<div className={style["form-pie"]}>
				<label className={style["form-label__require"]}>验证码</label>
				<div className={style["form-text"]}>
					<Input 
						ref="verifyCode"
						onBlur={e=>this.blurHandle()} 
						defaultValue={this.props.defaultValue} 
						placeholder={`点击按钮获取验证码`} 
						styleCss={InputStyle}>
					</Input>
					<Button 
						text={this.state.text} 
						styleCss={ButtonStyle} 
						disabled={!this.state.disabled}
						onClick={e=>this.getVerifyCode()}>
					</Button>
				</div>
				{/*
					this.state.disabled?
					<span className={style['help-tips']}>{`请填写正确手机号之后获取验证码`}</span>:""
					*/
				}	
				<span className={style['error-tips']}>{this.state.msg}</span>
			</div>
		);
	}
	blurHandle(){
		let result = this.getVerifyResult();

		this.setState({
			isVerify:result.isRight,
			msg:result.msg
		})
	}
	getVerifyResult(){
		let value = this.refs.verifyCode.getValue();

		return verifyCode(value);
	}
	getVerifyCode(){
		let {seconds,maxSeconds} = this.state,
			{getVerifyCode} = this.props;
			self = this;
			seconds = maxSeconds;
		
		this.setState({
			disabled:false
		},()=>{

			self.clearTime = setInterval(()=>{

				if(seconds<=0){
					self.setState({
						text:"获取验证码",
						disabled:true
					},()=>{
						clearInterval(self.clearTime);
					})

					return;
				}

				self.setState({
					text:(seconds--)+`(s)`,
					seconds:seconds,
				})
			},1000);

			getVerifyCode &&  getVerifyCode();
		})
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.registerFlag != this.props.registerFlag){
			this.setState({
				disabled:nextProps.registerFlag
			})
		}
	}
	componentWillUnmount(){
		this.clearTime && clearInterval(this.clearTime);
	}
	getValue(){
		let result = this.getVerifyResult();

		this.blurHandle();

		return {
			verifyCodeVerify:result.isRight,
			verifyCode:result.value
		}
	}
}
/*======================================第三步注册相关组件=========================================*/
/*注册成功信息内容组件*/

export class SuccessContent extends Component{
	render() {
		return (
			<div className={style["success_content"]}>
				<ul className={style["enterprise_warp"]}>
					<span className={style["enterprise_title"]}>企业信息</span>
					<SuccessContentLi LabelName={"企业名称 : "} content={this.props.organName}/>
					<SuccessContentLi LabelName={"所在区域 : "} content={this.props.gridName}/>
					<SuccessContentLi LabelName={"行业类型 : "} content={this.props.type_name}/>
					{
						this.props.register?<SuccessContentLi LabelName={"统一社会信用代码 : "} content={this.props.register}/>:""
					}	
				</ul>

				<ul className={style["enterprise_warp"]}>
					<span className={style["enterprise_title"]}>管理员账号信息</span>
					<SuccessContentLi LabelName={"姓名 : "} content={this.props.userName}/>
					<SuccessContentLi LabelName={"注册手机号 : "} content={this.props.phone}/>
				</ul>
			</div>
		);
	}
}

/*li组件*/
export class SuccessContentLi extends Component{
	constructor(props) {
	   	super(props);
	}
	render() {
		return (
			<li className={style["enterprise_li"]}>
				<span className={style["enterprise_li--name"]}>{this.props.LabelName}</span>
				<span className={style["enterprise_li--content"]}>{this.props.content}</span>
			</li>
		);
	}
}
/*同意协议组件*/
export class Cheched extends Component{
	constructor(props){
		super(props);
		this.state = {
			isAgreeFlag:props.isAgreeFlag,
		}
	}
	render() {
		return (
			<span className={style["checked"]}>
				<img src={this.state.isAgreeFlag?require("../img/check.png"):require("../img/no-checked.png")} onClick={e=>this.clickHandle()}/>
				<a href="JavaScript:;">我已阅读并同意协议</a>
			</span>
		);
	}

	clickHandle(){
		let {isAgreeFlag} = this.state,
			{isAgree} = this.props;

		this.setState({
			isAgreeFlag:!isAgreeFlag
		},()=>{
			isAgree && isAgree(!isAgreeFlag)
		})
	}
	getValue(){
		let {isAgreeFlag} = this.state;
		return {
			isAgreeFlag:isAgreeFlag
		}
	}
	componentWillReceiveProps(nextProps){
		let _this = this;
		if(nextProps.isAgreeFlag != _this.props.isAgreeFlag){
			_this.setState({
				isAgreeFlag:nextProps.isAgreeFlag
			})
		}
	}
}

//手机号验证
function verifyPhone(value=""){
	let regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	let isRight = regExp.test(value);

	return{
		isRight,
		msg:value?(isRight?"":"请输入正确的手机号"):"请输入手机号",
		value
	}
}

//验证码校验规则
function verifyCode(value=""){
	let regExp = /^\d{6}$/;
	let isRight = regExp.test(value);
	return{
		isRight,
		msg:value?(isRight?"":"请输入正确的验证码"):"请输入6位验证码",
		value
	}
}

// 校验密码
function verfiyPassWord(value="",more=""){
	var regExp = /^[0-9a-zA-Z]*$/g;

	let isRight = regExp.test(value);

	let msg = "";

	if(!value){
		msg = more?"请再次输入登录密码":"请输入密码"
	}else{
		if(value.length<6){
			msg = "请输入6位以上数字或字母";
		}else if(!isRight){
			msg = "请勿输入非法字符"
		}
	}

	return{
		isRight,
		msg,
		value
	}
}