/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import {FKChart,YHChart,BXChart} from './chart';
import style from './chart.css'
export default class StatisticChart extends Component{
    constructor(props){
        super(props);
        this.state={
          current_index:'FK',
        };
        this.switch = this.switch.bind(this);
    }
    switch(index){
        switch (index){
            case 'YH': this.getDanger&&this.getDanger();
                break
            case 'BX': this.getIncome&&this.getIncome();
                break
            default: this.getWindControlCoverage&&this.getWindControlCoverage();
                break
        }
        this.setState({current_index:index});
    }
    render(){
        return (
            <div className={style['chart-box']}>
                <div className={style["yhqutLeft"]}>
                    <ul>
                        <li onClick={e=>this.switch('FK')}
                            className={style[this.state.current_index === 'FK' ? 'active' : '']}>风控覆盖率</li>
                        <li onClick={e=>this.switch('YH')}
                            className={style[this.state.current_index === 'YH' ? 'active' : '']}>隐患趋势</li>
                        <li onClick={e=>this.switch('BX')}
                            className={style[this.state.current_index === 'BX' ? 'active' : '']}>投保企业趋势</li>
                    </ul>
                    <div className={style["clear"]}></div>
                    {this.state.current_index === 'FK' ? <FKChart {...this.props}/> :'' }
                    {this.state.current_index === 'YH' ? <YHChart {...this.props}/> :'' }
                    {this.state.current_index === 'BX' ? <BXChart {...this.props}/> :'' }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.switch&&this.switch('FK');
    }
    getDanger(){
        let {getDangerTrends}=this.props;
        getDangerTrends&&getDangerTrends();
    }
    getWindControlCoverage(){
        let {getWindControlCoverageTrends}=this.props;
        getWindControlCoverageTrends&&getWindControlCoverageTrends();
    }
    getIncome(){
        let {getIncomeTrends}=this.props;
        getIncomeTrends&&getIncomeTrends();
    }
}