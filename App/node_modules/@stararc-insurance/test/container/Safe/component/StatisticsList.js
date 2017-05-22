'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RenkingList = exports.CompanyTypeList = exports.IBPRIList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _StatisticsList = require('./StatisticsList.css');

var _StatisticsList2 = _interopRequireDefault(_StatisticsList);

var _SafeChart = require('./SafeChart.js');

var _SafeChart2 = _interopRequireDefault(_SafeChart);

var _function = require('../../../helper/function');

var _datePicker = require('@stararc-insurance/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _gridlayout = require('@stararc-component/gridlayout');

var _gridlayout2 = _interopRequireDefault(_gridlayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 投保企业 保费收入  排查风险
 */
var IBPRIList = exports.IBPRIList = function (_Component) {
    _inherits(IBPRIList, _Component);

    function IBPRIList() {
        _classCallCheck(this, IBPRIList);

        return _possibleConstructorReturn(this, (IBPRIList.__proto__ || Object.getPrototypeOf(IBPRIList)).apply(this, arguments));
    }

    _createClass(IBPRIList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["ibpri_content"] },
                _react2.default.createElement(Company, this.props),
                _react2.default.createElement(Income, this.props),
                _react2.default.createElement(Risk, this.props)
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getIBPRI = this.props.getIBPRI;

            getIBPRI && getIBPRI();
        }
    }]);

    return IBPRIList;
}(_react.Component);

/**
 * 投保企业
 */


var Company = function (_Component2) {
    _inherits(Company, _Component2);

    function Company() {
        _classCallCheck(this, Company);

        return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
    }

    _createClass(Company, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props$IBPRIlist = this.props.IBPRIlist,
                IBPRIlist = _props$IBPRIlist === undefined ? [] : _props$IBPRIlist;

            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["company"] },
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["company_title"] },
                    '\u6295\u4FDD\u4F01\u4E1A ',
                    _react2.default.createElement('i', { className: _StatisticsList2.default["icon"] }),
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["content"] },
                    _react2.default.createElement(
                        'span',
                        { className: _StatisticsList2.default["reveal"] },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('span', { className: _StatisticsList2.default["reveal_tips"], name: IBPRIlist.insure_total || 'nothing', 'data-tips': IBPRIlist.insure_total }),
                            IBPRIlist.insure_total || 0
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["unit"] },
                            '\u5BB6'
                        )
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["bottom"], onClick: function onClick(e) {
                            return _this3.handeClick(1);
                        } },
                    '\u672C\u6708\u65B0\u589E',
                    IBPRIlist.curr_month_total || 0,
                    '\u5BB6'
                )
            );
        }
    }, {
        key: 'handeClick',
        value: function handeClick(type) {
            this.context.router.push('/safe/safeTrends/' + type);
        }
    }]);

    return Company;
}(_react.Component);

Company.contextTypes = {
    router: _react2.default.PropTypes.object.isRequired
};

/**
 * 保费总额
 */

var Income = function (_Component3) {
    _inherits(Income, _Component3);

    function Income() {
        _classCallCheck(this, Income);

        return _possibleConstructorReturn(this, (Income.__proto__ || Object.getPrototypeOf(Income)).apply(this, arguments));
    }

    _createClass(Income, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props$IBPRIlist2 = this.props.IBPRIlist,
                IBPRIlist = _props$IBPRIlist2 === undefined ? [] : _props$IBPRIlist2;

            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["income"] },
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["company_title"] },
                    '\u4FDD\u8D39\u603B\u989D',
                    _react2.default.createElement('i', { className: _StatisticsList2.default["icon"] }),
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["content"] },
                    _react2.default.createElement(
                        'span',
                        { className: _StatisticsList2.default["reveal"] },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('span', { className: _StatisticsList2.default["reveal_tips"], name: IBPRIlist.insure_total || 'nothing', 'data-tips': IBPRIlist.insurance_money_total }),
                            IBPRIlist.insurance_money_total || 0
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["unit"] },
                            '\u4E07\u5143'
                        )
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["bottom"], onClick: function onClick(e) {
                            return _this5.handeClick(2);
                        } },
                    '\u672C\u6708\u65B0\u589E',
                    IBPRIlist.curr_month_money_total || 0,
                    '\u4E07'
                )
            );
        }
    }, {
        key: 'handeClick',
        value: function handeClick(type) {
            this.context.router.push('/safe/safeTrends/' + type);
        }
    }]);

    return Income;
}(_react.Component);

