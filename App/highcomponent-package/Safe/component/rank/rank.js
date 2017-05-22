'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TBRank = exports.YHRank = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rank = require('./rank.css');

var _rank2 = _interopRequireDefault(_rank);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by able on 17-4-10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RankList = function (_Component) {
    _inherits(RankList, _Component);

    function RankList() {
        _classCallCheck(this, RankList);

        return _possibleConstructorReturn(this, (RankList.__proto__ || Object.getPrototypeOf(RankList)).apply(this, arguments));
    }

    _createClass(RankList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _rank2.default["rank-wrap--" + this.props.icon] },
                _react2.default.createElement(
                    'h3',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.name
                    )
                ),
                this.props.children
            );
        }
    }]);

    return RankList;
}(_react.Component);

var YHRank = exports.YHRank = function (_Component2) {
    _inherits(YHRank, _Component2);

    function YHRank() {
        _classCallCheck(this, YHRank);

        return _possibleConstructorReturn(this, (YHRank.__proto__ || Object.getPrototypeOf(YHRank)).apply(this, arguments));
    }

    _createClass(YHRank, [{
        key: 'render',
        value: function render() {
            var hidden_rank = this.props.hidden_rank || [];
            var trs = hidden_rank.map(function (item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        { title: item.company_name },
                        item.company_name
                    ),
                    _react2.default.createElement(
                        'td',
                        { title: item.total },
                        item.total
                    )
                );
            });
            return _react2.default.createElement(
                RankList,
                { name: "排查隐患分布一览", icon: 'YH' },
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { width: "75%" },
                                '\u4F01\u4E1A\u540D\u79F0'
                            ),
                            _react2.default.createElement(
                                'th',
                                { width: "25%" },
                                '\u9690\u60A3\u6570'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        trs,
                        trs.length > 3 ? _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { className: _rank2.default["link"], to: "/company/list" },
                                    '\u67E5\u770B\u66F4\u591A'
                                )
                            )
                        ) : null
                    )
                )
            );
        }
    }]);

    return YHRank;
}(_react.Component);

var TBRank = exports.TBRank = function (_Component3) {
    _inherits(TBRank, _Component3);

    function TBRank() {
        _classCallCheck(this, TBRank);

        return _possibleConstructorReturn(this, (TBRank.__proto__ || Object.getPrototypeOf(TBRank)).apply(this, arguments));
    }

    _createClass(TBRank, [{
        key: 'render',
        value: function render() {
            var companyTypeList = this.props.companyTypeList || [];
            var trs = companyTypeList.map(function (item, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        { title: item.name },
                        item.name
                    ),
                    _react2.default.createElement(
                        'td',
                        { title: item.total },
                        item.total
                    )
                );
            });
            return _react2.default.createElement(
                RankList,
                { name: "投保企业行业分布", icon: "QY" },
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { width: "75%" },
                                '\u884C\u4E1A'
                            ),
                            _react2.default.createElement(
                                'th',
                                { width: "25%" },
                                '\u4F01\u4E1A\u6570'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        trs
                    )
                )
            );
        }
    }]);

    return TBRank;
}(_react.Component);