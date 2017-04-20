import React, { Component } from 'react';
import style from './index.css';
/**
 * 上传
 */
export default class Upload extends Component{
	constructor(props){
		super(props);
		this.state={
			accept:props.accept||'*/*',
			multiple:props.multiple||''
		}
	}
	render(){
		console.log(this.state.accept)
		let className= this.props.className?this.props.className:'uploader__input';
		return(
			<div className={style["uploader__box"]}>
				<form action="#" method="post" ref="uploadform" encType="multipart/form-data">
					<input
					multiple={this.state.multiple} 
					ref="uploadInput"
					name="uploadInput"
                    disabled={this.props.disabled}
					className={style[className]} 
					accept={this.state.accept}
					onChange={e=>this.changeHandle(e)}
					type="file"/>
					<button type="button" disabled={this.props.disabled} className={style["uploader__button"]}>添加附件</button>
				</form>
			</div>
		)
	}
	changeHandle(e){
		let value=this.refs.uploadInput;
		let {onChange} = this.props;

		onChange&&onChange();
	}
	getValue(){
		let formEle = this.refs.uploadform;
        var data = new FormData(formEle);

        return data;
	}
}
