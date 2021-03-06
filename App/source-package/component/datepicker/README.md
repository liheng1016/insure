### 保险产品时间控件

>>>简易版datepicker


```
import React,{Component} from "react";
import DatePicker from "@stararc-component/datepicker";
import style from "./index.css";


/**
 * 针对保险产品的时间控件
 */
export default class InsuranceDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDatePicker: false, 
            date: props.defaultValue ||""
        }
    }

    render() {
        return (
            <div className={style["datepicker"]}>
                <input type="text" 
                    style={this.props.inputCss}
                    value={this.state.date}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    onFocus={this.focusHandle.bind(this)}/>
                {this.state.showDatePicker ?
                    <DatePicker 
                        style={{position:'absolute',background:"white"}}
                        customConfig={this.getConfig()}
                        defaultValue={this.state.date}
                        onConfirm={this.setValue.bind(this)}
                        onCancel={this.closeDatePicker.bind(this)}/> : ''}
            </div>
        )
    }

    focusHandle() {
        this.setState({showDatePicker: true})
    }

    getConfig() {
        return {
            minYear: 2000,
            maxYear: 2030,
            weekLabel: '星期',
            type:'date'
        }
    }

    closeDatePicker() {
        this.setState({showDatePicker: false});
    }

    setValue(date) {
        this.setState({date: date})
        this.closeDatePicker();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultValue != this.props.defaultValue) {
            this.setState({
                date: nextProps.defaultValue,
            });
        }
    }
    getValue(){
        return this.state.date;
    }
}
```

###使用说明

<DatePicker ref="since_at" placeholder={"保险起期"} inputCss={{input样式}}/>



