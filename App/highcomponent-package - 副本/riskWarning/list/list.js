'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Table = exports.SearchPie = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _layout = require('@stararc-insurance/layout');

var _gridlayout = require('@stararc-component/gridlayout');

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _select = require('@stararc-component/select');

var _select2 = _interopRequireDefault(_select);

var _pagination = require('@stararc-component/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _input = require('@stararc-component/input');

var _input2 = _interopRequireDefault(_input);

var _button = require('@stararc-component/button');

var _button2 = _interopRequireDefault(_button);

var _list = require('./list.css');

var _list2 = _interopRequireDefault(_list);

var _helpTools = require('@stararc-insurance/help-tools');

var _action = require('../model/riskwarning/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 风险警示
 */
var RiskWarning = function (_Component) {
	_inherits(RiskWarning, _Component);

	function RiskWarning() {
		_classCallCheck(this, RiskWarning);

		return _possibleConstructorReturn(this, (RiskWarning.__proto__ || Object.getPrototypeOf(RiskWarning)).apply(this, arguments));
	}

	_createClass(RiskWarning, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: "50px" } },
					_react2.default.createElement(SearchPie, _extends({}, this.props, { ref: 'q', onClick: function onClick(e) {
							return _this2.onClick();
						} }))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: "50px" } },
					_react2.default.createElement(Table, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(
						'div',
						{ className: _list2.default["pagination"] },
						_react2.default.createElement(_pagination2.default, {
							currentPage: this.props.condition.page,
							totalPage: this.props.condition.totalPage,
							pageGoTo: function pageGoTo(page) {
								return _this2.pageGoTo(page);
							} })
					)
				)
			);
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			var params = this.getOps();
			this.getList(params);
		}
	}, {
		key: 'pageGoTo',
		value: function pageGoTo(page) {
			var params = this.getOps(page);
			this.getList(params);
		}
	}, {
		key: 'getOps',
		value: function getOps() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";

			var search = this.refs.q.getValue();
			return _extends({}, search, {
				count: 20,
				page: page
			});
		}
	}, {
		key: 'getList',
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var getList = this.props.getList;

			getList(params);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return RiskWarning;
}(_react.Component);

var SearchPie = exports.SearchPie = function (_Component2) {
	_inherits(SearchPie, _Component2);

	function SearchPie(props) {
		_classCallCheck(this, SearchPie);

		var _this3 = _possibleConstructorReturn(this, (SearchPie.__proto__ || Object.getPrototypeOf(SearchPie)).call(this, props));

		_this3.state = {
			options: [{
				id: 1,
				name: "已读"
			}, {
				id: 2,
				name: "未读"
			}],
			buttonStyle: {
				background: "#f6a811",
				color: "white"
			}
		};
		return _this3;
	}

	_createClass(SearchPie, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'div',
				{ className: _list2.default["search--pie"] },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.props.onClick },
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: '2', offset: '4' },
						_react2.default.createElement(_select2.default, { options: this.state.options, ref: 'read_type' })
					),
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: '0.2' },
						'\xA0'
					),
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: '3' },
						_react2.default.createElement(_input2.default, { ref: 'input', placeholder: '\u8B66\u793A\u6807\u9898\u5173\u952E\u5B57', onChange: this.props.onChange })
					),
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: '1' },
						_react2.default.createElement(_button2.default, { text: '\u641C\u7D22', onClick: this.props.onClick })
					)
				),
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: '0.8' },
					'\xA0'
				),
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: '1' },
					_react2.default.createElement(_button2.default, { text: "创建", styleCss: this.state.buttonStyle, onClick: function onClick(e) {
							return _this4.ceate_warning();
						} })
				)
			);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return {
				q: this.refs.input.getValue(),
				read_type: this.refs.read_type.getValue()
			};
		}
	}, {
		key: 'ceate_warning',
		value: function ceate_warning() {
			this.context.router.push('/riskwarning/add');
		}
	}]);

	return SearchPie;
}(_react.Component);

/**
 * 表格数据
 */


var Table = exports.Table = function (_Component3) {
	_inherits(Table, _Component3);

	function Table(props) {
		_classCallCheck(this, Table);

		var _this5 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

		_this5.state = {
			isMouseMove: false
		};
		return _this5;
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _list2.default["table--list"] },
				_react2.default.createElement(
					'table',
					{ className: _list2.default["table--main"] },
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							{ className: _list2.default["table_title"] },
							_react2.default.createElement(
								'th',
								null,
								'\u8B66\u793A\u6807\u9898'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u72B6\u6001'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u53D1\u9001\u5730\u533A'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u53D1\u9001\u5BF9\u8C61'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u53D1\u5E03\u65F6\u95F4'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u64CD \u4F5C'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this.getTrContent()
					)
				)
			);
		}
	}, {
		key: 'getTrContent',
		value: function getTrContent() {
			var _this6 = this;

			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					'tr',
					{ className: _list2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this6.goto_detail(l);
						} },
					_react2.default.createElement(
						'td',
						{ title: l.title },
						l.title
					),
					_react2.default.createElement(
						'td',
						{ title: l.is_read == "2" ? "未读" : "已读" },
						l.is_read == "2" ? "未读" : "已读"
					),
					_react2.default.createElement(
						'td',
						{ title: _this6.getSendArea(l.grid_name) },
						_this6.getSendArea(l.grid_name)
					),
					_react2.default.createElement(
						'td',
						{ title: l.send_object },
						l.send_object
					),
					_react2.default.createElement(
						'td',
						{ title: (0, _helpTools.getFormatData)(l.create_at) + " " + (0, _helpTools.getHoursMinutes)(l.create_at) },
						(0, _helpTools.getFormatData)(l.create_at) + " " + (0, _helpTools.getHoursMinutes)(l.create_at)
					),
					_react2.default.createElement(
						'td',
						null,
						l.status == 1 ? _react2.default.createElement(
							'a',
							{ href: 'javascript:;', onClick: function onClick(e) {
									return _this6.deleteRisk(e, l);
								} },
							'\u5220\u9664'
						) : ""
					)
				);
			});
		}
	}, {
		key: 'getSendArea',
		value: function getSendArea() {
			var areas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			areas = areas || [];
			return areas.join("|");
		}

		// 跳转详情

	}, {
		key: 'goto_detail',
		value: function goto_detail(l) {
			this.context.router.push("/riskwarning/detail/" + l.id);
		}
		// 删除警示

	}, {
		key: 'deleteRisk',
		value: function deleteRisk(e, l) {
			e.stopPropagation();
			var deleteRisk = this.props.deleteRisk;

			if (!confirm("是否要删除该条警示？")) {
				return;
			}
			deleteRisk({
				id: l.id
			});
		}
	}]);

	return Table;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		condition: state.riskWarningReducer.condition,
		lists: state.riskWarningReducer.List
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getList: function getList(obj) {
			dispatch(_action2.default.list(obj));
		},
		deleteRisk: function deleteRisk(obj) {
			dispatch(_action2.default.delete(obj));
		}
	};
};

SearchPie.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

Table.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RiskWarning);