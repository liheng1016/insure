"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AcceptInsuranceFoot = exports.AcceptInsuranceTable = exports.AcceptInsuranceTitle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _acceptinsurance = require("./acceptinsurance.css");

var _acceptinsurance2 = _interopRequireDefault(_acceptinsurance);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _pagination = require("@stararc-component/pagination");

var _pagination2 = _interopRequireDefault(_pagination);

var _datePicker = require("@stararc-insurance/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _exportFile = require("@stararc-insurance/export-file");

var _exportFile2 = _interopRequireDefault(_exportFile);

var _helpTools = require("@stararc-insurance/help-tools");

var _action = require("../../model/insurInfo/action");

var _action2 = _interopRequireDefault(_action);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 承保主体
 */
var AcceptInsurance = function (_Component) {
	_inherits(AcceptInsurance, _Component);

	function AcceptInsurance(props) {
		_classCallCheck(this, AcceptInsurance);

		var _this = _possibleConstructorReturn(this, (AcceptInsurance.__proto__ || Object.getPrototypeOf(AcceptInsurance)).call(this, props));

		_this.state = {
			status: [{
				id: 1,
				name: "脱保"
			}, {
				id: 2,
				name: "在保"
			}, {
				id: 3,
				name: "待出单"
			}],
			exportData: {}
		};
		return _this;
	}

	_createClass(AcceptInsurance, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _acceptinsurance2.default["acceptinsurance_wrap"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 135 } },
					_react2.default.createElement(AcceptInsuranceTitle, _extends({
						ref: "q"
					}, this.props, {
						onClick: function onClick(e) {
							return _this2.onClick();
						},
						exportData: this.state.exportData,
						getExportData: function getExportData(e) {
							return _this2.getExportData();
						} }))
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 135 } },
					_react2.default.createElement(AcceptInsuranceTable, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(AcceptInsuranceFoot, _extends({}, this.props, { pageGoTo: function pageGoTo(page) {
							return _this2.pageGoTo(page);
						} }))
				)
			);
		}
	}, {
		key: "getExportData",
		value: function getExportData() {
			var ops = this.getOps();

			ops.show_page = 2;

			this.getList(ops);
		}
	}, {
		key: "dealExportData",
		value: function dealExportData() {
			var exportdata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			var content = [],
			    title = getCommonTableTitle(),
			    filename = "承保保单信息",
			    status = {
				1: "脱保",
				2: "在保 ",
				3: "待出单"
			};

			exportdata.map(function (item, index) {
				content.push([item['apply_number'], item['apply_company_name'], item['company_name'], item['insurance_number'], item['grid_name'], item['type_name'], status[item['status']], item['insurance_company'], item['start_date'] ? (0, _helpTools.getFormatData)(item['start_date']) : "", item['done_at'] ? (0, _helpTools.getFormatData)(item['done_at']) : ""]);
			});

			this.setState({
				exportData: {
					filename: filename,
					title: title,
					content: content
				}
			});
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
				count: 10,
				page: page
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
			var _props = this.props,
			    get_grid_list = _props.get_grid_list,
			    get_industry_list = _props.get_industry_list;

			var sourceUrlOne = "",
			    sourceUrlTwo = "",
			    self = this;

			if (process.env.NODE_ENV == 'production') {
				sourceUrlOne = "/assets/lib/xls.min.js";
				sourceUrlTwo = "/assets/lib/xlsx.core.min.js";
			} else {
				sourceUrlOne = "/lib/xls.min.js";
				sourceUrlTwo = "/lib/xlsx.core.min.js";
			}

			(0, _helpTools.load_script)(sourceUrlOne, function () {
				(0, _helpTools.load_script)(sourceUrlTwo, function () {
					get_grid_list();
					get_industry_list();
					self.getList(self.getOps());
				});
			});
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.exportList != this.props.exportList) {
				this.dealExportData(nextProps.exportList);
			}
		}
	}]);

	return AcceptInsurance;
}(_react.Component);

;

/**
 * 搜索
 */

