### 保险产品上传附件组件

>上传附件的使用，有针对按钮以及图片的使用方式

>源码位置：@stararc-insurance/core/upload

```
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
					<button type="button" disabled={this.props.disabled} className={style["uploader__button"]}>{this.props.buttonName}</button>
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

/**
 * 上传多媒体附件
 */
export  class UploadMedia extends Component{
	constructor(props){
		super(props);
		this.state={
			accept:props.accept,
			multiple:props.multiple||''
		}
	}
	render(){
		return(
			<div className={style["uploader__img--box"]}>
				<form action="#" method="post" ref="uploadform" encType="multipart/form-data">
					<input
					multiple={this.state.multiple} 
					ref="uploadInput"
					name="uploadInput"
                    disabled={this.props.disabled}
					className={style["upload__img"]} 
					accept={this.state.accept}
					onChange={e=>this.changeHandle(e)}
					type="file"/>
					<button type="button" 
						disabled={this.props.disabled} 
						className={style["uploader__img--button"]}>
						{this.props.buttonName}
					</button>
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


/**
 * 通用的上传
 * 使用是需要在外部控制样式
 * 该组件width,height都为100%，继承父节点
 * eg；
 * <div>
 * 	 <CommonUpload />
 * </div>
 */
export  class CommonUpload extends Component{
	constructor(props){
		super(props);
		this.state={
			accept:props.accept||'*/*',
			multiple:props.multiple||''
		}
	}
	render(){
		let styleCss={
			width:"100%",
			height:"100%"
		};
		// let {styleCss={}} = this.props;
		return(
			<form action="#" style={styleCss} method="post" ref="uploadform" encType="multipart/form-data">
				<input
				multiple={this.state.multiple} 
				ref="uploadInput"
				name="uploadInput"
                disabled={this.props.disabled}
                style={styleCss}
				accept={this.state.accept}
				onChange={e=>this.changeHandle(e)}
				type="file"/>
			</form>
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
```

###使用说明

Upload         上传多媒体附件，由于一些特定场合已经使用，因此保留（带加号的上传附件）

UploadMedia    上传多媒体附件，由于一些特定场合已经使用，因此保留（按钮上传文件）

CommonUpload   通用的上传，通过外部传递参数，以及父级控制上传的大小，主要参数有文件类型accept,回掉方法
onChange

```
<div>
	<CommonUpload 
		ref="logo"
		accept={"image/jpeg,image/jpg,image/png,image/svg"}
		onChange={e=>this.onChangeHandle()}>
	</CommonUpload>
</div>
```