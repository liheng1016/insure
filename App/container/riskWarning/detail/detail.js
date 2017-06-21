import React,{Component} from "react";
import { connect } from 'react-redux';

import Action from '../model/riskwarning/action';

import style from "./detail.css";
import Button from "@stararc-component/button";

import BigImg from "@stararc-component/big-img";

import {
	getFormatData,
	getHoursMinutes
} from "@stararc-insurance/help-tools";
import {
	LayoutHeader,
	LayoutContent,
	LayoutFooter
} from "@stararc-insurance/layout";
/**
 * 详情
 */
class Detailing extends Component{
	render() {
		let ButtonStyle={
			background:'orange',
			width:'60px',
			float:'right',
		};

		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<div className={style['de--clear']}>
						<Button 
						styleCss={ButtonStyle}
						text={"返回"}
						onClick={e=>history.go(-1)}/>
					</div>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<Detail {...this.props}></Detail>
					<Detailcontent {...this.props}></Detailcontent>
				</LayoutContent>
				
			</div>
		);
	}
	componentDidMount(){
		let {get_detail,params} = this.props;
		get_detail({
			id:params.id,
			api_path:1//是否添加api路径，1：是，2否，默认不添加
		})
	}
}

export class Detail extends Component{
	render() {
		let {detail={}} = this.props;
		return (
			<div className={style["detail"]}>
				<div className={style["detail--main"]}>
					<h1 className={style["detail--main--h1"]}>{detail.title}</h1>
					<div className={style["detail_new"]}>
					 	<p className={style["detail_new--title"]}>
					 		来源 : <span>{detail.insurance_com_name}</span>
					 	</p>
					 	<p className={style["detail_new--time"]}>
					 		发布人 : <span>{detail.insurance_user_name}</span>
					 	</p>
					 	<p className={style["detail_new--title"]}>
					 		发布时间 : <span>{getFormatData(detail.create_at)+" "+ getHoursMinutes(detail.create_at)}</span>
					 	</p>
					</div>
				</div>
			</div>
		);
	}
}


export class Detailcontent extends Component{
	render() {
		let {detail={}} = this.props;
		return (
			<div className={style["detail"]}>
				<div className={style["detail--main"]}>
					<div className={style["detail-content--word"]} dangerouslySetInnerHTML={{__html:detail.content}}></div>
					<div className={style["clear"]}></div>
					<ul className={style["detail-content--img"]}>
						<li>
							{this.getDetailImg(detail.media_attachment )}
						</li>
					</ul>
					<p className={style["detail--accessory"]}>
						附件 : 
						{this.getMedia(detail.attachment)}
					</p>
					<p className={style["detail--dress"]}>
						发送地区 :{this.getArea(detail.grid_name)}
					</p>
					<p className={style["detail--dress"]}>
						发送对象 : <span>{detail.send_object}</span>
					</p>
				</div>
			</div>
		);
	}
	// 发送地区
	getArea(grids){
		grids = grids ||[];
		return grids.map((g,key)=>{
		 	return <span key={key}>{g}</span>
		})
	}
	// 详情附件
	getDetailImg(media_attachment){
		media_attachment = media_attachment ||[];
		return	media_attachment.map((m,key)=>{
			return(
				<img src={m.attachment_path} className={style["img"]}  key={key} onClick={e=>this.big_img(media_attachment,key)}/>
			)
		})
	}
	// 点击小图看大图
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
	// 附件
	getMedia(attachment){
		attachment = attachment ||[];
		return	attachment.map((m,key)=>{
			return(
				<a key={key} href={m.attachment_path} className={style["attachment--media"]} download="">{m.name}</a>
			)
		})	
	}
}


let mapStateToProps = (state) => {
    return {
    	detail:state.riskWarningReducer.detail
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        get_detail: (obj) => {
            dispatch(Action.detail(obj))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailing);