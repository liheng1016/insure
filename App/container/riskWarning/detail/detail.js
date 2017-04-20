import React,{Component} from "react";

import style from "./detail.css";
import Button from "@stararc-component/button";
export default class Detailing extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
			
		}
		return (
			<div>
				<div className={style['de--clear']}>
					<Button 
					styleCss={ButtonStyle}
					text={"返回"}
					onClick={e=>this.clickHandle()}/>
				</div>
				<Detail/>
				<Detailcontent/>
			</div>
		);
	}
	clickHandle(){
		console.log(12122)
	}
}

export class Detail extends Component{
	constructor(props){
		super(props)
		this.state={
			detaillist:{
					title:"海南安全生产责任保险项目变更公告",
					company:'江泰保险经纪有限公司海口分公司',
					person:"张晨光",
					time:"2016-7-20 09:30"
			}
		}

	}
	render() {
		let detaillists = this.state.detaillist;
		return (
			<div className={style["detail"]}>
				<div className={style["detail--main"]}>
					<h1>{detaillists.title}</h1>
					<div className={style["detail_new"]}>
					 	<p className={style["detail_new--title"]}>
					 		来源 : <span>{detaillists.company}</span>
					 	</p>
					 	<p className={style["detail_new--time"]}>
					 		发布人 : <span>{detaillists.person}    </span>
					 		发布时间 : <span>{detaillists.time}</span>
					 	</p>
					</div>
				</div>
				
			</div>
		);
	}
}


export class Detailcontent extends Component{
	constructor(props){
		super(props)
		this.state={
			detaillist:{
					company:'江泰保险经纪有限公司海口分公司',
					content:"江泰保险经纪股份有限公司海口分公司统保的海南省安全生产责任保险项目由4家保险公司共保，现承保份额自2015年6月经纪股份有限公司海口分公司统保的海南省安全生产责任保险项目由4家保险公司共保，现承保份额自2015年6月保险经纪股份有限公司海口分公司统保的海南省安全生产责任,保险项目由4家保险公司共保，现承保份额自2015年6月,江泰保险经纪股份有限公司海口分公司统保的海南省安全生产责任保险项目由4家保险公司共保，现承保份额自2015年6月,江泰保险经纪股份有限公司海口分公司统保的海南省安全生产责任保险项目由4家保险公司共保，现承保份额自2015年6月",
					time_date:"2016-7-20",
					dress:"深圳区",
					de_person:"投保企业/潜在客户",
					img:[
						{"src":"../img/delete.png"},
						{"src":"../img/select.png"},
						{"src":"../img/delete.png"}
					]
			}
		}

	}
	render() {
		let detaillists = this.state.detaillist;
		return (
			<div className={style["detail"]}>
				<div className={style["detail--main"]}>
					<div className={style["detail--content"]}>
						<span className={style["detail-content--word"]}>{detaillists.content}</span>
						<p className={style["detail-content--msg"]}>变更日期为2015年6月5日,其他事项不变.特此公告!</p>
						<p className={style["detail-content--company"]}>{detaillists.company}</p>
						<p className={style["detail-content--time"]}>{detaillists.time_date}</p>
					</div>
					<div className={style["clear"]}></div>
					<ul className={style["detail-content--img"]}>
						<li>
							{this.getDetailImg()}
						</li>
					</ul>
					<p className={style["detail--accessory"]}>
						附件 : <span>海南安全生产责任保险项目变更公告</span>
					</p>
					<p className={style["detail--dress"]}>
						发送地区 : <span>{detaillists.dress}</span>
					</p>
					<p className={style["detail--dress"]}>
						发送对象 : <span>{detaillists.de_person}</span>
					</p>
				</div>
			</div>
		);
	}
	
	getDetailImg(){
		let detailImg = this.state.detaillist.img;
		return	detailImg.map((m,key)=>{
			console.log(m.src)
				return(
						<img src={m.src} className={style["img"]}  key={key}/>
				)
		})
	}
}


					

			
