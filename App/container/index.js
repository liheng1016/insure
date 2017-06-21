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
				<Header {...this.props} loginOut={e=>this.loginOut()}></Header>
				<div className={style["content"]}>
					<SlideMenu menu={this.getMenu()} {...this.props}></SlideMenu>
					<div className={style["content__main"]}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
	loginOut(){
		console.log("loginOut")
		clearCookie();
		
		this.context.router.push("/");

	}
	getMenu(){
		return menu.subs
	}
}

Container.contextTypes={
    router: React.PropTypes.object.isRequired
}

function clearCookie(){ 
    let keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
    if (keys) { 
	    for (let i = keys.length; i--;) {
	        document.cookie=keys[i]+'=0;expires=' + new Date(0).toUTCString();
	    }
    } 
}