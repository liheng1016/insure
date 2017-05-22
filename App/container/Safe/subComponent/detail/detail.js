import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Select from "@stararc-component/select";
import Button from "@stararc-component/button";
import Action from "../../model/survey/action";

import{
 	getFormatData
} from "@stararc-insurance/help-tools";

/**
 * 主体框架
 */

class RiskServeyDetail extends Component{
	
	render() {
		return (
			<div className={style["riskserveywrap"]}>
				<HeaderButton/>
				<RiskServeyContent {...this.props} risk={this.props.getdetail}/>
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
		let ButtonStyle = {width:'62px',background:'orange',float:'right'}
		return (
			<div className={style["header-button"]}>
				<Button styleCss={ButtonStyle} text={'返回'} onClick={e=>history.go(-1)}/>
			</div>
		);
	}
}

/**
 * 内容组件
 */
export class RiskServeyContent extends Component{
	render() {
		return (
			<div className={style["content"]}>
				<ContentGeneral {...this.props}/>
				<Danger {...this.props}/>
				<DangerQualified {...this.props}/>
				<NotFilling {...this.props}/>
			</div>
		);
	}
}

export class LiGeneral extends Component{
	render() {
		return (
			<li className={style["general-li"]}>
				<span className={style["general-li--name"]}>{this.props.LableName}</span>
				<span className={style["general-li--content"]}>{this.props.Content}</span>
			</li>
		);
	}
}

/**
 * general
 */
export class ContentGeneral extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isopenMoreList:false,
	  	};
	}
	render() {
		let risk = this.props.risk||{};
		return (
			<ul className={style["general"]} >
				<div className={style["general-title"]}>
					<p className={style["general-company"]}>{risk.company_name}</p>
					<p className={style["general-score"]}>
						<span className={style["score"]}>{risk.final_score}分</span>
						<span className={style["general-img"]}>
							<img src={require("../img/score.png")} onClick={(e)=>this.openMoreList()}/>
						</span>
						{
							this.state.isopenMoreList ? 
							<ScoreDiv {...this.props}></ScoreDiv>:''
						}
					</p>
				</div>
				<LiGeneral LableName={"排查表 : "}
					Content={risk.form_name}/>
				<LiGeneral LableName={"任务描述 : "}
					Content={risk.task_context}/>
				<LiGeneral LableName={"排查人 : "}
					Content={risk.user_name}/>
				<LiGeneral LableName={"排查时间 : "}
					Content={risk.changed_at?getFormatData(risk.changed_at):""}/>
				<LiGeneral LableName={"整改建议 : "}
					Content={risk.remark}/>
				
			</ul>
		);
	}
	openMoreList(){
		let {isopenMoreList} = this.state;

		this.setState({
			isopenMoreList:!isopenMoreList
		})
	}
}
/**
 * 9.6评分显示隐藏
 */
export class ScoreDiv extends Component{
	render() {
		let score = this.props.risk||{};
		return (
			<ul className={style["scorediv"]}>
				{/*<div className={style["score-header"]}>
					<span className={style["score-header--name"]}>任务总评分 : </span> 
					<span className={style["score-header--res"]}>9.6分</span>
				</div>*/}
				{this.getScoreContent(score.score)}
			</ul>
		);
	}
	getScoreContent(scoreArr){
		scoreArr = scoreArr || [];

		return scoreArr.map((score,key)=>{
			return(
				
				<LiScoreDiv
					key={key} 
					LableName={score.rule_description+" ："}
					content={score.score}>
				</LiScoreDiv>
			)
		})
	}
}

/**
 * 评分显示隐藏快Li组件
 */
export class LiScoreDiv extends Component{
	render() {
		return (
			<li className={style["scorediv-li"]}>
				<span className={style["score-header--name"]}>{this.props.LableName}</span> 
				<span className={style["score-header--res"]}>{this.props.content}</span>
			</li>
		);
	}
}

/**
 * 风险组件
 */
