"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ActionComponent = exports.ArticleContent = exports.UploadFile = exports.Upload = exports.LiUpLoad = exports.DeductibleExcess = exports.LiDeductible = exports.SecurityInformation = exports.LiMustComponent = exports.InsuredContent = exports.InsuredInformation = exports.EnterprisePopups = exports.EnterpriceInfo = exports.ChoiceEnterprise = exports.AcceptDetailApplicant = exports.LiComponent = exports.AcceptDetailButton = undefined;

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

var _function = require("../../../../helper/function");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**顶部按钮**/
var AcceptDetailButton = exports.AcceptDetailButton = function (_Component) {
	_inherits(AcceptDetailButton, _Component);

	function AcceptDetailButton() {
		_classCallCheck(this, AcceptDetailButton);

		return _possibleConstructorReturn(this, (AcceptDetailButton.__proto__ || Object.getPrototypeOf(AcceptDetailButton)).apply(this, arguments));
	}

	_createClass(AcceptDetailButton, [{
		key: "render",
		value: function render() {
			var ButtonStyle = { width: '60px', background: 'orange', float: 'right', marginRight: '17px' };
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["button--return"] },
				_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "返回", onClick: function onClick(e) {
						return history.go(-1);
					} })
			);
		}
	}]);

	return AcceptDetailButton;
}(_react.Component);

/**
 * li组件
 */


var LiComponent = exports.LiComponent = function (_Component2) {
	_inherits(LiComponent, _Component2);

	function LiComponent() {
		_classCallCheck(this, LiComponent);

		return _possibleConstructorReturn(this, (LiComponent.__proto__ || Object.getPrototypeOf(LiComponent)).apply(this, arguments));
	}

	_createClass(LiComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["content--li"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelname"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelinput"] },
					this.props.children
				)
			);
		}
	}]);

	return LiComponent;
}(_react.Component);

/**投保人信息**/


var AcceptDetailApplicant = function (_Component3) {
	_inherits(AcceptDetailApplicant, _Component3);

	function AcceptDetailApplicant(props) {
		_classCallCheck(this, AcceptDetailApplicant);

		var _this3 = _possibleConstructorReturn(this, (AcceptDetailApplicant.__proto__ || Object.getPrototypeOf(AcceptDetailApplicant)).call(this, props));

		_this3.state = {
			selectValue: ""
		};
		return _this3;
	}

	_createClass(AcceptDetailApplicant, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			var _state$selectValue = this.state.selectValue,
			    selectValue = _state$selectValue === undefined ? {} : _state$selectValue;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u6295\u4FDD\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(ChoiceEnterprise, _extends({}, this.props, {
					selectValue: function selectValue(_selectValue2) {
						return _this4.selectValue(_selectValue2);
					} })),
				this.state.selectValue ? _react2.default.createElement(EnterpriceInfo, { selectValue: this.state.selectValue }) : ""
			);
		}
	}, {
		key: "selectValue",
		value: function selectValue(_selectValue) {
			var has_select_company = this.props.has_select_company;


			this.setState({
				selectValue: _selectValue
			}, function () {
				has_select_company && has_select_company(_selectValue);
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var selectValue = this.state.selectValue;

			return {
				apply_company_name: selectValue.organName,
				apply_company_id: selectValue.organID,
				grid_id: selectValue.gridID
			};
		}
	}]);

	return AcceptDetailApplicant;
}(_react.Component);

/**
 * 投保人选择按钮
 */


exports.AcceptDetailApplicant = AcceptDetailApplicant;

