import React,{Component} from "react";
import Header from "@stararc-component/header";
import SlideMenu from "@stararc-component/slidemenu";
import style from './Gloable.css';


// 风险警示
import { 
	route as risk_warning_menu
} from  '@stararc-insurance_functional-module/risk-warning';

// 承包管理
import {
	route as insur_control_menu
} from "@stararc-insurance_functional-module/insur-control";

// 基础设置
import {
	route as base_setting_menu
} from "@stararc-insurance_functional-module/base-setting";

// 理赔管理
import {
	route as claim_menu
} from "@stararc-insurance_functional-module/claim-management";

// 首页统计
import {
	route as home_menu
} from "@stararc-insurance_functional-module/home-statistic";


// 菜单
let menu = [
	...home_menu.subs,
	...risk_warning_menu.subs,
	...base_setting_menu.subs,
	...insur_control_menu.subs,
	...claim_menu.subs
];


export default class HomeComponnet extends Component{
	render() {
		return (
			<div>
				<Header></Header>
				<div className={style["content"]}>
					<SlideMenu menu={this.getMenu()} {...this.props}></SlideMenu>
					<div className={style["content__main"]}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
	getMenu(){
		return menu 
	}
}