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

var _claimmanagement = require("./claimmanagement.css");

var _claimmanagement2 = _interopRequireDefault(_claimmanagement);

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

var _action = require("../model/claim/action");

var _action2 = _interopRequireDefault(_action);

var _helpTools = require("@stararc-insurance/help-tools");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**主体**/
var SettlementWarp = function (_Component) {
	_inherits(SettlementWarp, _Component);

	function SettlementWarp() {
		_classCallCheck(this, SettlementWarp);

		return _possibleConstructorReturn(this, (SettlementWarp.__proto__ || Object.getPrototypeOf(SettlementWarp)).apply(this, arguments));
	}

	_createClass(SettlementWarp, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _claimmanagement2.default["settlementwarp"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "50px" } },
					_react2.default.createElement(SettlementHeader, _extends({
						ref: 'q'
					}, this.props, {
						onClick: function onClick(e) {
							return _this2.onClick();
						} }))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "50px" } },
					_react2.default.createElement(TableContent, this.props)
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

	return SettlementWarp;
}(_react.Component);

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
			var _this4 = this;

			var SelectStyle = {
				width: '100%'
			};

			var ButtonStyle = {
				width: '30%',
				background: '#3fafef',
				float: 'left',
				marginTop: '10px'
			};

			var FoundStyle = {
				width: '60px',
				background: 'orange',
				float: 'right',
				marginTop: '10px'
			};

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

			var ResettStyle = {
				width: '60px',
				background: '#3fafef',
				float: 'left',
				marginTop: '10px'
			};

			var InputStyle = {
				width: '100%',
				marginTop: '10px'
			};

			var options = [{
				id: '1',
				name: '报案'
			}, {
				id: '2',
				name: '定损'
			}, {
				id: '3',
				name: '结案'
			}, {
				id: '4',
				name: '销案'
			}];

			return _react2.default.createElement(
				"div",
				{ className: _claimmanagement2.default["settlement-header"] },
				_react2.default.createElement(
					"div",
					{ className: _claimmanagement2.default["settlement-header--select"] },
					_react2.default.createElement(
						"span",
						{ className: _claimmanagement2.default["select-name"] },
						"\u62A5\u6848\u72B6\u6001"
					),
					_react2.default.createElement(
						"span",
						{ className: _claimmanagement2.default["select-content"] },
						_react2.default.createElement(_select2.default, { styleCss: SelectStyle, ref: 'status', options: options })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _claimmanagement2.default["settlement-header--time"] },
					_react2.default.createElement(
						"span",
						{ className: _claimmanagement2.default["select-name"] },
						"\u62A5\u6848\u65F6\u95F4"
					),
					_react2.default.createElement(
						"span",
						{ className: _claimmanagement2.default["select-content--data"] },
						_react2.default.createElement(_datePicker2.default, { ref: 'since_at', inputCss: DateStyle, placeholder: "\u5F00\u59CB\u65F6\u95F4" }),
						_react2.default.createElement(
							"span",
							{ className: _claimmanagement2.default["separator"] },
							"~"
						),
						_react2.default.createElement(_datePicker2.default, { ref: 'max_at', inputCss: DateStyle, placeholder: "\u7ED3\u675F\u65F6\u95F4" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _claimmanagement2.default["settlement-header--input"] },
					_react2.default.createElement(
						"span",
						{ className: _claimmanagement2.default["input-content"] },
						_react2.default.createElement(_input2.default, { ref: 'q', placeholder: "报案号/被保人", styleCss: InputStyle })
					),
					_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: '搜索', onClick: this.props.onClick })
				),
				_react2.default.createElement(
					"div",
					{ className: _claimmanagement2.default["settlement-header--button"] },
					_react2.default.createElement(_button2.default, { styleCss: FoundStyle, text: '创建', onClick: function onClick(e) {
							return _this4.go_to_add();
						} })
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
	}, {
		key: "go_to_add",
		value: function go_to_add() {
			this.context.router.push("/claimManagement/add");
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
			return _react2.default.createElement(
				"div",
				{ className: _claimmanagement2.default["table--list"] },
				_react2.default.createElement(
					"table",
					{ className: _claimmanagement2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _claimmanagement2.default["table_title"] },
							_react2.default.createElement(
								"th",
								null,
								"\u62A5\u6848\u53F7"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u88AB\u4FDD\u9669\u4EBA"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6295\u4FDD\u4EA7\u54C1"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6295\u4FDD\u5355\u53F7"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u62A5\u6848\u65F6\u95F4"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6848\u4EF6\u72B6\u6001"
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
			var _this6 = this;

			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;


			var status = {
				1: '报案',
				2: '定损',
				3: '结案',
				4: '销案'
			};

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _claimmanagement2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this6.goto_Dateil(l);
						} },
					_react2.default.createElement(
						"td",
						{ title: l.compensate_number },
						l.compensate_number
					),
					_react2.default.createElement(
						"td",
						{ title: l.company_name },
						l.company_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.insurance_type },
						l.insurance_type
					),
					_react2.default.createElement(
						"td",
						{ title: l.apply_number },
						l.apply_number
					),
					_react2.default.createElement(
						"td",
						{ title: (0, _helpTools.getFormatData)(l.report_at) },
						(0, _helpTools.getFormatData)(l.report_at)
					),
					_react2.default.createElement(
						"td",
						{ title: status[l.status] },
						status[l.status]
					)
				);
			});
		}

		//点击跳转详情

	}, {
		key: "goto_Dateil",
		value: function goto_Dateil(l) {
			this.context.router.push("/claimManagement/detail/" + l.id);
		}
	}]);

	return TableContent;
}(_react.Component);

/*footer*/


var SettlementFooter = exports.SettlementFooter = function (_Component4) {
	_inherits(SettlementFooter, _Component4);

	function SettlementFooter() {
		_classCallCheck(this, SettlementFooter);

		return _possibleConstructorReturn(this, (SettlementFooter.__proto__ || Object.getPrototypeOf(SettlementFooter)).apply(this, arguments));
	}

	_createClass(SettlementFooter, [{
		key: "render",
		value: function render() {
			var _this8 = this;

			return _react2.default.createElement(
				"div",
				{ className: _claimmanagement2.default["pagination"] },
				_react2.default.createElement(_pagination2.default, {
					currentPage: this.props.condition.page,
					totalPage: this.props.condition.totalPage,
					pageGoTo: function pageGoTo(page) {
						return _this8.props.pageGoTo(page);
					} })
			);
		}
	}]);

	return SettlementFooter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		condition: state.claimReducer.condition,
		lists: state.claimReducer.List
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

SettlementHeader.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SettlementWarp);