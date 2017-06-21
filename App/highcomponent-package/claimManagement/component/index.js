"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FooterButton = exports.PaymentTimeContent = exports.PaymentTime = exports.Upload = exports.LiUpLoad = exports.AccidentDetailsContent = exports.LiDeductible = exports.AccidentDetails = exports.HearingCasesContent = exports.HearingCases = exports.InformantInformationContent = exports.LiMustContent = exports.InformantInformation = exports.SecurityInformationContent = exports.SecurityInformation = exports.ApplicantInformationContent = exports.EnterprisePopups = exports.ApplicantInformationButton = exports.ApplicantInformation = exports.LiContent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("./index.css");

var _index2 = _interopRequireDefault(_index);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _datePicker = require("@stararc-insurance/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _textarea = require("@stararc-component/textarea");

var _textarea2 = _interopRequireDefault(_textarea);

var _pagination = require("@stararc-component/pagination");

var _pagination2 = _interopRequireDefault(_pagination);

var _uploadFile = require("@stararc-insurance/upload-file");

var _helpTools = require("@stararc-insurance/help-tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 不必要验证的input  li组件
 */
var LiContent = exports.LiContent = function (_Component) {
	_inherits(LiContent, _Component);

	function LiContent() {
		_classCallCheck(this, LiContent);

		return _possibleConstructorReturn(this, (LiContent.__proto__ || Object.getPrototypeOf(LiContent)).apply(this, arguments));
	}

	_createClass(LiContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["applicant-content--li"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["content-li--name"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["content-li--input"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["prompt"] },
						this.props.helpTips
					)
				)
			);
		}
	}]);

	return LiContent;
}(_react.Component);

/**
 * 投保人信息
 */


var ApplicantInformation = exports.ApplicantInformation = function (_Component2) {
	_inherits(ApplicantInformation, _Component2);

	function ApplicantInformation() {
		_classCallCheck(this, ApplicantInformation);

		return _possibleConstructorReturn(this, (ApplicantInformation.__proto__ || Object.getPrototypeOf(ApplicantInformation)).apply(this, arguments));
	}

	_createClass(ApplicantInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u6295\u4FDD\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(ApplicantInformationButton, _extends({}, this.props, {
					conserveHandle: this.props.conserveHandle })),
				this.props.selectValue && this.props.selectValue.id ? _react2.default.createElement(ApplicantInformationContent, { selectValue: this.props.selectValue }) : ""
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var selectValue = this.props.selectValue;

			return {
				company_insurance_id: selectValue.id,
				apply_company_name: selectValue.apply_company_name

			};
		}
	}]);

	return ApplicantInformation;
}(_react.Component);

/**
 * 投保人信息Button
 */


var ApplicantInformationButton = exports.ApplicantInformationButton = function (_Component3) {
	_inherits(ApplicantInformationButton, _Component3);

	function ApplicantInformationButton(props) {
		_classCallCheck(this, ApplicantInformationButton);

		var _this3 = _possibleConstructorReturn(this, (ApplicantInformationButton.__proto__ || Object.getPrototypeOf(ApplicantInformationButton)).call(this, props));

		_this3.state = {
			isOpenChoicelog: false
		};
		return _this3;
	}

	_createClass(ApplicantInformationButton, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			var accpt = this.props;
			var ButtonStyle = { width: '80px', background: 'orange', float: 'right', marginTop: '10px', marginRight: '20px' };
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicantcontent-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant-select"] },
					"\u8BF7\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u9009\u62E9\u7406\u8D54\u4F01\u4E1A"
				),
				_react2.default.createElement(_button2.default, {
					styleCss: ButtonStyle,
					text: "选择企业",
					onClick: function onClick(e) {
						return _this4.openChoicelog();
					} }),
				this.state.isOpenChoicelog ? _react2.default.createElement(EnterprisePopups, _extends({}, this.props, {
					lists: this.state.lists,
					conserveHandle: function conserveHandle(action, selectValue, index) {
						return _this4.closeReslog(action, selectValue, index);
					},
					cancleHandle: function cancleHandle(action) {
						return _this4.closeReslog(action);
					}
				})) : ''
			);
		}
		// 打开弹出框

	}, {
		key: "openChoicelog",
		value: function openChoicelog() {
			this.setState({
				isOpenChoicelog: true
			});
		}
		// 关闭弹出框

	}, {
		key: "closeReslog",
		value: function closeReslog(action, selectCompany, companyList) {
			var self = this,
			    lists = this.state.lists;
			this.setState({
				isOpenChoicelog: false,
				lists: companyList ? companyList : lists
			}, function () {
				var conserveHandle = self.props.conserveHandle;

				selectCompany && conserveHandle && conserveHandle(selectCompany);
			});
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.lists != this.props.lists) {
				this.setState({
					lists: nextProps.lists
				});
			}
		}
	}]);

	return ApplicantInformationButton;
}(_react.Component);