var AcceptInsuranceTitle = exports.AcceptInsuranceTitle = function (_Component2) {
	_inherits(AcceptInsuranceTitle, _Component2);

	function AcceptInsuranceTitle(props) {
		_classCallCheck(this, AcceptInsuranceTitle);

		var _this3 = _possibleConstructorReturn(this, (AcceptInsuranceTitle.__proto__ || Object.getPrototypeOf(AcceptInsuranceTitle)).call(this, props));

		_this3.state = {
			status: [{
				id: 1,
				name: "脱保"
			}, {
				id: 2,
				name: "在保"
			}, {
				id: 3,
				name: "待出单"
			}]
		};
		return _this3;
	}

	_createClass(AcceptInsuranceTitle, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			var InputStyle = { width: '58%', float: 'left', marginTop: '3px' };
			var SelectStyle = { width: '100%', float: 'left', marginTop: '3px' };
			var button = {
				ButtonStyle: { width: '60px', float: 'right', background: '#efc420' },
				SearchStyle: { width: '60px', float: 'right', background: '#0093e1', marginLeft: '10px' },
				SetStyle: { width: '100px', float: 'right', background: '#eec420', marginLeft: '10px' },
				ExportStyle: { width: '60px', float: 'right', background: '#f7a712', marginLeft: '10px' }
			};
			var DateStyle = {
				width: '45%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				textAlign: 'center',
				color: '#666',
				marginTop: '2px'
			};

			return _react2.default.createElement(
				"div",
				{ className: _acceptinsurance2.default["title_wrap"] },
				_react2.default.createElement(
					"div",
					{ className: _acceptinsurance2.default["titlt--top"] },
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["name"] },
							"\u6295\u4FDD\u5355\u53F7/\u4FDD\u5355\u53F7 : "
						),
						_react2.default.createElement(_input2.default, { ref: "q_number", styleCss: InputStyle })
					),
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["name"] },
							"\u6295\u4FDD\u4EBA/\u88AB\u4FDD\u4EBA : "
						),
						_react2.default.createElement(_input2.default, { ref: "q_name", styleCss: InputStyle })
					),
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["name"] },
							"\u6240\u5C5E\u5730\u533A : "
						),
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["area"] },
							_react2.default.createElement(_select2.default, { styleCss: SelectStyle, ref: "grid_id", options: this.props.gridList })
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _acceptinsurance2.default["titlt--top"] },
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["name"] },
							"\u884C\u4E1A\u7C7B\u578B : "
						),
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["area"] },
							_react2.default.createElement(_select2.default, { styleCss: SelectStyle, ref: "type_id", options: this.props.industryList })
						)
					),
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["name"] },
							"\u6295\u4FDD\u72B6\u6001 : "
						),
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["area"] },
							_react2.default.createElement(_select2.default, { styleCss: SelectStyle, ref: "status", options: this.state.status })
						)
					),
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["number_of_policy--data"] },
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["insurance-name"] },
							"\u4FDD\u9669\u65F6\u95F4 : "
						),
						_react2.default.createElement(
							"span",
							{ className: _acceptinsurance2.default["insurance-name_time"] },
							_react2.default.createElement(_datePicker2.default, { ref: "since_at", placeholder: "保险起期", inputCss: DateStyle }),
							_react2.default.createElement(
								"span",
								{ className: _acceptinsurance2.default["separator"] },
								"~"
							),
							_react2.default.createElement(_datePicker2.default, { ref: "max_at", placeholder: "保险止期", inputCss: DateStyle })
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _acceptinsurance2.default["titlt--top"] },
					_react2.default.createElement(
						"span",
						{ className: _acceptinsurance2.default["export--button"] },
						_react2.default.createElement(_exportFile2.default, {
							createFilePath: "/Export/exportDataToCSV",
							getFilePath: "/Export/getFile",
							onClick: this.props.getExportData,
							exportData: this.props.exportData })
					),
					_react2.default.createElement(_button2.default, { styleCss: button.SetStyle, text: "创建新保单", onClick: function onClick(e) {
							return _this4.go_to_add();
						} }),
					_react2.default.createElement(_button2.default, { styleCss: button.SearchStyle, text: "搜索", onClick: this.props.onClick })
				)
			);
		}
	}, {
		key: "go_to_add",
		value: function go_to_add() {
			this.context.router.push("/acceptInsurance/add");
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var result = {},
			    ref = this.refs;
			for (var r in ref) {
				result[r] = ref[r].getValue();
			}
			return result;
		}
	}]);

	return AcceptInsuranceTitle;
}(_react.Component);
/**
 * 内容
 */


