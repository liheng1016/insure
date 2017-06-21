'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Chart;

var _helpTools = require('@stararc-insurance/help-tools');

function Chart(container, data) {
    var init = {
        chart: {
            height: 200
        },
        // 图形颜色
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],

        title: '',
        // 版权信息
        credits: {
            enabled: false
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            min: 0, //y轴最小值
            gridLineWidth: 0, //去掉y轴线
            labels: {}, //是否开启图例说明
            title: {
                text: ''
            }
        },
        plotOptions: {},
        // 图例说明包含图表中数列标志和名称的容器。
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            itemWidth: 160, //图例的宽度
            itemMarginTop: 5, //图例的行高
            itemStyle: {
                fontSize: "14px",
                color: 'black',
                fontFamily: 'Microsoft YaHei'
            }
        },
        lang: {
            noData: '暂无数据',
            loading: '加载中'
        },
        // 数据列
        series: [{
            data: []
        }]
    };
    if (data) {
        init = Object.assign({}, init, data);
    }

    init.chart.renderTo = container;

    // 插件的路径
    var url = "";

    if (process.env.NODE_ENV == 'production') {
        url = "/assets/lib/highcharts.js";
    } else {
        url = "/lib/highcharts.js";
    }

    (0, _helpTools.load_script)(url, function () {
        new Highcharts.Chart(init);
    });
} /**
   * 传递配置参数实例化图表
   * @date   2017.1.04
   * @author liheng
   * @param  {[type]}                 container [description]
   * @param  {[type]}                 data      [description]
   */

function callback(c) {
    // 环形图圆心
    var centerX = c.series[0].center[0];
    var centerY = c.series[0].center[1];
    var text = "16";
    // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
    var titleHeight = parseInt(c.title.styles.fontSize);

    c.setTitle({
        text: text,
        y: centerY + titleHeight / 2
    });

    this.chart = c;
}