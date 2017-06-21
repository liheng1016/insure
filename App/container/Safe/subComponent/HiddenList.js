import React,{ Component } from 'react';
import {connect} from 'react-redux';
import style from "./HiddenList.css";

import {SearchPie,ContainerArea} from "./CompanyList"

import Pagination,{PaginationBox} from "@stararc-component/pagination";
import Action from '../model/safe/safe.action';
import BigImg from '@stararc-component/big-img';

// 一下路径为了测试暂时定死，以后要调整
// const ATTACHMENT_PATH  = "http://insurance.csgrid.cn";
const ATTACHMENT_PATH ="";

class HiddenList extends Component{
	componentDidMount(){
		this.pageGoTo(1);
	}
	getOps(page="1"){
		let {location} = this.props;

		return {
			q:this.refs.search.getValue(),
			count:10,
			page:page,
			status:location.state?location.state.status:''
		}
	}
    pageGoTo(page){
		let params = this.getOps(page);

		this.props.get_hidden_list(params);
	}
	onClick(){
		let q = this.refs.search.getValue();

		this.props.get_hidden_list({q});
	}
	render() {
		return (
			<div>
				<SearchPie 
					ref={"search"}
					onClick={e=>this.onClick()}>
				</SearchPie>
				<ContainerArea>
					<HLists {...this.props}></HLists>
				</ContainerArea>
				<PaginationBox>
					<Pagination 
						currentPage={this.props.page_obj.now_page}
						totalPage={this.props.page_obj.total_pages}
						position={"right"} 
						pageGoTo={(page)=>this.pageGoTo(page)}>
					</Pagination>
				</PaginationBox>
			</div>
		);
	}
}
let map_dispatch = (dispatch)=> {
	return {
		get_hidden_list:(params)=>{
			dispatch(Action.get_hidden_by_insure(params))

		}
	}
}
let map_state = (state)=>{
	return {
		list:state.safeReducer.sub_hidden_list,
		page_obj:state.safeReducer.sub_hidden_page
	}

}
export default connect(map_state,map_dispatch)(HiddenList);
/**
 * 隐患列表块
 */
export class HLists extends Component{
	render() {
		return (
			<ul className={style["farm__ul"]+" "+style["clear"]}>
				{this.getHiddenPies()}
			</ul>	
		);
	}
	getHiddenPies(){
		let {list=[]} = this.props;
		return list.map((l,key)=>{
			return (<HiddenPie key={key} item={l} />)
		}) 
			
	}
}

/**
 * 列表单条
 */
export class HiddenPie extends Component{
	render() {
		let {item={}} = this.props;
		let attach={
			"0":"./img/no-feek.png",//未反馈
			"1":"./img/feek.png"//已反馈
		};

				/*<li>
					<div className={style["panger_centent_left"]}>
						<h1>{item.company_name}</h1>
						<span><a href="javascript:;">[{item.classify}]</a>{item.hidden_danger_name}</span>
						<span>{item.final_result}</span>
						<span>{item.description}</span>
					</div>
					
					<div className={style["panger_centent_Img"]}>
						<ol>
							{this.getAttachment(item.attachment||[])}
						</ol>
						<span><img src={require(attach[item.hidden_danger_status||1])}/></span>
					</div>
				</li>*/
		return (
				<li className={style["farm__li"]}>
                    <dl>
                        <dt className={style["farm__title"]}>
                        	{item.company_name}
                        </dt>
                        <dd className={style["farm__list"]+" "+style["farm__list__site"]}>
                         	<span>[{item.classify}]</span>
                         	{item.hidden_danger_name}
                        </dd>
                        <dd className={style["farm__list"]}>
                        	{item.final_result}
                        </dd>
                        <dd className={style["farm__list"]}>
                         	<span>现场记录：</span>
                         	{item.description}
                        </dd>
                        <dd>
                         	<div className={style["farm__img-left"]+" "+style["clear"]}>
                             	{this.getAttachment(item.attachment||[])}             
                            </div>
                            <div className={style["farm__img-right"]}>
                             	<img src={require(attach[item.is_feedback])}/>
                            </div>
                        </dd>
                    </dl>
                </li>
		);
	}
	showImg(imgArr,index){
        let img = imgArr.slice(0),newImg=[];

        img.map((item,key)=>{
            newImg.push({
                path:ATTACHMENT_PATH + item.attachment_path,
                id:key
            })
        })

        BigImg(newImg,index);
    }

	getAttachment(imgArr=[]){

		if(imgArr.length){
			return imgArr.map((item,key)=>{
				let path = ATTACHMENT_PATH + item.attachment_path;
				return 	<img src={path} key={key} onClick={(e)=>this.showImg(imgArr,key)} />
			})
		}else{
			return <div className={style["attach_empty"]}>该隐患无图片附件</div>
		}
	}
}
