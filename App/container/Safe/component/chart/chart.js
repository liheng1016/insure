/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import style from './chart.css';
import HightChart from '@stararc-insurance/high-charts';

class Chart extends Component{
    render(){
        let styleClass={width:'100%',height:'92%',float:'left'};
        return(
            <div className={style['industry_chart']}>
                <div ref="industry" style={styleClass}></div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.confObj!=this.props.confObj){
            HightChart(this.refs.industry,nextProps.confObj);
        }
    }
}
/**
 * 风控覆盖率趋势图:每月排查企业/每月投保企业
 */
export class FKChart extends Component{
    constructor(props){
        super(props);
        this.state={
            confObj:[],
            title:''
        }
    }
    render(){
        return <Chart  confObj={this.state.confObj}/>
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.windControlTrendsList!=this.props.windControlTrendsList){
            let FKChart=filterFKdata(nextProps.windControlTrendsList);
            let conf=getChartConf(FKChart.categories,FKChart.series,this.state.title,FKChart.yAxis,FKChart.plotOptions);
            this.setState({
                confObj:conf
            })
        }
    }
}

/**
 * 隐患状况趋势图:1.隐患消除率 2.隐患总数
 */
export class YHChart extends Component{
    constructor(props){
        super(props);
        this.state={
            confObj:[],
            // title:'隐患状况趋势图'
        }
    }
    render(){
        return <Chart confObj={this.state.confObj}/>
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.dangerTrendsList!=this.props.dangerTrendsList){
            let YHChart=filterYHdata(nextProps.dangerTrendsList);
            let conf=getChartConf(YHChart.categories,YHChart.series,this.state.title,YHChart.yAxis,YHChart.plotOptions);
            this.setState({
                confObj:conf
            })
        }
    }
}

/**
 * 新增投保企业趋势图:1.每月新增企业 2.企业增长率
 */
export class BXChart extends Component{
    constructor(props){
        super(props);
        this.state={
            confObj:[],
            // title:'新增投保企业趋势图'
        }
    }
    render(){
        return <Chart confObj={this.state.confObj}/>
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.incomeTrendslist!=this.props.incomeTrendslist){

            let BXChart=filterBXdata(nextProps.incomeTrendslist);
            let conf=getChartConf(BXChart.categories,BXChart.series,this.state.title,BXChart.yAxis,BXChart.plotOptions);
            this.setState({
                confObj:conf
            })
        }
    }
}

/**
 * 过滤风控数据
 */
function filterFKdata(obj) {
    let data=obj.rate||[];
    let trendsObj={
        categories:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        yAxis:[getCharYAxis('default','default',false,'%')],
        series:[getCharSeries('spline','风控覆盖率（排查企业/投保企业）')],
        plotOptions:{spline:getCharPlotOptions('#3ab8f9','%')}
    }
    trendsObj.categories.map(function (item,key) {
        trendsObj.series[0].data.push({
            y:data[key]?parseInt(data[key]):0,
            // extra:'',
            unit:'%',
            name:'风控覆盖率',
        });
    });
    return trendsObj;
}

/**
 * 过滤隐患数据
 */
function filterYHdata(obj) {
    let rate=obj.rate||[];
    let danger_count=obj.danger_count||[];
    let trendsObj={
        categories:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        yAxis:[getCharYAxis('default','#eb6100','default','default'),getCharYAxis('default','#3ab8f9',true,'%')],
        series:[getCharSeries('line','隐患消除率(当月消除隐患数/当月隐患总数)','#3ab8f9',1),getCharSeries('spline','当月隐患数(处)','#eb6100',0)],
        plotOptions:{line:getCharPlotOptions('#3ab8f9','%'),spline:getCharPlotOptions('#eb6100')}
    }
    trendsObj.categories.map(function (item,key) {
        trendsObj.series[0].data.push({
            y:rate[key]?parseInt(rate[key]):0,
            // extra:'',
            unit:'%',
            name:'隐患消除率',
        });
        trendsObj.series[1].data.push({
            y:danger_count[key]?parseInt(danger_count[key]):0,
            // extra:'',
            unit:'处',
            name:'当月隐患总数（处）',
        });
    })
    return trendsObj;
}

