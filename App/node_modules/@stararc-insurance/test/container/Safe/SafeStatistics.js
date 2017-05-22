'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _safe = require('./model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

var _card = require('./component/card');

var _card2 = _interopRequireDefault(_card);

var _rank = require('./component/rank');

var _rank2 = _interopRequireDefault(_rank);

var _chart = require('./component/chart');

var _chart2 = _interopRequireDefault(_chart);

var _SafeStatistics = require('./SafeStatistics.css');

var _SafeStatistics2 = _interopRequireDefault(_SafeStatistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {CompanyTypeList,IBPRIList,RenkingList} from './component/StatisticsList';


var SafeStatistics = function (_Component) {
    _inherits(SafeStatistics, _Component);

    function SafeStatistics() {
        _classCallCheck(this, SafeStatistics);

        return _possibleConstructorReturn(this, (SafeStatistics.__proto__ || Object.getPrototypeOf(SafeStatistics)).apply(this, arguments));
    }

    _createClass(SafeStatistics, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getCompanyType();
            this.props.getIBPRI();
            this.props.get_card_data();
            this.props.get_hidden_rank();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _SafeStatistics2.default["content"] },
                _react2.default.createElement(
                    'div',
                    { className: _SafeStatistics2.default["page-title"] },
                    '2017\u5E74\u4FDD\u9669\u98CE\u63A7\u60C5\u51B5'
                ),
                _react2.default.createElement(
                    'div',
                    { className: _SafeStatistics2.default["content_left"] },
                    _react2.default.createElement(_card2.default, this.props),
                    _react2.default.createElement(_chart2.default, this.props)
                ),
                _react2.default.createElement(
                    'div',
                    { className: _SafeStatistics2.default["content_right"] },
                    _react2.default.createElement(_rank2.default, this.props)
                )
            );
        }
    }]);

    return SafeStatistics;
}(_react.Component);

/**
 * state数据集合
 */


var stateMaps = function stateMaps(state) {
    return {
        companyTypeList: state.safeReducer.companyTypeList,
        renkingList: state.safeReducer.renkingList,
        IBPRIlist: state.safeReducer.IBPRIlist,
        riskList: state.safeReducer.riskList,
        dangerTrendsList: state.safeReducer.hiddenDangerTrendsList,
        card_data: state.safeReducer.card_data,
        windControlTrendsList: state.safeReducer.windControlTrendsList,
        incomeTrendslist: state.safeReducer.incomeTrendslist,
        hidden_rank: state.safeReducer.hidden_rank
    };
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
    return {
        getIBPRI: function getIBPRI(params) {
            dispatch(_safe2.default.IBPRIlist(params));
        },
        getCompanyType: function getCompanyType(params) {
            dispatch(_safe2.default.companyTypelist(params));
        },
        get_card_data: function get_card_data(params) {
            dispatch(_safe2.default.card_data(params));
        },
        getDangerTrends: function getDangerTrends(params) {
            dispatch(_safe2.default.dangerTrendsList(params));
        },
        getWindControlCoverageTrends: function getWindControlCoverageTrends(params) {
            dispatch(_safe2.default.windControlCoverageList(params));
        },
        getIncomeTrends: function getIncomeTrends(params) {
            dispatch(_safe2.default.incomeTrendsList(params));
        },
        get_hidden_rank: function get_hidden_rank(params) {
            dispatch(_safe2.default.hidden_rank(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(SafeStatistics);