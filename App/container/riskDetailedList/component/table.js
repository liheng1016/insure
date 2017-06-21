import React,{Component} from "react";
import style from "./table.css";

/**
 * 列表的通用组件外壳
 */
export class Table extends Component{
	render() {
		return (
			<table className={style["table--main"]}>
				{this.props.children}
			</table>
		);
	}
}

/**
 * 列表头
 */
export class Thead extends Component{
	render() {
		return (
			<thead>
				<tr className={style["table_title"]} >
					{this.getTr()}
					{this.props.children}
				</tr>
			</thead>
		);
	}
	getTr(){
		let {headArr=[]} = this.props;

		return headArr.map((h,index)=>
			<th key={index}>{h}</th>
		)
	}
}

/**
 * 内容区
 */
export class Tbody extends Component{
	render() {
		return (
			<tbody className={style["tbody"]}>
				{this.props.children}
			</tbody>
		);
	}
}

/**
 *内容区的tr
 */
export class Tr extends Component{
	render() {
		return (
			<tr className={style["table_row"]} >
				{this.props.children}
			</tr>
		);
	}	
}


