"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SettlementFooter = exports.TableContent = exports.SettlementHeader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _risksurvey = require("./risksurvey.css");

var _risksurvey2 = _interopRequireDefault(_risksurvey);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _datePicker = require("@stararc-insurance/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _pagination = require("@stararc-component/pagination");

var _pagination2 = _interopRequireDefault(_pagination);

var _action = require("../model/survey/action");

var _action2 = _interopRequireDefault(_action);

var _function = require("../../../helper/function");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 主体
 * 
 */
var RiskSurvey = function (_Component) {
	_inherits(RiskSurvey, _Component);

	function RiskSurvey(props) {
		_classCallCheck(this, RiskSurvey);

		var _this = _possibleConstructorReturn(this, (RiskSurvey.__proto__ || Object.getPrototypeOf(RiskSurvey)).call(this, props));

		_this.state = {
			list: [{
				number: '1234567',
				people: '小红',
				product: '手机',
				oddnumbers: '1234567',
				time: '2017-09-46',
				condition: '通过'
			}]
		};
		return _this;
	}

	_createClass(RiskSurvey, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _risksurvey2.default["settlementwarp"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "50px" } },
					_react2.default.createElement(SettlementHeader, _extends({ ref: 'q' }, this.props, { onClick: function onClick(e) {
							return _this2.onClick();
						} }))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "50px" } },
					_react2.default.createElement(TableContent, _extends({}, this.props, { table: this.state.list }))
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(SettlementFooter, _extends({}, this.props, {
						pageGoTo: function pageGoTo(page) {
							return _this2.pageGoTo(page);
						} }))
				)
			);
		}
	}, {
		key: "onClick",
		value: function onClick() {
			var params = this.getOps();

			this.getList(params);
		}
	}, {
		key: "pageGoTo",
		value: function pageGoTo(page) {
			var params = this.getOps(page);

			this.getList(params);
		}
	}, {
		key: "getOps",
		value: function getOps() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";

			var search = this.refs.q.getValue();

			console.log(search);
			return _extends({}, search, {
				count: 20,
				page: page
			});
		}
	}, {
		key: "getList",
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var getList = this.props.getList;


			getList(params);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return RiskSurvey;
}(_react.Component);

/**
 * 顶部
 */
/*顶部  select input*/


var SettlementHeader = exports.SettlementHeader = function (_Component2) {
	_inherits(SettlementHeader, _Component2);

	function SettlementHeader() {
		_classCallCheck(this, SettlementHeader);

		return _possibleConstructorReturn(this, (SettlementHeader.__proto__ || Object.getPrototypeOf(SettlementHeader)).apply(this, arguments));
	}

	_createClass(SettlementHeader, [{
		key: "render",
		value: function render() {
			var SelectStyle = { width: '100%' };
			var ButtonStyle = { width: '60px', background: 'orange', float: 'right', marginTop: '10px' };
			var FoundStyle = { width: '60px', background: 'orange', marginTop: '10px' };
			var DateStyle = {
				width: '45%',
				marginTop: '10px',
				height: '30px',
				border: '1px solid #ccc',
				textAlign: 'center',
				color: '#666',
				float: 'left',
				display: 'inline-block'
			};
			var InputStyle = { width: '100%', marginTop: '10px' };

			return _react2.default.createElement(
				"div",
				{ className: _risksurvey2.default["settlement-header"] },
				_react2.default.createElement(
					"div",
					{ className: _risksurvey2.default["select-address"] },
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-name"] },
						"\u6240\u5C5E\u5730\u533A"
					),
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-content"] },
						_react2.default.createElement(
							_select2.default,
							{ styleCss: SelectStyle },
							_react2.default.createElement(
								"option",
								null,
								"\u4F5B\u5C71"
							)
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _risksurvey2.default["settlement-header--select"] },
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-name"] },
						"\u4EFB\u52A1\u72B6\u6001"
					),
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-content"] },
						_react2.default.createElement(_select2.default, { styleCss: SelectStyle, ref: 'status' })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _risksurvey2.default["settlement-header--time"] },
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-name"] },
						"\u67E5\u52D8\u65F6\u95F4"
					),
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["select-content"] },
						_react2.default.createElement(_datePicker2.default, { ref: 'since_at', inputCss: DateStyle }),
						_react2.default.createElement(
							"span",
							{ className: _risksurvey2.default["separator"] },
							"~"
						),
						_react2.default.createElement(_datePicker2.default, { ref: 'max_at', inputCss: DateStyle })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _risksurvey2.default["settlement-header--input"] },
					_react2.default.createElement(
						"span",
						{ className: _risksurvey2.default["input-content"] },
						_react2.default.createElement(_input2.default, { ref: 'q', placeholder: "企业名称关键字", styleCss: InputStyle })
					),
					_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: '搜索' })
				),
				_react2.default.createElement(
					"div",
					{ className: _risksurvey2.default["settlement-header--button"] },
					_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: '重置' }),
					_react2.default.createElement(_button2.default, { styleCss: FoundStyle, text: '创建' })
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return {
				q: this.refs.q.getValue(),
				since_at: this.refs.since_at.getValue(),
				max_at: this.refs.max_at.getValue(),
				status: this.refs.status.getValue()
			};
		}
	}]);

	return SettlementHeader;
}(_react.Component);

