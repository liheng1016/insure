"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Clause = exports.LiDataUpload = exports.DataUpload = exports.LiDeductible = exports.DeductibleExcess = exports.SecurityInformation = exports.ApplicantPassive = exports.AcceptDetailApplicant = exports.LiComponent = exports.AcceptDetailContent = exports.AcceptDetailButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _detail = require("./detail.css");

var _detail2 = _interopRequireDefault(_detail);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _action = require("../../model/insurInfo/action");

var _action2 = _interopRequireDefault(_action);

var _function = require("../../../../helper/function");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 承保的保单详情
 */
var InformationDetail = function (_Component) {
	_inherits(InformationDetail, _Component);

	function InformationDetail() {
		_classCallCheck(this, InformationDetail);

		return _possibleConstructorReturn(this, (InformationDetail.__proto__ || Object.getPrototypeOf(InformationDetail)).apply(this, arguments));
	}

	_createClass(InformationDetail, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["wrap"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(AcceptDetailButton, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(AcceptDetailContent, this.props)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    get_detail = _props.get_detail,
			    params = _props.params;

			get_detail({
				id: params.id
			});
		}
	}]);

	return InformationDetail;
}(_react.Component);

/**顶部按钮**/


var AcceptDetailButton = exports.AcceptDetailButton = function (_Component2) {
	_inherits(AcceptDetailButton, _Component2);

	function AcceptDetailButton() {
		_classCallCheck(this, AcceptDetailButton);

		return _possibleConstructorReturn(this, (AcceptDetailButton.__proto__ || Object.getPrototypeOf(AcceptDetailButton)).apply(this, arguments));
	}

	_createClass(AcceptDetailButton, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			var ButtonStyle = { width: '60px', background: '#f5a70f', float: 'right', marginLeft: '15px' };
			var backStyle = { width: '60px', background: '#f2c01f', float: 'right', marginLeft: '15px' };
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["button--return"] },
				_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "返回", onClick: function onClick(e) {
						return history.go(-1);
					} }),
				_react2.default.createElement(_button2.default, { styleCss: backStyle, text: "编辑", onClick: function onClick(e) {
						return _this3.go_to_edit();
					} })
			);
		}
	}, {
		key: "go_to_edit",
		value: function go_to_edit() {
			var params = this.props.params;

			this.context.router.push("/acceptInsurance/edit/" + params.id);
		}
	}]);

	return AcceptDetailButton;
}(_react.Component);

/**主体内容**/


var AcceptDetailContent = exports.AcceptDetailContent = function (_Component3) {
	_inherits(AcceptDetailContent, _Component3);

	function AcceptDetailContent() {
		_classCallCheck(this, AcceptDetailContent);

		return _possibleConstructorReturn(this, (AcceptDetailContent.__proto__ || Object.getPrototypeOf(AcceptDetailContent)).apply(this, arguments));
	}

	_createClass(AcceptDetailContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["content-wrap"] },
				_react2.default.createElement(AcceptDetailApplicant, { applicant: this.props.detail }),
				_react2.default.createElement(ApplicantPassive, { passive: this.props.detail }),
				_react2.default.createElement(SecurityInformation, { security: this.props.detail }),
				_react2.default.createElement(DeductibleExcess, { deductible: this.props.detail }),
				_react2.default.createElement(DataUpload, { dataupload: this.props.detail }),
				_react2.default.createElement(Clause, { clause: this.props.detail })
			);
		}
	}]);

	return AcceptDetailContent;
}(_react.Component);

/*li组件*/


var LiComponent = exports.LiComponent = function (_Component4) {
	_inherits(LiComponent, _Component4);

	function LiComponent() {
		_classCallCheck(this, LiComponent);

		return _possibleConstructorReturn(this, (LiComponent.__proto__ || Object.getPrototypeOf(LiComponent)).apply(this, arguments));
	}

	_createClass(LiComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["lable--name"] },
					this.props.lableName,
					" "
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["lable--content"] },
					this.props.content
				)
			);
		}
	}]);

	return LiComponent;
}(_react.Component);

/**投保人信息**/