/**
 * 过滤保险数据
 */
function filterBXdata(obj) {
    let company_total=obj.company_total||[];
    let money_total=obj.money_total||[];
    let trendsObj={
        categories:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        yAxis:[getCharYAxis('default','#3ab8f9','default','default'),getCharYAxis('default','#eb6100',true,'default')],
        series:[getCharSeries('column','当月新增企业(家)','#3ab8f9',0),getCharSeries('spline','当月新增保费(万元)','#eb6100',1)],
        plotOptions:{column:getCharPlotOptions('#3ab8f9'),spline:getCharPlotOptions('#eb6100')}
    }
    trendsObj.categories.map(function (item,key) {
        trendsObj.series[0].data.push({
            y:company_total[key]?parseInt(company_total[key]):0,
            // extra:'',
            unit:'家',
            name:'当月新增企业(家)',
            color:'#3ab8f9',
        });
        trendsObj.series[1].data.push({
            y:money_total[key]?Math.round((parseInt(money_total[key]) /10000) * 100) / 100:0,
            // extra:'',
            unit:'万元',
            name:'当月新增保费(万元)',
            color:'#eb6100',
        });
    })
    return trendsObj;
}

/**
 * yAxis 配置方法
 * @param text==default 默认为空
 * @param color==default 默认显示当前颜色
 * @param opposite==default 默认为false
 * @param unit==default 默认不显示单位
 */
function getCharYAxis(text,color,opposite,unit,) {
    return{
        title: {
            text: text=='default'?'':text,
                style: {
                color: color=='default'?'{color}':color
            }
        },
        labels: {
            format: unit=='default'?'':'{value}'+unit,
            style: {
                color: color
            }
        },
        opposite: opposite=='default'?false:opposite
    }
}

/**
 * series 配置方法
 * @param type 图表类型 如柱状图 曲线图 等
 * @param name 图表显示名称
 * @param color 图表颜色
 * @param y 图表绑定y轴 y=0 绑定 y左轴 y=1 绑定 y右轴
 */
function getCharSeries(type,name,color,y) {
    return{
        type:type,
        name:name?name:'',
        data:[],
        color:color?color:'',
        yAxis: y?y:0
    }
}

/**
 * 数据点配置
 * @param color 颜色
 * @param unit 单位
 * @param callback 数据点击方法
 */
function getCharPlotOptions(color,unit,callback) {
    return {
        pointWidth: 30,
        cursor: 'pointer',
        dataLabels:{
            y:0,
            enabled:true,
            format:unit?'{y}'+unit:'{y}',
            style:{
                color:color?color:''
            }
        },
        point: {
            events: {
                click: callback&&callback()
            }
        },
    }
}

/**
 * 图表配置参数
 * @param categories
 * @param series
 * @param title
 * @param yAxis
 * @param plotOptions
 * @param colors
 */
function getChartConf(categories,series,title,yAxis,plotOptions,colors) {
    return {
        chart: {
            // height:'250'
        },
        colors:colors|| ["#169ddc"],
        title:{
            text:title,
            align:'left',
            y:5,
            style:{
                fontFamily:"微软雅黑",
                color:'black',
            }
        },
        yAxis:yAxis,
        xAxis: {
            categories: categories||[],
        },
        legend: {
            // itemWidth:100,
            verticalAlign: 'bottom',
            // layout: 'vertical',
            // align: '',
            borderWidth:0,
            floating:false,
            x: 0,
            y: 20,
            itemStyle: {
                // width: 100,
                fontWeight:'500',
                whiteSpace:'nowrap',
                textOverflow:"ellipsis",
                overflow:"hidden"
            }
        },
        plotOptions:plotOptions,
        tooltip:{
            formatter:function(){
                let month=this.point.category,color=this.series.color;
                let unit=this.point.unit?this.point.unit:'';
                let value=this.point.y==0?0:this.point.y+unit;
                let string='\<span style="font-size: 10px">'+month+'\</span><br/>\
                <span style="color:'+color+'">●</span>'+ this.point.name +'\: <b>'+value+'\</b><br/>';
                return string;
            }
        },
        series :series
    };
}