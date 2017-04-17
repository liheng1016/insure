import React,{Component} from "react";
import Header from "@stararc-component/header";
import SlideMenu from "@stararc-component/slidemenu";
import style from './Gloable.css';

let  menu  = require('../routes/insur.json');

/**
 * the biggest container
 */
export default class Container extends Component{
	render() {
		return (
			<div>
				<Header {...this.props}></Header>
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
		return menu.subs
	}
}

