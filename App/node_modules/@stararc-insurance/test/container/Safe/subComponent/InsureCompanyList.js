'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _table = require('@stararc-component/table');

var _pagination = require('@stararc-component/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _CompanyList = require('./CompanyList.css');

var _CompanyList2 = _interopRequireDefault(_CompanyList);

var _CompanyList3 = require('./CompanyList');

var _function = require('../../../helper/function');

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsureComponentList = function (_Component) {
	_inherits(InsureComponentList, _Component);

	function InsureComponentList() {
		_classCallCheck(this, InsureComponentList);

		return _possibleConstructorReturn(this, (InsureComponentList.__proto__ || Object.getPrototypeOf(InsureComponentList)).apply(this, arguments));
	}

	_createClass(InsureComponentList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: _CompanyList2.default["box"] },
				_react2.default.createElement(_CompanyList3.SearchPie, {
					ref: 'q',
					defaultValue: this.props.condition.q,
					onClick: function onClick(e) {
						return _this2.onClick();
					} }),
				_react2.default.createElement(
					_CompanyList3.ContainerArea,
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
			var q = this.refs.q.getValue();

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
			var insureCompanyListForMoney = this.props.insureCompanyListForMoney;


			insureCompanyListForMoney(params);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return InsureComponentList;
}(_react.Component);

/**
 * 企业列表
 */


var TableList = exports.TableList = function (_Component2) {
	_inherits(TableList, _Component2);

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
						{ text: l.insurance_type },
						l.insurance_type
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: (0, _function.getFormatData)(l.insure_date, "-") },
						(0, _function.getFormatData)(l.insure_date, "-")
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: (0, _function.getFormatData)(l.done_at, "-") },
						(0, _function.getFormatData)(l.done_at, "-")
					),
					_react2.default.createElement(
						_table.TableTd,
						{ text: l.insure_money },
						l.insure_money
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
	return ["企业名称", "投保产品", "保险起期", "保险止期", "保费（元）"];
}

/**
 * state数据集合
 */
var stateMaps = function stateMaps(state) {
	return {
		condition: state.safeReducer.insureConditionForMoney,
		complist: state.safeReducer.insureCompanyListForMoney
	};
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
	return {
		insureCompanyListForMoney: function insureCompanyListForMoney(params) {
			dispatch(_safe2.default.insure_company_list_formoney(params));
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(InsureComponentList);