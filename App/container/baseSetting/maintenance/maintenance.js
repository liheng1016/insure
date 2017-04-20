import React,{Component} from "react";

import style from "./maintenance.css";
import Button from "@stararc-component/button";
export default class MainTenance extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
			
		}
		return (
			<div>
				<div className={style['clear']}>
				<Button 
				styleCss={ButtonStyle}
				text={"编辑"}
				onClick={e=>this.clickHandle()}/>
				</div>
				<Maint/>
				<Claim/>
				<Cover/>
				<Daily/>
			</div>
		);
	}
	clickHandle(){
		console.log(12122)
	}
}

export class Maint extends Component{
	render(){
		return(
			<div className={style["maint--container"]}>
				<div className={style["information"]}>
					<span className={style["information--login"]}>
					
					</span>
					<span className={style["information--title"]}>
						<p className={style["company"]}>公司名称 : <span>江泰保险经济广州分公司</span></p>
						<p className={style["dress"]}>公司地址 : <span>广东省佛山路18号</span></p>
					</span>
				</div>
			</div>
		)
	}
}

export class Claim extends Component{
	render(){
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<p className={style["claim--person"]}><span>理赔联系人 : </span><span>李瑞</span></p>
					<p className={style["claim--person"]}><span>联系方式 : </span><span>150-8888-8888</span></p>
					<p className={style["claim--person"]}><span>邮箱 : </span><span>lirui888@jiangtai.com</span></p>
				</div>
			</div>
		)
	}
}

export class Cover extends Component{
	render(){
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<p className={style["claim--person"]}><span>投保联系人 : </span><span>李睿</span></p>
					<p className={style["claim--person"]}><span>联系方式 : </span><span>150-9999-7777</span></p>
					<p className={style["claim--person"]}><span>邮箱 : </span><span>lirui888@jiangtai.com</span></p>
				</div>
			</div>
		)
	}
}

export class Daily extends Component{
	render(){
		return(
			<div className={style["claim--container"]}>
				<div className={style["information"]}>
					<p className={style["claim--person"]}><span>日常联系人 : </span><span>李锐</span></p>
					<p className={style["claim--person"]}><span>联系方式 : </span><span>150-6666-8666</span></p>
					<p className={style["claim--person"]}><span>邮箱 : </span><span>lirui888@jiangtai.com</span></p>
				</div>
			</div>
		)
	}
}