var AcceptInsuranceTable = exports.AcceptInsuranceTable = function (_Component3) {
	_inherits(AcceptInsuranceTable, _Component3);

	function AcceptInsuranceTable() {
		_classCallCheck(this, AcceptInsuranceTable);

		return _possibleConstructorReturn(this, (AcceptInsuranceTable.__proto__ || Object.getPrototypeOf(AcceptInsuranceTable)).apply(this, arguments));
	}

	_createClass(AcceptInsuranceTable, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _acceptinsurance2.default["table-wrap"] },
				_react2.default.createElement(
					"table",
					{ className: _acceptinsurance2.default["table--main"] },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							{ className: _acceptinsurance2.default["table_title"] },
							_react2.default.createElement(
								"th",
								null,
								"\u6295\u4FDD\u5355\u53F7"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u6295\u4FDD\u4EBA"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u88AB\u4FDD\u4EBA"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u4FDD\u5355\u53F7"
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
								"\u6295\u4FDD\u72B6\u6001"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u627F\u4FDD\u516C\u53F8"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u4FDD\u9669\u8D77\u671F"
							),
							_react2.default.createElement(
								"th",
								null,
								"\u4FDD\u9669\u6B62\u671F"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.getTrContentList()
					)
				)
			);
		}
	}, {
		key: "getTrContentList",
		value: function getTrContentList() {
			var _this6 = this;

			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists,
			    status = {
				1: "脱保",
				2: "在保 ",
				3: "待出单"
			};


			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"tr",
					{ className: _acceptinsurance2.default["table_row"], key: key, onClick: function onClick(e) {
							return _this6.go_to_detail(l.id);
						} },
					_react2.default.createElement(
						"td",
						{ title: l.apply_number },
						l.apply_number
					),
					_react2.default.createElement(
						"td",
						{ title: l.apply_company_name },
						l.apply_company_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.company_name },
						l.company_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.insurance_number },
						l.insurance_number
					),
					_react2.default.createElement(
						"td",
						{ title: l.grid_name },
						l.grid_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.type_name },
						l.type_name
					),
					_react2.default.createElement(
						"td",
						{ title: status[l.status] },
						status[l.status]
					),
					_react2.default.createElement(
						"td",
						{ title: l.insurance_company },
						l.insurance_company
					),
					_react2.default.createElement(
						"td",
						{ title: l.start_date ? (0, _helpTools.getFormatData)(l.start_date) : "" },
						l.start_date ? (0, _helpTools.getFormatData)(l.start_date) : ""
					),
					_react2.default.createElement(
						"td",
						{ title: l.done_at ? (0, _helpTools.getFormatData)(l.done_at) : "" },
						l.done_at ? (0, _helpTools.getFormatData)(l.done_at) : ""
					)
				);
			});
		}
	}, {
		key: "go_to_detail",
		value: function go_to_detail(id) {
			this.context.router.push("/acceptInsurance/detail/" + id);
		}
	}]);

	return AcceptInsuranceTable;
}(_react.Component);
/**
 * 底部
 */


var AcceptInsuranceFoot = exports.AcceptInsuranceFoot = function (_Component4) {
	_inherits(AcceptInsuranceFoot, _Component4);

	function AcceptInsuranceFoot() {
		_classCallCheck(this, AcceptInsuranceFoot);

		return _possibleConstructorReturn(this, (AcceptInsuranceFoot.__proto__ || Object.getPrototypeOf(AcceptInsuranceFoot)).apply(this, arguments));
	}

	_createClass(AcceptInsuranceFoot, [{
		key: "render",
		value: function render() {
			var _this8 = this;

			return _react2.default.createElement(
				"div",
				{ className: _acceptinsurance2.default["pagination"] },
				_react2.default.createElement(_pagination2.default, {
					currentPage: this.props.condition.page,
					totalPage: this.props.condition.totalPage,
					pageGoTo: function pageGoTo(page) {
						return _this8.props.pageGoTo(page);
					} })
			);
		}
	}]);

	return AcceptInsuranceFoot;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		lists: state.insurInfoReducer.List,
		condition: state.insurInfoReducer.condition,
		gridList: state.insurInfoReducer.gridList,
		industryList: state.insurInfoReducer.industryList,
		exportList: state.insurInfoReducer.exportList
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取承保列表申请
		get_list: function get_list(obj) {
			dispatch(_action2.default.list(obj));
		},
		// 获取网格的子网格
		get_grid_list: function get_grid_list(obj) {
			dispatch(_action2.default.grid_list(obj));
		},
		// 获取行业类型
		get_industry_list: function get_industry_list(obj) {
			dispatch(_action2.default.industry_list(obj));
		}
	};
};

function getCommonTableTitle() {
	return ["投保单号", "投保人", "被保人", "保单号", "所属地区", "行业类型", "投保状态", "承保公司", "保险起期", "保险止期"];
}

AcceptInsuranceTable.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

AcceptInsuranceTitle.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AcceptInsurance);