/**
 * 选择企业弹窗
 */


var EnterprisePopups = exports.EnterprisePopups = function (_Component4) {
	_inherits(EnterprisePopups, _Component4);

	function EnterprisePopups(props) {
		_classCallCheck(this, EnterprisePopups);

		var _this5 = _possibleConstructorReturn(this, (EnterprisePopups.__proto__ || Object.getPrototypeOf(EnterprisePopups)).call(this, props));

		_this5.state = {
			index: props.index || '',
			companyList: props.lists || []
		};
		return _this5;
	}

	_createClass(EnterprisePopups, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			var Buttonstyle = { width: '64px', display: 'inline-block', background: '#efc420', borderRadius: '0px' };
			var InputStyle = { width: '100%', borderRight: '0px' };
			var accpt = this.props.accpt;
			var buttonStyle = {
				border: "1px solid #f6a811",
				background: "#f6a811",
				color: "black"
			};
			var cancelStyle = {
				border: "1px solid #f6a811",
				background: "white",
				color: "black"
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _index2.default["dialog--shade"] }),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["enterprisepopups"] },
					_react2.default.createElement(
						"div",
						{ className: _index2.default["search--warp"] },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["search"] },
							_react2.default.createElement(
								"span",
								{ className: _index2.default["search--input"] },
								_react2.default.createElement(_input2.default, { ref: "q", styleCss: InputStyle, placeholder: "\u4F01\u4E1A\u540D\u79F0\u5173\u952E\u5B57" })
							),
							_react2.default.createElement(
								"span",
								{ className: _index2.default["search_button"] },
								_react2.default.createElement(_button2.default, { text: '搜索', styleCss: Buttonstyle, onClick: function onClick(e) {
										return _this6.search();
									} })
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _index2.default["search-content"] },
						_react2.default.createElement(
							"table",
							{ className: _index2.default["table--main"] },
							_react2.default.createElement(
								"thead",
								null,
								_react2.default.createElement(
									"tr",
									{ className: _index2.default["table_title"] },
									_react2.default.createElement(
										"th",
										{ className: _index2.default["table_select"] },
										"\u64CD\u4F5C"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u88AB\u4FDD\u4F01\u4E1A\u540D\u79F0"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u6295\u4FDD\u5355\u53F7"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u6295\u4FDD\u4EA7\u54C1"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u6CE8\u518C\u53F7"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u4FDD\u5355\u72B6\u6001"
									)
								)
							),
							_react2.default.createElement(
								"tbody",
								null,
								this.getTrPopupsContent()
							)
						),
						_react2.default.createElement(
							"div",
							{ className: _index2.default["pagination--box"] },
							_react2.default.createElement(_pagination2.default, {
								currentPage: this.props.condition.page,
								totalPage: this.props.condition.totalPage,
								pageGoTo: function pageGoTo(page) {
									return _this6.pageGoTo(page);
								} })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _index2.default["action--componnet"] },
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1", offset: "4.9" },
							_react2.default.createElement(_button2.default, { text: "取消",
								styleCss: cancelStyle,
								onClick: function onClick(e) {
									return _this6.cancleHandle();
								} })
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "0.2" },
							"\xA0"
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1" },
							_react2.default.createElement(_button2.default, { text: "确认",
								styleCss: buttonStyle,
								onClick: function onClick(e) {
									return _this6.conserveHandle();
								} })
						)
					)
				)
			);
		}
	}, {
		key: "getTrPopupsContent",
		value: function getTrPopupsContent() {
			var _this7 = this;

			var _state = this.state,
			    _state$companyList = _state.companyList,
			    companyList = _state$companyList === undefined ? [] : _state$companyList,
			    index = _state.index,
			    status = {
				1: "脱保",
				2: "在保 ",
				3: "待出单"
			};
			;
			return companyList.map(function (l, key) {
				var classname = l.isSelected ? _index2.default["table_row--hover"] : _index2.default["table_row"];
				return _react2.default.createElement(
					"tr",
					{ className: classname, key: key },
					_react2.default.createElement(
						"td",
						{ onClick: function onClick(e) {
								return _this7.selectedTr(key);
							} },
						_react2.default.createElement(
							"span",
							{ className: l.isSelected ? _index2.default["company_select"] : _index2.default["company_select--not"] },
							" "
						)
					),
					_react2.default.createElement(
						"td",
						{ title: l.company_name },
						l.company_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.apply_number },
						l.apply_number
					),
					_react2.default.createElement(
						"td",
						{ title: l.insurance_type },
						l.insurance_type
					),
					_react2.default.createElement(
						"td",
						{ title: l.register },
						l.register
					),
					_react2.default.createElement(
						"td",
						{ title: status[l.status] },
						status[l.status]
					)
				);
			});
		}
	}, {
		key: "search",
		value: function search() {
			this.pageGoTo(1);
		}
	}, {
		key: "pageGoTo",
		value: function pageGoTo(page) {
			var q = this.refs.q.getValue(),
			    get_insur_company = this.props.get_insur_company;

			var params = {
				q: q,
				page: page,
				count: 8,
				status: 2 //在保
			};

			get_insur_company(params);
		}
		// 选中

	}, {
		key: "selectedTr",
		value: function selectedTr(index) {
			var _state$companyList2 = this.state.companyList,
			    companyList = _state$companyList2 === undefined ? [] : _state$companyList2;

			companyList.map(function (c, key) {
				c.isSelected = false;
			});
			companyList[index].isSelected = true;
			this.setState({
				companyList: companyList
			});
		}

		// conserve

	}, {
		key: "conserveHandle",
		value: function conserveHandle() {
			var conserveHandle = this.props.conserveHandle,
			    companyList = this.state.companyList,
			    selectValue = {};


			companyList.map(function (c, key) {
				if (c.isSelected) {
					selectValue = c;
					return;
				}
			});

			conserveHandle && conserveHandle("cancle", selectValue, companyList);
		}

		// cancle

	}, {
		key: "cancleHandle",
		value: function cancleHandle() {
			var cancleHandle = this.props.cancleHandle;

			cancleHandle && cancleHandle("cancle");
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.lists != this.props.lists) {
				this.setState({
					companyList: nextProps.lists
				});
			}
		}
	}]);

	return EnterprisePopups;
}(_react.Component);

