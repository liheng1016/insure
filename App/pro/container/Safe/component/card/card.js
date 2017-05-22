'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BXCard = exports.YHCard = exports.FKCard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _card = require('./card.css');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by able on 17-4-10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _card2.default["card"] },
                _react2.default.createElement(
                    'div',
                    { className: _card2.default["card-title--" + this.props.icon] },
                    this.props.name
                ),
                this.props.children
            );
        }
    }]);

    return Card;
}(_react.Component);

/**
 * 1.出动人次->点击数字进入任务列表
 * 2.排查企业->点击数字进入企业列表
 */


var FKCard = exports.FKCard = function (_Component2) {
    _inherits(FKCard, _Component2);

    function FKCard() {
        _classCallCheck(this, FKCard);

        return _possibleConstructorReturn(this, (FKCard.__proto__ || Object.getPrototypeOf(FKCard)).apply(this, arguments));
    }

    _createClass(FKCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Card,
                { name: "风控工作", icon: "FK" },
                _react2.default.createElement(
                    'ol',
                    { className: _card2.default["dangerpage-list-mainone"] },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { src: require('../img/user.png'), alt: '' }),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { className: _card2.default["number--blue"], to: "/task/list" },
                                this.props.card_data.user_total ? this.props.card_data.user_total : 0
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _card2.default["dangerpage-p-bottom"] },
                            '\u51FA\u52A8\u4EBA\u6B21'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { src: require('../img/danger03.png'), alt: '' }),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { className: _card2.default["number"], to: "/company/list" },
                                this.props.card_data.company_total ? this.props.card_data.company_total : 0
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _card2.default["dangerpage-p-bottom"] },
                            '\u6392\u67E5\u4F01\u4E1A'
                        )
                    )
                )
            );
        }
    }]);

    return FKCard;
}(_react.Component);

/**
 * 隐患状况:
 * 1.隐患总数
 * 2.消除隐患数
 * 点击数字进入隐患列表
 */


var YHCard = exports.YHCard = function (_Component3) {
    _inherits(YHCard, _Component3);

    function YHCard() {
        _classCallCheck(this, YHCard);

        return _possibleConstructorReturn(this, (YHCard.__proto__ || Object.getPrototypeOf(YHCard)).apply(this, arguments));
    }

    _createClass(YHCard, [{
        key: 'get_left_style',


        /**
         * 通过设置左半圆的旋转弧度来控制
         */
        value: function get_left_style() {
            var degree = this.get_degree();
            var style = {};
            if (degree > 180) {
                style.backgroundColor = '#fff';
                style.left = '-1px';
                style.top = '-1px';
            } else {
                style.transform = 'rotate(' + -degree + 'deg)';
            }
            return style;
        }
    }, {
        key: 'get_right_style',
        value: function get_right_style() {
            var degree = this.get_degree();
            var style = {};
            if (degree > 180) {
                degree = degree - 180;
                style.transform = 'rotate(' + -degree + 'deg)';
            }
            return style;
        }
    }, {
        key: 'get_degree',
        value: function get_degree() {
            var _props$card_data = this.props.card_data,
                solve_risk_total = _props$card_data.solve_risk_total,
                n_solve_risk_total = _props$card_data.n_solve_risk_total;

            return (1 - parseInt(n_solve_risk_total) / parseInt(solve_risk_total)) * 360;
        }
    }, {
        key: 'render',
        value: function render() {
            var rate = parseInt(this.props.card_data.n_solve_risk_total) / parseInt(this.props.card_data.solve_risk_total) * 100;
            return _react2.default.createElement(
                Card,
                { name: "隐患状况", icon: "YH" },
                _react2.default.createElement(
                    'div',
                    { className: _card2.default["circle-wrap"] },
                    _react2.default.createElement(
                        'div',
                        { className: _card2.default["circle__text"], title: rate.toFixed(2) + '%' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u9690\u60A3\u603B\u6570'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { className: _card2.default["number"], to: "/hidden/list" },
                                this.props.card_data.solve_risk_total ? this.props.card_data.solve_risk_total : 0
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: _card2.default["half-circle--left"], style: this.get_left_style() }),
                    _react2.default.createElement('div', { className: _card2.default["half-circle--right"], style: this.get_right_style() })
                ),
                _react2.default.createElement(
                    'p',
                    { className: _card2.default["text--center"] },
                    '\u6D88\u9664\u9690\u60A3\u6570',
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: _card2.default["link"], to: "/hidden/list", state: { status: 2 } },
                        this.props.card_data.n_solve_risk_total ? parseInt(this.props.card_data.n_solve_risk_total) : 0
                    ),
                    '\u5904'
                )
            );
        }
    }]);

    return YHCard;
}(_react.Component);

/**
 * 1.投保企业->点击数字进入地图分布
 * 2.保费->点击数字进入保单列表
 */


var BXCard = exports.BXCard = function (_Component4) {
    _inherits(BXCard, _Component4);

    function BXCard() {
        _classCallCheck(this, BXCard);

        return _possibleConstructorReturn(this, (BXCard.__proto__ || Object.getPrototypeOf(BXCard)).apply(this, arguments));
    }

    _createClass(BXCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Card,
                { name: "保险概况", icon: "BX" },
                _react2.default.createElement(
                    'ol',
                    { className: _card2.default["dangerpage-list-mainone"] },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { src: require('../img/icon--map.png'), alt: '' }),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { className: _card2.default["number--blue"], to: "/map/company" },
                                this.props.IBPRIlist.insure_total || 0
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _card2.default["dangerpage-p-bottom"] },
                            '\u6295\u4FDD\u4F01\u4E1A(\u5BB6)'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { src: require('../img/money.png'), alt: '' }),
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { className: _card2.default["number"], to: "/insureCompany/list" },
                                this.props.IBPRIlist.insurance_money_total ? parseFloat(this.props.IBPRIlist.insurance_money_total / 10000).toFixed(2) : 0
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _card2.default["dangerpage-p-bottom"] },
                            '\u4FDD\u8D39(\u4E07\u5143)'
                        )
                    )
                )
            );
        }
    }]);

    return BXCard;
}(_react.Component);