var AcceptDetailApplicant = exports.AcceptDetailApplicant = function (_Component5) {
	_inherits(AcceptDetailApplicant, _Component5);

	function AcceptDetailApplicant() {
		_classCallCheck(this, AcceptDetailApplicant);

		return _possibleConstructorReturn(this, (AcceptDetailApplicant.__proto__ || Object.getPrototypeOf(AcceptDetailApplicant)).apply(this, arguments));
	}

	_createClass(AcceptDetailApplicant, [{
		key: "render",
		value: function render() {
			var applicant = this.props.applicant || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u6295\u4FDD\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(LiComponent, { lableName: "投保人名称 : ",
						content: applicant.applyCompany && applicant.applyCompany.organName }),
					_react2.default.createElement(LiComponent, { lableName: "所属地区 : ",
						content: applicant.applyCompany && applicant.applyCompany.gridName }),
					_react2.default.createElement(LiComponent, { lableName: "工商注册号 : ",
						content: applicant.applyCompany && applicant.applyCompany.register }),
					_react2.default.createElement(LiComponent, { lableName: "行业类型 : ",
						content: applicant.applyCompany && applicant.applyCompany.typeName }),
					_react2.default.createElement(LiComponent, { lableName: "法人 : ",
						content: applicant.applyCompany && applicant.applyCompany.legalPerson }),
					_react2.default.createElement(LiComponent, { lableName: "法人联系方式 : ",
						content: applicant.applyCompany && applicant.applyCompany.legalPhone }),
					_react2.default.createElement(LiComponent, { lableName: "企业地址 : ",
						content: applicant.applyCompany && applicant.applyCompany.address })
				)
			);
		}
	}]);

	return AcceptDetailApplicant;
}(_react.Component);

/**被投保人信息**/


var ApplicantPassive = exports.ApplicantPassive = function (_Component6) {
	_inherits(ApplicantPassive, _Component6);

	function ApplicantPassive() {
		_classCallCheck(this, ApplicantPassive);

		return _possibleConstructorReturn(this, (ApplicantPassive.__proto__ || Object.getPrototypeOf(ApplicantPassive)).apply(this, arguments));
	}

	_createClass(ApplicantPassive, [{
		key: "render",
		value: function render() {
			var passive = this.props.passive || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u88AB\u6295\u4FDD\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["content--span"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["content--left"] },
							"\u548C\u6295\u4FDD\u4EBA\u4E00\u81F4 : "
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["content--right"] },
							passive.company_id == passive.apply_company_id ? "是" : "否"
						)
					),
					passive.company_id !== passive.apply_company_id ? _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(LiComponent, { lableName: "被保人名称 : ",
							content: passive.company && passive.company.organName }),
						_react2.default.createElement(LiComponent, { lableName: "所属地区 : ",
							content: passive.company && passive.company.gridName }),
						_react2.default.createElement(LiComponent, { lableName: "工商注册号 : ",
							content: passive.company && passive.company.register }),
						_react2.default.createElement(LiComponent, { lableName: "行业类型 : ",
							content: passive.company && passive.company.typeName }),
						_react2.default.createElement(LiComponent, { lableName: "法人 : ",
							content: passive.company && passive.company.legalPerson }),
						_react2.default.createElement(LiComponent, { lableName: "法人联系方式 : ",
							content: passive.company && passive.company.legalPhone }),
						_react2.default.createElement(LiComponent, { lableName: "企业地址 : ",
							content: passive.company && passive.company.address })
					) : ""
				)
			);
		}
	}]);

	return ApplicantPassive;
}(_react.Component);

/*保障信息*/


var SecurityInformation = exports.SecurityInformation = function (_Component7) {
	_inherits(SecurityInformation, _Component7);

	function SecurityInformation() {
		_classCallCheck(this, SecurityInformation);

		return _possibleConstructorReturn(this, (SecurityInformation.__proto__ || Object.getPrototypeOf(SecurityInformation)).apply(this, arguments));
	}

	_createClass(SecurityInformation, [{
		key: "render",
		value: function render() {
			var security = this.props.security || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u4FDD\u969C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(LiComponent, { lableName: "保险经纪公司 : ",
						content: security.broker_name }),
					_react2.default.createElement(LiComponent, { lableName: "承保公司 : ",
						content: security.insurance_company }),
					_react2.default.createElement(LiComponent, { lableName: "投保单号 : ",
						content: security.apply_number }),
					_react2.default.createElement(LiComponent, { lableName: "保单号 : ",
						content: security.insurance_number }),
					_react2.default.createElement(LiComponent, { lableName: "投保产品 : ",
						content: security.insurance_type }),
					_react2.default.createElement(LiComponent, { lableName: "投保人数 : ",
						content: security.insurance_population }),
					_react2.default.createElement(LiComponent, { lableName: "保费(元) : ",
						content: security.insure_money }),
					_react2.default.createElement(LiComponent, { lableName: "累计责任限额(万元) : ",
						content: security.add_up_liability_limit }),
					_react2.default.createElement(LiComponent, { lableName: "每次事故责任限额(万元) : ",
						content: security.every_liability_limit }),
					_react2.default.createElement(LiComponent, { lableName: "每次事故每人责任限额(万元) : ",
						content: security.person_avg_insurance }),
					_react2.default.createElement(LiComponent, { lableName: "投保日期 : ",
						content: (0, _function.getFormatData)(security.insure_date) }),
					_react2.default.createElement(LiComponent, { lableName: "保险期限 : ",
						content: (0, _function.getFormatData)(security.start_date) + "~" + (0, _function.getFormatData)(security.done_at) })
				)
			);
		}
	}]);

	return SecurityInformation;
}(_react.Component);