/**
 * 投保人信息内容
 */


var ApplicantInformationContent = exports.ApplicantInformationContent = function (_Component5) {
	_inherits(ApplicantInformationContent, _Component5);

	function ApplicantInformationContent() {
		_classCallCheck(this, ApplicantInformationContent);

		return _possibleConstructorReturn(this, (ApplicantInformationContent.__proto__ || Object.getPrototypeOf(ApplicantInformationContent)).apply(this, arguments));
	}

	_createClass(ApplicantInformationContent, [{
		key: "render",
		value: function render() {
			var InputStyle = { width: '100%' };
			var _props$selectValue = this.props.selectValue,
			    selectValue = _props$selectValue === undefined ? {} : _props$selectValue;

			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["applicant-content"] },
				_react2.default.createElement(
					LiContent,
					{ LabelName: "投保人名称" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.apply_company_name, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "所属地区" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.grid_name, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "工商注册号" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.register, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "行业类型" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.type_name, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "法人" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.legalPerson, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "法人联系方式" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.legalPhone, disabled: "true" })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: "企业地址" },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: selectValue.address, disabled: "true" })
				)
			);
		}
	}]);

	return ApplicantInformationContent;
}(_react.Component);

/**
 * 保障信息
 */


var SecurityInformation = exports.SecurityInformation = function (_Component6) {
	_inherits(SecurityInformation, _Component6);

	function SecurityInformation() {
		_classCallCheck(this, SecurityInformation);

		return _possibleConstructorReturn(this, (SecurityInformation.__proto__ || Object.getPrototypeOf(SecurityInformation)).apply(this, arguments));
	}

	_createClass(SecurityInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u4FDD\u969C\u4FE1\u606F"
				),
				this.props.selectValue && this.props.selectValue.id ? _react2.default.createElement(SecurityInformationContent, { selectValue: this.props.selectValue }) : _react2.default.createElement(
					"ul",
					{ className: _index2.default["applicant-content--tips"] },
					"\u63D0\u793A:\u5728\u9009\u62E9\u7406\u8D54\u4F01\u4E1A\u5B8C\u6210\u540E\u4F1A\u663E\u793A\u8BE5\u4F01\u4E1A\u5BF9\u5E94\u7684\u4FDD\u969C\u4FE1\u606F\u3002"
				)
			);
		}
	}]);

	return SecurityInformation;
}(_react.Component);

/**
 * 保障信息内容
 */


