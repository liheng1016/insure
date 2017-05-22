'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart');

var _chart2 = require('./chart.css');

var _chart3 = _interopRequireDefault(_chart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by able on 17-4-10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StatisticChart = function (_Component) {
    _inherits(StatisticChart, _Component);

    function StatisticChart(props) {
        _classCallCheck(this, StatisticChart);

        var _this = _possibleConstructorReturn(this, (StatisticChart.__proto__ || Object.getPrototypeOf(StatisticChart)).call(this, props));

        _this.state = {
            current_index: 'FK'
        };
        _this.switch = _this.switch.bind(_this);
        return _this;
    }

    _createClass(StatisticChart, [{
        key: 'switch',
        value: function _switch(index) {
            switch (index) {
                case 'YH':
                    this.getDanger && this.getDanger();
                    break;
                case 'BX':
                    this.getIncome && this.getIncome();
                    break;
                default:
                    this.getWindControlCoverage && this.getWindControlCoverage();
                    break;
            }
            this.setState({ current_index: index });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: _chart3.default['chart-box'] },
                _react2.default.createElement(
                    'div',
                    { className: _chart3.default["yhqutLeft"] },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    return _this2.switch('FK');
                                },
                                className: _chart3.default[this.state.current_index === 'FK' ? 'active' : ''] },
                            '\u98CE\u63A7\u8986\u76D6\u7387'
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    return _this2.switch('YH');
                                },
                                className: _chart3.default[this.state.current_index === 'YH' ? 'active' : ''] },
                            '\u9690\u60A3\u8D8B\u52BF'
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    return _this2.switch('BX');
                                },
                                className: _chart3.default[this.state.current_index === 'BX' ? 'active' : ''] },
                            '\u6295\u4FDD\u4F01\u4E1A\u8D8B\u52BF'
                        )
                    ),
                    _react2.default.createElement('div', { className: _chart3.default["clear"] }),
                    this.state.current_index === 'FK' ? _react2.default.createElement(_chart.FKChart, this.props) : '',
                    this.state.current_index === 'YH' ? _react2.default.createElement(_chart.YHChart, this.props) : '',
                    this.state.current_index === 'BX' ? _react2.default.createElement(_chart.BXChart, this.props) : ''
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.switch && this.switch('FK');
        }
    }, {
        key: 'getDanger',
        value: function getDanger() {
            var getDangerTrends = this.props.getDangerTrends;

            getDangerTrends && getDangerTrends();
        }
    }, {
        key: 'getWindControlCoverage',
        value: function getWindControlCoverage() {
            var getWindControlCoverageTrends = this.props.getWindControlCoverageTrends;

            getWindControlCoverageTrends && getWindControlCoverageTrends();
        }
    }, {
        key: 'getIncome',
        value: function getIncome() {
            var getIncomeTrends = this.props.getIncomeTrends;

            getIncomeTrends && getIncomeTrends();
        }
    }]);

    return StatisticChart;
}(_react.Component);

exports.default = StatisticChart;