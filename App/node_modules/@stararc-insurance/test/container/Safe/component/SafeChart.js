'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highCharts = require('@stararc-insurance/high-charts');

var _highCharts2 = _interopRequireDefault(_highCharts);

var _gridlayout = require('@stararc-component/gridlayout');

var _gridlayout2 = _interopRequireDefault(_gridlayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SafeChart = function (_Component) {
    _inherits(SafeChart, _Component);

    function SafeChart() {
        _classCallCheck(this, SafeChart);

        return _possibleConstructorReturn(this, (SafeChart.__proto__ || Object.getPrototypeOf(SafeChart)).apply(this, arguments));
    }

    _createClass(SafeChart, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _gridlayout2.default,
                { width: 12 },
                _react2.default.createElement('div', { ref: 'industry' })
            );
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.list != this.props.list) {
                var conf = getChartConf(nextProps.list.categories, nextProps.list.data, nextProps.title, this.callback);
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

    return SafeChart;
}(_react.Component);

/**
 * 获取柱状图的配置参数
 */


exports.default = SafeChart;
function getChartConf(categories, data, title, callback, colors) {
    return {
        chart: {
            type: 'column',
            height: '250'
        },
        colors: colors || ["#169ddc"],
        title: {
            text: null,
            align: 'left',
            y: 5,
            style: {
                fontFamily: "微软雅黑",
                color: 'black'
            }
        },
        yAxis: {
            title: null,
            gridLineWidth: 0,
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories || []
        },
        legend: {
            itemWidth: 120,
            align: 'right',
            borderWidth: 0,
            floating: false,
            verticalAlign: 'top',
            x: -10,
            y: 0,
            itemStyle: {
                width: 120,
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
                        click: callback
                    }
                }
            }
        },
        series: [{
            name: title,
            data: data
        }]
    };
}