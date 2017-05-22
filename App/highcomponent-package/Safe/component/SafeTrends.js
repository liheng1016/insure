'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeTrends = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _SafeTrends = require('./SafeTrends.css');

var _SafeTrends2 = _interopRequireDefault(_SafeTrends);

var _gridlayout = require('@stararc-component/gridlayout');

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _datePicker = require('@stararc-insurance/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _helpTools = require('@stararc-insurance/help-tools');

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

var _table = require('@stararc-component/table');

var _highCharts = require('@stararc-insurance/high-charts');

var _highCharts2 = _interopRequireDefault(_highCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 投保企业 保费收入  排查风险 趋势图
 */
var SafeTrends = exports.SafeTrends = function (_Component) {
    _inherits(SafeTrends, _Component);

    function SafeTrends(props) {
        _classCallCheck(this, SafeTrends);

        var _this = _possibleConstructorReturn(this, (SafeTrends.__proto__ || Object.getPrototypeOf(SafeTrends)).call(this, props));

        _this.state = {
            since_at: (0, _helpTools.getFormatDay)(new Date())
        };
        return _this;
    }

    _createClass(SafeTrends, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var type = this.props.routeParams.type || 1;
            return _react2.default.createElement(
                'div',
                { className: _SafeTrends2.default["trends__content"] },
                _react2.default.createElement(
                    'div',
                    { className: _SafeTrends2.default["company_trends_search"] },
                    _react2.default.createElement(
                        _gridlayout2.default,
                        { width: '1' },
                        _react2.default.createElement(_datePicker2.default, { ref: 'since_at', onChange: function onChange(e) {
                                return _this2.submitFom(e);
                            }, conf: { type: 'year' }, defaultValue: this.state.since_at })
                    )
                ),
                this.switchTrends(type)
            );
        }
    }, {
        key: 'switchTrends',
        value: function switchTrends(type) {
            switch (type) {
                case '2':
                    return _react2.default.createElement(IncomeTrends, _extends({}, this.props, { type: type, sinceat: this.state.since_at }));
                    break;
                case '3':
                    return _react2.default.createElement(RiskTrends, _extends({}, this.props, { type: type, sinceat: this.state.since_at }));
                    break;
                default:
                    return _react2.default.createElement(CompanyTrends, _extends({}, this.props, { type: 1, sinceat: this.state.since_at }));
                    break;
            }
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            return {
                since_at: this.refs.since_at.state.value + '-01-01',
                max_at: this.refs.since_at.state.value + '-12-31'
            };
        }
    }, {
        key: 'submitFom',
        value: function submitFom() {
            var options = this.getOptions();
            var type = this.props.routeParams.type;
            this.setState({
                since_at: this.refs.since_at.state.value
            });
            var _props = this.props,
                getCompanyTrendsList = _props.getCompanyTrendsList,
                getIncomeTrendsList = _props.getIncomeTrendsList,
                getRiskTrendsList = _props.getRiskTrendsList;

            switch (type) {
                case '2':
                    getIncomeTrendsList && getIncomeTrendsList(options);
                    break;
                case '3':
                    getRiskTrendsList && getRiskTrendsList(options);
                    break;
                default:
                    getCompanyTrendsList && getCompanyTrendsList(options);
                    break;
            }
        }
    }]);

    return SafeTrends;
}(_react.Component);

/**
 * 企业趋势模块
 */


var CompanyTrends = function (_Component2) {
    _inherits(CompanyTrends, _Component2);

    function CompanyTrends() {
        _classCallCheck(this, CompanyTrends);

        return _possibleConstructorReturn(this, (CompanyTrends.__proto__ || Object.getPrototypeOf(CompanyTrends)).apply(this, arguments));
    }

    _createClass(CompanyTrends, [{
        key: 'render',
        value: function render() {
            var _props$companyTrendsl = this.props.companyTrendslist,
                companyTrendslist = _props$companyTrendsl === undefined ? [] : _props$companyTrendsl;

            var list = getIncrease(companyTrendslist, this.props.type) || [];
            var title = this.props.sinceat + '年投保企业新增趋势图';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(TrendsChart, { list: list, title: title }),
                _react2.default.createElement(TrendsTable, { list: list, type: this.props.type })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getCompanyTrendsList = this.props.getCompanyTrendsList;

            getCompanyTrendsList && getCompanyTrendsList();
        }
    }]);

    return CompanyTrends;
}(_react.Component);

