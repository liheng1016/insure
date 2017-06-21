import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import style from './SafeTrends.css';
import GridLayout,{Row} from '@stararc-component/gridlayout';
import DatePicker from '@stararc-insurance/date-picker';
import {getFormatDay} from '@stararc-insurance/help-tools';
import safeAction from '../model/safe/safe.action';
import{Table,TableHeader,TableBody,TableTr,TableTd} from '@stararc-component/table';
import Chart from '@stararc-insurance/high-charts';
/**
 * 投保企业 保费收入  排查风险 趋势图
 */
export class SafeTrends extends Component{
    constructor(props){
        super(props);
        this.state={
            since_at:getFormatDay(new Date())
        }
    }
    render(){
        let type=this.props.routeParams.type||1;
        return(
            <div className={style["trends__content"]}>
                <div className={style["company_trends_search"]}>
                    <GridLayout width="1">
                        <DatePicker ref="since_at" onChange={e=>this.submitFom(e)} conf={{type:'year'}} defaultValue={this.state.since_at}/>
                    </GridLayout>
                </div>
                {this.switchTrends(type)}
            </div>
        )
    }
    switchTrends(type){
        switch (type){
            case '2':return <IncomeTrends {...this.props} type={type} sinceat={this.state.since_at}/>
                break;
            case '3':return <RiskTrends {...this.props} type={type} sinceat={this.state.since_at}/>
                break;
            default:return <CompanyTrends {...this.props} type={1} sinceat={this.state.since_at}/>
                break;
        }
    }
    getOptions(){
        return{
            since_at:this.refs.since_at.state.value+'-01-01',
            max_at:this.refs.since_at.state.value+'-12-31',
        }
    }
    submitFom(){
        let options=this.getOptions();
        let type=this.props.routeParams.type;
        this.setState({
            since_at:this.refs.since_at.state.value,
        })
        let {getCompanyTrendsList,getIncomeTrendsList,getRiskTrendsList}=this.props;
        switch (type){
            case '2':getIncomeTrendsList&&getIncomeTrendsList(options);
                break
            case '3': getRiskTrendsList&&getRiskTrendsList(options);
                break
            default:getCompanyTrendsList&&getCompanyTrendsList(options);
                break
        }
    }
}

/**
 * 企业趋势模块
 */
class CompanyTrends extends Component{
    render(){
        let {companyTrendslist=[]}=this.props;
        let list=getIncrease(companyTrendslist,this.props.type)||[];
        let title=this.props.sinceat+'年投保企业新增趋势图';
        return(
            <div>
                <TrendsChart list={list} title={title}/>
                <TrendsTable list={list} type={this.props.type}/>
            </div>
        )
    }
    componentDidMount(){
        let {getCompanyTrendsList}=this.props;
        getCompanyTrendsList&&getCompanyTrendsList();
    }
}

/**
 * 保费趋势模块
 */
class IncomeTrends extends Component{
    render(){
        let {incomeTrendslist=[]}=this.props;
        let list=getIncrease(incomeTrendslist,this.props.type)||[];
        let title=this.props.sinceat+'年保费新增趋势图';
        return(
            <div>
                <TrendsChart list={list} title={title}/>
                <TrendsTable list={list} type={this.props.type}/>
            </div>
        )
    }
    componentDidMount(){
        let {getIncomeTrendsList}=this.props;
        getIncomeTrendsList&&getIncomeTrendsList();
    }
}

/**
 * 排查风险趋势模块
 */
class RiskTrends extends Component{
    render(){
        let {riskTrendslist=[]}=this.props;
        let list=getRiskIncrease(riskTrendslist)||[];
        let title=this.props.sinceat+'年保险排查风险趋势图';
        return(
            <div>
                <RiskTrendsChart list={list} title={title}/>
                <RiskTrendsTable list={list} type={this.props.type}/>
            </div>
        )
    }
    componentDidMount(){
        let {getRiskTrendsList}=this.props;
        getRiskTrendsList&&getRiskTrendsList();
    }
}

/**
 * 企业 保费 列表显示
 */