var SecurityInformationContent = exports.SecurityInformationContent = function (_Component7) {
	_inherits(SecurityInformationContent, _Component7);

	function SecurityInformationContent() {
		_classCallCheck(this, SecurityInformationContent);

		return _possibleConstructorReturn(this, (SecurityInformationContent.__proto__ || Object.getPrototypeOf(SecurityInformationContent)).apply(this, arguments));
	}

	_createClass(SecurityInformationContent, [{
		key: "render",
		value: function render() {
			var InputStyle = { width: '100%' };
			var MaxInputStyle = { width: '100%', marginTop: '0px' };
			var DateStyle = {
				width: '100%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				paddingLeft: '8px',
				color: '#666'

			};
			var CoverStyle = {
				width: '45%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				textAlign: 'center',
				color: '#666'

			};

			var security = this.props.selectValue || {};
			console.log(security);
			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["applicant-content"] },
				_react2.default.createElement(
					LiContent,
					{ LabelName: '保险经纪公司' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.broker_name, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '承保公司' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.insurance_company, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '投保人' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.apply_company_name, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '被保人' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.company_name, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '投保单号' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.apply_number, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '保单号' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.insurance_number, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '投保产品' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.insurance_type, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '投保人数' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.insurance_population, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '保费(元)' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.insure_money, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '累计责任限额(万元)' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.add_up_liability_limit, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '每次事故责任限额(万元)' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.every_liability_limit, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '每次事故每人责任限额(万元)' },
					_react2.default.createElement(_input2.default, { styleCss: InputStyle, defaultValue: security.person_avg_insurance, disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '投保日期' },
					_react2.default.createElement(_datePicker2.default, { inputCss: DateStyle, defaultValue: (0, _helpTools.getFormatData)(security.insure_date), disabled: true })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '保险期限' },
					_react2.default.createElement(_datePicker2.default, { inputCss: CoverStyle, defaultValue: (0, _helpTools.getFormatData)(security.start_date), disabled: true }),
					_react2.default.createElement(
						"span",
						{ className: _index2.default["separator"] },
						"~"
					),
					_react2.default.createElement(_datePicker2.default, { inputCss: CoverStyle, defaultValue: (0, _helpTools.getFormatData)(security.done_at), disabled: true })
				)
			);
		}
	}]);

	return SecurityInformationContent;
}(_react.Component);

/**
 * 报案人信息
 */


var InformantInformation = exports.InformantInformation = function (_Component8) {
	_inherits(InformantInformation, _Component8);

	function InformantInformation() {
		_classCallCheck(this, InformantInformation);

		return _possibleConstructorReturn(this, (InformantInformation.__proto__ || Object.getPrototypeOf(InformantInformation)).apply(this, arguments));
	}

	_createClass(InformantInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u62A5\u6848\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(InformantInformationContent, _extends({ ref: "info", selectValue: this.props.selectValue }, this.props))
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return _extends({}, this.refs.info.getValue());
		}
	}]);

	return InformantInformation;
}(_react.Component);

/**
 * 必填input li组件
 */


var LiMustContent = exports.LiMustContent = function (_Component9) {
	_inherits(LiMustContent, _Component9);

	function LiMustContent() {
		_classCallCheck(this, LiMustContent);

		return _possibleConstructorReturn(this, (LiMustContent.__proto__ || Object.getPrototypeOf(LiMustContent)).apply(this, arguments));
	}

	_createClass(LiMustContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["applicant-content--mustli"] },
				_react2.default.createElement(
					"div",
					{ className: _index2.default["content-li--name"] },
					_react2.default.createElement(
						"span",
						{ className: _index2.default["name"] },
						this.props.LabelName
					),
					_react2.default.createElement("span", { className: _index2.default["informant-pic"] })
				),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["content-li--input"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["prompt"] },
						this.props.errorTips
					)
				)
			);
		}
	}]);

	return LiMustContent;
}(_react.Component);
/**
 * 报案人内容组件
 */

var InformantInformationContent = exports.InformantInformationContent = function (_Component10) {
	_inherits(InformantInformationContent, _Component10);

	function InformantInformationContent(props) {
		_classCallCheck(this, InformantInformationContent);

		var _this13 = _possibleConstructorReturn(this, (InformantInformationContent.__proto__ || Object.getPrototypeOf(InformantInformationContent)).call(this, props));

		_this13.state = {
			contacts_phone_tips: ''
		};
		return _this13;
	}

	_createClass(InformantInformationContent, [{
		key: "render",
		value: function render() {
			var InputStyle = { width: '100%' };
			var SelectStyle = { width: '100%' };
			var CoverStyle = {
				width: '100%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				paddingLeft: '8px',
				color: '#666'

			};
			var selectValue = this.props.selectValue || {};
			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["applicant-mustcontent"] },
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "报案人名称", errorTips: this.state.user_name_error },
					_react2.default.createElement(_input2.default, { ref: "user_name", defaultValue: this.props.user_name, styleCss: InputStyle })
				),
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "报案人联系方式", errorTips: this.state.phone_error },
					_react2.default.createElement(_input2.default, { ref: "phone", defaultValue: this.props.phone, styleCss: InputStyle, type: "telphone" })
				),
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "报案类型", helpTips: "选择企业后会自动带出相关信息" },
					_react2.default.createElement(_input2.default, { defaultValue: selectValue.insurance_type || "", styleCss: InputStyle, disabled: true })
				),
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "报案时间", errorTips: this.state.report_at_error },
					_react2.default.createElement(_datePicker2.default, { ref: "report_at", defaultValue: (0, _helpTools.getFormatData)(this.props.report_at), inputCss: CoverStyle })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '现场联系人' },
					_react2.default.createElement(_input2.default, { ref: "contacts", styleCss: InputStyle, defaultValue: this.props.contacts })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '现场联系方式', helpTips: this.state.contacts_phone_error },
					_react2.default.createElement(_input2.default, { ref: "contacts_phone", styleCss: InputStyle, defaultValue: this.props.contacts_phone, type: "telphone" })
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {},
			    errorTips = {},
			    isVerify = true,
			    RegExpPhone = {},
			    RegExpContactsPhone = {};
			for (var r in refs) {
				var value = refs[r].getValue();
				if (!value && r !== 'contacts_phone') {
					errorTips[r + "_error"] = "该项是必填项";
				} else {
					if (r == 'phone') {
						RegExpPhone = RegExpPhoneFeild(value, true);
						errorTips[r + "_error"] = RegExpPhone.msg;
					} else if (r == 'contacts_phone') {
						RegExpContactsPhone = RegExpPhoneFeild(value);

						errorTips[r + "_error"] = RegExpContactsPhone.msg;
					} else {
						errorTips[r + "_error"] = "";
					}
				}

				result[r] = value;
			}

			this.setState(_extends({}, errorTips));
			isVerify = !!result["user_name"] && !!result["phone"] && !!result["report_at"] && RegExpPhone.isRight && RegExpContactsPhone.isRight;
			return _extends({
				infoVerify: isVerify
			}, result);
		}
	}]);

	return InformantInformationContent;
}(_react.Component);

