import React,{Component} from 'react';
import ReactDOM from 'react-dom';


const VERTICAL = 'vertial';
const HORIZONTAL = 'horizontal';

const styles = {
    main: {
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box'
    },
    container: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '-17px',
        bottom: '-17px',
        overflow: 'scroll',
        boxSizing: 'border-box'
    },
    track: {
        vertical: {
            position: 'absolute',
            top: '0',
            right: '0'
        },
        verticalCustomize: {
            width: '10px',
            backgroundColor: '#FAFAFA',
            borderLeft: '1px solid #E8E8E8',
            transition: 'opacity 0.3s'
        },
        horizontal: {
            position: 'absolute',
            left: '0',
            bottom: '0',
        },
        horizontalCustomize: {
            height: '10px',
            backgroundColor: '#FAFAFA',
            borderTop: '1px solid #E8E8E8',
            transition: 'opacity 0.3s'
        }
    },
    handler: {
        vertical: {
            position: 'absolute',
        },
        verticalCustomize: {
            width: '100%',
            backgroundColor: '#C1C1C1',
            borderRadius: '5px',
            transition: 'opacity 0.3s'
        },
        horizontal: {
            position: 'absolute',
        },
        horizontalCustomize: {
            height: '100%',
            backgroundColor: '#C1C1C1',
            borderRadius: '5px',
            transition: 'opacity 0.3s'
        }
    },
    square: {
        position: 'absolute',
        width: '10px',
        height: '10px',
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
    }
};

export default class FreeScrollbar extends Component{
    static defaultProps = {
        style: {
            width: '100%',
            height: '100%'
        },
        fixed: false,
        autohide: false,
        timeout: 2000,
        tracksize: '10px',
        start: 'top left',
    }

    constructor(props) {
        super(props);
        console.log(55555)
        this.state = {
            showVeriticalTrack: false,
            showHorizontalTrack: false,
            noselect: false,
            handlerPos: {
                top: 0,
                left: 0
            },
            hideHandler: false,
            style: {
                width: '100%',
                height: '100%'
            },
            fixed: false,
            autohide: false,
            timeout: 2000,
            tracksize: '10px',
            start: 'top left',
        };

        this.el =  null;
        this.offsetHeight =  0;
        this.offsetWidth =  0;
        this.lastScrollHeight =  0;
        this.lastScrollWidth =  0;
        this.activeHandler =  null;
        this.lastMousePos =  null;
        this.lastContainerScrollTop =  0;
        this.lastContainerScrollLeft =  0;
        this.handlerHider =  null;
        let self = this;
    }
    componentDidMount() {
        let _this = this;

        document.addEventListener('mousemove', self.handleHandlerMouseMove);
        document.addEventListener('mouseup', self.handleHandlerMouseUp);
        document.addEventListener('readystatechange', self.handleReadyStateChange);

        _this.collectInfo();
        _this.updateTrackVisibilities();  
        _this.handlerContainerScroll(); 
        if (_this.state.start.includes('bottom')) {
            _this.el.scrollTop = _this.el.scrollHeight; 
        }
        if (_this.state.start.includes('right')) {
            _this.el.scrollLeft = _this.el.scrollWidth; 
        }
    }

    componentWillUnmount() {
        let _this = this;
        document.removeEventListener('mousemove', _this.handleHandlerMouseMove);
        document.removeEventListener('mouseup', _this.handleHandlerMouseUp);
        document.removeEventListener('readystatechange', _this.handleReadyStateChange);
    }

    componentDidUpdate() {
        this.updateTrackVisibilities();  
    }

    handleReadyStateChange() {
        let _this = this;
        if (document.readyState === 'complete') {
            self.collectInfo();
            self.updateTrackVisibilities();  
            self.handlerContainerScroll();  
            if (self.state.start.includes('bottom')) {
                self.el.scrollTop = self.el.scrollHeight; 
            }
            if (self.state.start.includes('right')) {
                self.el.scrollLeft = self.el.scrollWidth; 
            }
        }

    }

    collectInfo() {
        let _this = this;

        _this.el = ReactDOM.findDOMNode(_this.refs.container);
        _this.offsetWidth = _this.el.offsetWidth;
        _this.offsetHeight = _this.el.offsetHeight;
    }

