import React,{Component} from "react";
import style from "./index.css";

import Header from "@stararc-component/header";

export default class Container extends Component{	
	render() {
		return (
			<div>
				<Header ></Header>
				<div className={style['container']}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