/**
 * 保费趋势模块
 */


var IncomeTrends = function (_Component3) {
    _inherits(IncomeTrends, _Component3);

    function IncomeTrends() {
        _classCallCheck(this, IncomeTrends);

        return _possibleConstructorReturn(this, (IncomeTrends.__proto__ || Object.getPrototypeOf(IncomeTrends)).apply(this, arguments));
    }

    _createClass(IncomeTrends, [{
        key: 'render',
        value: function render() {
            var _props$incomeTrendsli = this.props.incomeTrendslist,
                incomeTrendslist = _props$incomeTrendsli === undefined ? [] : _props$incomeTrendsli;

            var list = getIncrease(incomeTrendslist, this.props.type) || [];
            var title = this.props.sinceat + '年保费新增趋势图';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(TrendsChart, { list: list, title: title }),
                _react2.default.createElement(TrendsTable, { list: list, type: this.props.type })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getIncomeTrendsList = this.props.getIncomeTrendsList;

            getIncomeTrendsList && getIncomeTrendsList();
        }
    }]);

    return IncomeTrends;
}(_react.Component);

/**
 * 排查风险趋势模块
 */


var RiskTrends = function (_Component4) {
    _inherits(RiskTrends, _Component4);

    function RiskTrends() {
        _classCallCheck(this, RiskTrends);

        return _possibleConstructorReturn(this, (RiskTrends.__proto__ || Object.getPrototypeOf(RiskTrends)).apply(this, arguments));
    }

    _createClass(RiskTrends, [{
        key: 'render',
        value: function render() {
            var _props$riskTrendslist = this.props.riskTrendslist,
                riskTrendslist = _props$riskTrendslist === undefined ? [] : _props$riskTrendslist;

            var list = getRiskIncrease(riskTrendslist) || [];
            var title = this.props.sinceat + '年保险排查风险趋势图';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(RiskTrendsChart, { list: list, title: title }),
                _react2.default.createElement(RiskTrendsTable, { list: list, type: this.props.type })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getRiskTrendsList = this.props.getRiskTrendsList;

            getRiskTrendsList && getRiskTrendsList();
        }
    }]);

    return RiskTrends;
}(_react.Component);

/**
 * 企业 保费 列表显示
 */


var TrendsTable = function (_Component5) {
    _inherits(TrendsTable, _Component5);

    function TrendsTable() {
        _classCallCheck(this, TrendsTable);

        return _possibleConstructorReturn(this, (TrendsTable.__proto__ || Object.getPrototypeOf(TrendsTable)).apply(this, arguments));
    }

    _createClass(TrendsTable, [{
        key: 'render',
        value: function render() {
            var content = this.getContent();
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _table.Table,
                    null,
                    _react2.default.createElement(_table.TableHeader, { thArr: getCommonTableTitle() }),
                    _react2.default.createElement(
                        _table.TableBody,
                        null,
                        content
                    )
                )
            );
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            var list = this.switchContent(this.props.type) || [];
            return list.map(function (item, key) {
                return _react2.default.createElement(
                    _table.TableTr,
                    { key: key },
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[0].value },
                        item[0].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[1].value },
                        item[1].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[2].value },
                        item[2].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[3].value },
                        item[3].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[4].value },
                        item[4].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[5].value },
                        item[5].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[6].value },
                        item[6].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[7].value },
                        item[7].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[8].value },
                        item[8].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[9].value },
                        item[9].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[10].value },
                        item[10].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[11].value },
                        item[11].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[12].value },
                        item[12].value
                    )
                );
            });
        }
    }, {
        key: 'switchContent',
        value: function switchContent(type) {
            var list = this.props.list || [];
            var switchTypeValue = {
                1: { addedName: '新增企业数', rete: '企业增长率' },
                2: { addedName: '新增企业数', rete: '保费增长率' }
            };
            var added = [{ value: switchTypeValue[type].addedName }];
            var rate = [{ value: switchTypeValue[type].rete }];
            var listArr = [];
            for (var i = 0; i < 12; i++) {
                added.push({ value: list.column.data[i] });
                rate.push({ value: list.spline.data[i] ? list.spline.data[i].extra + '%' : '' });
            }
            listArr.push(added);
            listArr.push(rate);
            return listArr;
        }
    }]);

    return TrendsTable;
}(_react.Component);

