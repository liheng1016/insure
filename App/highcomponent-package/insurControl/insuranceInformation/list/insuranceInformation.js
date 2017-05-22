"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TabFoot = exports.InsuranceTabFoot = exports.InsuranceTabTable = exports.InsuranceTabSearch = exports.InsuranceTabNav = exports.TabTable = exports.TabSearch = exports.HasDoneInsurComponent = exports.HasNotDoneInsurComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _insuranceInformation = require("./insuranceInformation.css");

var _insuranceInformation2 = _interopRequireDefault(_insuranceInformation);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _pagination = require("@stararc-component/pagination");

var _pagination2 = _interopRequireDefault(_pagination);

var _datePicker = require("@stararc-insurance/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _action = require("../../model/acceptInsur/action");

var _action2 = _interopRequireDefault(_action);

var _helpTools = require("@stararc-insurance/help-tools");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 主体
 */
var InsuranceInformation = function (_Component) {
	_inherits(InsuranceInformation, _Component);

	function InsuranceInformation(props) {
		_classCallCheck(this, InsuranceInformation);

		var _this = _possibleConstructorReturn(this, (InsuranceInformation.__proto__ || Object.getPrototypeOf(InsuranceInformation)).call(this, props));

		_this.state = {
			hasDone: false
		};
		return _this;
	}

	_createClass(InsuranceInformation, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["InsuranceMain"] },
				this.state.hasDone ? _react2.default.createElement(HasDoneInsurComponent, _extends({}, this.props, { clickHandle: function clickHandle(type) {
						return _this2.clickHandle(type);
					} })) : _react2.default.createElement(HasNotDoneInsurComponent, _extends({}, this.props, { clickHandle: function clickHandle(type) {
						return _this2.clickHandle(type);
					} }))
			);
		}
	}, {
		key: "clickHandle",
		value: function clickHandle(type) {
			var hasDone = type == "done" ? true : false;
			this.setState({
				hasDone: hasDone
			});
		}
	}]);

	return InsuranceInformation;
}(_react.Component);

/** * 待操作部分*/