var ChoiceEnterprise = exports.ChoiceEnterprise = function (_Component4) {
	_inherits(ChoiceEnterprise, _Component4);

	function ChoiceEnterprise(props) {
		_classCallCheck(this, ChoiceEnterprise);

		var _this5 = _possibleConstructorReturn(this, (ChoiceEnterprise.__proto__ || Object.getPrototypeOf(ChoiceEnterprise)).call(this, props));

		_this5.state = {
			isOpenChoicelog: false
		};
		return _this5;
	}

	_createClass(ChoiceEnterprise, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			var ButtonStyle = {
				width: '76px',
				background: '#eec420',
				float: 'right',
				marginTop: '5px'
			};
			var accpt = this.props.accpt;
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["choice"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["choice--name"] },
					_react2.default.createElement("img", { src: require("../img/pic.png") }),
					"\u8BF7\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u9009\u62E9\u4F01\u4E1A"
				),
				_react2.default.createElement(_button2.default, {
					styleCss: ButtonStyle,
					text: "选择企业",
					onClick: function onClick(e) {
						return _this6.openChoicelog();
					} }),
				this.state.isOpenChoicelog ? _react2.default.createElement(EnterprisePopups, _extends({}, this.props, {
					conserveHandle: function conserveHandle(selectCompany) {
						return _this6.closeReslog(selectCompany);
					} })) : ''
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
		value: function closeReslog(company) {
			var self = this,
			    selectCompany = this.state.selectCompany;


			console.log(company, 22222222222222);
			// if(selectCompany){
			this.setState({
				selectCompany: company ? company : selectCompany,
				isOpenChoicelog: false
			}, function () {
				var selectValue = self.props.selectValue;


				company && selectValue && selectValue(company);
			});
			// }else{
			// 	this.setState({
			// 		isOpenChoicelog:false,
			// 	})
			// }
		}
	}]);

	return ChoiceEnterprise;
}(_react.Component);

/**
 * 投保人的个人信息
 */


var EnterpriceInfo = exports.EnterpriceInfo = function (_Component5) {
	_inherits(EnterpriceInfo, _Component5);

	function EnterpriceInfo() {
		_classCallCheck(this, EnterpriceInfo);

		return _possibleConstructorReturn(this, (EnterpriceInfo.__proto__ || Object.getPrototypeOf(EnterpriceInfo)).apply(this, arguments));
	}

	_createClass(EnterpriceInfo, [{
		key: "render",
		value: function render() {
			var _props$selectValue = this.props.selectValue,
			    selectValue = _props$selectValue === undefined ? {} : _props$selectValue;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "投保人名称" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.organName, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "所属地区" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.grid_name, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "工商注册号" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.addon && selectValue.addon.register, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "行业类型" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.addon && selectValue.addon.typeName, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "法人" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.addon && selectValue.addon.legalPerson, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "法人联系方式" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.addon && selectValue.addon.legalPhone, disabled: "true" })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "企业地址" },
						_react2.default.createElement(_input2.default, { defaultValue: selectValue.addon && selectValue.addon.address, disabled: "true" })
					)
				)
			);
		}
	}]);

	return EnterpriceInfo;
}(_react.Component);

/**
 * 选择企业弹窗
 */


var EnterprisePopups = exports.EnterprisePopups = function (_Component6) {
	_inherits(EnterprisePopups, _Component6);

	function EnterprisePopups(props) {
		_classCallCheck(this, EnterprisePopups);

		var _this8 = _possibleConstructorReturn(this, (EnterprisePopups.__proto__ || Object.getPrototypeOf(EnterprisePopups)).call(this, props));

		_this8.state = {
			index: '',
			companyList: props.companyList || []
		};
		return _this8;
	}

	_createClass(EnterprisePopups, [{
		key: "render",
		value: function render() {
			var _this9 = this;

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
										return _this9.search();
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
										"\u6CE8\u518C\u53F7"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u884C\u4E1A\u7C7B\u578B"
									),
									_react2.default.createElement(
										"th",
										null,
										"\u5730\u5740"
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
								currentPage: this.props.companyCondition && this.props.companyCondition.page,
								totalPage: this.props.companyCondition && this.props.companyCondition.totalPage,
								pageGoTo: function pageGoTo(page) {
									return _this9.pageGoTo(page);
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
									return _this9.cancleHandle();
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
							_react2.default.createElement(_button2.default, { text: "确定",
								styleCss: buttonStyle,
								onClick: function onClick(e) {
									return _this9.conserveHandle();
								} })
						)
					)
				)
			);
		}
	}, {
		key: "getTrPopupsContent",
		value: function getTrPopupsContent() {
			var _this10 = this;

			var _state$companyList = this.state.companyList,
			    companyList = _state$companyList === undefined ? [] : _state$companyList;

			return companyList.map(function (l, key) {
				var classname = l.isSelected ? _index2.default["table_row--hover"] : _index2.default["table_row"];
				return _react2.default.createElement(
					"tr",
					{ className: classname, key: key },
					_react2.default.createElement(
						"td",
						{ onClick: function onClick(e) {
								return _this10.selectedTr(key);
							} },
						_react2.default.createElement(
							"span",
							{ className: l.isSelected ? _index2.default["company_select"] : _index2.default["company_select--not"] },
							" "
						)
					),
					_react2.default.createElement(
						"td",
						{ title: l.organName },
						l.organName
					),
					_react2.default.createElement(
						"td",
						{ title: l.grid_name },
						l.grid_name
					),
					_react2.default.createElement(
						"td",
						{ title: l.addon && l.addon.register },
						l.addon && l.addon.register
					),
					_react2.default.createElement(
						"td",
						{ title: l.addon && l.addon.typeName },
						l.addon && l.addon.typeName
					),
					_react2.default.createElement(
						"td",
						{ title: l.addon && l.addon.address },
						l.addon && l.addon.address
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
			    get_company_list = this.props.get_company_list;

			var params = {
				q: q,
				page: page,
				count: 8
			};
			get_company_list(params);
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
				companyList: companyList,
				index: index
			});
		}

		// conserve

	}, {
		key: "conserveHandle",
		value: function conserveHandle() {
			var conserveHandle = this.props.conserveHandle,
			    _state = this.state,
			    companyList = _state.companyList,
			    index = _state.index;

			conserveHandle && conserveHandle(companyList[index]);
		}

		// cancle

	}, {
		key: "cancleHandle",
		value: function cancleHandle() {
			var conserveHandle = this.props.conserveHandle;

			conserveHandle && conserveHandle();
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.companyList != this.props.companyList) {
				this.setState({
					companyList: nextProps.companyList
				});
			}
		}
	}]);

	return EnterprisePopups;
}(_react.Component);

