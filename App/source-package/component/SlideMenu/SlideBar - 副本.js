import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from './SlideBar.css';

export default class SlideBar extends Component{
	constructor(props){
		super(props);
		this.state={
			isDown:false,
			elment:{},
			scrollbar:{},
			offsetHeight: 0,
		    offsetWidth: 0,
		    lastScrollHeight: 0,
		    lastScrollWidth: 0,
		    activeHandler: null,
		    lastMousePos: {},
			handlerPos: {
                top: 0,
                left: 0
            }
		}
	}
	render() {
		return (
			<div className={style["scroll__box"]}>
				<div
					className={style["scroll__container"]}
					ref="container" 
					onWheel={this.handlerContainerScroll.bind(this)}>
					{this.props.children}
				</div>
				<div className={style["scroll__bar"]}>
					<span className={style["scroll__bar--action"]}
						ref="scrollbar"
						id="scrollbar"
						onWheel={this.handlerContainerScroll.bind(this)}
						onMouseUp={this.mouseUpHandle.bind(this)} 

						onMouseMove={this.mouseMoveHandle.bind(this)}
						onMouseDown={this.mouseDownHandle.bind(this)}
						>
					</span>
				</div>
			</div>
		)
	}
	// {onMouseDown={this.handleVerticalHandlerMouseDown.bind(this)}}
	handlerContainerScroll(e){
		var event = e || window.event;

		console.log('handlerContainerScroll')
		console.log('ssssss',this.state)

		let {elment,offsetHeight,offsetWidth,lastScrollWidth,lastScrollHeight} = this.state;

		console.log(event.clientX,event.clientY)

        let top = elment.scrollTop / (elment.scrollHeight - offsetHeight) * (1 - offsetHeight / lastScrollHeight) * 100;
        let bottom = (1 - (elment.scrollTop + offsetHeight) / (elment.scrollHeight - offsetHeight) * (1 - offsetHeight / lastScrollHeight)) * 100;
        if (bottom < 0) bottom = 0;
        let left = elment.scrollLeft / (elment.scrollWidth - offsetWidth) * (1 - offsetWidth / lastScrollWidth) * 100;
        let right = (1 - (elment.scrollLeft + offsetWidth) / (elment.scrollWidth - offsetWidth) * (1 - offsetWidth / lastScrollWidth)) * 100;
        if (right < 0) right = 0;
        let pos = {
            top: top,
            bottom: bottom,
            left: left,
            right: right
        };

        console.log(pos)

        this.setState({handlerPos: pos});
	}
	mouseUpHandle(e){
		this.setState({
			isDown:false,
        	// lastMousePos:{},
		});
	}
	mouseDownHandle(e){
		let {elment} = this.state;

        let lastMousePos = {
            top: e.clientY,
            left: e.clientX
        };


        this.setState({
        	isDown:true,
        	lastMousePos:lastMousePos,
        	lastContainerScrollTop:elment.scrollTop
       });

        // console.log(this.state,lastMousePos)
	}
	mouseMoveHandle(e){
		if(this.state.isDown){

			let {elment,scrollbar,lastMousePos,offsetHeight,lastContainerScrollTop} = this.state;

        	console.log('移动在y方向上的距离',e.clientY,lastMousePos.top)
            let delY = parseFloat(e.clientY) - parseFloat(lastMousePos.top||0);

            console.log('delY',delY)

            let scrollHeight = lastContainerScrollTop + delY / offsetHeight * (elment.scrollHeight-offsetHeight );
            elment.scrollTop =scrollHeight

            console.log("内容区滚动的高度",scrollHeight)

            let top = delY / offsetHeight*100;
            console.log(top)
            console.log('------------------------------')



            let lastTop = parseFloat(scrollbar.style.top||0);
            top = lastTop+top
            console.log('top',top)
            
            top=top<=0?0:(top >=100?(100 - scrollbar.clientHeight/offsetHeight*100):top);
            this.setElementStyle(scrollbar,{
            	top:top+"%",
            	bottom:(100 - top)+"%"
            });

            // this.setState({
            // 	lastMousePos:{
            // 		top:e.clientY,
            // 		// top:scrollHeight,
            // 		// left:event.clientX
            // 	}
            // })
		}

	}
	setElementStyle(dom,style){
		for(var key in style){
			dom['style'][key] = style[key]
		}
	}
	collectElementInfo() {
       let elment = ReactDOM.findDOMNode(this.refs.container);
       let scrollbar = ReactDOM.findDOMNode(this.refs.scrollbar);

       this.setState({
       		offsetWidth:elment.offsetWidth,
       		offsetHeight:elment.offsetHeight,
       		elment:elment,
       		scrollbar:scrollbar
       })
    }
	componentDidMount(){
        this.collectElementInfo();//收集元素的参数
	}
    handleReadyStateChange() {
    	let _this = this;
        if (document.readyState === 'complete') {
            // _this.collectElementInfo();
            // this.updateTrackVisibilities();  
            // _this.handlerContainerScroll();  
            // if (this.props.start.includes('bottom')) {
            //     this.el.scrollTop = this.el.scrollHeight; 
            // }
            // if (this.props.start.includes('right')) {
            //     this.el.scrollLeft = this.el.scrollWidth; 
            // }
        }

    }
}