var HasNotDoneInsurComponent = exports.HasNotDoneInsurComponent = function (_Component2) {
	_inherits(HasNotDoneInsurComponent, _Component2);

	function HasNotDoneInsurComponent() {
		_classCallCheck(this, HasNotDoneInsurComponent);

		return _possibleConstructorReturn(this, (HasNotDoneInsurComponent.__proto__ || Object.getPrototypeOf(HasNotDoneInsurComponent)).apply(this, arguments));
	}

	_createClass(HasNotDoneInsurComponent, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "100px", padding: "15px" } },
					_react2.default.createElement(InsuranceTabNav, { onClick: function onClick(type) {
							return _this4.props.clickHandle(type);
						}, hasDone: "not" }),
					_react2.default.createElement(InsuranceTabSearch, _extends({ ref: "q", onClick: function onClick(e) {
							return _this4.onClick();
						} }, this.props))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "100px" } },
					_react2.default.createElement(InsuranceTabTable, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(InsuranceTabFoot, _extends({}, this.props, { pageGoTo: function pageGoTo(page) {
							return _this4.pageGoTo(page);
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
				count: 25,
				page: page,
				flag: "not", //未操作
				status: "1"
			});
		}
	}, {
		key: "getList",
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var get_list = this.props.get_list;

			get_list(params);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return HasNotDoneInsurComponent;
}(_react.Component);

/** * 已操作部分*/


var HasDoneInsurComponent = exports.HasDoneInsurComponent = function (_Component3) {
	_inherits(HasDoneInsurComponent, _Component3);

	function HasDoneInsurComponent() {
		_classCallCheck(this, HasDoneInsurComponent);

		return _possibleConstructorReturn(this, (HasDoneInsurComponent.__proto__ || Object.getPrototypeOf(HasDoneInsurComponent)).apply(this, arguments));
	}

	_createClass(HasDoneInsurComponent, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "100px", padding: "15px" } },
					_react2.default.createElement(InsuranceTabNav, { onClick: function onClick(type) {
							return _this6.props.clickHandle(type);
						}, hasDone: "done" }),
					_react2.default.createElement(TabSearch, _extends({ ref: "q", onClick: function onClick(e) {
							return _this6.onClick();
						} }, this.props))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "100px" } },
					_react2.default.createElement(TabTable, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(TabFoot, _extends({}, this.props, { pageGoTo: function pageGoTo(page) {
							return _this6.pageGoTo(page);
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
				page: page,
				status: search.status || '2,3',
				flag: "done" //已操作
			});
		}
	}, {
		key: "getList",
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var get_list = this.props.get_list;

			get_list(params);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return HasDoneInsurComponent;
}(_react.Component);

/*已操作搜索*/


var TabSearch = exports.TabSearch = function (_Component4) {
	_inherits(TabSearch, _Component4);

	function TabSearch(props) {
		_classCallCheck(this, TabSearch);

		var _this7 = _possibleConstructorReturn(this, (TabSearch.__proto__ || Object.getPrototypeOf(TabSearch)).call(this, props));

		_this7.state = {
			options: [{
				id: 2,
				name: "拒绝投保"
			}, {
				id: 3,
				name: "同意投保"
			}],
			defaultStatus: "",
			defaultSinceAt: "",
			defaultMaxAt: "",
			defaultQ: ""
		};
		return _this7;
	}

	_createClass(TabSearch, [{
		key: "render",
		value: function render() {
			var SelectStyle = {
				width: '100%',
				float: 'left'
			},
			    InputStyle = {
				width: '100%',
				float: 'left'
			},
			    ButtonStyle = {
				width: '60px',
				float: 'left'
			},
			    DateStyle = {
				width: '45%',
				float: 'left',
				height: '30px',
				marginTop: '10px',
				border: '1px solid #ccc',
				textAlign: 'center',
				color: '#666'
			};
			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["tab_search"] },
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["select"] },
					_react2.default.createElement(
						"span",
						null,
						"\u5BA1\u6838\u7ED3\u679C"
					),
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_select2.default, {
							ref: "status",
							styleCss: SelectStyle,
							defaultValue: this.state.defaultStatus,
							options: this.state.options })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["time-select"] },
					_react2.default.createElement(
						"span",
						{ className: _insuranceInformation2.default["time-select_name"] },
						"\u5BA1\u6838\u65F6\u95F4"
					),
					_react2.default.createElement(
						"div",
						{ className: _insuranceInformation2.default["time-select_content"] },
						_react2.default.createElement(_datePicker2.default, {
							ref: "approval_since_at",
							placeholder: "开始时间",
							defaultValue: this.state.defaultSinceAt,
							inputCss: DateStyle }),
						_react2.default.createElement(
							"span",
							{ className: _insuranceInformation2.default["separator"] },
							"~"
						),
						_react2.default.createElement(_datePicker2.default, {
							ref: "approval_max_at",
							placeholder: "结束时间",
							defaultValue: this.state.defaultMaxAt,
							inputCss: DateStyle })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["tab-Input"] },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_input2.default, { styleCss: InputStyle, ref: "q", defaultValue: this.state.defaultQ, placeholder: "\u4F01\u4E1A\u540D\u79F0\u5173\u952E\u5B57" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["tab-Button"] },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_button2.default, {
							onClick: this.props.onClick,
							styleCss: ButtonStyle,
							text: "搜索" })
					)
				)
			);
		}
	}, {
		key: "clearParams",
		value: function clearParams() {
			this.setState({
				defaultStatus: "",
				defaultSinceAt: "",
				defaultMaxAt: "",
				defaultQ: ""
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs;
			return {
				status: refs.status.getValue(),
				approval_since_at: refs.approval_since_at.getValue(),
				approval_max_at: refs.approval_max_at.getValue(),
				q: refs.q.getValue()
			};
		}
	}]);

	return TabSearch;
}(_react.Component);

/*已操作Table*/


var TabTable = exports.TabTable = function (_Component5) {
	_inherits(TabTable, _Component5);

	function TabTable() {
		_classCallCheck(this, TabTable);

		return _possibleConstructorReturn(this, (TabTable.__proto__ || Object.getPrototypeOf(TabTable)).apply(this, arguments));
	}

	_createClass(TabTable, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["tab_Table"] },
				_react2.default.createElement(
					"table",
					{ className: _insuranceInformation2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _insuranceInformation2.default["table_title"] },
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
								"\u5BA1\u6838\u7ED3\u679C"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u5BA1\u6838\u4EBA"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u5BA1\u6838\u65F6\u95F4"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.getTrContent()
					)
				)
			);
		}
	}, {
		key: "getTrContent",
		value: function getTrContent() {
			var _this9 = this;

			var _props$doneList = this.props.doneList,
			    doneList = _props$doneList === undefined ? [] : _props$doneList;

			var statu = {
				2: "拒绝投保",
				3: "同意投保"
			};

			return doneList.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _insuranceInformation2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this9.go_to(l.effect_insuce_id);
						} },
					_react2.default.createElement(
						"td",
						{ title: l.effect_insuce_name },
						l.effect_insuce_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.effect_grid_name },
						l.effect_grid_name
					),
					_react2.default.createElement(
						"td",
						{ title: statu[l.status] },
						statu[l.status]
					),
					_react2.default.createElement(
						"td",
						{ title: l.approval_user_name },
						l.approval_user_name
					),
					_react2.default.createElement(
						"td",
						{ title: (0, _helpTools.getFormatData)(l.apply_at) + " " + (0, _helpTools.getHoursMinutes)(l.apply_at) },
						(0, _helpTools.getFormatData)(l.apply_at) + " " + (0, _helpTools.getHoursMinutes)(l.apply_at)
					)
				);
			});
		}
	}, {
		key: "go_to",
		value: function go_to(company_id) {
			this.context.router.push('/insuranceInformation/detail/' + company_id);
		}
	}]);

	return TabTable;
}(_react.Component);