Income.contextTypes = {
    router: _react2.default.PropTypes.object.isRequired
};

/**
 * 排查风险
 */

var Risk = function (_Component4) {
    _inherits(Risk, _Component4);

    function Risk(props) {
        _classCallCheck(this, Risk);

        var _this6 = _possibleConstructorReturn(this, (Risk.__proto__ || Object.getPrototypeOf(Risk)).call(this, props));

        _this6.state = {
            Y: false,
            N: false,
            since_at: (0, _function.getFormatDay)(new Date(), 'm')
        };
        return _this6;
    }

    _createClass(Risk, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props$riskList = this.props.riskList,
                riskList = _props$riskList === undefined ? [] : _props$riskList;

            var total = parseInt(riskList.y_solve_risk_total) + parseInt(riskList.n_solve_risk_total);
            var y_percentage = Math.round(riskList.y_solve_risk_total / total * 10000) / 100.00;
            var className = {
                Y: { contexClass: 'risk_progress_bar_tips', icon: 'risk_progress_bar_tips-icon', text: '已解决' + riskList.y_solve_risk_total + '处' },
                N: { contexClass: 'risk_progress_tips', icon: 'risk_progress_tips-icon', text: '未解决' + riskList.n_solve_risk_total + '处' }
            };
            var pro = document.getElementById("progressID");
            if (pro) {
                document.getElementById("progressID").style = 'width:' + y_percentage + '%';
            }
            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["risk"] },
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["company_title"] },
                    _react2.default.createElement(
                        _gridlayout2.default,
                        { width: '7' },
                        '\u4FDD\u9669\u6392\u67E5\u98CE\u9669'
                    ),
                    _react2.default.createElement(
                        _gridlayout2.default,
                        { width: '5' },
                        _react2.default.createElement(_datePicker2.default, { ref: 'since_at', onChange: function onChange(e) {
                                return _this7.submitFom(e);
                            }, conf: { type: 'month' }, defaultValue: this.state.since_at })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["risk_investigation"] },
                    _react2.default.createElement(
                        'div',
                        { className: _StatisticsList2.default["investigation_number"] },
                        _react2.default.createElement(
                            'div',
                            { className: _StatisticsList2.default["people"] },
                            _react2.default.createElement(
                                'span',
                                { className: _StatisticsList2.default["people_number"] },
                                riskList.user_total || 0
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["investigation_bottom"] },
                            '\u51FA\u52A8\u4EBA\u6B21'
                        )
                    ),
                    _react2.default.createElement('span', { className: _StatisticsList2.default["investigation_line"] }),
                    _react2.default.createElement(
                        'div',
                        { className: _StatisticsList2.default["investigation_company"] },
                        _react2.default.createElement(
                            'div',
                            { className: _StatisticsList2.default["investigation_company_show"] },
                            _react2.default.createElement(
                                'span',
                                { className: _StatisticsList2.default["investigation_company_show_number"] },
                                riskList.task_total || 0
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["investigation_bottom"] },
                            '\u6392\u67E5\u4F01\u4E1A'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["content"] },
                    _react2.default.createElement(
                        'span',
                        { className: _StatisticsList2.default["risk_solved"], onClick: function onClick(e) {
                                return _this7.handeClick(3);
                            } },
                        '\u5DF2\u89E3\u51B3',
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["number"] },
                            riskList.y_solve_risk_total || 0
                        ),
                        '\u5904'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _StatisticsList2.default["risk_progress_bar"], onMouseOver: function onMouseOver(e) {
                                return _this7.handelNOver(e, riskList.n_solve_risk_total);
                            }, onMouseOut: function onMouseOut(e) {
                                return _this7.handelNOut(e);
                            } },
                        this.state.N ? _react2.default.createElement(RiskProgress, { text: className.N, className: className.N }) : '',
                        _react2.default.createElement(
                            'div',
                            { className: _StatisticsList2.default["percentage"], id: 'progressID', onMouseOver: function onMouseOver(e) {
                                    return _this7.handelYOver(e);
                                }, onMouseOut: function onMouseOut(e) {
                                    return _this7.handelYOut(e);
                                } },
                            this.state.Y ? _react2.default.createElement(RiskProgress, { text: className.Y, className: className.Y }) : ''
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: _StatisticsList2.default["risk_unsolved"], onClick: function onClick(e) {
                                return _this7.handeClick(3);
                            } },
                        '\u672A\u89E3\u51B3',
                        _react2.default.createElement(
                            'span',
                            { className: _StatisticsList2.default["number"] },
                            riskList.n_solve_risk_total || 0
                        ),
                        '\u5904'
                    )
                )
            );
        }
    }, {
        key: 'handelNOver',
        value: function handelNOver(e, number) {
            e.stopPropagation();
            this.setState({
                N: number != 0 ? true : false,
                Y: false
            });
        }
    }, {
        key: 'handelYOver',
        value: function handelYOver(e) {
            e.stopPropagation();
            this.setState({
                Y: true,
                N: false
            });
        }
    }, {
        key: 'handelNOut',
        value: function handelNOut(e) {
            e.stopPropagation();
            this.setState({
                N: false
            });
        }
    }, {
        key: 'handelYOut',
        value: function handelYOut(e) {
            e.stopPropagation();
            this.setState({
                Y: false
            });
        }
    }, {
        key: 'handeClick',
        value: function handeClick(type) {
            this.context.router.push('/safe/safeTrends/' + type);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            return {
                since_at: (0, _function.getFirstAndLastDay)(this.refs.since_at.state.value).since_at ? (0, _function.getFirstAndLastDay)(this.refs.since_at.state.value).since_at : (0, _function.getFormatDay)(new Date(), 'f'),
                max_at: (0, _function.getFirstAndLastDay)(this.refs.since_at.state.value).max_at ? (0, _function.getFirstAndLastDay)(this.refs.since_at.state.value).max_at : (0, _function.getFormatDay)(new Date(), 'l')
            };
        }
    }, {
        key: 'submitFom',
        value: function submitFom() {
            var getRisk = this.props.getRisk;

            getRisk && getRisk(this.getOptions());
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getRisk = this.props.getRisk;

            getRisk && getRisk(this.getOptions());
        }
    }]);

    return Risk;
}(_react.Component);