/**
 * 风险排查列表数据显示
 */


var RiskTrendsTable = function (_Component6) {
    _inherits(RiskTrendsTable, _Component6);

    function RiskTrendsTable() {
        _classCallCheck(this, RiskTrendsTable);

        return _possibleConstructorReturn(this, (RiskTrendsTable.__proto__ || Object.getPrototypeOf(RiskTrendsTable)).apply(this, arguments));
    }

    _createClass(RiskTrendsTable, [{
        key: 'render',
        value: function render() {
            var content = this.getContent();
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _table.Table,
                    null,
                    _react2.default.createElement(_table.TableHeader, { thArr: getCommonTableTitle() }),
                    _react2.default.createElement(
                        _table.TableBody,
                        null,
                        content
                    )
                )
            );
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            var list = this.filterContent() || [];
            return list.map(function (item, key) {
                return _react2.default.createElement(
                    _table.TableTr,
                    { key: key },
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[0].value },
                        item[0].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[1].value },
                        item[1].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[2].value },
                        item[2].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[3].value },
                        item[3].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[4].value },
                        item[4].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[5].value },
                        item[5].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[6].value },
                        item[6].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[7].value },
                        item[7].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[8].value },
                        item[8].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[9].value },
                        item[9].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[10].value },
                        item[10].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[11].value },
                        item[11].value
                    ),
                    _react2.default.createElement(
                        _table.TableTd,
                        { text: item[12].value },
                        item[12].value
                    )
                );
            });
        }
    }, {
        key: 'filterContent',
        value: function filterContent() {
            var list = this.props.list || [];
            var yAdded = [{ value: '已排查企业数' }];
            var nAdded = [{ value: '未排查企业数' }];
            var rate = [{ value: '已排查率' }];
            var listArr = [];
            for (var i = 0; i < 12; i++) {
                yAdded.push({ value: list.column.y.data[i] });
                nAdded.push({ value: list.column.n.data[i] });
                rate.push({ value: list.spline.data[i] ? list.spline.data[i].extra + '%' : '' });
            }
            listArr.push(yAdded);
            listArr.push(nAdded);
            listArr.push(rate);
            return listArr;
        }
    }]);

    return RiskTrendsTable;
}(_react.Component);

/**
 * 获取通用的表头
 */


