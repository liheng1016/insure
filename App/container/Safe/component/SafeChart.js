import React ,{Component}from 'react';
import Chart from '@stararc-insurance/high-charts';
import GridLayout,{Row} from '@stararc-component/gridlayout';

export default class SafeChart extends Component{
    render(){
        return(
            <GridLayout width={12}>
                <div ref="industry"></div>
            </GridLayout>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.list !=this.props.list){
            let conf = getChartConf(nextProps.list.categories,nextProps.list.data,nextProps.title,this.callback);
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
function  getChartConf(categories,data,title,callback,colors) {
    return {
        chart: {
            type: 'column',
            height:'250'
        },
        colors:colors|| ["#169ddc"],
        title:{
            text:null,
            align:'left',
            y:5,
            style:{
                fontFamily:"微软雅黑",
                color:'black',
            }
        },
        yAxis:{
            title:null,
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories||[]
        },
        legend: {
            itemWidth:120,
            align: 'right',
            borderWidth:0,
            floating:false,
            verticalAlign: 'top',
            x: -10,
            y: 0,
            itemStyle: {
                width: 120,
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
                        click: callback
                    }
                },
            }
        },
        series :[{
            name:title,
            data:data
        }]
    };
}