/**
 * 案件受理信息
 */


var HearingCases = exports.HearingCases = function (_Component11) {
	_inherits(HearingCases, _Component11);

	function HearingCases() {
		_classCallCheck(this, HearingCases);

		return _possibleConstructorReturn(this, (HearingCases.__proto__ || Object.getPrototypeOf(HearingCases)).apply(this, arguments));
	}

	_createClass(HearingCases, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u6848\u4EF6\u53D7\u7406\u4FE1\u606F"
				),
				_react2.default.createElement(HearingCasesContent, _extends({ ref: "hearing" }, this.props))
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return _extends({}, this.refs.hearing.getValue());
		}
	}]);

	return HearingCases;
}(_react.Component);

/**
 * 案件受理内容组件
 */

var HearingCasesContent = exports.HearingCasesContent = function (_Component12) {
	_inherits(HearingCasesContent, _Component12);

	function HearingCasesContent(props) {
		_classCallCheck(this, HearingCasesContent);

		var _this15 = _possibleConstructorReturn(this, (HearingCasesContent.__proto__ || Object.getPrototypeOf(HearingCasesContent)).call(this, props));

		_this15.state = {
			status: [{
				id: 1,
				name: "报案"
			}, {
				id: 2,
				name: "定损"
			}, {
				id: 3,
				name: "结案"
			}, {
				id: 4,
				name: "销案"
			}],
			errorFlag: false
		};
		return _this15;
	}

	_createClass(HearingCasesContent, [{
		key: "render",
		value: function render() {
			var InputStyle = { width: '100%' };
			var SelectStyle = { width: '100%' };
			var CoverStyle = {
				width: '100%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				paddingLeft: '8px',
				color: '#666'

			};
			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["applicant-mustcontent"] },
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "报案状态", errorTips: this.state.status_error },
					_react2.default.createElement(_select2.default, { ref: "status", styleCss: InputStyle, defaultValue: this.props.status, options: this.state.status })
				),
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "保险公司报案号", errorTips: this.state.compensate_number_error },
					_react2.default.createElement(_input2.default, { ref: "compensate_number", defaultValue: this.props.compensate_number, styleCss: InputStyle })
				),
				_react2.default.createElement(
					LiMustContent,
					{ LabelName: "受理时间", errorTips: this.state.compensate_at_error },
					_react2.default.createElement(_datePicker2.default, { ref: "compensate_at", defaultValue: (0, _helpTools.getFormatData)(this.props.compensate_at), inputCss: CoverStyle })
				)
			);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.status != this.props.status) {
				var status = this.state.status,
				    newStatus = [];
				newStatus = status.slice(Number(nextProps.status) - 1);
				this.setState({
					status: newStatus,
					errorFlag: true
				});
			}
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.status !== nextProps.status || nextState.errorFlag;
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {},
			    errorTips = {},
			    isVerify = true;
			for (var r in refs) {
				var value = refs[r].getValue();
				if (!value) {
					errorTips[r + "_error"] = "该项是必填项";
				} else {
					errorTips[r + "_error"] = "";
				}

				isVerify = isVerify && !!value;
				result[r] = value;
			}

			this.setState(_extends({}, errorTips, {
				errorFlag: true
			}));
			return _extends({
				hearVerify: isVerify
			}, result);
		}
	}]);

	return HearingCasesContent;
}(_react.Component);