function getCommonTableTitle() {
    var tr = ['类别', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    return tr;
}

/**
 * 获取增比率
 */
function getIncrease(data, type) {
    var switchTypeValue = {
        1: { addedName: '新增企业数', rete: '企业增长率', name: 'total' },
        2: { addedName: '新增企业数', rete: '保费增长率', name: 'money_total' },
        3: { addedName: '排查企业数', rete: '保险排查率', name: 'hidden_total' }
    };
    var trendsObj = {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        column: {
            data: [],
            title: switchTypeValue[type].addedName
        },
        spline: {
            data: [],
            color: '#00bf9a',
            title: switchTypeValue[type].rete
        }
    };
    var dataArr = data || [];
    dataArr.map(function (item) {
        trendsObj.column.data.push(parseInt(item[switchTypeValue[type].name]));
        trendsObj.spline.data.push({
            y: parseInt(item[switchTypeValue[type].name]),
            extra: growthRate(lastMonthNumber(item.month, dataArr, switchTypeValue[type].name), parseInt(item[switchTypeValue[type].name]))
        });
    });
    return trendsObj;
}

/**
 * 获取风险排查已排查率
 */
function getRiskIncrease(data) {
    var trendsObj = {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        column: {
            y: {
                data: [],
                title: '已排查企业数'
            },
            n: {
                data: [],
                title: '未排查企业数'
            }
        },
        spline: {
            data: [],
            color: '#00bf9a',
            title: '已排查率'
        }
    };
    var dataArr = data || [];
    dataArr.map(function (item) {
        trendsObj.column.y.data.push(parseInt(item['y_total']));
        trendsObj.column.n.data.push(parseInt(item['n_total']));
        trendsObj.spline.data.push({
            y: parseInt(item['y_total']),
            // y:parseInt(thenGrowthRate(parseInt(item['y_total']),parseInt(item['n_total']))),
            extra: thenGrowthRate(parseInt(item['y_total']), parseInt(item['n_total']))
        });
    });
    return trendsObj;
}

/**
 * 获取上个月新增数目
 */
function lastMonthNumber(month, data, type) {
    var lastmonth = (parseInt(month) - 1).toString().length < 2 ? '0' + (parseInt(month) - 1) : (parseInt(month) - 1).toString();
    var total = 0;
    data.map(function (item) {
        if (item.month == lastmonth) {
            total = item[type];
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
function growthRate(t, n) {
    if (t == 0) {
        return n > 0 ? 100 : 0;
    }
    return ((n - t) / t * 100).toFixed(0);
}

/**
 * 已排查率
 * @param y 已排查
 * @param n 未排查
 */
function thenGrowthRate(y, n) {
    if (y == 0) {
        return 0;
    }
    return (y / (y + n) * 100).toFixed(0);
}

/**
 * 图表
 */

var TrendsChart = function (_Component7) {
    _inherits(TrendsChart, _Component7);

    function TrendsChart() {
        _classCallCheck(this, TrendsChart);

        return _possibleConstructorReturn(this, (TrendsChart.__proto__ || Object.getPrototypeOf(TrendsChart)).apply(this, arguments));
    }

    _createClass(TrendsChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _SafeTrends2.default["content__chart"] },
                _react2.default.createElement('div', { ref: 'industry' })
            );
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.list != this.props.list) {
                var conf = getChartConf(nextProps.list.categories, nextProps.list, nextProps.title);
                (0, _highCharts2.default)(this.refs.industry, conf);
            }
        }
    }, {
        key: 'callback',
        value: function callback(e) {
            var callBack = this.props.callBack;

            callBack && callBack();
        }
    }]);

    return TrendsChart;
}(_react.Component);

/**
 *风险图表
 */


var RiskTrendsChart = function (_Component8) {
    _inherits(RiskTrendsChart, _Component8);

    function RiskTrendsChart() {
        _classCallCheck(this, RiskTrendsChart);

        return _possibleConstructorReturn(this, (RiskTrendsChart.__proto__ || Object.getPrototypeOf(RiskTrendsChart)).apply(this, arguments));
    }

    _createClass(RiskTrendsChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _SafeTrends2.default["content__chart"] },
                _react2.default.createElement('div', { ref: 'industry' })
            );
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.list != this.props.list) {
                var conf = getRiskChartConf(nextProps.list.categories, nextProps.list, nextProps.title);
                (0, _highCharts2.default)(this.refs.industry, conf);
            }
        }
    }, {
        key: 'callback',
        value: function callback(e) {
            var callBack = this.props.callBack;

            callBack && callBack();
        }
    }]);

    return RiskTrendsChart;
}(_react.Component);

/**
 * 获取柱状图的配置参数
 */


