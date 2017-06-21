import React,{Component} from "react";
import {Link} from "react-router";
import style from "./register.css";

export default class Register extends Component{
	render() {
		return (
			<div className={style["wrap"]}>
				<img src={require("../img/pic.png")} className={style["wrap_pic"]}/>
			<Company/>
			<Person/>
			</div>
		);
	}
}

/*企业*/
class Company extends Component{
	render() {
		return (
			<div className={style["company_wrap"]}>
				{/*<span className={style["company_title"]}>我是企业</span>*/}
				<Link className={style["company_button"]} to="/register/step">
					<img src={require("../img/company_pic.png")} className={style["person_picture"]}/>
					企业申请注册
				</Link>
			</div>
		);
	}
}

/*个人*/
class Person extends Component{
	render() {
		return (
			<div className={style["person_wrap"]}>
				{/*<span className={style["company_title"]}>我是个人</span>*/}
				<Link className={style["company_button"]} to="/register/person">
					<img src={require("../img/person_pic.png")} className={style["picture"]}/>
					受邀用户开通
				</Link>
			</div>
		);
	}
}