var RiskProgress = function (_Component5) {
    _inherits(RiskProgress, _Component5);

    function RiskProgress() {
        _classCallCheck(this, RiskProgress);

        return _possibleConstructorReturn(this, (RiskProgress.__proto__ || Object.getPrototypeOf(RiskProgress)).apply(this, arguments));
    }

    _createClass(RiskProgress, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default[this.props.className.contexClass] },
                this.props.className.text,
                _react2.default.createElement('div', { className: _StatisticsList2.default[this.props.className.icon] })
            );
        }
    }]);

    return RiskProgress;
}(_react.Component);

Risk.contextTypes = {
    router: _react2.default.PropTypes.object.isRequired
};

/**
 *  投保企业行业分布
 */

var CompanyTypeList = exports.CompanyTypeList = function (_Component6) {
    _inherits(CompanyTypeList, _Component6);

    function CompanyTypeList() {
        _classCallCheck(this, CompanyTypeList);

        return _possibleConstructorReturn(this, (CompanyTypeList.__proto__ || Object.getPrototypeOf(CompanyTypeList)).apply(this, arguments));
    }

    _createClass(CompanyTypeList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["company_type_content"] },
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["type_content_title"] },
                    _react2.default.createElement(
                        'span',
                        { className: _StatisticsList2.default["title_content"] },
                        _react2.default.createElement('i', { className: _StatisticsList2.default["icon"] }),
                        '\u6295\u4FDD\u4F01\u4E1A\u884C\u4E1A\u5206\u5E03'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _StatisticsList2.default["type_content"] },
                    _react2.default.createElement(_SafeChart2.default, { isTurnPage: false, title: '\u6295\u4FDD\u4F01\u4E1A\u884C\u4E1A\u5206\u5E03', list: this.getList() })
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getCompanyType = this.props.getCompanyType;

            getCompanyType && getCompanyType();
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _props$companyTypeLis = this.props.companyTypeList,
                companyTypeList = _props$companyTypeLis === undefined ? {} : _props$companyTypeLis;

            return companyTypeList.length == 0 ? [] : this.dataFiltering(companyTypeList);
        }
    }, {
        key: 'dataFiltering',
        value: function dataFiltering(obj) {
            var data = ['KS', 'WXHXP', 'YHBZ', 'JTYS', 'JZSG', 'MYBZWP', 'JSYL', 'YYSC', 'QT'],
                dataObj = { categories: [], data: [] };
            data.map(function (item, index) {
                dataObj.categories.push(obj[item].name);
                dataObj.data.push(parseInt(obj[item].total));
            });
            return dataObj;
        }
    }]);

    return CompanyTypeList;
}(_react.Component);

