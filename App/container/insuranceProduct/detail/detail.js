import React,{Component} from "react";
import { connect } from 'react-redux';
import style from "./detail.css";
import Button from "@stararc-component/button";
import Action from "../model/action";

import {
	LayoutHeader,
	LayoutContent
} from '@stararc-insurance/layout';

/*主体*/
class ManagementDetail extends Component{
	render() {
		return (
			<div>
				<LayoutHeader styleCss={{height:50}}>
					<ManagementButton {...this.props}/>
				</LayoutHeader>
				<LayoutContent styleCss={{top:50,bottom:0}}>
					<ManagementDetailContent {...this.props}/>
				</LayoutContent>
				
			</div>
		);
	}
	componentDidMount(){
		let {get_detail,params} = this.props;
		get_detail({
			id:params.id
		});
	}
}

/*顶部按钮*/
export class ManagementButton extends Component{
	render() {
		let ButtonStyle = {width:"60px",background:'#fa6b49',color:'white',marginLeft:'10px'};
		let BackStyle = {width:"60px",background:'#f9d865',color:'white'};
		return (
			<div className={style["list_button"]}>

				<Button 
					styleCss={BackStyle}
					text={"返回"}
					onClick={e=>history.go(-1)}/>
				{
					this.props.detail.status == 1?
					<Button
						onClick={e=>this.product_forbidden()} 
						styleCss={ButtonStyle}
						text={"停售"}/>
					:""	
				}	
			</div>
		);
	}
	product_forbidden(){

		let {product_forbidden,params} = this.props;

		if(!confirm("确定要停售该保险产品？")){
			return;
		}

		product_forbidden({
			id:params.id,
			status:2
		})	
	}
}


/*主体内容*/
export class ManagementDetailContent extends Component{
	render() {
		return (
			<div className={style["content_wrap"]}>
				<EssentialInformation {...this.props} />
				<DeductibleExcess {...this.props} />
				<Clause {...this.props}/>
				<AuthorizedArea {...this.props}/>
			</div>
		);
	}
}

/*保险产品基本信息*/
export class EssentialInformation extends Component{
	render() {
		let detailcontent =this.props.detail;
		return (
			<div className={style["essential"]}>
				<span className={style["essential_title"]}>保险产品基本信息</span>
				<ul className={style["essential_content"]}>
					<li className={style["essential_content--li"]}>
						保险产品名称：{detailcontent.name}
					</li>
					<li className={style["essential_content--li"]}>
						保险公司：{detailcontent.organ_name}
					</li>
					<li className={style["essential_content--li"]}>
						保险经纪公司：{detailcontent.broker_name}
					</li>
				</ul>
			</div>
		);
	}
}

/*免限额条例 */
export class DeductibleExcess extends Component{
	render(){
		let detailcontent =this.props.detail;
		return(
			<div className={style["essential"]}>
				<span className={style["essential_title"]}>赔款限额和免限额条例</span>
				<ul className={style["content"]}>
					<LiDeductible 
						DeductibleName={"从业人员 : "}
						DeductibleContent={detailcontent.practitioners}/>
					<LiDeductible 
						DeductibleName={"第三者责任 : "}
						DeductibleContent={detailcontent.third_party}/>
				</ul>
			</div>
		)
	}
}

/*免限额条例中li组件*/
export class LiDeductible extends Component{
	render(){
		return(
			<li className={style["deductible"]}>
				<span className={style["deductible--title"]}>
					{this.props.DeductibleName}
				</span>
				<span className={style["deductible--content"]}>
					{this.props.DeductibleContent}
				</span>
			</li>
		)
	}
}


/*条款内容*/
export class Clause extends Component{
	render(){
		let detailcontent =this.props.detail && this.props.detail.attachment &&this.props.detail.attachment[0]||{};
		return(
			<div className={style["essential"]}>
				<span className={style["essential_title"]}>条款内容</span>
				<div className={style["content"]}>
					保险条款：<a href={detailcontent.attachment_path} download={detailcontent.attachment_path}>{detailcontent.name}</a>
				</div>
			</div>
		)
	}
}


/*授权地区*/
export class AuthorizedArea extends Component{
	render(){
		let detailcontent =this.props.detail;
		return(
			<div className={style["essential"]}>
				<span className={style["essential_title"]}>授权地区</span>
				<div className={style["content"]}>
					<span className={style["clause--title"]}>授权地区 : </span>
					<div className={style["clause--content"]}>
						{/*this.get_grids()*/}
						{detailcontent.grid_name}
					</div>
				</div>
			</div>
		)
	}
	get_grids(){
		let {detail}=this.props;
		if(detail.grid_name && detail.grid_name.length){
			return detail.grid_name.join(" / ")
		}else{
			return ;
		}
	}
}

let mapStateToProps = (state) => {
    return {
    	detail:state.productReducer.productDetail,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    	// 获取保险产品详情
        get_detail: (obj) => {
            dispatch(Action.product_detail(obj))
        },
        // 停售产品
        product_forbidden: (obj) => {
            dispatch(Action.product_forbidden(obj))
        }
    }
};     

export default connect(mapStateToProps, mapDispatchToProps)(ManagementDetail);
