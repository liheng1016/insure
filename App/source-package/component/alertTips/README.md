### 保险产品弹出提示框

>>>操作成功，操作失败的弹出框


```
import React,{Component} from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

export class AlertTips extends Component{
    render() {
        let {success,msg1,msg2} = this.props;

        return (
            <div>
                <div className={style["shade"]} onClick={e=>this.hideEvent(e)}></div>
                {
                    success?
                    <div className={style["alert--content"]}>
                        <p className={style["tips-p"]} style={{color:"#040404"}}>{msg1}</p>
                    </div>
                    :
                    <div className={style["alert--false"]}>
                        <p className={style["tips-f"]} style={{color:"#e91212"}}>{msg1}</p>
                        <p>
                            <button type="button" className={style["button"]} onClick={e=>closeAlert()}>确认</button>
                        </p>
                    </div>
                }
            </div>
        );
    }
    hideEvent(e){
        let {hideEvent} = this.props;

        hideEvent && hideEvent();

        closeAlert(e)
    }
}

/**
 * 显示弹窗
 * less
 * msg1 大标题 必须
 * msg2 小标题 必须
 * success 类型  成功 true  失败 false 默认false
 * callback 点击遮罩关闭弹层的回调函数 非必须
 */
export function openAlert(success, msg1, msg2,  callback) {
    let root = document.createElement('div');
    root.id = 'alertContainer';
    document.body.appendChild(root);

    return ReactDOM.render(<AlertTips msg1={msg1} msg2={msg2} success={success} hideEvent={callback}/>, root);
}


/**
 * 关闭弹窗
 * @date   2017-04-27T11:04:53+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
export function closeAlert() {
    let alertContainer = document.querySelector('#alertContainer');
    if (alertContainer) {
        ReactDOM.unmountComponentAtNode(alertContainer);
        alertContainer.parentNode.removeChild(alertContainer);
    }
}
```

###使用说明

openAlert(true,"操作成功")

openAlert(false,"操作失败")

closeAlert();


