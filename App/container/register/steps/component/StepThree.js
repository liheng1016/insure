import React,{Component} from "react";
import {
	SuccessContent,
	Cheched
}from "../../component/core.js";

/**
 * 注册的第三步
 * create by liheng at 2017.6.12
 */
export default class Index extends Component{
	render() {
		return (
			<div>
				<SuccessContent {...this.props}/>
				<Cheched ref="check" isAgree={this.props.isAgree} {...this.props}/>
			</div>
		);
	}
	getValue(){
		return this.refs.check.getValue();
	}

}