export class Danger extends Component{
	render() {
		return (
			<div className={style["dangerdiv"]}>
				<DangerTitle {...this.props}/>
				<DangerConter {...this.props}/>
			</div>
		);
	}
}

/*风险标题组件*/
export class DangerTitle extends Component{
	render() {
		let risk = this.props.risk||{};
		return (
			<div className={style["danger-title"]}>
				风险
				<a href="javascript:;">  
					(共{risk.items&&risk.items.rectify&&risk.items.rectify.total||0}条)
				</a>
			</div>	
		);
	}
}

/*风险内容组件*/
export class DangerConter extends Component{
	render() {
		let risk = this.props.risk;
		let ButtonStyle = {width:'92px',background:'#0493df',float:'right',position:'absolute',top:'70%',right:'3%'};
		return (
			<div>
				{this.getContent()}
			</div>
		);
	}

	getContent(){
		let items = this.props.risk&&this.props.risk.items&&this.props.risk.items.rectify&&this.props.risk.items.rectify.list||[];

		return items.map((item,key)=>{
			return(
				<div className={style["dangercontent"]} key={key}>
					<DangderP LableName={item.classify} content={item.question}></DangderP>
					<p className={style["outcome"]}>{item.answer}</p>
					<p className={style["record-on-spot"]}>
						<span className={style["spot-name"]}>现场记录 : </span>
						<span className={style["spot-name"]}>{item.result}</span>
					</p>
					<ul className={style["danger-picture"]}>
						{this.getDangerPicture(item.attachments)}
					</ul>
					<div className={style["solve-picture"]}>

						{
							item.hidden_danger_status == 1?
							<img src={require("../img/clear_not.png")}/>:
							<img src={require("../img/clear.png")}/>
						}
					</div>
					{/*<Button styleCss={ButtonStyle} text={'风险跟踪'}/>*/}
				</div> 
			)	
		})
	}
	getDangerPicture(img=[]){
		img = img || [];

		return img.map((m,key)=>{
			return(
				<li className={style["pic--li"]}  key={key}>
					<img src={m.attachment_path}/>
				</li>
			)
		})
	} 

}

/**
 * B05-场所环境组件
 */
export class DangderP extends Component{
	render() {
		let risk = this.props.risk;
		return (
			<div>
				<p className={style["danger-content--line"]}>
					<span className={style["line-identifying"]}>[{this.props.LableName}]</span>
					<span className={style["line-question"]}>{this.props.content}</span>
				</p>
			</div>
		);
	}
}
/**
 * 合格组件
 */
export class DangerQualified extends Component{
	render() {
		let items = this.props.risk&&this.props.risk.items&&this.props.risk.items.finish||{};

		return (
			<div>
				<div className={style["danger-title"]}>合格<a href="javascript:;">  (共{items.total||0}条)</a></div>
				{this.getContent(items.list)}
			</div>
		);
	}
	getContent(items){
		items = items || [];

		return items.map((item,key)=>{
			return(
				<div className={style["qualified"]} key={key}>
					<DangderP LableName={item.classify} content={item.question}></DangderP>
					<p className={style["outcome"]}>{item.answer}</p>
				</div>
			)	
		})
	}
}

/**
 * 未填组件
 */
export class NotFilling extends Component{
	render() {
		let items = this.props.risk&&this.props.risk.items&&this.props.risk.items.non||{};

		return (
			<div>
				<div className={style["danger-title"]}>未填<a href="#">  (共{items.total||0}条)</a></div>
				{this.getContent(items.list)}
			</div>
		);
	}
	getContent(items){
		items = items || [];

		return items.map((item,key)=>{
			return(
				<div className={style["qualified"]}>
					<DangderP LableName={item.classify} content={item.question}></DangderP>
				</div>
			)	
		})

	}
}
let mapStateToProps = (state) => {
    return {
    	getdetail:state.surveyReducer.getdetail
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail:(obj) => {
            dispatch(Action.getdetail(obj))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RiskServeyDetail);