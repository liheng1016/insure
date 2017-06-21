import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Select from "@stararc-component/select";
import Button from "@stararc-component/button";
import Action from "../model/detailedList/action";
import BigImg from "@stararc-component/big-img";
import TextAreaOrigin from "@stararc-component/textarea";

import {
	CommonUpload
} from "@stararc-insurance/upload-file";


import{
 	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from '@stararc-insurance/layout';


/**
 * 对原有的文本域组件进行封装
 * @date   2017-06-21T14:28:24+0800
 * @author liheng
 */
function getHighComponent(MainComponent){
	MainComponent.prototype.clearContent=function(){
		this.setState({
			value:""
		})
	}
	return MainComponent;
}

const TextArea = getHighComponent(TextAreaOrigin);


/**
 * 主体框架
 */

class RiskDetailed extends Component{
	
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<HeaderButton/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<div className={style["content"]}>
						<DetailedContent {...this.props}/>
						<AddFeedback {...this.props}></AddFeedback>
						<FeedbackList {...this.props}></FeedbackList>
					</div>
				</LayoutContent>
			</div>
		);
	}
	componentDidMount() {
		let {get_detail,params} = this.props;

		get_detail({
			id:params.id,
		});
	}
}

/**
 * 顶部button
 */
export class HeaderButton extends Component{
	render() {
		let ButtonStyle = {width:'80px',border:'1px solid #0095e2',background:"white",float:'right',color:'#0095e2'}
		return (
			<div className={style["header-button"]}>
				<Button styleCss={ButtonStyle} text={'返回'} onClick={e=>history.go(-1)}/>
			</div>
		);
	}
}

/**
 * 详情内容区
 */
export class DetailedContent extends Component{
	render() {
		let {detail={}} = this.props;

		return (
			<div className={style["base-info"]}>
				<p className={style["company-name"]}>{detail.company_name}</p>
				<p className={style["company-name"]}>
					<span className={style["item"]}>[{detail.classify}]</span>
					<sapn>{detail.hidden_danger_name}</sapn>
				</p>
				<p>{detail.answer}</p>
				<p>
					现场记录：
					{detail.description}
				</p>
				<p className={style["attachment"]}>
					{this.getImg(detail.attachments)}
				</p>
				<p className={style["origin"]}>
					来源：
					<span>{detail.inspect_source}</span> 
					<span>{detail.real_name}</span> 
					<span>{getFormatData(detail.created_at)}</span> 
				</p>
				<div className={style['feed-status']}>
					<img src={detail.is_feedback?require("../img/feek.png"):require("../img/no-feek.png")} alt=""/>
				</div>
			</div>
		);
	}
	getImg(imgArr=[]){
		imgArr = imgArr||[];

		return imgArr.map((img,key)=>{
			return 	<img src={img.attachment_path} alt="" key={key} onClick={e=>big_img(imgArr,key)}/>
		})
	}
}

/**
 * 反馈建议
 */