/*免赔额条例 */


var DeductibleExcess = exports.DeductibleExcess = function (_Component8) {
	_inherits(DeductibleExcess, _Component8);

	function DeductibleExcess() {
		_classCallCheck(this, DeductibleExcess);

		return _possibleConstructorReturn(this, (DeductibleExcess.__proto__ || Object.getPrototypeOf(DeductibleExcess)).apply(this, arguments));
	}

	_createClass(DeductibleExcess, [{
		key: "render",
		value: function render() {
			var deductible = this.props.deductible || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u514D\u8D54\u989D\u6761\u4F8B"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(LiDeductible, { DeductibleName: "从业人员 : ",
						DeductibleContent: deductible.practitioners }),
					_react2.default.createElement(LiDeductible, { DeductibleName: "第三者责 : ",
						DeductibleContent: deductible.third_party })
				)
			);
		}
	}]);

	return DeductibleExcess;
}(_react.Component);

/*免赔额条例中li组件*/


var LiDeductible = exports.LiDeductible = function (_Component9) {
	_inherits(LiDeductible, _Component9);

	function LiDeductible() {
		_classCallCheck(this, LiDeductible);

		return _possibleConstructorReturn(this, (LiDeductible.__proto__ || Object.getPrototypeOf(LiDeductible)).apply(this, arguments));
	}

	_createClass(LiDeductible, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["deductible"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["deductible--title"] },
					this.props.DeductibleName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["deductible--content"] },
					this.props.DeductibleContent
				)
			);
		}
	}]);

	return LiDeductible;
}(_react.Component);

/*资料上传*/


var DataUpload = exports.DataUpload = function (_Component10) {
	_inherits(DataUpload, _Component10);

	function DataUpload() {
		_classCallCheck(this, DataUpload);

		return _possibleConstructorReturn(this, (DataUpload.__proto__ || Object.getPrototypeOf(DataUpload)).apply(this, arguments));
	}

	_createClass(DataUpload, [{
		key: "render",
		value: function render() {
			var upload = this.props.dataupload || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u8D44\u6599\u4E0A\u4F20"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(LiDataUpload, { UploadName: "营业执照 : ",
						UploadContent: upload.businessAttachment }),
					_react2.default.createElement(LiDataUpload, { UploadName: "全员投保证明 : ",
						UploadContent: upload.fullAttachment }),
					_react2.default.createElement(LiDataUpload, { UploadName: "社保征缴通知单 : ",
						UploadContent: upload.socialAttachment }),
					_react2.default.createElement(LiDataUpload, { UploadName: "投保单盖章上传 : ",
						UploadContent: upload.sealAttachment }),
					_react2.default.createElement(LiDataUpload, { UploadName: "人员清单 : ",
						UploadContent: upload.peopleAttachment }),
					_react2.default.createElement(LiDataUpload, { UploadName: "其他 : ",
						UploadContent: upload.otherAttachment })
				)
			);
		}
	}]);

	return DataUpload;
}(_react.Component);

/*资料上传中li组件*/


var LiDataUpload = exports.LiDataUpload = function (_Component11) {
	_inherits(LiDataUpload, _Component11);

	function LiDataUpload() {
		_classCallCheck(this, LiDataUpload);

		return _possibleConstructorReturn(this, (LiDataUpload.__proto__ || Object.getPrototypeOf(LiDataUpload)).apply(this, arguments));
	}

	_createClass(LiDataUpload, [{
		key: "render",
		value: function render() {
			var UploadContent = this.props.UploadContent && this.props.UploadContent[0] || {};
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["upload--li"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["upload--title"] },
					this.props.UploadName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["upload--content"] },
					_react2.default.createElement(
						"a",
						{ href: UploadContent.attachment_path, download: "" },
						UploadContent.name
					)
				)
			);
		}
	}]);

	return LiDataUpload;
}(_react.Component);

/*条款内容*/


var Clause = exports.Clause = function (_Component12) {
	_inherits(Clause, _Component12);

	function Clause() {
		_classCallCheck(this, Clause);

		return _possibleConstructorReturn(this, (Clause.__proto__ || Object.getPrototypeOf(Clause)).apply(this, arguments));
	}

	_createClass(Clause, [{
		key: "render",
		value: function render() {
			var insuranceProduct = this.props.clause && this.props.clause.insuranceProduct && this.props.clause.insuranceProduct.attachment && this.props.clause.insuranceProduct.attachment[0] || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u6761\u6B3E\u5185\u5BB9"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["clause--title"] },
						"\u4FDD\u9669\u6761\u6B3E : "
					),
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["clause--content"] },
						_react2.default.createElement(
							"a",
							{ href: insuranceProduct.attachment_path },
							insuranceProduct.name
						)
					)
				)
			);
		}
	}]);

	return Clause;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.insurInfoReducer.detail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取承保保单详情
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		}
	};
};

AcceptDetailButton.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InformationDetail);