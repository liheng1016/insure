import React,{Component} from "react";
import { connect } from 'react-redux';

import BigImg from "@stararc-component/big-img";

import style from "./maintenance.css";
import Button from "@stararc-component/button";
import Action from '../model/action';

import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";

/**
 * 基础设置基础信息
 */
class MainTenance extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
		};
		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<ActionBar/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<Maint maint={this.props.detail}/>
					<Claim claim={this.props.detail}/>
					<Cover cover={this.props.detail}/>
					<Daily daily={this.props.detail}/>
				</LayoutContent>
			</div>
		);
	}
	componentDidMount(){
		let {get_detail} = this.props;

		get_detail()
	}
}

/**
 * 编辑操作按钮
 */
class ActionBar extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
		};
		
		return (
			<div className={style['clear']}>
				<Button 
				styleCss={ButtonStyle}
				text={"编辑"}
				onClick={e=>this.clickHandle()}/>
			</div>
		);
	}
	clickHandle(){
		this.context.router.push("/baseSetting/edit")
	}
}

/*顶部company信息组件*/
export class ClaimDiv extends Component{
	render(){
		return(
			<div className={style["company"]}>
				<p className={style["company--name"]}>
					{this.props.ClaimName}
				</p>
				<p className={style["company--name--title"]}>
					{this.props.ClaimContent}
				</p>
			</div>
		)
	}
}

/*顶部company*/
export class Maint extends Component{
	render(){
		let {maint={}} = this.props;
		let ButtonStyle={background:"orange",width:'60px'};

		return(
			<div className={style["maint--container"]}>
				<div className={style["wrap--img"]}>
					<div className={style["information--login"]}>
						<img src={maint.addon&&maint.addon.imagePath||require("../img/logo.png")}
							alt="" 
							onClick={e=>BigImg([{path:maint.addon&&maint.addon.imagePath||require("../img/logo.png")}],0)}/>
					</div>
				</div>
				<div className={style["wrap--right"]}>
					<div className={style["information--title"]}>
						<ClaimDiv ClaimName={"公司名称 : "}
							ClaimContent={maint.organName}/>
						<ClaimDiv ClaimName={"公司地址 : "}
							ClaimContent={maint.addon&&maint.addon.address}/>
					</div>
				</div>
			</div>
		)
	}

}

/*联系人组件*/
export class ClaimP extends Component{
	render(){
		return(
			<p className={style["claim--person"]}>
				<span className={style["name"]}>{this.props.LabelName}</span>
				<span className={style["content"]}>{this.props.LabelContent}</span>
			</p>
		)
	}
}
/*理赔联系人组件*/
export class Claim extends Component{
	render(){
		let claim=this.props.claim && this.props.claim.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<ClaimP LabelName={'理赔联系人 : '}
						LabelContent={claim.socPerson}/>
					<ClaimP LabelName={'联系方式 : '}
						LabelContent={claim.socContact}/>	
					<ClaimP LabelName={'邮箱 : '}
						LabelContent={claim.socEmail}/>	
				</div>
			</div>
		)
	}
}

/*投保联系人组件*/
export class Cover extends Component{
	render(){
			let cover=this.props.cover && this.props.cover.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<ClaimP LabelName={'投保联系人 : '}
						LabelContent={cover.insurePerson}/>
					<ClaimP LabelName={'联系方式 : '}
						LabelContent={cover.insureContact}/>
					<ClaimP LabelName={'邮箱 : '}
						LabelContent={cover.insureEmail}/>
				</div>
			</div>
		)
	}
}

/*日常联系人组件*/
export class Daily extends Component{
	render(){
		let daily=this.props.daily && this.props.daily.addon ||{};
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<ClaimP LabelName={'日常联系人 : '}
						LabelContent={daily.dailyPerson}/>
					<ClaimP LabelName={'联系方式 : '}
						LabelContent={daily.dailyContact}/>
					<ClaimP LabelName={'邮箱 : '}
						LabelContent={daily.dailyEmail}/>
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
    return {
    	detail:state.basesettingReducer.detail
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        }
    }
}

ActionBar.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTenance);