/**
 * 被保人信息
 */


var InsuredInformation = exports.InsuredInformation = function (_Component7) {
	_inherits(InsuredInformation, _Component7);

	function InsuredInformation(props) {
		_classCallCheck(this, InsuredInformation);

		var _this11 = _possibleConstructorReturn(this, (InsuredInformation.__proto__ || Object.getPrototypeOf(InsuredInformation)).call(this, props));

		_this11.state = {
			isOpenChoicelog: false,
			isTheSame: "",
			selectCompany: ""
		};
		return _this11;
	}

	_createClass(InsuredInformation, [{
		key: "render",
		value: function render() {
			var _this12 = this;

			var ButtonStyle = {
				width: '76px',
				background: '#eec420',
				float: 'right',
				marginTop: '5px'
			};
			var InputStyle = { width: '14px', height: '14px', border: '#46b0d7' };

			var accpt = this.props.accpt;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u88AB\u4FDD\u4EBA\u4FE1\u606F"
				),
				!this.props.acceptDetail ? _react2.default.createElement(
					"div",
					{ className: _index2.default["insured-content"] },
					_react2.default.createElement(
						"p",
						{ className: _index2.default["insured--tips"] },
						"\u63D0\u793A: \u8BF7\u5148\u9009\u62E9\u6295\u4FDD\u4EBA\u76F8\u5173\u4FE1\u606F\uFF01"
					)
				) : _react2.default.createElement(
					"div",
					{ className: _index2.default["insured-content"] },
					_react2.default.createElement(
						"div",
						{ className: _index2.default["insured--name"] },
						_react2.default.createElement("img", { src: require("../img/pic.png") }),
						"\u548C\u88AB\u4FDD\u4EBA\u4E00\u81F4 :"
					),
					_react2.default.createElement(
						"div",
						{ className: _index2.default["insured--input"] },
						_react2.default.createElement(
							"span",
							{ className: this.state.isTheSame == "yes" ? _index2.default["insure__select"] : _index2.default["insure__select--not"], onClick: function onClick(e) {
									return _this12.checkInformation("yes");
								} },
							"\u662F"
						),
						_react2.default.createElement(
							"span",
							{ className: this.state.isTheSame == "no" ? _index2.default["insure__select"] : _index2.default["insure__select--not"], onClick: function onClick(e) {
									return _this12.checkInformation("no");
								} },
							"\u5426"
						)
					),
					this.state.isTheSame == "no" ? _react2.default.createElement(_button2.default, {
						styleCss: ButtonStyle,
						text: "选择企业",
						onClick: function onClick(e) {
							return _this12.openChoicelog();
						} }) : "",
					this.state.isOpenChoicelog ? _react2.default.createElement(EnterprisePopups, _extends({}, this.props, {
						conserveHandle: function conserveHandle(selectCompany) {
							return _this12.closeReslog(selectCompany);
						} })) : ''
				),
				this.state.selectCompany ? _react2.default.createElement(InsuredContent, { info: this.state.selectCompany }) : ""
			);
		}
	}, {
		key: "checkInformation",
		value: function checkInformation(type) {
			var self = this,
			    selectCompany = this.state.selectCompany;

			this.setState({
				isTheSame: type,
				selectCompany: type == "yes" ? "" : selectCompany
			}, function () {
				var onChange = self.props.onChange;


				type == "yes" && onChange && onChange();
			});
		}
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
		value: function closeReslog(company) {
			var onChange = this.props.onChange,
			    selectCompany = this.state.selectCompany;


			this.setState({
				isOpenChoicelog: false,
				selectCompany: company ? company : selectCompany
			}, function () {
				company && onChange && onChange();
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _state2 = this.state,
			    selectCompany = _state2.selectCompany,
			    isTheSame = _state2.isTheSame,
			    acceptDetail = this.props.acceptDetail;


			if (isTheSame == 'yes') {
				return {
					company_name: acceptDetail.organName,
					company_id: acceptDetail.organID,
					grid_id: acceptDetail.gridID
				};
			} else {
				return {
					company_name: selectCompany.organName,
					company_id: selectCompany.organID,
					grid_id: selectCompany.gridID
				};
			}
		}
	}]);

	return InsuredInformation;
}(_react.Component);

