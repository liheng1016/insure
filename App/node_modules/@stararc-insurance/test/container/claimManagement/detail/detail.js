"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PaymentContent = exports.PaymentInformation = exports.LossSituationContent = exports.LossSituation = exports.LiPass = exports.AccidentDetailsContent = exports.AccidentDetails = exports.CaseAcceptanceContent = exports.CaseAcceptanceInformation = exports.InformantContent = exports.InformantInformation = exports.SecurityContent = exports.SecurityInformation = exports.LiComponent = exports.ApplicantContent = exports.ApplicantInformation = exports.ActionBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _detail = require("./detail.css");

var _detail2 = _interopRequireDefault(_detail);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _textarea = require("@stararc-component/textarea");

var _textarea2 = _interopRequireDefault(_textarea);

var _action = require("../model/claim/action");

var _action2 = _interopRequireDefault(_action);

var _function = require("../../../helper/function");

var _bigImg = require("@stararc-component/big-img");

var _bigImg2 = _interopRequireDefault(_bigImg);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*主体*/
var SettlementDetail = function (_Component) {
	_inherits(SettlementDetail, _Component);

	function SettlementDetail() {
		_classCallCheck(this, SettlementDetail);

		return _possibleConstructorReturn(this, (SettlementDetail.__proto__ || Object.getPrototypeOf(SettlementDetail)).apply(this, arguments));
	}

	_createClass(SettlementDetail, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["detailwarp"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(ActionBar, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["detail_content--wrap"] },
						_react2.default.createElement(ApplicantInformation, { applicant: this.props.detail }),
						_react2.default.createElement(SecurityInformation, { security: this.props.detail }),
						_react2.default.createElement(InformantInformation, { informant: this.props.detail }),
						_react2.default.createElement(CaseAcceptanceInformation, { caseacceptance: this.props.detail }),
						_react2.default.createElement(AccidentDetails, { accident: this.props.detail }),
						_react2.default.createElement(LossSituation, { loss: this.props.detail }),
						_react2.default.createElement(PaymentInformation, { payment: this.props.detail })
					)
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
				id: params.id,
				api_path: '1'
			});
		}
	}]);

	return SettlementDetail;
}(_react.Component);

var ActionBar = exports.ActionBar = function (_Component2) {
	_inherits(ActionBar, _Component2);

	function ActionBar() {
		_classCallCheck(this, ActionBar);

		return _possibleConstructorReturn(this, (ActionBar.__proto__ || Object.getPrototypeOf(ActionBar)).apply(this, arguments));
	}

	_createClass(ActionBar, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			var ButtonStyle = { width: '60px', background: '#f2c01f', float: 'right', marginLeft: '10px' };
			var backStyle = { width: '60px', background: '#f5a70f', float: 'right', marginLeft: '10px' };
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default['return--clear'] },
				_react2.default.createElement(_button2.default, {
					styleCss: backStyle,
					text: "返回",
					onClick: function onClick(e) {
						return history.go(-1);
					} }),
				_react2.default.createElement(_button2.default, {
					onClick: function onClick(e) {
						return _this3.go_to_edit();
					},
					styleCss: ButtonStyle,
					text: "编辑" })
			);
		}
	}, {
		key: "go_to_edit",
		value: function go_to_edit() {
			var params = this.props.params;

			this.context.router.push("/claimManagement/edit/" + params.id);
		}
	}]);

	return ActionBar;
}(_react.Component);

/**
 * 投保人信息
 */


var ApplicantInformation = exports.ApplicantInformation = function (_Component3) {
	_inherits(ApplicantInformation, _Component3);

	function ApplicantInformation() {
		_classCallCheck(this, ApplicantInformation);

		return _possibleConstructorReturn(this, (ApplicantInformation.__proto__ || Object.getPrototypeOf(ApplicantInformation)).apply(this, arguments));
	}

	_createClass(ApplicantInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u6295\u4FDD\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(ApplicantContent, this.props)
			);
		}
	}]);

	return ApplicantInformation;
}(_react.Component);