/**
 * 事故详情
 */


var AccidentDetails = exports.AccidentDetails = function (_Component13) {
	_inherits(AccidentDetails, _Component13);

	function AccidentDetails() {
		_classCallCheck(this, AccidentDetails);

		return _possibleConstructorReturn(this, (AccidentDetails.__proto__ || Object.getPrototypeOf(AccidentDetails)).apply(this, arguments));
	}

	_createClass(AccidentDetails, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u4E8B\u6545\u8BE6\u60C5"
				),
				_react2.default.createElement(AccidentDetailsContent, _extends({ ref: "detail" }, this.props))
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return _extends({}, this.refs.detail.getValue());
		}
	}]);

	return AccidentDetails;
}(_react.Component);
/**
 * 文本域组件
 */


var LiDeductible = exports.LiDeductible = function (_Component14) {
	_inherits(LiDeductible, _Component14);

	function LiDeductible() {
		_classCallCheck(this, LiDeductible);

		return _possibleConstructorReturn(this, (LiDeductible.__proto__ || Object.getPrototypeOf(LiDeductible)).apply(this, arguments));
	}

	_createClass(LiDeductible, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["deductible"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["deductible--name"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["deductible--content"] },
					this.props.children
				)
			);
		}
	}]);

	return LiDeductible;
}(_react.Component);
/**
 * 事故详情内容
 */

var AccidentDetailsContent = exports.AccidentDetailsContent = function (_Component15) {
	_inherits(AccidentDetailsContent, _Component15);

	function AccidentDetailsContent(props) {
		_classCallCheck(this, AccidentDetailsContent);

		var _this18 = _possibleConstructorReturn(this, (AccidentDetailsContent.__proto__ || Object.getPrototypeOf(AccidentDetailsContent)).call(this, props));

		_this18.state = {
			casualty: [{
				id: 1,
				name: "是"
			}, {
				id: 2,
				name: "否"
			}],
			maxLength: 4
		};
		return _this18;
	}

	_createClass(AccidentDetailsContent, [{
		key: "render",
		value: function render() {
			var _this19 = this;

			var InputStyle = { width: '100%' };
			var SelectStyle = { width: '100%' };
			var DateStyle = {
				width: '100%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				paddingLeft: '8px',
				color: '#666'

			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-mustcontent"] },
				_react2.default.createElement(
					LiContent,
					{ LabelName: '出险地址' },
					_react2.default.createElement(_input2.default, {
						ref: "accident_address",
						styleCss: InputStyle,
						defaultValue: this.props.accident_address })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '出险时间' },
					_react2.default.createElement(_datePicker2.default, {
						ref: "accident_at",
						inputCss: DateStyle,
						defaultValue: (0, _helpTools.getFormatData)(this.props.accident_at) })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '事故类型' },
					_react2.default.createElement(_select2.default, {
						ref: "accident_type_id",
						styleCss: InputStyle,
						defaultValue: this.props.accident_type_id,
						options: this.props.accidentTypes })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '是否涉及人伤' },
					_react2.default.createElement(_select2.default, {
						ref: "is_involve_people",
						styleCss: InputStyle,
						defaultValue: this.props.is_involve_people,
						options: this.state.casualty })
				),
				_react2.default.createElement(
					LiDeductible,
					{ LabelName: "事故经过" },
					_react2.default.createElement(_textarea2.default, {
						ref: "accident_desc",
						placeholder: "事故详情",
						defaultValue: this.props.accident_desc })
				),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["res--picture"] },
					_react2.default.createElement(
						"span",
						{ className: _index2.default["deductible--name"] },
						_react2.default.createElement(
							"p",
							null,
							"\u73B0\u573A\u56FE\u7247 "
						)
					),
					_react2.default.createElement(
						"ul",
						{ className: _index2.default["deductible--content"] },
						this.getListImg(),
						_react2.default.createElement(
							"li",
							{ className: _index2.default["res-remark--upload"] },
							_react2.default.createElement(
								"div",
								{ className: _index2.default["upload--icon"] },
								_react2.default.createElement(_uploadFile.CommonUpload, {
									ref: "uploadFile",
									disabled: this.getIsDisabled(),
									onChange: function onChange(e) {
										return _this19.uploadChangeHandle();
									},
									accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg" })
							)
						),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["help--line"] },
							"\u5DF2\u4E0A\u4F20",
							this.getMediaLength(),
							"\u4E2A\uFF0C\u8FD8\u53EF\u4E0A\u4F20",
							this.state.maxLength - this.getMediaLength(),
							"\u4E2A"
						)
					)
				),
				_react2.default.createElement(
					LiDeductible,
					{ LabelName: "其他信息" },
					_react2.default.createElement(_textarea2.default, {
						ref: "remark",
						placeholder: "其他备注信息",
						defaultValue: this.props.remark })
				)
			);
		}
	}, {
		key: "getIsDisabled",
		value: function getIsDisabled() {
			var hasUploadLenth = this.getMediaLength();
			return hasUploadLenth >= this.state.maxLength ? true : false;
		}
		// 获取上传的个数

	}, {
		key: "getMediaLength",
		value: function getMediaLength() {
			var _props$sceneAttachmen = this.props.sceneAttachment,
			    sceneAttachment = _props$sceneAttachmen === undefined ? [] : _props$sceneAttachmen;

			return sceneAttachment && sceneAttachment.length ? sceneAttachment.length : 0;
		}
	}, {
		key: "uploadChangeHandle",
		value: function uploadChangeHandle() {
			var upload_claim = this.props.upload_claim;

			var formdata = this.refs.uploadFile.getValue();
			upload_claim(formdata, "scene");
		}
	}, {
		key: "delete_attach",
		value: function delete_attach(index) {
			var delete_claim = this.props.delete_claim;

			delete_claim(index);
		}
	}, {
		key: "getListImg",
		value: function getListImg() {
			var attachment = this.props.sceneAttachment || [],
			    self = this;
			return attachment.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ key: key },
					_react2.default.createElement("img", { src: m.attachment_path }),
					_react2.default.createElement("span", { className: _index2.default["delete--icon"], onClick: function onClick(e) {
							return self.delete_attach(key);
						} })
				);
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {},
			    attachment_ids = [],
			    _props$sceneAttachmen2 = this.props.sceneAttachment,
			    sceneAttachment = _props$sceneAttachmen2 === undefined ? [] : _props$sceneAttachmen2;


			for (var r in refs) {
				result[r] = refs[r].getValue();
			}

			sceneAttachment.map(function (s) {
				attachment_ids.push(s.attachment_id);
			});

			result["attachment_ids"] = attachment_ids.join(",");
			return result;
		}
	}]);

	return AccidentDetailsContent;
}(_react.Component);