/**
 * 企业积分排行榜
 */


var RenkingList = exports.RenkingList = function (_Component7) {
    _inherits(RenkingList, _Component7);

    function RenkingList(props) {
        _classCallCheck(this, RenkingList);

        return _possibleConstructorReturn(this, (RenkingList.__proto__ || Object.getPrototypeOf(RenkingList)).call(this, props));
    }

    _createClass(RenkingList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _StatisticsList2.default["ranking"] },
                _react2.default.createElement(
                    'span',
                    { className: _StatisticsList2.default["ranking_title"] },
                    _react2.default.createElement('i', { className: _StatisticsList2.default["icon"] }),
                    '\u4F01\u4E1A\u79EF\u5206\u6392\u884C\u699C'
                ),
                _react2.default.createElement(RenkingCompany, this.props)
            );
        }
    }]);

    return RenkingList;
}(_react.Component);
/**
 * 排行榜列表
 */


var RenkingCompany = function (_Component8) {
    _inherits(RenkingCompany, _Component8);

    function RenkingCompany() {
        _classCallCheck(this, RenkingCompany);

        return _possibleConstructorReturn(this, (RenkingCompany.__proto__ || Object.getPrototypeOf(RenkingCompany)).apply(this, arguments));
    }

    _createClass(RenkingCompany, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { className: _StatisticsList2.default["renking_content"] },
                this.getDataList().length > 0 ? this.getDataList() : _react2.default.createElement(
                    'li',
                    { className: _StatisticsList2.default["not_renking__tips"] },
                    '\u6682\u65E0\u4F01\u4E1A\u79EF\u5206\u6392\u884C\uFF01'
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getCenking = this.props.getCenking;

            getCenking && getCenking();
        }
    }, {
        key: 'getDataList',
        value: function getDataList() {
            var renkingList = this.props.renkingList || [];
            var renkingString = renkingList.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { className: _StatisticsList2.default["renking__tips"], name: item.company_name || 'nothing', 'data-tips': item.company_name, key: index },
                    index + 1,
                    (0, _function.limitLen)(item.company_name, 8),
                    _react2.default.createElement(
                        'span',
                        null,
                        item.score_num
                    )
                );
            });
            return renkingString;
        }
    }]);

    return RenkingCompany;
}(_react.Component);