/*投保人内容*/


var ApplicantContent = exports.ApplicantContent = function (_Component4) {
	_inherits(ApplicantContent, _Component4);

	function ApplicantContent() {
		_classCallCheck(this, ApplicantContent);

		return _possibleConstructorReturn(this, (ApplicantContent.__proto__ || Object.getPrototypeOf(ApplicantContent)).apply(this, arguments));
	}

	_createClass(ApplicantContent, [{
		key: "render",
		value: function render() {
			var applicant = this.props.applicant.companyInsurance || {};
			console.log(applicant, '所有数据投保人内容');
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant"] },
				_react2.default.createElement(LiComponent, { lableName: '投保人名称 : ',
					content: applicant.company_name }),
				_react2.default.createElement(LiComponent, { lableName: '所属地区 : ',
					content: applicant.grid_name }),
				_react2.default.createElement(LiComponent, { lableName: '工商注册号 : ',
					content: applicant.company }),
				_react2.default.createElement(LiComponent, { lableName: '行业类型 : ',
					content: applicant.type_name }),
				_react2.default.createElement(LiComponent, { lableName: '法人 : ',
					content: applicant.company }),
				_react2.default.createElement(LiComponent, { lableName: '法人联系方式 : ',
					content: applicant.company }),
				_react2.default.createElement(LiComponent, { lableName: '企业地址 : ',
					content: applicant.company })
			);
		}
	}]);

	return ApplicantContent;
}(_react.Component);
/**
 * li公用组件
 */


var LiComponent = exports.LiComponent = function (_Component5) {
	_inherits(LiComponent, _Component5);

	function LiComponent() {
		_classCallCheck(this, LiComponent);

		return _possibleConstructorReturn(this, (LiComponent.__proto__ || Object.getPrototypeOf(LiComponent)).apply(this, arguments));
	}

	_createClass(LiComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["applicant-content--li"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-li--name"] },
					this.props.lableName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-li--content"] },
					this.props.content
				)
			);
		}
	}]);

	return LiComponent;
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
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u4FDD\u969C\u4FE1\u606F"
				),
				_react2.default.createElement(SecurityContent, this.props)
			);
		}
	}]);

	return SecurityInformation;
}(_react.Component);
/**
 * 保障信息内容组件
 */


var SecurityContent = exports.SecurityContent = function (_Component7) {
	_inherits(SecurityContent, _Component7);

	function SecurityContent() {
		_classCallCheck(this, SecurityContent);

		return _possibleConstructorReturn(this, (SecurityContent.__proto__ || Object.getPrototypeOf(SecurityContent)).apply(this, arguments));
	}

	_createClass(SecurityContent, [{
		key: "render",
		value: function render() {
			var security = this.props.security.companyInsurance || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant"] },
				_react2.default.createElement(LiComponent, { lableName: '保险经纪公司 : ',
					content: security.broker_name }),
				_react2.default.createElement(LiComponent, { lableName: '承保公司 : ',
					content: security.insurance_company }),
				_react2.default.createElement(LiComponent, { lableName: '投保人 : ',
					content: security.apply_company_name }),
				_react2.default.createElement(LiComponent, { lableName: '被保人 : ',
					content: security.company_name }),
				_react2.default.createElement(LiComponent, { lableName: '投保单号 : ',
					content: security.apply_number }),
				_react2.default.createElement(LiComponent, { lableName: '保单号 : ',
					content: security.insurance_number }),
				_react2.default.createElement(LiComponent, { lableName: '投保产品 : ',
					content: security.insurance_type }),
				_react2.default.createElement(LiComponent, { lableName: '投保人数 : ',
					content: security.insurance_population }),
				_react2.default.createElement(LiComponent, { lableName: '保费(元) : ',
					content: security.insure_money }),
				_react2.default.createElement(LiComponent, { lableName: '累计责任限额(万元) : ',
					content: security.add_up_liability_limit }),
				_react2.default.createElement(LiComponent, { lableName: '每次事故责任限额(万元) : ',
					content: security.every_liability_limit }),
				_react2.default.createElement(LiComponent, { lableName: '每人每次事故责任限额(万元) : ',
					content: security.person_avg_insurance }),
				_react2.default.createElement(LiComponent, { lableName: '投保日期 : ',
					content: (0, _function.getFormatData)(security.insure_date) }),
				_react2.default.createElement(LiComponent, { lableName: '保险期限 : ',
					content: (0, _function.getFormatData)(security.start_date) + "~" + (0, _function.getFormatData)(security.done_at) }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["picture"] },
					_react2.default.createElement("img", { src: security.status == "2" ? require("../img/insur_ok.png") : require("../img/insur_outline.png") })
				)
			);
		}
	}]);

	return SecurityContent;
}(_react.Component);

