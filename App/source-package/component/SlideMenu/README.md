## SlideMenu
>des 二级侧边栏的组件

```
import React,{Component} from 'react';
import {Link} from 'react-router';
import style from './index.css';
import SlideBar from './SlideBar';

export default class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
			menu:props.menu||[],
			activeIndex:'',//二级菜单的key值
			subIndex:''//三级菜单的key值
		}
	}
	render() {
		return (
			<div className={style["slide__menu"]}>
				<SlideBar>
					<ul className={style["slide__ul"]}>
						{this.getContent()}
					</ul>
				</SlideBar>
			</div>
		);
	}
	// 刷新页面的时候显示选中
	checkIsSelectMenu(menu,path,index,parentIndex="0"){
		menu.map((m,i)=>{
			if(menu[i].path === path){
				if(parentIndex){
					index.activeIndex = parentIndex;
					index.subIndex = i;
				}else{
					index.activeIndex = i;
				}
				return index;
			}else{
				if(menu[i].subs&&menu[i].subs.length){
					this.checkIsSelectMenu(menu[i].subs,path,index,i);
				}
			}
			
		})
	}
	// 获取菜单
	getContent(){
		let {menu} = this.state,self = this;

		return menu.map((m,key)=>{
			// 过滤菜单项
			if(m.not_show){
				return;
			}

			return(
				self.getMenu(m,key)
			)
		})
	}
	// 获取二级菜单
	getMenu(item,key){
		let isActive =this.state.activeIndex == key;

		if(item.subs&&item.subs.length){
			return (
				<li key={key} onMouseOver={e=>this.mouseOverHandle(key)}>
					<div className={style["has__sub"]} onClick={e=>this.clickHandle(key)}>
						<a href="javascript:;"  className={isActive?style["active__menu"]:style["link__hasSub"]} >
							{/*<img src={isActive?item.icon_active:item.icon} alt="icon" className={style["menu__icon"]}/>*/}
							{item.label}
						</a>
						<span className={item.isPack?style["un__pack"]:style["pack__up"]}></span>
					</div>
					{
						item.isPack ? <ul className={style["silde__ul--sub"]}>{this.getSub(key,item)}</ul>:''
					}
				</li>
			)
		}else{
			return (
				<li key={key} onMouseOver={e=>this.mouseOverHandle(key)} >
					<div className={style["hasnot__sub"]} onClick={e=>this.clickHandle(key)}>
						<Link to={item.path} activeClassName={style["active__menu"]}>
							{/*<img src={isActive?item.icon_active:item.icon} alt="icon" className={style["menu__icon"]}/>*/}
							{item.label}
						</Link>
					</div>
				</li>
			)
		}
	}
	mouseOverHandle(key){
		// this.setState({
		// 	currentIndex:key
		// })
	}
	setSubActiveIndex(subIndex){
		this.setState({
			subIndex:subIndex
		}) 
	}
	// 获取三级菜单
	getSub(parentIndex,item){
		return item.subs.map((sub,index)=>{
			let isActive = (parentIndex === this.state.activeIndex)&&(index === this.state.subIndex);
			// 过滤掉不显示的菜单项
			if(sub.not_show){
				return;
			}
			return (
				<li key={index} onClick={e=>this.setSubActiveIndex(index)} className={isActive?style['active']:''} >
					<Link to={sub.path}>{sub.label} </Link>
				</li>
			)
		})
	}
	// 点击下拉按钮
	clickHandle(index,isSubIndex){
		let menu = this.state.menu.slice(0);

		menu.map((item,key)=>{
			if(index != key){
				item.isPack = false;
			} 
		});

		menu[index].isPack = !menu[index].isPack;

		this.setState({
			menu:menu,
			activeIndex:index,
			subIndex:!!typeof(isSubIndex)?isSubIndex:""
		}); 
	}
	// 页面刷新的时候选中菜单
	componentDidMount(nextProps) {
    	let {menu,location} = this.props,Index={
    		activeIndex:"0",
    		subIndex:"0"
    	};
	
		let menuIndex =  this.checkIsSelectMenu(menu,location.pathname,Index);

      	this.setState({
      		activeIndex:Index.activeIndex,
    		subIndex:Index.subIndex
       	},function () {
       		Index.activeIndex && this.clickHandle(Index.activeIndex,Index.subIndex);
       	})
	}
}	

```
##params

`menu`  传递进来的菜单数组,结构如下
```
[{
	label:'菜单名称'
	path:'跳转路径'
	subs:[]
}]
```