import React,{ Component } from 'react';
import {connect} from 'react-redux';
import safeAction from '../model/safe/safe.action';
// import {CompanyTypeList,IBPRIList,RenkingList} from './component/StatisticsList';
import StatisticCard from '../component/card';
import StatisticRank from '../component/rank';
import StatisticChart from '../component/chart';
import style from './SafeStatistics.css';
class SafeStatistics extends Component{
    componentDidMount(){
        this.props.getCompanyType();
        this.props.getIBPRI();
        this.props.get_card_data();
        this.props.get_hidden_rank();
    }
    render(){
        return(
            <div className={style["content"]}>
                <div className={style["page-title"]}>2017年保险风控情况</div>
                <div className={style["content_left"]}>
                        <StatisticCard {...this.props}/>
                        <StatisticChart {...this.props}/>
                </div>
                <div className={style["content_right"]}>
                    <StatisticRank {...this.props}/>
                </div>
            </div>
        )
    }
}

/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        companyTypeList:state.safeReducer.companyTypeList,
        renkingList:state.safeReducer.renkingList,
        IBPRIlist:state.safeReducer.IBPRIlist,
        riskList:state.safeReducer.riskList,
        dangerTrendsList:state.safeReducer.hiddenDangerTrendsList,
        card_data:state.safeReducer.card_data,
        windControlTrendsList:state.safeReducer.windControlTrendsList,
        incomeTrendslist:state.safeReducer.incomeTrendslist,
        hidden_rank:state.safeReducer.hidden_rank
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        getIBPRI:(params)=>{
            dispatch(safeAction.IBPRIlist(params));
        },
        getCompanyType:(params)=>{
            dispatch(safeAction.companyTypelist(params));
        },
        get_card_data:(params)=> {
            dispatch(safeAction.card_data(params));
        },
        getDangerTrends:(params)=>{
           dispatch(safeAction.dangerTrendsList(params));
        },
        getWindControlCoverageTrends:(params)=>{
            dispatch(safeAction.windControlCoverageList(params));
        },
        getIncomeTrends:(params)=>{
            dispatch(safeAction.incomeTrendsList(params));
        },
        get_hidden_rank:(params)=>{
            dispatch(safeAction.hidden_rank(params));
        }
    }
};

export default connect(stateMaps,actionMaps)(SafeStatistics)