/**
 * 损失情况LiUpLoad组件
 */


var LiUpLoad = exports.LiUpLoad = function (_Component16) {
	_inherits(LiUpLoad, _Component16);

	function LiUpLoad() {
		_classCallCheck(this, LiUpLoad);

		return _possibleConstructorReturn(this, (LiUpLoad.__proto__ || Object.getPrototypeOf(LiUpLoad)).apply(this, arguments));
	}

	_createClass(LiUpLoad, [{
		key: "render",
		value: function render() {
			var ButtonStyle = { width: '80px', background: 'white', color: 'black', border: '1px solid orange' };
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["upload"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["upload--name"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["upload--button"] },
					this.props.children
				)
			);
		}
	}]);

	return LiUpLoad;
}(_react.Component);
/**
 * 损失情况
 */


var Upload = exports.Upload = function (_Component17) {
	_inherits(Upload, _Component17);

	function Upload() {
		_classCallCheck(this, Upload);

		return _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));
	}

	_createClass(Upload, [{
		key: "render",
		value: function render() {
			var _this22 = this;

			var ButtonStyle = {
				width: "90px",
				background: "white",
				color: "orange",
				border: "1px solid orange",
				position: "absolute",
				top: "0",
				left: "0"
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u635F\u5931\u60C5\u51B5"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["applicant-mustcontent"] },
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '伤亡人员清单' },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["file--upload"] },
							_react2.default.createElement(_uploadFile.CommonUpload, {
								ref: "accident",
								accept: ".csv,.xlsx,.xls,.pdf,.doc,.docx",
								onChange: function onChange(e) {
									return _this22.uploadChangeHandle("accident");
								} }),
							_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "添加文件" })
						),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["upload--limit"] },
							"\u8BF7\u4E0A\u4F20pdf\u3001xlsx\u3001word\u683C\u5F0F\u9644\u4EF6"
						),
						_react2.default.createElement(
							"a",
							{ href: this.props.accidentAttachment.attachment_path },
							this.props.accidentAttachment && this.props.accidentAttachment.name
						)
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '物损清单' },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["file--upload"] },
							_react2.default.createElement(_uploadFile.CommonUpload, {
								ref: "things",
								accept: ".csv,.xlsx,.xls,.pdf,.doc,.docx",
								onChange: function onChange(e) {
									return _this22.uploadChangeHandle("things");
								} }),
							_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "添加文件" })
						),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["upload--limit"] },
							"\u8BF7\u4E0A\u4F20pdf\u3001xlsx\u3001word\u683C\u5F0F\u9644\u4EF6"
						),
						_react2.default.createElement(
							"a",
							{ href: this.props.thingsAttachment.attachment_path },
							this.props.thingsAttachment && this.props.thingsAttachment.name
						)
					)
				)
			);
		}
	}, {
		key: "uploadChangeHandle",
		value: function uploadChangeHandle(type) {
			var upload_claim = this.props.upload_claim;

			var fileValue = this.refs[type].getValue();
			upload_claim(fileValue, type);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _props = this.props,
			    _props$thingsAttachme = _props.thingsAttachment,
			    thingsAttachment = _props$thingsAttachme === undefined ? {} : _props$thingsAttachme,
			    _props$accidentAttach = _props.accidentAttachment,
			    accidentAttachment = _props$accidentAttach === undefined ? {} : _props$accidentAttach;

			return {
				accident_attachment_ids: accidentAttachment.attachment_id,
				things_attachment_ids: thingsAttachment.attachment_id
			};
		}
	}]);

	return Upload;
}(_react.Component);