/**
 * 被保人content信息
 */


var InsuredContent = exports.InsuredContent = function (_Component8) {
	_inherits(InsuredContent, _Component8);

	function InsuredContent() {
		_classCallCheck(this, InsuredContent);

		return _possibleConstructorReturn(this, (InsuredContent.__proto__ || Object.getPrototypeOf(InsuredContent)).apply(this, arguments));
	}

	_createClass(InsuredContent, [{
		key: "render",
		value: function render() {
			var _props$info = this.props.info,
			    info = _props$info === undefined ? {} : _props$info;

			return _react2.default.createElement(
				"ul",
				{ className: _index2.default["content"] },
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "被保人名称" },
					_react2.default.createElement(_input2.default, { defaultValue: info.organName, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "所属地区" },
					_react2.default.createElement(_input2.default, { defaultValue: info.grid_name, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "工商注册号" },
					_react2.default.createElement(_input2.default, { defaultValue: info.addon && info.addon.register, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "行业类型" },
					_react2.default.createElement(_input2.default, { defaultValue: info.addon && info.addon.typeName, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "法人" },
					_react2.default.createElement(_input2.default, { defaultValue: info.addon && info.addon.legalPerson, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "法人联系方式" },
					_react2.default.createElement(_input2.default, { defaultValue: info.addon && info.addon.legalPhone, disabled: "true" })
				),
				_react2.default.createElement(
					LiComponent,
					{ LabelName: "企业地址" },
					_react2.default.createElement(_input2.default, { defaultValue: info.addon && info.addon.address, disabled: "true" })
				)
			);
		}
	}]);

	return InsuredContent;
}(_react.Component);

/**
 * LiMustComponent组件
 */


var LiMustComponent = exports.LiMustComponent = function (_Component9) {
	_inherits(LiMustComponent, _Component9);

	function LiMustComponent() {
		_classCallCheck(this, LiMustComponent);

		return _possibleConstructorReturn(this, (LiMustComponent.__proto__ || Object.getPrototypeOf(LiMustComponent)).apply(this, arguments));
	}

	_createClass(LiMustComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["content--li"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelname"] },
					_react2.default.createElement("img", { src: require("../img/pic.png") }),
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelinput"] },
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

	return LiMustComponent;
}(_react.Component);

/**
 * 保障信息
 */


var SecurityInformation = exports.SecurityInformation = function (_Component10) {
	_inherits(SecurityInformation, _Component10);

	function SecurityInformation(props) {
		_classCallCheck(this, SecurityInformation);

		var _this15 = _possibleConstructorReturn(this, (SecurityInformation.__proto__ || Object.getPrototypeOf(SecurityInformation)).call(this, props));

		_this15.state = {};
		return _this15;
	}

	_createClass(SecurityInformation, [{
		key: "render",
		value: function render() {
			var _this16 = this;

			var InputStyle = { width: '100px' };
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
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u4FDD\u969C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "承保公司", errorTips: this.state.insurance_id_error },
						_react2.default.createElement(_select2.default, {
							ref: "insurance_id",
							defaultValue: this.props.insurance_id,
							onChange: function onChange(e) {
								return _this16.insuranceChangeHandle();
							},
							options: this.props.acceptCompany })
					),
					_react2.default.createElement(
						LiComponent,
						{ LabelName: "投保单号" },
						_react2.default.createElement(_input2.default, {
							ref: "apply_number",
							defaultValue: this.props.applyNumber,
							disabled: true })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "保单号", errorTips: this.state.insurance_number_error },
						_react2.default.createElement(_input2.default, {
							ref: "insurance_number",
							defaultValue: this.props.insurance_number })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "投保产品", errorTips: this.state.insurance_type_id_error },
						_react2.default.createElement(_select2.default, {
							ref: "insurance_type_id",
							defaultValue: this.props.insurance_type_id,
							options: this.props.insurProductList,
							onChange: function onChange(e) {
								return _this16.productChangeHandle();
							} })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "投保人数", errorTips: this.state.insurance_population_error },
						_react2.default.createElement(_input2.default, {
							ref: "insurance_population",
							defaultValue: this.props.insurance_population })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "保费(元)", errorTips: this.state.insure_money_error },
						_react2.default.createElement(_input2.default, {
							ref: "insure_money",
							defaultValue: this.props.insure_money })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "累计责任限额(万元)", errorTips: this.state.add_up_liability_limit_error },
						_react2.default.createElement(_input2.default, {
							ref: "add_up_liability_limit",
							defaultValue: this.props.add_up_liability_limit })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "每次事故责任限额(万元)", errorTips: this.state.every_liability_limit_error },
						_react2.default.createElement(_input2.default, {
							ref: "every_liability_limit",
							defaultValue: this.props.every_liability_limit })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "每次事故每人责任限额(万元)", errorTips: this.state.person_avg_insurance_error },
						_react2.default.createElement(_input2.default, {
							ref: "person_avg_insurance",
							defaultValue: this.props.person_avg_insurance })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "投保日期", errorTips: this.state.insure_date_error },
						_react2.default.createElement(_datePicker2.default, {
							ref: "insure_date",
							defaultValue: (0, _function.getFormatData)(this.props.insure_date),
							inputCss: DateStyle }),
						_react2.default.createElement("div", { className: _index2.default["clear"] })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "投保期限", errorTips: this.state.start_date_error },
						_react2.default.createElement(_datePicker2.default, {
							ref: "start_date",
							defaultValue: (0, _function.getFormatData)(this.props.start_date),
							inputCss: CoverStyle }),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["separator"] },
							"~"
						),
						_react2.default.createElement(_datePicker2.default, {
							ref: "done_at",
							defaultValue: (0, _function.getFormatData)(this.props.done_at),
							inputCss: CoverStyle }),
						_react2.default.createElement("div", { className: _index2.default["clear"] })
					)
				)
			);
		}
	}, {
		key: "insuranceChangeHandle",
		value: function insuranceChangeHandle() {
			var value = this.refs.insurance_id.getValue(),
			    insuranceChangeHandle = this.props.insuranceChangeHandle;

			insuranceChangeHandle && insuranceChangeHandle(value);
		}
	}, {
		key: "productChangeHandle",
		value: function productChangeHandle() {
			var productChangeHandle = this.props.productChangeHandle,
			    value = this.refs.insurance_type_id.getAllValue();

			productChangeHandle && productChangeHandle(value);
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
				result[r] = value;
				isVerify = isVerify && !!value;
				if (!value) {
					errorTips[r + "_error"] = "该项是必填项";
				} else {
					errorTips[r + "_error"] = "";
				}
			}

			this.setState(_extends({}, errorTips));

			return _extends({}, result, {
				isVerify: isVerify
			});
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.insurance_id != this.props.insurance_id) {
				this.insuranceChangeHandle();
			}
		}
	}]);

	return SecurityInformation;
}(_react.Component);

