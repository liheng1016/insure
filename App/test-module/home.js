import React,{Component} from "react";
import Header from "@stararc-component/header";
import SlideMenu from "@stararc-component/slidemenu";
import style from './Gloable.css';

import{route as risk_warning_menu} from "@stararc-insurance_functional-module/risk-warning";

import{route as insur_control_menu} from "@stararc-insurance_functional-module/insur-control";

import{route as base_setting_menu} from "@stararc-insurance_functional-module/base-setting";

import{route as claim_menu} from "@stararc-insurance_functional-module/claim-management";

import{route as home_menu} from "@stararc-insurance_functional-module/home-statistic";

import {menu as slideMenu} from "@stararc-insurance/pro";


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
		// return [
		// 	...home_menu.subs,
		// 	...risk_warning_menu.subs,
		// 	...base_setting_menu.subs,
		// 	...insur_control_menu.subs,
		// 	...claim_menu.subs
		// ]
		return slideMenu 
	}
}