;

/** * tab标题切换*/

var InsuranceTabNav = exports.InsuranceTabNav = function (_Component6) {
	_inherits(InsuranceTabNav, _Component6);

	function InsuranceTabNav(props) {
		_classCallCheck(this, InsuranceTabNav);

		var _this10 = _possibleConstructorReturn(this, (InsuranceTabNav.__proto__ || Object.getPrototypeOf(InsuranceTabNav)).call(this, props));

		_this10.state = {
			hasDone: true
		};
		return _this10;
	}

	_createClass(InsuranceTabNav, [{
		key: "render",
		value: function render() {
			var _this11 = this;

			return _react2.default.createElement(
				"ul",
				{ className: _insuranceInformation2.default["tab_nav"] },
				_react2.default.createElement(
					"li",
					{ className: this.props.hasDone == "not" ? _insuranceInformation2.default["tab_nav-active"] : '',
						onClick: function onClick(e) {
							return _this11.props.onClick('not');
						} },
					"\u5F85\u64CD\u4F5C"
				),
				_react2.default.createElement(
					"li",
					{ className: this.props.hasDone == "done" ? _insuranceInformation2.default["tab_nav-active"] : '',
						onClick: function onClick(e) {
							return _this11.props.onClick('done');
						} },
					"\u5DF2\u64CD\u4F5C"
				)
			);
		}
	}, {
		key: "clickHandle",
		value: function clickHandle(value) {
			var onClick = this.props.onClick;

			this.setState({
				hasDone: value == "not"
			}, function () {
				onClick && onClick(value);
			});
		}
	}]);

	return InsuranceTabNav;
}(_react.Component);

/**
 * 待操作search搜索*/


var InsuranceTabSearch = exports.InsuranceTabSearch = function (_Component7) {
	_inherits(InsuranceTabSearch, _Component7);

	function InsuranceTabSearch() {
		_classCallCheck(this, InsuranceTabSearch);

		return _possibleConstructorReturn(this, (InsuranceTabSearch.__proto__ || Object.getPrototypeOf(InsuranceTabSearch)).apply(this, arguments));
	}

	_createClass(InsuranceTabSearch, [{
		key: "render",
		value: function render() {
			var SelectStyle = {
				width: '100%',
				float: 'left'
			},
			    InputStyle = {
				width: '100%',
				float: 'left'
			},
			    ButtonStyle = {
				width: '60px',
				float: 'left'
			},
			    DateStyle = {
				width: '45%',
				float: 'left',
				height: '30px',
				marginTop: '10px',
				border: '1px solid #ccc',
				textAlign: 'center',
				color: '#666'
			};

			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["tab_search"] },
				_react2.default.createElement("div", { className: _insuranceInformation2.default["select"] }),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["time-select"] },
					_react2.default.createElement(
						"span",
						{ className: _insuranceInformation2.default["time-select_name"] },
						"\u7533\u8BF7\u65F6\u95F4"
					),
					_react2.default.createElement(
						"div",
						{ className: _insuranceInformation2.default["time-select_content"] },
						_react2.default.createElement(_datePicker2.default, { ref: "apply_since_at", placeholder: "开始时间", inputCss: DateStyle }),
						_react2.default.createElement(
							"span",
							{ className: _insuranceInformation2.default["separator"] },
							"~"
						),
						_react2.default.createElement(_datePicker2.default, { ref: "apply_max_at", placeholder: "结束时间", inputCss: DateStyle })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["tab-Input"] },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_input2.default, { ref: "q", styleCss: InputStyle, placeholder: "\u4F01\u4E1A\u540D\u79F0\u5173\u952E\u5B57" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _insuranceInformation2.default["tab-Button"] },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(_button2.default, {
							onClick: this.props.onClick,
							styleCss: ButtonStyle,
							text: "搜索" })
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs;
			return {
				q: refs.q.getValue(),
				apply_since_at: refs.apply_since_at.getValue(),
				apply_max_at: refs.apply_max_at.getValue()
			};
		}
	}]);

	return InsuranceTabSearch;
}(_react.Component);