/**
 * 免赔额条例组件
 */


var LiDeductible = exports.LiDeductible = function (_Component11) {
	_inherits(LiDeductible, _Component11);

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
 * 免赔额条例
 */


var DeductibleExcess = exports.DeductibleExcess = function (_Component12) {
	_inherits(DeductibleExcess, _Component12);

	function DeductibleExcess() {
		_classCallCheck(this, DeductibleExcess);

		return _possibleConstructorReturn(this, (DeductibleExcess.__proto__ || Object.getPrototypeOf(DeductibleExcess)).apply(this, arguments));
	}

	_createClass(DeductibleExcess, [{
		key: "render",
		value: function render() {
			var _props$deductibleExce = this.props.deductibleExcess,
			    deductibleExcess = _props$deductibleExce === undefined ? {} : _props$deductibleExce;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u514D\u8D54\u989D\u6761\u4F8B"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiDeductible,
						{ LabelName: "从业人员" },
						_react2.default.createElement(_textarea2.default, {
							disabled: true,
							ref: "practitioners",
							defaultValue: deductibleExcess.practitioners })
					),
					_react2.default.createElement(
						LiDeductible,
						{ LabelName: "第三者责任" },
						_react2.default.createElement(_textarea2.default, {
							disabled: true,
							ref: "third_party",
							defaultValue: deductibleExcess.third_party })
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return {
				practitioners: this.refs.practitioners.getValue(),
				third_party: this.refs.third_party.getValue()
			};
		}
	}]);

	return DeductibleExcess;
}(_react.Component);

/**
 * 资料上传LiUpLoad组件
 */


var LiUpLoad = exports.LiUpLoad = function (_Component13) {
	_inherits(LiUpLoad, _Component13);

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
					"div",
					{ className: _index2.default["upload--name"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["upload--button"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["upload--limit"] },
						this.props.LabelContent
					)
				)
			);
		}
	}]);

	return LiUpLoad;
}(_react.Component);
/**
 * 资料上传
 */