function getChartConf(categories, data, title, colors, callback) {
    return {
        chart: {
            height: '270'
        },
        colors: colors || ["#169ddc"],
        title: {
            text: title,
            y: 5,
            style: {
                fontFamily: "微软雅黑",
                color: 'black'
            }
        },
        yAxis: {
            title: '',
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories || []
        },
        legend: {
            itemWidth: 90,
            // verticalAlign: 'top',
            // layout: 'vertical',
            // align: 'right',
            borderWidth: 0,
            floating: false,
            x: -10,
            y: 0,
            itemStyle: {
                width: 90,
                fontWeight: '500',
                whiteSpace: 'nowrap',
                textOverflow: "ellipsis",
                overflow: "hidden"
            }
        },
        plotOptions: {
            column: {
                pointWidth: 30,
                cursor: 'pointer',
                dataLabels: {
                    y: -20,
                    enabled: true,
                    format: '{y}',
                    style: {
                        color: 'black'
                    }
                },
                point: {
                    events: {
                        click: callback && callback()
                    }
                }
            }
        },
        tooltip: {
            formatter: function formatter() {
                switch (this.series.type) {
                    case 'column':
                        return '<b>' + this.series.name + '</b>:' + this.y + ' 家';
                        break;
                    case 'spline':
                        return '<b>' + this.series.name + '</b>:' + this.point.extra + ' %';
                        break;
                    default:
                        break;
                }
            }
        },
        series: [{
            type: 'column',
            name: data['column']['title'],
            data: data['column']['data']
        }, {
            type: 'spline',
            name: data['spline']['title'],
            data: data['spline']['data'],
            color: data['spline']['color']
        }]
    };
}

/**
 * 获取风险图表配置参数
 */
function getRiskChartConf(categories, data, title, colors, callback) {
    return {
        chart: {
            type: 'column',
            height: '270'
        },
        colors: colors || ["#169ddc"],
        title: {
            text: title,
            y: 5,
            style: {
                fontFamily: "微软雅黑",
                color: 'black'
            }
        },
        yAxis: {
            title: '',
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories || []
        },
        legend: {
            itemWidth: 100,
            // verticalAlign: 'top',
            // layout: 'vertical',
            // align: 'right',
            borderWidth: 0,
            floating: false,
            x: -10,
            y: 0,
            itemStyle: {
                width: 100,
                fontWeight: '500',
                whiteSpace: 'nowrap',
                textOverflow: "ellipsis",
                overflow: "hidden"
            }
        },
        plotOptions: {
            column: {
                pointWidth: 30,
                cursor: 'pointer',
                dataLabels: {
                    y: -20,
                    enabled: false,
                    format: '{y}',
                    style: {
                        color: 'black'
                    }
                },
                point: {
                    events: {
                        click: callback && callback()
                    }
                }
            }
        },
        tooltip: {
            formatter: function formatter() {
                switch (this.series.type) {
                    case 'column':
                        return '<b>' + this.series.name + '</b>:' + this.y + ' 家';
                        break;
                    case 'spline':
                        return '<b>' + this.series.name + '</b>:' + this.point.extra + ' %';
                        break;
                    default:
                        break;
                }
            }
        },
        series: [{
            type: 'column',
            groupPadding: 0.4,
            name: data['column']['y']['title'],
            data: data['column']['y']['data']
        }, {
            color: 'red',
            type: 'column',
            // groupPadding:0.5,
            name: data['column']['n']['title'],
            data: data['column']['n']['data']
        }, {
            type: 'spline',
            name: data['spline']['title'],
            data: data['spline']['data'],
            color: data['spline']['color']
        }]
    };
}

/**
 * state数据集合
 */
var stateMaps = function stateMaps(state) {
    return {
        companyTrendslist: state.safeReducer.companyTrendslist,
        incomeTrendslist: state.safeReducer.incomeTrendslist,
        riskTrendslist: state.safeReducer.riskTrendslist
    };
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
    return {
        getCompanyTrendsList: function getCompanyTrendsList(params) {
            dispatch(_safe2.default.companyTrendsList(params));
        },
        getIncomeTrendsList: function getIncomeTrendsList(params) {
            dispatch(_safe2.default.incomeTrendsList(params));
        },
        getRiskTrendsList: function getRiskTrendsList(params) {
            dispatch(_safe2.default.riskTrendsList(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(SafeTrends);