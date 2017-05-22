'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableList = exports.ContainerArea = exports.SearchPie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _table = require('@stararc-component/table');

var _button = require('@stararc-component/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('@stararc-component/input');

var _input2 = _interopRequireDefault(_input);

var _gridlayout = require('@stararc-component/gridlayout');

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _pagination = require('@stararc-component/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _CompanyList = require('./CompanyList.css');

var _CompanyList2 = _interopRequireDefault(_CompanyList);

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentList = function (_Component) {
	_inherits(ComponentList, _Component);

	function ComponentList() {
		_classCallCheck(this, ComponentList);

		return _possibleConstructorReturn(this, (ComponentList.__proto__ || Object.getPrototypeOf(ComponentList)).apply(this, arguments));
	}

	_createClass(ComponentList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: _CompanyList2.default["box"] },
				_react2.default.createElement(SearchPie, {
					ref: 'q',
					defaultValue: this.props.condition.q,
					onClick: function onClick(e) {
						return _this2.onClick();
					} }),
				_react2.default.createElement(
					ContainerArea,
					null,
					_react2.default.createElement(TableList, { list: this.props.complist })
				),
				_react2.default.createElement(
					_pagination.PaginationBox,
					null,
					_react2.default.createElement(_pagination2.default, {
						currentPage: this.props.condition.page,
						totalPage: this.props.condition.totalPage,
						position: "right",
						pageGoTo: function pageGoTo(page) {
							return _this2.pageGoTo(page);
						} })
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

			return {
				q: this.refs.q.getValue(),
				count: 20,
				page: page
			};
		}
	}, {
		key: 'getList',
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var insureCompanyList = this.props.insureCompanyList;


			insureCompanyList(params);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return ComponentList;
}(_react.Component);

/**
 * 搜索块
 */


var SearchPie = exports.SearchPie = function (_Component2) {
	_inherits(SearchPie, _Component2);

	function SearchPie() {
		_classCallCheck(this, SearchPie);

		return _possibleConstructorReturn(this, (SearchPie.__proto__ || Object.getPrototypeOf(SearchPie)).apply(this, arguments));
	}

	_createClass(SearchPie, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _CompanyList2.default["search__pie"] },
				_react2.default.createElement(
					_gridlayout.Row,
					null,
					_react2.default.createElement(
						'form',
						{ onSubmit: this.props.onClick },
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: '4' },
							_react2.default.createElement(_input2.default, { ref: 'input', placeholder: '\u4F01\u4E1A\u540D\u79F0', onChange: this.props.onChange })
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: '1' },
							_react2.default.createElement(_button2.default, { text: '\u641C\u7D22', onClick: this.props.onClick })
						)
					),
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: '1', offset: '6' },
						_react2.default.createElement(_button.GoBackButton, null)
					)
				)
			);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.refs.input.getValue();
		}
	}]);

	return SearchPie;
}(_react.Component);

/**
 * 内容区
 */


var ContainerArea = exports.ContainerArea = function (_Component3) {
	_inherits(ContainerArea, _Component3);

	function ContainerArea() {
		_classCallCheck(this, ContainerArea);

		return _possibleConstructorReturn(this, (ContainerArea.__proto__ || Object.getPrototypeOf(ContainerArea)).apply(this, arguments));
	}

	_createClass(ContainerArea, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _CompanyList2.default["body_content"] },
				this.props.children
			);
		}
	}]);

	return ContainerArea;
}(_react.Component);

/**
 * 企业列表
 */


var TableList = exports.TableList = function (_Component4) {
	_inherits(TableList, _Component4);

	function TableList() {
		_classCallCheck(this, TableList);

		return _possibleConstructorReturn(this, (TableList.__proto__ || Object.getPrototypeOf(TableList)).apply(this, arguments));
	}

	_createClass(TableList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _CompanyList2.default["table__list"] },
				_react2.default.createElement(
					_table.Table,
					null,
					_react2.default.createElement(_table.TableHeader, { thArr: getTableHeader() }),
					_react2.default.createElement(
						_table.TableBody,
						null,
						this.getTrContent()
					)
				)
			);
		}
	}, {
		key: 'getTrContent',
		value: function getTrContent() {
			var _props$list = this.props.list,
			    list = _props$list === undefined ? [] : _props$list;


			return list.map(function (l, key) {
				return _react2.default.createElement(
					_table.TableTr,
					{ key: key },
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.company_name },
						l.company_name
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.task_total },
						l.task_total
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.danger_total },
						l.danger_total
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.insure_money },
						l.insure_money
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.score },
						l.score
					)
				);
			});
		}
	}]);

	return TableList;
}(_react.Component);

/**
 * 获取列表的表头
 * @date   2017-04-10T15:28:04+0800
 * @author liheng
 * @param  {[type]}                 argument [description]
 */


function getTableHeader(argument) {
	return ["企业名称", "检查任务数（次）", "风险总数", "保费（元）", "企业积分"];
}

/**
 * state数据集合
 */
var stateMaps = function stateMaps(state) {
	return {
		condition: state.safeReducer.insureCondition,
		complist: state.safeReducer.insureCompanyList
	};
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
	return {
		insureCompanyList: function insureCompanyList(params) {
			dispatch(_safe2.default.insure_company_list(params));
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(ComponentList);