/**
 * 报案人信息
 * 
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
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u62A5\u6848\u4EBA\u4FE1\u606F"
				),
				_react2.default.createElement(InformantContent, this.props)
			);
		}
	}]);

	return InformantInformation;
}(_react.Component);

/**
 * 报案人信息内容组件
 */


var InformantContent = exports.InformantContent = function (_Component9) {
	_inherits(InformantContent, _Component9);

	function InformantContent() {
		_classCallCheck(this, InformantContent);

		return _possibleConstructorReturn(this, (InformantContent.__proto__ || Object.getPrototypeOf(InformantContent)).apply(this, arguments));
	}

	_createClass(InformantContent, [{
		key: "render",
		value: function render() {
			var informant = this.props.informant;
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant-content"] },
				_react2.default.createElement(LiComponent, { lableName: '报案人名称 : ',
					content: informant.user_name }),
				_react2.default.createElement(LiComponent, { lableName: '报案人联系方式 : ',
					content: informant.phone }),
				_react2.default.createElement(LiComponent, { lableName: '报案类型 : ',
					content: informant.insurance_type }),
				_react2.default.createElement(LiComponent, { lableName: '报案时间 : ',
					content: (0, _function.getFormatData)(informant.report_at) }),
				_react2.default.createElement(LiComponent, { lableName: '现场联系人 : ',
					content: informant.contacts }),
				_react2.default.createElement(LiComponent, { lableName: '现场联系方式 : ',
					content: informant.contacts_phone })
			);
		}
	}]);

	return InformantContent;
}(_react.Component);

/**
 * 案件受理信息
 */


var CaseAcceptanceInformation = exports.CaseAcceptanceInformation = function (_Component10) {
	_inherits(CaseAcceptanceInformation, _Component10);

	function CaseAcceptanceInformation() {
		_classCallCheck(this, CaseAcceptanceInformation);

		return _possibleConstructorReturn(this, (CaseAcceptanceInformation.__proto__ || Object.getPrototypeOf(CaseAcceptanceInformation)).apply(this, arguments));
	}

	_createClass(CaseAcceptanceInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u6848\u4EF6\u53D7\u7406\u4FE1\u606F"
				),
				_react2.default.createElement(CaseAcceptanceContent, this.props)
			);
		}
	}]);

	return CaseAcceptanceInformation;
}(_react.Component);
/**
 * 案件受理内容组件
 */