class TrendsTable extends Component{
    render(){
        let content = this.getContent();
        return(
            <div>
                <Table>
                    <TableHeader thArr={getCommonTableTitle()}></TableHeader>
                    <TableBody>
                        {content}
                    </TableBody>
                </Table>
            </div>
        )
    }
    getContent(){
        let list=this.switchContent(this.props.type)||[];
        return list.map((item,key)=>{
            return(
                <TableTr key={key}>
                    <TableTd text={item[0].value}>{item[0].value}</TableTd>
                    <TableTd text={item[1].value}>{item[1].value}</TableTd>
                    <TableTd text={item[2].value}>{item[2].value}</TableTd>
                    <TableTd text={item[3].value}>{item[3].value}</TableTd>
                    <TableTd text={item[4].value}>{item[4].value}</TableTd>
                    <TableTd text={item[5].value}>{item[5].value}</TableTd>
                    <TableTd text={item[6].value}>{item[6].value}</TableTd>
                    <TableTd text={item[7].value}>{item[7].value}</TableTd>
                    <TableTd text={item[8].value}>{item[8].value}</TableTd>
                    <TableTd text={item[9].value}>{item[9].value}</TableTd>
                    <TableTd text={item[10].value}>{item[10].value}</TableTd>
                    <TableTd text={item[11].value}>{item[11].value}</TableTd>
                    <TableTd text={item[12].value}>{item[12].value}</TableTd>
                </TableTr>
            )
        });
    }
    switchContent(type){
        let list=this.props.list||[];
        let switchTypeValue={
            1:{addedName:'新增企业数',rete:'企业增长率'},
            2:{addedName:'新增企业数',rete:'保费增长率'},
        };
        let added=[{value:switchTypeValue[type].addedName}];
        let rate=[{value:switchTypeValue[type].rete}];
        let listArr=[];
        for (let i = 0; i < 12; i++) {
            added.push({value:list.column.data[i]});
            rate.push({value:list.spline.data[i]?list.spline.data[i].extra+'%':''});
        }
        listArr.push(added);
        listArr.push(rate);
        return listArr;
    }
}

/**
 * 风险排查列表数据显示
 */
class RiskTrendsTable extends Component{
    render(){
        let content = this.getContent();
        return(
            <div>
                <Table>
                    <TableHeader thArr={getCommonTableTitle()}></TableHeader>
                    <TableBody>
                        {content}
                    </TableBody>
                </Table>
            </div>
        )
    }
    getContent(){
        let list=this.filterContent()||[];
        return list.map((item,key)=>{
            return(
                <TableTr key={key}>
                    <TableTd text={item[0].value}>{item[0].value}</TableTd>
                    <TableTd text={item[1].value}>{item[1].value}</TableTd>
                    <TableTd text={item[2].value}>{item[2].value}</TableTd>
                    <TableTd text={item[3].value}>{item[3].value}</TableTd>
                    <TableTd text={item[4].value}>{item[4].value}</TableTd>
                    <TableTd text={item[5].value}>{item[5].value}</TableTd>
                    <TableTd text={item[6].value}>{item[6].value}</TableTd>
                    <TableTd text={item[7].value}>{item[7].value}</TableTd>
                    <TableTd text={item[8].value}>{item[8].value}</TableTd>
                    <TableTd text={item[9].value}>{item[9].value}</TableTd>
                    <TableTd text={item[10].value}>{item[10].value}</TableTd>
                    <TableTd text={item[11].value}>{item[11].value}</TableTd>
                    <TableTd text={item[12].value}>{item[12].value}</TableTd>
                </TableTr>
            )
        });
    }
    filterContent(){
        let list=this.props.list||[];
        let yAdded=[{value:'已排查企业数'}];
        let nAdded=[{value:'未排查企业数'}];
        let rate=[{value:'已排查率'}];
        let listArr=[];
        for (let i = 0; i < 12; i++) {
            yAdded.push({value:list.column.y.data[i]});
            nAdded.push({value:list.column.n.data[i]});
            rate.push({value:list.spline.data[i]?list.spline.data[i].extra+'%':''});
        }
        listArr.push(yAdded);
        listArr.push(nAdded);
        listArr.push(rate);
        return listArr;
    }
}