var Upload = exports.Upload = function (_Component14) {
	_inherits(Upload, _Component14);

	function Upload(props) {
		_classCallCheck(this, Upload);

		var _this20 = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

		_this20.state = {
			insureAcctach: {}
		};
		return _this20;
	}

	_createClass(Upload, [{
		key: "render",
		value: function render() {
			var _props$insureAcctach = this.props.insureAcctach,
			    insureAcctach = _props$insureAcctach === undefined ? {} : _props$insureAcctach;

			console.log(insureAcctach, '上传文件');
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u8D44\u6599\u4E0A\u4F20"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '营业执照 ',
							LabelContent: '请上传pdf、jpg、jpeg、png格式附件' },
						_react2.default.createElement(UploadFile, {
							accept: ".jpg, .jpeg,.png,.pdf",
							uploadHandle: this.props.uploadHandle,
							type: "business" }),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.business.attachment_path },
								insureAcctach.business.name
							)
						)
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '全员投保证明 ',
							LabelContent: '请上传pdf、jpg、jpeg、png格式附件' },
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.full.attachment_path },
								insureAcctach.full.name
							)
						),
						_react2.default.createElement(UploadFile, {
							accept: ".jpg, .jpeg,.png,.pdf",
							uploadHandle: this.props.uploadHandle,
							type: "full" })
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '社保征缴通知单 ',
							LabelContent: '请上传pdf、jpg、jpeg、png格式附件' },
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.social.attachment_path },
								insureAcctach.social.name
							)
						),
						_react2.default.createElement(UploadFile, {
							accept: ".jpg, .jpeg,.png,.pdf",
							uploadHandle: this.props.uploadHandle,
							type: "social" })
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '投保单盖章上传 ',
							LabelContent: '请上传pdf、jpg、jpeg、png格式附件' },
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.seal.attachment_path },
								insureAcctach.seal.name
							)
						),
						_react2.default.createElement(UploadFile, {
							accept: ".jpg, .jpeg,.png,.pdf",
							uploadHandle: this.props.uploadHandle,
							type: "seal" })
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '人员清单 ',
							LabelContent: '请上传word、excel、pdf格式附件' },
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.people.attachment_path },
								insureAcctach.people.name
							)
						),
						_react2.default.createElement(UploadFile, {
							accept: ".csv,.xlsx,.xls,.pdf,.doc,.docx",

							uploadHandle: this.props.uploadHandle,
							type: "people" })
					),
					_react2.default.createElement(
						LiUpLoad,
						{ LabelName: '其他 ',
							LabelContent: '请上传word、excel、pdf、jpg、jpeg、png格式附件' },
						_react2.default.createElement(
							"span",
							{ className: _index2.default["attach--display"] },
							_react2.default.createElement(
								"a",
								{ href: insureAcctach.other.attachment_path },
								insureAcctach.other.name
							)
						),
						_react2.default.createElement(UploadFile, {
							accept: ".csv,.xlsx,.xls,.pdf,.doc,.docx,.jpg, .jpeg,.png",
							uploadHandle: this.props.uploadHandle,
							type: "other" })
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _props$insureAcctach2 = this.props.insureAcctach,
			    insureAcctach = _props$insureAcctach2 === undefined ? {} : _props$insureAcctach2,
			    result = {};

			return {
				business_attachment_ids: insureAcctach["business"]["attachment_id"] || "",
				full_attachment_ids: insureAcctach["full"]["attachment_id"] || "",
				social_attachment_ids: insureAcctach["social"]["attachment_id"] || "",
				seal_attachment_ids: insureAcctach["seal"]["attachment_id"] || "",
				people_attachment_ids: insureAcctach["people"]["attachment_id"] || "",
				other_attachment_ids: insureAcctach["other"]["attachment_id"] || ""
			};
		}
	}]);

	return Upload;
}(_react.Component);