var CaseAcceptanceContent = exports.CaseAcceptanceContent = function (_Component11) {
	_inherits(CaseAcceptanceContent, _Component11);

	function CaseAcceptanceContent() {
		_classCallCheck(this, CaseAcceptanceContent);

		return _possibleConstructorReturn(this, (CaseAcceptanceContent.__proto__ || Object.getPrototypeOf(CaseAcceptanceContent)).apply(this, arguments));
	}

	_createClass(CaseAcceptanceContent, [{
		key: "render",
		value: function render() {
			var caseacceptance = this.props.caseacceptance;
			var status = {
				1: '报案',
				2: '定损',
				3: '结案',
				4: '销案'
			};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant-content"] },
				_react2.default.createElement(LiComponent, { lableName: '案件状态 : ',
					content: status[caseacceptance.status] }),
				_react2.default.createElement(LiComponent, { lableName: '保险公司报案号 : ',
					content: caseacceptance.compensate_number }),
				_react2.default.createElement(LiComponent, { lableName: '受理时间 : ',
					content: (0, _function.getFormatData)(caseacceptance.compensate_at) })
			);
		}
	}]);

	return CaseAcceptanceContent;
}(_react.Component);

/**
 * 事故详情
 */


var AccidentDetails = exports.AccidentDetails = function (_Component12) {
	_inherits(AccidentDetails, _Component12);

	function AccidentDetails() {
		_classCallCheck(this, AccidentDetails);

		return _possibleConstructorReturn(this, (AccidentDetails.__proto__ || Object.getPrototypeOf(AccidentDetails)).apply(this, arguments));
	}

	_createClass(AccidentDetails, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u4E8B\u6545\u8BE6\u60C5"
				),
				_react2.default.createElement(AccidentDetailsContent, this.props)
			);
		}
	}]);

	return AccidentDetails;
}(_react.Component);

/**
 * 事故详情内容组件
 */


var AccidentDetailsContent = exports.AccidentDetailsContent = function (_Component13) {
	_inherits(AccidentDetailsContent, _Component13);

	function AccidentDetailsContent() {
		_classCallCheck(this, AccidentDetailsContent);

		return _possibleConstructorReturn(this, (AccidentDetailsContent.__proto__ || Object.getPrototypeOf(AccidentDetailsContent)).apply(this, arguments));
	}

	_createClass(AccidentDetailsContent, [{
		key: "render",
		value: function render() {
			var accident = this.props.accident || {};
			var auditing_img = accident.attachment || [];
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant-content"] },
				_react2.default.createElement(LiComponent, { lableName: '出险地点 : ',
					content: accident.accident_address }),
				_react2.default.createElement(LiComponent, { lableName: '出险时间 : ',
					content: (0, _function.getFormatData)(accident.accident_at) }),
				_react2.default.createElement(LiComponent, { lableName: '事故类型 : ',
					content: accident.accidentTypes }),
				_react2.default.createElement(LiComponent, { lableName: '是否涉及人伤 : ',
					content: accident.is_involve_people == "2" ? "是" : "否" }),
				_react2.default.createElement(LiPass, { lableName: '事故经过 : ',
					content: accident.accident_desc }),
				_react2.default.createElement(
					"ol",
					{ className: _detail2.default["accident-pic"] },
					this.getAccidentImg(auditing_img)
				)
			);
		}
	}, {
		key: "getAccidentImg",
		value: function getAccidentImg(auditing_img) {
			var _this15 = this;

			auditing_img = auditing_img || [];
			return auditing_img.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ className: _detail2.default["pic--li"], key: key, onClick: function onClick(e) {
							return _this15.big_img(auditing_img, key);
						} },
					_react2.default.createElement("img", { src: m.attachment_path })
				);
			});
		}
	}, {
		key: "big_img",
		value: function big_img() {
			var imgArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var index = arguments[1];

			var newImgArr = [];

			imgArr.map(function (img) {
				newImgArr.push({
					id: img.attachment_id,
					path: img.attachment_path
				});
			});

			(0, _bigImg2.default)(newImgArr, index);
		}
	}]);

	return AccidentDetailsContent;
}(_react.Component);

/**
 * 事故经过组件
 */

var LiPass = exports.LiPass = function (_Component14) {
	_inherits(LiPass, _Component14);

	function LiPass() {
		_classCallCheck(this, LiPass);

		return _possibleConstructorReturn(this, (LiPass.__proto__ || Object.getPrototypeOf(LiPass)).apply(this, arguments));
	}

	_createClass(LiPass, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["accidentpassing"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["passing-name"] },
					this.props.lableName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["passing-content"] },
					this.props.content
				)
			);
		}
	}]);

	return LiPass;
}(_react.Component);
/**
 * 损失情况
 */