    render() {
        // Dynamic styles
        var containerStyles = {
            paddingBottom: this.state.fixed ? 0 : (this.state.showHorizontalTrack ? this.state.tracksize : 0),
            paddingBottom: this.state.fixed ? 0 : (this.state.showVeriticalTrack ? this.state.tracksize : 0)
        };
        if (this.state.noselect) {
            containerStyles.MozUserSelect = 'none';
            containerStyles.WebkitUserSelect = 'none';
            containerStyles.msUserSelect = 'none';
        }
        var verticalTrackStyles = {
            bottom: this.state.showHorizontalTrack ? this.state.tracksize : '0',
            opacity: this.state.hideHandler ? 0 : 1
        };
        var horizontalTrackStyles = {
            right: this.state.showVeriticalTrack ? this.state.tracksize : '0',
            opacity: this.state.hideHandler ? 0 : 1
        };
        var verticalHandlerStyles = {
            top: this.state.handlerPos.top + '%',
            bottom: this.state.handlerPos.bottom + '%',
            opacity: this.state.hideHandler ? 0 : 1
        };
        var horizontalHandlerStyles = {
            left: this.state.handlerPos.left + '%',
            right: this.state.handlerPos.right + '%', 
            opacity: this.state.hideHandler ? 0 : 1
        };

        return (
            <div
                style={Object.assign(this.state.style, styles.main)}>
                <div  
                    style={Object.assign(containerStyles, styles.container)} 
                    ref="container" 
                    onScroll={this.handlerContainerScroll} >
                    {this.props.children}
                </div>
                {this.state.showVeriticalTrack ? 
                <div 
                    style={Object.assign(verticalTrackStyles, styles.track.vertical, styles.track.verticalCustomize)}>
                    <div 
                        onMouseDown={this.handleVerticalHandlerMouseDown.bind(this, VERTICAL)}
                        style={Object.assign(verticalHandlerStyles, styles.handler.vertical, styles.handler.verticalCustomize)}></div>
                </div> : null}
                {this.state.showHorizontalTrack ? 
                <div 
                    style={Object.assign(horizontalTrackStyles, styles.track.horizontal, styles.track.horizontalCustomize)}>
                    <div 
                        onMouseDown={this.handleVerticalHandlerMouseDown.bind(this, HORIZONTAL)}
                        style={Object.assign(horizontalHandlerStyles, styles.handler.horizontal, styles.handler.horizontalCustomize)}></div>
                </div> : null}
                {this.state.showHorizontalTrack && this.state.showVeriticalTrack && !this.state.fixed ? 
                    <div style={styles.square}></div>
                 : null}
            </div>
        )
    }

    updateTrackVisibilities() {
        var el = this.el;
        var scrollHeight = el.scrollHeight, scrollWidth = el.scrollWidth;
        if (scrollHeight === this.lastScrollHeight && scrollWidth === this.lastScrollWidth) return;
        this.setState({
            showVeriticalTrack: scrollHeight > this.offsetHeight,
            showHorizontalTrack: scrollWidth > this.offsetWidth
        });
        this.lastScrollWidth = scrollWidth;
        this.lastScrollHeight = scrollHeight;
    }

    handlerContainerScroll(e) {
        if (self.state.autohide) {
            clearTimeout(self.handlerHider);
            self.setState({hideHandler: false});
            self.handlerHider = setTimeout(() => {
                self.setState({hideHandler: true});
            }, self.state.timeout);   
        }

        var el = self.el;
        var top = el.scrollTop / (el.scrollHeight - self.offsetHeight) * (1 - self.offsetHeight / self.lastScrollHeight) * 100;
        var bottom = (1 - (el.scrollTop + self.offsetHeight) / (el.scrollHeight - self.offsetHeight) * (1 - self.offsetHeight / self.lastScrollHeight)) * 100;
        if (bottom < 0) bottom = 0;
        var left = el.scrollLeft / (el.scrollWidth - self.offsetWidth) * (1 - self.offsetWidth / self.lastScrollWidth) * 100;
        var right = (1 - (el.scrollLeft + self.offsetWidth) / (el.scrollWidth - self.offsetWidth) * (1 - self.offsetWidth / self.lastScrollWidth)) * 100;
        if (right < 0) right = 0;
        var pos = {
            top: top,
            bottom: bottom,
            left: left,
            right: right
        };
        self.setState({handlerPos: pos});
    }

    handleVerticalHandlerMouseDown(d, e) {
        this.lastContainerScrollTop = this.el.scrollTop;
        this.lastContainerScrollLeft = this.el.scrollLeft;

        this.activeHandler = d;
        this.lastMousePos = {
            top: e.clientY,
            left: e.clientX
        };
        this.setState({noselect: true});
    }

    handleHandlerMouseMove(e) {
        if (this.activeHandler === VERTICAL) {
            var delY = e.clientY - this.lastMousePos.top;
            this.el.scrollTop = this.lastContainerScrollTop + delY / this.offsetHeight * this.lastScrollHeight;
        }
        if (this.activeHandler === HORIZONTAL) {
            var delX = e.clientX - this.lastMousePos.left;
            this.el.scrollLeft = this.lastContainerScrollLeft + delX / this.offsetWidth * this.lastScrollWidth;
        }
    }

    handleHandlerMouseUp() {
        this.lastMousePos = null;
        this.activeHandler = null;
        this.setState({noselect: false});
    }
};