/**
 * 获取通用的表头
 */
function getCommonTableTitle(){
    let tr=['类别','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    return tr;
}

/**
 * 获取增比率
 */
function getIncrease(data,type) {
    let switchTypeValue={
        1:{addedName:'新增企业数',rete:'企业增长率',name:'total'},
        2:{addedName:'新增企业数',rete:'保费增长率',name:'money_total'},
        3:{addedName:'排查企业数',rete:'保险排查率',name:'hidden_total'},
    };
    let trendsObj={
        categories:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        column:{
            data:[],
            title:switchTypeValue[type].addedName,
        },
        spline:{
            data:[],
            color: '#00bf9a',
            title:switchTypeValue[type].rete,
        },
    };
    let dataArr=data||[];
    dataArr.map(function (item) {
        trendsObj.column.data.push(parseInt(item[switchTypeValue[type].name]));
        trendsObj.spline.data.push(
            {
                y:parseInt(item[switchTypeValue[type].name]),
                extra:growthRate(
                    lastMonthNumber(item.month,dataArr,switchTypeValue[type].name),
                    parseInt(item[switchTypeValue[type].name])
                )
            }
        );
    });
    return trendsObj;
}

/**
 * 获取风险排查已排查率
 */
function getRiskIncrease(data) {
    let trendsObj={
        categories:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        column:{
            y:{
                data:[],
                title:'已排查企业数',
            },
            n:{
                data:[],
                title:'未排查企业数',
            }
        },
        spline:{
            data:[],
            color: '#00bf9a',
            title:'已排查率',
        },
    };
    let dataArr=data||[];
    dataArr.map(function (item) {
        trendsObj.column.y.data.push(parseInt(item['y_total']));
        trendsObj.column.n.data.push(parseInt(item['n_total']));
        trendsObj.spline.data.push(
            {
                y:parseInt(item['y_total']),
                // y:parseInt(thenGrowthRate(parseInt(item['y_total']),parseInt(item['n_total']))),
                extra:thenGrowthRate(parseInt(item['y_total']),parseInt(item['n_total']))
            }
        );
    });
    return trendsObj;
}

/**
 * 获取上个月新增数目
 */
function lastMonthNumber(month,data,type) {
    let lastmonth=(parseInt(month)-1).toString().length<2?('0'+(parseInt(month)-1)):(parseInt(month)-1).toString();
    let total=0;
    data.map(function (item) {
        if(item.month==lastmonth){
            total=item[type];
        }
    });
    return parseInt(total);
}


/**
 * 增比率计算 (本月-上一月)/上一月*100 得出本月对比上一月增长率
 * @param t  上一月
 * @param n  本月
 * @returns {number}
 */
function growthRate(t,n) {
    if(t==0){
        return n>0?100:0;
    }
    return ((n-t)/t*100).toFixed(0);
}

/**
 * 已排查率
 * @param y 已排查
 * @param n 未排查
 */
function thenGrowthRate(y,n) {
    if(y==0){
        return 0;
    }
    return ((y/(y+n))*100).toFixed(0);
}

/**
 * 图表
 */
class TrendsChart extends Component{
    render(){
        return(
            <div className={style["content__chart"]}>
                <div ref="industry"></div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.list !=this.props.list){
            let conf = getChartConf(nextProps.list.categories,nextProps.list,nextProps.title);
            Chart(this.refs.industry,conf)
        }
    }
    callback(e){
        let {callBack} = this.props;
        callBack && callBack()
    }
}

/**
 *风险图表
 */
class RiskTrendsChart extends Component{
    render(){
        return(
            <div className={style["content__chart"]}>
                <div ref="industry"></div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.list !=this.props.list){
            let conf =getRiskChartConf(nextProps.list.categories,nextProps.list,nextProps.title);
            Chart(this.refs.industry,conf)
        }
    }
    callback(e){
        let {callBack} = this.props;
        callBack && callBack()
    }
}

/**
 * 获取柱状图的配置参数
 */
function  getChartConf(categories,data,title,colors,callback) {
    return {
        chart: {
            height:'270'
        },
        colors:colors|| ["#169ddc"],
        title:{
            text:title,
            y:5,
            style:{
                fontFamily:"微软雅黑",
                color:'black',
            }
        },
        yAxis:{
            title:'',
            gridLineWidth: 0,
            labels: {
                enabled: false
            },
        },
        xAxis: {
            categories: categories||[],
        },
        legend: {
            itemWidth:90,
            // verticalAlign: 'top',
            // layout: 'vertical',
            // align: 'right',
            borderWidth:0,
            floating:false,
            x: -10,
            y: 0,
            itemStyle: {
                width: 90,
                fontWeight:'500',
                whiteSpace:'nowrap',
                textOverflow:"ellipsis",
                overflow:"hidden"
            }
        },
        plotOptions: {
            column:{
                pointWidth: 30,
                cursor: 'pointer',
                dataLabels:{
                    y:-20,
                    enabled:true,
                    format:'{y}',
                    style:{
                        color:'black'
                    }
                },
                point: {
                    events: {
                        click: callback&&callback()
                    }
                },
            }
        },
        tooltip:{
            formatter:function(){
                switch (this.series.type){
                    case'column': return '<b>' + this.series.name + '</b>:' + this.y+' 家';
                        break;
                    case'spline': return '<b>' + this.series.name + '</b>:' + this.point.extra+' %';
                        break;
                    default:
                        break;
                }
            }
        },
        series :[{
            type:'column',
            name:data['column']['title'],
            data:data['column']['data']
        },{
            type:'spline',
            name:data['spline']['title'],
            data:data['spline']['data'],
            color: data['spline']['color'],
        }]
    };
}

/**
 * 获取风险图表配置参数
 */
function getRiskChartConf(categories,data,title,colors,callback) {
    return {
        chart: {
            type: 'column',
            height:'270'
        },
        colors:colors|| ["#169ddc"],
        title:{
            text:title,
            y:5,
            style:{
                fontFamily:"微软雅黑",
                color:'black',
            }
        },
        yAxis:{
            title:'',
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories||[],
        },
        legend: {
            itemWidth:100,
            // verticalAlign: 'top',
            // layout: 'vertical',
            // align: 'right',
            borderWidth:0,
            floating:false,
            x: -10,
            y: 0,
            itemStyle: {
                width: 100,
                fontWeight:'500',
                whiteSpace:'nowrap',
                textOverflow:"ellipsis",
                overflow:"hidden"
            }
        },
        plotOptions: {
            column:{
                pointWidth: 30,
                cursor: 'pointer',
                dataLabels:{
                    y:-20,
                    enabled:false,
                    format:'{y}',
                    style:{
                        color:'black'
                    }
                },
                point: {
                    events: {
                        click: callback&&callback()
                    }
                },
            }
        },
        tooltip:{
            formatter:function(){
                switch (this.series.type){
                    case'column': return '<b>' + this.series.name + '</b>:' + this.y+' 家';
                        break;
                    case'spline': return '<b>' + this.series.name + '</b>:' + this.point.extra+' %';
                        break;
                    default:
                        break;
                }
            }
        },
        series :[{
            type:'column',
            groupPadding:0.4,
            name:data['column']['y']['title'],
            data:data['column']['y']['data']
        },{
            color:'red',
            type:'column',
            // groupPadding:0.5,
            name:data['column']['n']['title'],
            data:data['column']['n']['data']
        },{
            type:'spline',
            name:data['spline']['title'],
            data:data['spline']['data'],
            color: data['spline']['color'],
        }]
    };
}

/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        companyTrendslist:state.safeReducer.companyTrendslist,
        incomeTrendslist:state.safeReducer.incomeTrendslist,
        riskTrendslist:state.safeReducer.riskTrendslist,
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        getCompanyTrendsList:(params)=>{
            dispatch(safeAction.companyTrendsList(params));
        },
        getIncomeTrendsList:(params)=>{
            dispatch(safeAction.incomeTrendsList(params));
        },
        getRiskTrendsList:(params)=>{
            dispatch(safeAction.riskTrendsList(params));
        }
    }
};

export default connect(stateMaps,actionMaps)(SafeTrends)