/**
 * 赔付时间
 */

var PaymentTime = exports.PaymentTime = function (_Component18) {
	_inherits(PaymentTime, _Component18);

	function PaymentTime() {
		_classCallCheck(this, PaymentTime);

		return _possibleConstructorReturn(this, (PaymentTime.__proto__ || Object.getPrototypeOf(PaymentTime)).apply(this, arguments));
	}

	_createClass(PaymentTime, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["applicant--title"] },
					"\u8D54\u4ED8\u4FE1\u606F"
				),
				_react2.default.createElement(PaymentTimeContent, _extends({ ref: "pay" }, this.props))
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return _extends({}, this.refs.pay.getValue());
		}
	}]);

	return PaymentTime;
}(_react.Component);

/**
 * 赔付信息内容组件
 */


var PaymentTimeContent = exports.PaymentTimeContent = function (_Component19) {
	_inherits(PaymentTimeContent, _Component19);

	function PaymentTimeContent(props) {
		_classCallCheck(this, PaymentTimeContent);

		var _this24 = _possibleConstructorReturn(this, (PaymentTimeContent.__proto__ || Object.getPrototypeOf(PaymentTimeContent)).call(this, props));

		_this24.state = {
			comp_money: props.comp_money,
			apply_money: props.apply_money
		};

		return _this24;
	}

	_createClass(PaymentTimeContent, [{
		key: "render",
		value: function render() {
			var InputStyle = { width: '100%' };
			var DateStyle = {
				width: '100%',
				float: 'left',
				height: '30px',
				border: '1px solid #ccc',
				paddingLeft: '8px',
				color: '#666'

			};
			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["applicant-content"] },
				_react2.default.createElement(
					LiContent,
					{ LabelName: '报损金额 (元)' },
					_react2.default.createElement(_input2.default, {
						ref: "apply_money",
						styleCss: InputStyle,
						defaultValue: this.state.apply_money })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '赔付金额 (元)' },
					_react2.default.createElement(_input2.default, {
						ref: "comp_money",
						styleCss: InputStyle,
						defaultValue: this.state.comp_money })
				),
				_react2.default.createElement(
					LiContent,
					{ LabelName: '赔付时间' },
					_react2.default.createElement(_datePicker2.default, {
						ref: "comp_at",
						inputCss: DateStyle,
						defaultValue: (0, _helpTools.getFormatData)(this.props.comp_at) })
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {};
			for (var r in refs) {
				result[r] = refs[r].getValue();
			}
			return result;
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.apply_money != this.props.apply_money) {
				this.setState({
					apply_money: nextProps.apply_money
				});
			}
			if (nextProps.comp_money != this.props.comp_money) {
				this.setState({
					comp_money: nextProps.comp_money
				});
			}
		}
	}]);

	return PaymentTimeContent;
}(_react.Component);

/**
 * footerButton
 */


var FooterButton = exports.FooterButton = function (_Component20) {
	_inherits(FooterButton, _Component20);

	function FooterButton() {
		_classCallCheck(this, FooterButton);

		return _possibleConstructorReturn(this, (FooterButton.__proto__ || Object.getPrototypeOf(FooterButton)).apply(this, arguments));
	}

	_createClass(FooterButton, [{
		key: "render",
		value: function render() {
			var buttonStyle = _defineProperty({
				border: "1px solid #f6a811",
				background: "#f6a811",
				color: "black",
				float: 'right'
			}, "color", 'white');

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["action--componnet"] },
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: "1", offset: "5.5" },
					_react2.default.createElement(_button2.default, { text: "保存",
						onClick: this.props.onClick,
						styleCss: buttonStyle })
				)
			);
		}
	}]);

	return FooterButton;
}(_react.Component);

function RegExpPhoneFeild() {
	var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var isMust = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

	var isRight = regExp.test(value);

	return {
		isRight: isMust && !value || value && !isRight ? false : true,
		msg: value ? isRight ? "" : "手机号格式不正确" : ""
	};
}