/**
 * 待操作部分Table内容*/


var InsuranceTabTable = exports.InsuranceTabTable = function (_Component8) {
	_inherits(InsuranceTabTable, _Component8);

	function InsuranceTabTable() {
		_classCallCheck(this, InsuranceTabTable);

		return _possibleConstructorReturn(this, (InsuranceTabTable.__proto__ || Object.getPrototypeOf(InsuranceTabTable)).apply(this, arguments));
	}

	_createClass(InsuranceTabTable, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["tab_Table"] },
				_react2.default.createElement(
					"table",
					{ className: _insuranceInformation2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _insuranceInformation2.default["table_title"] },
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
								"\u7533\u8BF7\u65F6\u95F4"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u8131\u4FDD\u65F6\u95F4"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.getTrContent()
					)
				)
			);
		}
	}, {
		key: "getTrContent",
		value: function getTrContent() {
			var _this14 = this;

			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _insuranceInformation2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this14.go_to(l.effect_insuce_id);
						} },
					_react2.default.createElement(
						"td",
						{ title: l.effect_insuce_name },
						l.effect_insuce_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.effect_grid_name },
						l.effect_grid_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.type_name },
						l.type_name
					),
					_react2.default.createElement(
						"td",
						{ title: (0, _helpTools.getFormatData)(l.apply_at) + " " + (0, _helpTools.getHoursMinutes)(l.apply_at) },
						(0, _helpTools.getFormatData)(l.apply_at) + " " + (0, _helpTools.getHoursMinutes)(l.apply_at)
					),
					_react2.default.createElement(
						"td",
						{ title: l.done_at ? (0, _helpTools.getFormatData)(l.done_at) + " " + (0, _helpTools.getHoursMinutes)(l.done_at) : "" },
						l.done_at ? (0, _helpTools.getFormatData)(l.done_at) + " " + (0, _helpTools.getHoursMinutes)(l.done_at) : ""
					)
				);
			});
		}
	}, {
		key: "go_to",
		value: function go_to(company_id) {
			this.context.router.push('/insuranceInformation/detail/' + company_id);
		}
	}]);

	return InsuranceTabTable;
}(_react.Component);

;

/** * 未操作footer*/

var InsuranceTabFoot = exports.InsuranceTabFoot = function (_Component9) {
	_inherits(InsuranceTabFoot, _Component9);

	function InsuranceTabFoot() {
		_classCallCheck(this, InsuranceTabFoot);

		return _possibleConstructorReturn(this, (InsuranceTabFoot.__proto__ || Object.getPrototypeOf(InsuranceTabFoot)).apply(this, arguments));
	}

	_createClass(InsuranceTabFoot, [{
		key: "render",
		value: function render() {
			var _this16 = this;

			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["pagination"] },
				_react2.default.createElement(_pagination2.default, {
					currentPage: this.props.condition.page,
					totalPage: this.props.condition.totalPage,
					pageGoTo: function pageGoTo(page) {
						return _this16.props.pageGoTo(page);
					} })
			);
		}
	}]);

	return InsuranceTabFoot;
}(_react.Component);

/** * 已操作footer*/


var TabFoot = exports.TabFoot = function (_Component10) {
	_inherits(TabFoot, _Component10);

	function TabFoot() {
		_classCallCheck(this, TabFoot);

		return _possibleConstructorReturn(this, (TabFoot.__proto__ || Object.getPrototypeOf(TabFoot)).apply(this, arguments));
	}

	_createClass(TabFoot, [{
		key: "render",
		value: function render() {
			var _this18 = this;

			return _react2.default.createElement(
				"div",
				{ className: _insuranceInformation2.default["pagination"] },
				_react2.default.createElement(_pagination2.default, {
					currentPage: this.props.doneCondition.page,
					totalPage: this.props.doneCondition.totalPage,
					pageGoTo: function pageGoTo(page) {
						return _this18.props.pageGoTo(page);
					} })
			);
		}
	}]);

	return TabFoot;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		lists: state.acceptInsurReducer.List,
		condition: state.acceptInsurReducer.condition,
		doneList: state.acceptInsurReducer.doneList,
		doneCondition: state.acceptInsurReducer.doneCondition
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取投保申请
		get_list: function get_list(obj) {
			dispatch(_action2.default.list(obj));
		}
	};
};

InsuranceTabTable.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};
TabTable.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceInformation);