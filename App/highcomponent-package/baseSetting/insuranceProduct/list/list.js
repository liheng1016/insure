"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SettlementFooter = exports.ManagementContent = exports.ManagementButton = exports.ManagementList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _list = require("./list.css");

var _list2 = _interopRequireDefault(_list);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _pagination = require("@stararc-component/pagination");

var _pagination2 = _interopRequireDefault(_pagination);

var _action = require("../../model/basesetting/action");

var _action2 = _interopRequireDefault(_action);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*保险产品管理主体*/
var ManagementList = exports.ManagementList = function (_Component) {
	_inherits(ManagementList, _Component);

	function ManagementList() {
		_classCallCheck(this, ManagementList);

		return _possibleConstructorReturn(this, (ManagementList.__proto__ || Object.getPrototypeOf(ManagementList)).apply(this, arguments));
	}

	_createClass(ManagementList, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "50px" } },
					_react2.default.createElement(ManagementButton, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "50px" } },
					_react2.default.createElement(ManagementContent, this.props)
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
		key: "pageGoTo",
		value: function pageGoTo(page) {
			var params = this.getOps(page);
			this.getList(params);
		}
	}, {
		key: "getOps",
		value: function getOps() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";

			return {
				count: 20,
				page: page
			};
		}
	}, {
		key: "getList",
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var product_list = this.props.product_list;

			product_list(params);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return ManagementList;
}(_react.Component);

/*顶部按钮*/


var ManagementButton = exports.ManagementButton = function (_Component2) {
	_inherits(ManagementButton, _Component2);

	function ManagementButton() {
		_classCallCheck(this, ManagementButton);

		return _possibleConstructorReturn(this, (ManagementButton.__proto__ || Object.getPrototypeOf(ManagementButton)).apply(this, arguments));
	}

	_createClass(ManagementButton, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			var ButtonStyle = { width: "60px", background: '#f9d865', color: 'white' };
			return _react2.default.createElement(
				"div",
				{ className: _list2.default["list_button"] },
				_react2.default.createElement(_button2.default, {
					onClick: function onClick(e) {
						return _this4.go_to_add();
					},
					styleCss: ButtonStyle,
					text: "新建" })
			);
		}
	}, {
		key: "go_to_add",
		value: function go_to_add() {
			this.context.router.push("/insuranceProduct/add");
		}
	}]);

	return ManagementButton;
}(_react.Component);

/*主体内容*/


var ManagementContent = exports.ManagementContent = function (_Component3) {
	_inherits(ManagementContent, _Component3);

	function ManagementContent() {
		_classCallCheck(this, ManagementContent);

		return _possibleConstructorReturn(this, (ManagementContent.__proto__ || Object.getPrototypeOf(ManagementContent)).apply(this, arguments));
	}

	_createClass(ManagementContent, [{
		key: "render",
		value: function render() {
			var lists = this.props.lists || [];

			return _react2.default.createElement(
				"div",
				{ className: _list2.default["table--list"] },
				_react2.default.createElement(
					"table",
					{ className: _list2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _list2.default["table_title"] },
							_react2.default.createElement(
								"th",
								null,
								"\u4FDD\u9669\u4EA7\u54C1\u540D\u79F0"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u4FDD\u9669\u7ECF\u7EAA\u516C\u53F8"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u627F\u4FDD\u516C\u53F8"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6388\u6743\u5730\u533A"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u72B6\u6001"
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
				"1": "正常",
				"2": "停售"
			};

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _list2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this6.go_to_detail(l);
						} },
					_react2.default.createElement(
						"td",
						{ title: l.name },
						l.name
					),
					_react2.default.createElement(
						"td",
						{ title: l.broker_name },
						l.broker_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.organ_name },
						l.organ_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.grid_names },
						l.grid_names
					),
					_react2.default.createElement(
						"td",
						{ title: status[l.status], style: { color: l.status == 2 ? "#f55d4f" : "black" } },
						status[l.status]
					)
				);
			});
		}
	}, {
		key: "go_to_detail",
		value: function go_to_detail(l) {
			this.context.router.push("/insuranceProduct/detail/" + l.insurance_product_id);
		}
	}]);

	return ManagementContent;
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
				{ className: _list2.default["pagination"] },
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
		condition: state.basesettingReducer.productCondition,
		lists: state.basesettingReducer.productList
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		product_list: function product_list(obj) {
			dispatch(_action2.default.product_list(obj));
		}
	};
};

ManagementContent.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

ManagementButton.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManagementList);