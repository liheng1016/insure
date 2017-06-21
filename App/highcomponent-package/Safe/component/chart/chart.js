'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BXChart = exports.YHChart = exports.FKChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart.css');

var _chart2 = _interopRequireDefault(_chart);

var _highCharts = require('@stararc-insurance/high-charts');

var _highCharts2 = _interopRequireDefault(_highCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by able on 17-4-10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Chart = function (_Component) {
    _inherits(Chart, _Component);

    function Chart() {
        _classCallCheck(this, Chart);

        return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
    }

    _createClass(Chart, [{
        key: 'render',
        value: function render() {
            var styleClass = { width: '100%', height: '92%', float: 'left' };
            return _react2.default.createElement(
                'div',
                { className: _chart2.default['industry_chart'] },
                _react2.default.createElement('div', { ref: 'industry', style: styleClass })
            );
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.confObj != this.props.confObj) {
                (0, _highCharts2.default)(this.refs.industry, nextProps.confObj);
            }
        }
    }]);

    return Chart;
}(_react.Component);
/**
 * 风控覆盖率趋势图:每月排查企业/每月投保企业
 */


var FKChart = exports.FKChart = function (_Component2) {
    _inherits(FKChart, _Component2);

    function FKChart(props) {
        _classCallCheck(this, FKChart);

        var _this2 = _possibleConstructorReturn(this, (FKChart.__proto__ || Object.getPrototypeOf(FKChart)).call(this, props));

        _this2.state = {
            confObj: [],
            title: ''
        };
        return _this2;
    }

    _createClass(FKChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(Chart, { confObj: this.state.confObj });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.windControlTrendsList != this.props.windControlTrendsList) {
                var _FKChart = filterFKdata(nextProps.windControlTrendsList);
                var conf = getChartConf(_FKChart.categories, _FKChart.series, this.state.title, _FKChart.yAxis, _FKChart.plotOptions);
                this.setState({
                    confObj: conf
                });
            }
        }
    }]);

    return FKChart;
}(_react.Component);

/**
 * 隐患状况趋势图:1.隐患消除率 2.隐患总数
 */


var YHChart = exports.YHChart = function (_Component3) {
    _inherits(YHChart, _Component3);

    function YHChart(props) {
        _classCallCheck(this, YHChart);

        var _this3 = _possibleConstructorReturn(this, (YHChart.__proto__ || Object.getPrototypeOf(YHChart)).call(this, props));

        _this3.state = {
            confObj: []
        };
        return _this3;
    }

    _createClass(YHChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(Chart, { confObj: this.state.confObj });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.dangerTrendsList != this.props.dangerTrendsList) {
                var _YHChart = filterYHdata(nextProps.dangerTrendsList);
                var conf = getChartConf(_YHChart.categories, _YHChart.series, this.state.title, _YHChart.yAxis, _YHChart.plotOptions);
                this.setState({
                    confObj: conf
                });
            }
        }
    }]);

    return YHChart;
}(_react.Component);

/**
 * 新增投保企业趋势图:1.每月新增企业 2.企业增长率
 */


var BXChart = exports.BXChart = function (_Component4) {
    _inherits(BXChart, _Component4);

    function BXChart(props) {
        _classCallCheck(this, BXChart);

        var _this4 = _possibleConstructorReturn(this, (BXChart.__proto__ || Object.getPrototypeOf(BXChart)).call(this, props));

        _this4.state = {
            confObj: []
        };
        return _this4;
    }

    _createClass(BXChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(Chart, { confObj: this.state.confObj });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.incomeTrendslist != this.props.incomeTrendslist) {

                var _BXChart = filterBXdata(nextProps.incomeTrendslist);
                var conf = getChartConf(_BXChart.categories, _BXChart.series, this.state.title, _BXChart.yAxis, _BXChart.plotOptions);
                this.setState({
                    confObj: conf
                });
            }
        }
    }]);

    return BXChart;
}(_react.Component);

/**
 * 过滤风控数据
 */


function filterFKdata(obj) {
    var data = obj.rate || [];
    var trendsObj = {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        yAxis: [getCharYAxis('default', 'default', false, '%')],
        series: [getCharSeries('spline', '风控覆盖率（排查企业/投保企业）')],
        plotOptions: { spline: getCharPlotOptions('#3ab8f9', '%') }
    };
    trendsObj.categories.map(function (item, key) {
        trendsObj.series[0].data.push({
            y: data[key] ? parseInt(data[key]) : 0,
            // extra:'',
            unit: '%',
            name: '风控覆盖率'
        });
    });
    return trendsObj;
}

/**
 * 过滤隐患数据
 */
