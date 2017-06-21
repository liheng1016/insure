import React,{Component} from "react";
import {
	CompanyName,
	CompanyArea,
	CompanyIndustry,
	CompanyCreditCode
} from "../../component/core.js";

/**
 * 注册的第一步
 * create by liheng at 2017.6.12
 */
export default class Index extends Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {

	  	};
	}
	render() {
		return (
			<div>
				<CompanyName ref="organName" defaultValue={this.props.organName} {...this.props}></CompanyName>
				<CompanyArea ref="gridID" {...this.props} onChange={this.props.onChange}></CompanyArea>
				<CompanyIndustry ref="typeID" {...this.props} defaultValue={this.props.type}></CompanyIndustry>
				<CompanyCreditCode ref="register" {...this.props} defaultValue={this.props.register}></CompanyCreditCode>
			</div>
		);
	}
	getValue(){
		let result = {},refs = this.refs;

		for(let key in refs){

			result = Object.assign(result,result,{...refs[key].getValue()})
		}

		return result;
	}
}