export class AddFeedback extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		maxLength:4,
	  		errorMsg:""
	  	};
	}
	render() {
		let textStyle={
			width:"100%",
			minHeight:"120px",
			padding:"10px"
		},buttonStyle={
			width:"80px",
			float:"right"
		};

		return (
			<div className={style["feed-back"]}>
				<TextArea
					ref="content" 
					styleCss={textStyle} 
					placeholder={`请输入反馈意见`}>
				</TextArea>
				<p className={style["error-tip"]}>{this.state.errorMsg}</p>
				<ul className={style["deductible--content"]}>
					{this.getListImg()}
					<li className={style["res-remark--upload"]}>
						<div className={style["upload--icon"]}>
							<CommonUpload 
								ref="uploadFile"
								disabled={this.getIsDisabled()} 
								onChange={(e)=>this.upload_attach()}
								accept={"image/gif,image/jpeg,image/jpg,image/png,image/svg"}>
							</CommonUpload>
						</div>
					</li>
					<span className={style["img-count"]}>
						{this.getMediaLength()}/{this.state.maxLength}
					</span>
				</ul>
				<div className={style['submit-btn']}>
					<Button 
						text={`提交`} 
						onClick={e=>this.submitHandle()}
						styleCss={buttonStyle}>
					</Button>
				</div>
			</div>
		);
	}
	// 获取上传的个数
	getMediaLength(){
		let {attachs=[]} = this.props;

		return attachs && attachs.length?attachs.length:0;
	}
	getIsDisabled(){
		let hasUploadLenth = this.getMediaLength();

		return hasUploadLenth>=this.state.maxLength?true:false; 
	}
	upload_attach(){
		let {upload_attach} = this.props;
		let formdata = this.refs.uploadFile.getValue();

		upload_attach(formdata);
	}
	delete_attach(index){
		let {delete_attach} = this.props;

		delete_attach(index)
	}
	// 已经上传的附件生成组件
	getListImg(){

		let attachment =this.props.attachs|| [],self = this;

		return attachment.map((m,key)=>{
			return(
				<li key={key}>
					<img src={m.attachment_path}/>
					<span className={style["delete--icon"]} onClick={e=>self.delete_attach(key)}></span>
				</li> 
			)
		})
	}
	submitHandle(){
		let {add_feedback,params} = this.props,self = this;

		let r = this.getValue();


		if(!r.isPass){
			return;
		}

		add_feedback({
			...r.result,
			hidden_danger_id:params.id
		});

		this.refs.content.clearContent();
	}
	getValue(){
		let refs = this.refs,
			result={},
			attachment_ids=[],
			isPass = true,
			errorMsg = "",
			{attachs=[]} = this.props;

		for(let r in refs){
			result[r] = refs[r].getValue();
		}

		attachs.map((s)=>{
			attachment_ids.push(s.attachment_id);
		})

		result["attachment_ids"] = attachment_ids.join(",");

		if(!result["content"]){
			isPass = false;
			errorMsg = "请填写反馈意见！"
		}

		this.setState({
			isPass,
			errorMsg
		})

		return {
			isPass,
			result
		};
	}
}

/**
 * 反馈意见或者建议
 */

export class FeedbackList extends Component{
	render() {
		let {detail={}} = this.props;

		let feedback = detail && detail.feedback || [];
			

		return (
			<div className={style["feedback-list"]}>
				{
					feedback.map((f,key)=>{
						return <FeedbackPies item={f} key={key}></FeedbackPies>
					})
				}
			</div>
		);
	}
}
// small pies
export class FeedbackPies extends Component{
	render() {
		let {item={}} = this.props;

		return (
			<div className={style["feedback-pies"]}>
				<p className={style["feedback-pies_title"]}>
					{item.content}
				</p>
				<p className={style["attachment--pies"]}>
					{this.getImg(item.attaments)}
				</p>
				<p className={style["origin"]}>
					来源：
					<span>{item.organ_name}</span> 
					<span>{item.user_name}</span> 
					<span>{getFormatData(item.create_at)}</span> 
					<span>{getHoursMinutes(item.create_at)}</span> 
				</p>
			</div>
		);
	}
	getImg(imgArr=[]){
		imgArr = imgArr||[];

		return imgArr.map((img,key)=>{
			return 	<img src={img.attachment_path} alt="" key={key} onClick={e=>big_img(imgArr,key)}/>
		})
	}
}

/**
 * 点击小图看大图
 * @date   2017-06-20T17:45:50+0800
 * @author liheng
 */
function big_img(imgArr=[],index){
	let newImgArr = [];
	
	imgArr.map((img)=>{
		newImgArr.push({
			id:img.attachment_id,
			path:img.attachment_path
		})
	});

	BigImg(newImgArr,index);
}

let mapStateToProps = (state) => {
    return {
    	detail:state.detailedListReducer.detail,
    	attachs:state.detailedListReducer.attachs,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail:(obj) => {
            dispatch(Action.get_detail(obj))
        },
        upload_attach:(obj) => {
            dispatch(Action.upload_attach(obj))
        },
        delete_attach:(obj) => {
            dispatch(Action.delete_attach(obj))
        },
        add_feedback:(obj) => {
            dispatch(Action.add_feedback(obj))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RiskDetailed);