/*table*/


var TableContent = exports.TableContent = function (_Component3) {
	_inherits(TableContent, _Component3);

	function TableContent() {
		_classCallCheck(this, TableContent);

		return _possibleConstructorReturn(this, (TableContent.__proto__ || Object.getPrototypeOf(TableContent)).apply(this, arguments));
	}

	_createClass(TableContent, [{
		key: "render",
		value: function render() {
			// let list  = this.props.table;
			// console.log(list,'所有数据')
			return _react2.default.createElement(
				"div",
				{ className: _risksurvey2.default["table--list"] },
				_react2.default.createElement(
					"table",
					{ className: _risksurvey2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _risksurvey2.default["table_title"] },
							_react2.default.createElement(
								"th",
								null,
								"\u4F01\u4E1A\u540D\u79F0"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6240\u5C5E\u5730\u533A"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u884C\u4E1A\u7C7B\u578B"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u4EFB\u52A1\u72B6\u6001"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u67E5\u52D8\u65F6\u95F4"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u53D1\u73B0\u98CE\u9669"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.getTableTr()
					)
				)
			);
		}
	}, {
		key: "getTableTr",
		value: function getTableTr() {
			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;

			console.log(lists, '风险数据');
			var status = {
				1: '待处理任务',
				3: '已完成',
				4: '限期整改',
				9: '处理中'

			};

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _risksurvey2.default["table_row"], key: key },
					_react2.default.createElement(
						"td",
						null,
						l.company_name
					),
					_react2.default.createElement(
						"td",
						null,
						l.grid_name
					),
					_react2.default.createElement(
						"td",
						null,
						l.type_name
					),
					_react2.default.createElement(
						"td",
						null,
						status[l.status]
					),
					_react2.default.createElement(
						"td",
						null,
						(0, _function.getFormatData)(l.changed_at)
					),
					_react2.default.createElement(
						"td",
						null,
						l.hidden_danger_total
					)
				);
			});
		}
	}]);

	return TableContent;
}(_react.Component);

/**
 * footer
 */


var SettlementFooter = exports.SettlementFooter = function (_Component4) {
	_inherits(SettlementFooter, _Component4);

	function SettlementFooter() {
		_classCallCheck(this, SettlementFooter);

		return _possibleConstructorReturn(this, (SettlementFooter.__proto__ || Object.getPrototypeOf(SettlementFooter)).apply(this, arguments));
	}

	_createClass(SettlementFooter, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			return _react2.default.createElement(
				"div",
				{ className: _risksurvey2.default["pagination"] },
				_react2.default.createElement(_pagination2.default, {
					currentPage: this.props.condition.page,
					totalPage: this.props.condition.totalPage,
					pageGoTo: function pageGoTo(page) {
						return _this6.props.pageGoTo(page);
					} })
			);
		}
	}]);

	return SettlementFooter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		condition: state.surveyReducer.condition,
		lists: state.surveyReducer.List
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getList: function getList(obj) {
			dispatch(_action2.default.list(obj));
		}

	};
};
TableContent.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RiskSurvey);