/**
 * 上传附件的句柄
 */


var UploadFile = exports.UploadFile = function (_Component15) {
	_inherits(UploadFile, _Component15);

	function UploadFile() {
		_classCallCheck(this, UploadFile);

		return _possibleConstructorReturn(this, (UploadFile.__proto__ || Object.getPrototypeOf(UploadFile)).apply(this, arguments));
	}

	_createClass(UploadFile, [{
		key: "render",
		value: function render() {
			var _this22 = this;

			var ButtonStyle = {
				position: "absolute",
				width: '80px',
				background: 'white',
				color: 'orange',
				border: '1px solid orange'
			};

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["upload--file"] },
				_react2.default.createElement(
					"div",
					{ className: _index2.default["upload--handle"] },
					_react2.default.createElement(_uploadFile.CommonUpload, {
						ref: "file",
						accept: this.props.accept,
						onChange: function onChange(e) {
							return _this22.upload();
						} })
				),
				_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "选择文件" })
			);
		}
	}, {
		key: "upload",
		value: function upload() {
			var value = this.refs.file.getValue();
			var _props = this.props,
			    uploadHandle = _props.uploadHandle,
			    type = _props.type;

			uploadHandle && uploadHandle(value, type);
		}
	}]);

	return UploadFile;
}(_react.Component);

/**
 * 条款内容
 */


var ArticleContent = exports.ArticleContent = function (_Component16) {
	_inherits(ArticleContent, _Component16);

	function ArticleContent() {
		_classCallCheck(this, ArticleContent);

		return _possibleConstructorReturn(this, (ArticleContent.__proto__ || Object.getPrototypeOf(ArticleContent)).apply(this, arguments));
	}

	_createClass(ArticleContent, [{
		key: "render",
		value: function render() {
			var articleContent = this.props.articleContent.attachment || {};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u6761\u6B3E\u5185\u5BB9"
				),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						"span",
						{ className: _index2.default["article--name"] },
						"\u4FDD\u9669\u6761\u6B3E : "
					),
					_react2.default.createElement(
						"span",
						{ className: _index2.default["article--content"] },
						_react2.default.createElement(
							"a",
							{ href: articleContent.attachment_path },
							articleContent.name
						)
					)
				)
			);
		}
	}]);

	return ArticleContent;
}(_react.Component);
/**
 * 保存按钮
 */

var ActionComponent = exports.ActionComponent = function (_Component17) {
	_inherits(ActionComponent, _Component17);

	function ActionComponent() {
		_classCallCheck(this, ActionComponent);

		return _possibleConstructorReturn(this, (ActionComponent.__proto__ || Object.getPrototypeOf(ActionComponent)).apply(this, arguments));
	}

	_createClass(ActionComponent, [{
		key: "render",
		value: function render() {
			var buttonStyle = {
				border: "1px solid #f6a811",
				background: "#f6a811",
				color: "white"
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["action--componnet"] },
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: "1", offset: "5.5" },
					_react2.default.createElement(_button2.default, { text: "保存", styleCss: buttonStyle, onClick: this.props.submitHandle })
				)
			);
		}
	}]);

	return ActionComponent;
}(_react.Component);