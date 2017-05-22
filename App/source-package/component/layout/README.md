### 保险产品下的上中下布局

>>>使用方式通过传递参数


```
import React,{Component} from "react";
import style from "./index.css";

/**
 * 内容区头部
 * des；一般用来显示过滤筛选条件，不随这滚动条滚动
 */
export class LayoutHeader extends Component{
	render() {
		let {styleCss={}} = this.props;

		return (
			<div className={style["layout-header"]} style={styleCss}>
				{this.props.children}
			</div>
		);
	}
}

/**
 * 内容区 中部
 *
 * des:一般用来列表页的中间部分，超出高度在内容区滚动
 */
export class LayoutContent extends Component{
	render() {
		let {styleCss={}} = this.props;

		return (
			<div className={style["layout-content"]} style={styleCss}>
				{this.props.children}
			</div>
		);
	}
}

/**
 * 内容区底部
 * des:一般用来列表页的翻页固定
 */
export class LayoutFooter extends Component{
	render() {
		let {styleCss={}} = this.props;

		return (
			<div className={style["layout-footer"]} style={styleCss}>
				{this.props.children}
			</div>
		);
	}
}
```

###使用说明

`LayoutHeader`     头部布局，默认styleCss高度35px

`LayoutContent`   内容区布局，默认styleCss距离顶部高度35px，底部50px

`LayoutFooter`    底部布局，默认styleCss高度50px