var LossSituation = exports.LossSituation = function (_Component15) {
	_inherits(LossSituation, _Component15);

	function LossSituation() {
		_classCallCheck(this, LossSituation);

		return _possibleConstructorReturn(this, (LossSituation.__proto__ || Object.getPrototypeOf(LossSituation)).apply(this, arguments));
	}

	_createClass(LossSituation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u635F\u5931\u60C5\u51B5"
				),
				_react2.default.createElement(LossSituationContent, this.props)
			);
		}
	}]);

	return LossSituation;
}(_react.Component);

/**
 * 损失情况内容组件
 */


var LossSituationContent = exports.LossSituationContent = function (_Component16) {
	_inherits(LossSituationContent, _Component16);

	function LossSituationContent() {
		_classCallCheck(this, LossSituationContent);

		return _possibleConstructorReturn(this, (LossSituationContent.__proto__ || Object.getPrototypeOf(LossSituationContent)).apply(this, arguments));
	}

	_createClass(LossSituationContent, [{
		key: "render",
		value: function render() {
			var content = this.props.loss && this.props.loss.attachment && this.props.loss.attachment[0] || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant-content"] },
				_react2.default.createElement(
					"li",
					{ className: _detail2.default["losssituation"] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["loss-name"] },
						"\u4F24\u4EA1\u4EBA\u5458\u6E05\u5355 : "
					),
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["loss-content"] },
						_react2.default.createElement(
							"a",
							{ href: content.attachment_path, download: "" },
							content.name
						)
					)
				),
				_react2.default.createElement(
					"li",
					{ className: _detail2.default["losssituation"] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["loss-name"] },
						"\u7269\u635F\u6E05\u5355 : "
					),
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["loss-content"] },
						_react2.default.createElement(
							"a",
							{ href: content.attachment_path, download: "" },
							content.name
						)
					)
				)
			);
		}
	}]);

	return LossSituationContent;
}(_react.Component);
/**
 * 赔付信息
 */


var PaymentInformation = exports.PaymentInformation = function (_Component17) {
	_inherits(PaymentInformation, _Component17);

	function PaymentInformation() {
		_classCallCheck(this, PaymentInformation);

		return _possibleConstructorReturn(this, (PaymentInformation.__proto__ || Object.getPrototypeOf(PaymentInformation)).apply(this, arguments));
	}

	_createClass(PaymentInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["applicantinformation"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["applicant-title"] },
					"\u8D54\u4ED8\u4FE1\u606F"
				),
				_react2.default.createElement(PaymentContent, this.props)
			);
		}
	}]);

	return PaymentInformation;
}(_react.Component);

var PaymentContent = exports.PaymentContent = function (_Component18) {
	_inherits(PaymentContent, _Component18);

	function PaymentContent() {
		_classCallCheck(this, PaymentContent);

		return _possibleConstructorReturn(this, (PaymentContent.__proto__ || Object.getPrototypeOf(PaymentContent)).apply(this, arguments));
	}

	_createClass(PaymentContent, [{
		key: "render",
		value: function render() {
			var payment = this.props.payment;
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["applicant-content"] },
				_react2.default.createElement(LiComponent, { lableName: '报损金额(元) : ',
					content: payment.apply_money }),
				_react2.default.createElement(LiComponent, { lableName: '赔付金额(元) : ',
					content: payment.comp_money }),
				_react2.default.createElement(LiComponent, { lableName: '赔付时间 : ',
					content: (0, _function.getFormatData)(payment.comp_at) })
			);
		}
	}]);

	return PaymentContent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.claimReducer.detail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		}
	};
};

ActionBar.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SettlementDetail);