function filterYHdata(obj) {
    var rate = obj.rate || [];
    var danger_count = obj.danger_count || [];
    var trendsObj = {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        yAxis: [getCharYAxis('default', '#eb6100', 'default', 'default'), getCharYAxis('default', '#3ab8f9', true, '%')],
        series: [getCharSeries('line', '隐患消除率(当月消除隐患数/当月隐患总数)', '#3ab8f9', 1), getCharSeries('spline', '当月隐患数(处)', '#eb6100', 0)],
        plotOptions: { line: getCharPlotOptions('#3ab8f9', '%'), spline: getCharPlotOptions('#eb6100') }
    };
    trendsObj.categories.map(function (item, key) {
        trendsObj.series[0].data.push({
            y: rate[key] ? parseInt(rate[key]) : 0,
            // extra:'',
            unit: '%',
            name: '隐患消除率'
        });
        trendsObj.series[1].data.push({
            y: danger_count[key] ? parseInt(danger_count[key]) : 0,
            // extra:'',
            unit: '处',
            name: '当月隐患总数（处）'
        });
    });
    return trendsObj;
}

/**
 * 过滤保险数据
 */
function filterBXdata(obj) {
    var company_total = obj.company_total || [];
    var money_total = obj.money_total || [];
    var trendsObj = {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        yAxis: [getCharYAxis('default', '#3ab8f9', 'default', 'default'), getCharYAxis('default', '#eb6100', true, 'default')],
        series: [getCharSeries('column', '当月新增企业(家)', '#3ab8f9', 0), getCharSeries('spline', '当月新增保费(万元)', '#eb6100', 1)],
        plotOptions: { column: getCharPlotOptions('#3ab8f9'), spline: getCharPlotOptions('#eb6100') }
    };
    trendsObj.categories.map(function (item, key) {
        trendsObj.series[0].data.push({
            y: company_total[key] ? parseInt(company_total[key]) : 0,
            // extra:'',
            unit: '家',
            name: '当月新增企业(家)',
            color: '#3ab8f9'
        });
        trendsObj.series[1].data.push({
            y: money_total[key] ? Math.round(parseInt(money_total[key]) / 10000 * 100) / 100 : 0,
            // extra:'',
            unit: '万元',
            name: '当月新增保费(万元)',
            color: '#eb6100'
        });
    });
    return trendsObj;
}

/**
 * yAxis 配置方法
 * @param text==default 默认为空
 * @param color==default 默认显示当前颜色
 * @param opposite==default 默认为false
 * @param unit==default 默认不显示单位
 */
function getCharYAxis(text, color, opposite, unit) {
    return {
        title: {
            text: text == 'default' ? '' : text,
            style: {
                color: color == 'default' ? '{color}' : color
            }
        },
        labels: {
            format: unit == 'default' ? '' : '{value}' + unit,
            style: {
                color: color
            }
        },
        opposite: opposite == 'default' ? false : opposite
    };
}

/**
 * series 配置方法
 * @param type 图表类型 如柱状图 曲线图 等
 * @param name 图表显示名称
 * @param color 图表颜色
 * @param y 图表绑定y轴 y=0 绑定 y左轴 y=1 绑定 y右轴
 */
function getCharSeries(type, name, color, y) {
    return {
        type: type,
        name: name ? name : '',
        data: [],
        color: color ? color : '',
        yAxis: y ? y : 0
    };
}

/**
 * 数据点配置
 * @param color 颜色
 * @param unit 单位
 * @param callback 数据点击方法
 */
function getCharPlotOptions(color, unit, callback) {
    return {
        pointWidth: 30,
        cursor: 'pointer',
        dataLabels: {
            y: 0,
            enabled: true,
            format: unit ? '{y}' + unit : '{y}',
            style: {
                color: color ? color : ''
            }
        },
        point: {
            events: {
                click: callback && callback()
            }
        }
    };
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
function getChartConf(categories, series, title, yAxis, plotOptions, colors) {
    return {
        chart: {
            // height:'250'
        },
        colors: colors || ["#169ddc"],
        title: {
            text: title,
            align: 'left',
            y: 5,
            style: {
                fontFamily: "微软雅黑",
                color: 'black'
            }
        },
        yAxis: yAxis,
        xAxis: {
            categories: categories || []
        },
        legend: {
            // itemWidth:100,
            verticalAlign: 'bottom',
            // layout: 'vertical',
            // align: '',
            borderWidth: 0,
            floating: false,
            x: 0,
            y: 20,
            itemStyle: {
                // width: 100,
                fontWeight: '500',
                whiteSpace: 'nowrap',
                textOverflow: "ellipsis",
                overflow: "hidden"
            }
        },
        plotOptions: plotOptions,
        tooltip: {
            formatter: function formatter() {
                var month = this.point.category,
                    color = this.series.color;
                var unit = this.point.unit ? this.point.unit : '';
                var value = this.point.y == 0 ? 0 : this.point.y + unit;
                var string = '\<span style="font-size: 10px">' + month + '\</span><br/>\
                <span style="color:' + color + '">●</span>' + this.point.name + '\: <b>' + value + '\</b><br/>';
                return string;
            }
        },
        series: series
    };
}