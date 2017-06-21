"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DetailRecord = exports.MoreTakeNode = exports.MoreWarrantyList = exports.AuditingResult = exports.AuditingContentCompany = exports.AuditingContentInsur = exports.AuditingContent = exports.AuditingTitle = exports.Auditing = exports.UlContentInfo = exports.Claim = exports.LiComponent = exports.UlComponentInfo = exports.Guarantee = exports.Enterprise = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _textarea = require("@stararc-component/textarea");

var _textarea2 = _interopRequireDefault(_textarea);

var _bigImg = require("@stararc-component/big-img");

var _bigImg2 = _interopRequireDefault(_bigImg);

var _uploadFile = require("@stararc-insurance/upload-file");

var _helpTools = require("@stararc-insurance/help-tools");

var _action = require("../../model/acceptInsur/action");

var _action2 = _interopRequireDefault(_action);

var _action3 = require("../../model/media/action");

var _action4 = _interopRequireDefault(_action3);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 顶部retunButton
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
			var _this2 = this;

			var ButtonStyle = {
				background: '#f6a810',
				width: '60px',
				float: 'right'
			};
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(
						"div",
						{ className: _detail2.default['return--clear'] },
						_react2.default.createElement(_button2.default, {
							styleCss: ButtonStyle,
							text: "返回",
							onClick: function onClick(e) {
								return _this2.goBack();
							} })
					)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["detail_content--wrap"] },
						_react2.default.createElement(Enterprise, { enter: this.props.detail }),
						_react2.default.createElement(Guarantee, _extends({}, this.props, { guarantee: this.props.detail })),
						_react2.default.createElement(Claim, _extends({}, this.props, { claim: this.props.detail })),
						_react2.default.createElement(Auditing, _extends({ auditing: this.props.detail }, this.props))
					)
				)
			);
		}
	}, {
		key: "goBack",
		value: function goBack() {
			history.go(-1);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    get_detail = _props.get_detail,
			    params = _props.params;


			get_detail({
				company_id: params.id || "305"
			});
		}
	}]);

	return InformationDetail;
}(_react.Component);

/*企业基本信息*/


var Enterprise = exports.Enterprise = function (_Component2) {
	_inherits(Enterprise, _Component2);

	function Enterprise() {
		_classCallCheck(this, Enterprise);

		return _possibleConstructorReturn(this, (Enterprise.__proto__ || Object.getPrototypeOf(Enterprise)).apply(this, arguments));
	}

	_createClass(Enterprise, [{
		key: "render",
		value: function render() {
			var _props$enter = this.props.enter,
			    enter = _props$enter === undefined ? {} : _props$enter;

			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["enterprise"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u4F01\u4E1A\u57FA\u672C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default['enterprise-content'] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["company-title"] },
						enter.organName
					),
					_react2.default.createElement(
						"ul",
						{ className: _detail2.default["company-content"] },
						_react2.default.createElement(LiComponent, { lableName: "工商注册号 : ",
							content: enter.addon && enter.addon.register }),
						_react2.default.createElement(LiComponent, { lableName: "所属网格 : ",
							content: enter.grid_name }),
						_react2.default.createElement(LiComponent, { lableName: "法人 : ",
							content: enter.addon && enter.addon.legalPerson }),
						_react2.default.createElement(LiComponent, { lableName: "行业类型 : ",
							content: enter.type_name }),
						_react2.default.createElement(LiComponent, { lableName: "企业地址 : ",
							content: enter.addon && enter.addon.address }),
						_react2.default.createElement(LiComponent, { lableName: "法人联系方式 : ",
							content: enter.addon && enter.addon.legalPhone })
					)
				)
			);
		}
	}]);

	return Enterprise;
}(_react.Component);

/*保障信息*/


var Guarantee = exports.Guarantee = function (_Component3) {
	_inherits(Guarantee, _Component3);

	function Guarantee(props) {
		_classCallCheck(this, Guarantee);

		var _this4 = _possibleConstructorReturn(this, (Guarantee.__proto__ || Object.getPrototypeOf(Guarantee)).call(this, props));

		_this4.state = {
			isopenMoreList: false
		};
		return _this4;
	}

	_createClass(Guarantee, [{
		key: "render",
		value: function render() {
			var _this5 = this;

			var _props$guarantee = this.props.guarantee,
			    guarantee = _props$guarantee === undefined ? {} : _props$guarantee;

			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["guarantee"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["title"] },
					"\u4FDD\u969C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default['guarantee-content'] },
					_react2.default.createElement(UlComponentInfo, { detail: guarantee.companyInsurance }),
					guarantee.companyInsurance && guarantee.companyInsurance.more_data_num ? _react2.default.createElement(
						"div",
						{ className: _detail2.default['more'] },
						_react2.default.createElement(
							"a",
							{ href: "javascript:;", onClick: function onClick(e) {
									return _this5.openMoreList();
								} },
							"\u66F4\u591A\u4FDD\u5355\u4FE1\u606F(",
							guarantee.companyInsurance.more_data_num,
							")>>"
						)
					) : ""
				),
				this.state.isopenMoreList ? _react2.default.createElement(MoreWarrantyList, { lists: this.props.companys, closeHandle: function closeHandle(e) {
						return _this5.closeMoreList();
					} }) : ''
			);
		}
	}, {
		key: "openMoreList",
		value: function openMoreList() {
			var _props2 = this.props,
			    get_guarantee = _props2.get_guarantee,
			    params = _props2.params;

			get_guarantee({
				company_id: params.id,
				status: "1,2"
			});

			this.setState({
				isopenMoreList: true
			});
		}
	}, {
		key: "closeMoreList",
		value: function closeMoreList() {
			this.setState({
				isopenMoreList: false
			});
		}
	}]);

	return Guarantee;
}(_react.Component);

/**
 * 保障信息部分
 */


var UlComponentInfo = exports.UlComponentInfo = function (_Component4) {
	_inherits(UlComponentInfo, _Component4);

	function UlComponentInfo() {
		_classCallCheck(this, UlComponentInfo);

		return _possibleConstructorReturn(this, (UlComponentInfo.__proto__ || Object.getPrototypeOf(UlComponentInfo)).apply(this, arguments));
	}

	_createClass(UlComponentInfo, [{
		key: "render",
		value: function render() {
			var detail = this.props.detail || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["guarantee-list"] },
				_react2.default.createElement(LiComponent, { lableName: "保险经纪公司 : ",
					content: detail.broker_name }),
				_react2.default.createElement(LiComponent, { lableName: "承保公司 : ",
					content: detail.insurance_company }),
				_react2.default.createElement(LiComponent, { lableName: "投保人 : ",
					content: detail.apply_company_name }),
				_react2.default.createElement(LiComponent, { lableName: "被保人 : ",
					content: detail.company_name }),
				_react2.default.createElement(LiComponent, { lableName: "投保单号 : ",
					content: detail.apply_number }),
				_react2.default.createElement(LiComponent, { lableName: "保单号 : ",
					content: detail.nsurance_number }),
				_react2.default.createElement(LiComponent, { lableName: "投保产品 : ",
					content: detail.insurance_type }),
				_react2.default.createElement(LiComponent, { lableName: "投保人数 : ",
					content: detail.insurance_population }),
				_react2.default.createElement(LiComponent, { lableName: "保费(元) : ",
					content: detail.insure_money }),
				_react2.default.createElement(LiComponent, { lableName: "累计责任限额(万元) : ",
					content: detail.add_up_liability_limit }),
				_react2.default.createElement(LiComponent, { lableName: "每次事故责任限额(万元) : ",
					content: detail.every_liability_limit }),
				_react2.default.createElement(LiComponent, { lableName: "每次事故每人责任限额(万元) : ",
					content: detail.person_avg_insurance }),
				_react2.default.createElement(LiComponent, { lableName: "投保日期 : ",
					content: (0, _helpTools.getFormatData)(detail.insure_date) }),
				_react2.default.createElement(LiComponent, { lableName: "保险期限 : ",
					content: (0, _helpTools.getFormatData)(detail.start_date) + "~" + (0, _helpTools.getFormatData)(detail.done_at) }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["guarantee-img"] },
					_react2.default.createElement("img", { src: detail.status == "2" ? require("../img/insur_ok.png") : require("../img/insur_outline.png") })
				)
			);
		}
	}]);

	return UlComponentInfo;
}(_react.Component);

/**
 * small pies 
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
				null,
				_react2.default.createElement(
					"span",
					null,
					this.props.lableName,
					" "
				),
				_react2.default.createElement(
					"span",
					null,
					this.props.content
				)
			);
		}
	}]);

	return LiComponent;
}(_react.Component);

/*理赔信息*/


var Claim = exports.Claim = function (_Component6) {
	_inherits(Claim, _Component6);

	function Claim(props) {
		_classCallCheck(this, Claim);

		var _this8 = _possibleConstructorReturn(this, (Claim.__proto__ || Object.getPrototypeOf(Claim)).call(this, props));

		_this8.state = {
			isopenDetailRecord: false
		};
		return _this8;
	}

	_createClass(Claim, [{
		key: "render",
		value: function render() {
			var _this9 = this;

			var _props$claim = this.props.claim,
			    claim = _props$claim === undefined ? {} : _props$claim;

			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["claim"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["claim-title"] },
					"\u7406\u8D54\u4FE1\u606F"
				),
				!claim.compensate ? _react2.default.createElement(
					"div",
					{ className: _detail2.default['claim-content'] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["claim_tips"] },
						"\u6682\u65E0\u7406\u8D54\u76F8\u5173\u4FE1\u606F"
					)
				) : _react2.default.createElement(
					"div",
					{ className: _detail2.default['claim-content'] },
					_react2.default.createElement(UlContentInfo, { claim: claim.compensate }),
					claim.compensate && claim.compensate.more_data_num ? _react2.default.createElement(
						"div",
						{ className: _detail2.default['more'] },
						_react2.default.createElement(
							"a",
							{ onClick: function onClick(e) {
									return _this9.openDetailRecord();
								}, href: "javascript:;" },
							"\u7406\u8D54\u8BE6\u7EC6\u8BB0\u5F55(",
							claim.compensate.more_data_num,
							")>>"
						)
					) : "",
					this.state.isopenDetailRecord ? _react2.default.createElement(DetailRecord, { claim: this.props.list, closeClaimHandle: function closeClaimHandle(e) {
							return _this9.closeMoreClaimList();
						} }) : ''
				)
			);
		}
	}, {
		key: "openDetailRecord",
		value: function openDetailRecord() {
			var _props3 = this.props,
			    get_toexamine = _props3.get_toexamine,
			    params = _props3.params;

			get_toexamine({
				company_id: params.id,
				status: "3"
			});
			this.setState({
				isopenDetailRecord: true
			});
		}
	}, {
		key: "closeMoreClaimList",
		value: function closeMoreClaimList() {
			this.setState({
				isopenDetailRecord: false
			});
		}
	}]);

	return Claim;
}(_react.Component);

/**
 * 理赔信息content
 */


var UlContentInfo = exports.UlContentInfo = function (_Component7) {
	_inherits(UlContentInfo, _Component7);

	function UlContentInfo() {
		_classCallCheck(this, UlContentInfo);

		return _possibleConstructorReturn(this, (UlContentInfo.__proto__ || Object.getPrototypeOf(UlContentInfo)).apply(this, arguments));
	}

	_createClass(UlContentInfo, [{
		key: "render",
		value: function render() {
			var claim = this.props.claim || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["claim-list"] },
				_react2.default.createElement(LiComponent, { lableName: "出险时间 : ",
					content: (0, _helpTools.getFormatData)(claim.accident_at) }),
				_react2.default.createElement(LiComponent, { lableName: "赔付金额(元) : ",
					content: claim.comp_money }),
				_react2.default.createElement(LiComponent, { lableName: "事故类型 : ",
					content: claim.accident_type_name }),
				_react2.default.createElement(LiComponent, { lableName: "是否涉及人伤 : ",
					content: claim.is_involve_people == "2" ? "是" : "否" })
			);
		}
	}]);

	return UlContentInfo;
}(_react.Component);
/*保险审核记录*/


var Auditing = exports.Auditing = function (_Component8) {
	_inherits(Auditing, _Component8);

	function Auditing() {
		_classCallCheck(this, Auditing);

		return _possibleConstructorReturn(this, (Auditing.__proto__ || Object.getPrototypeOf(Auditing)).apply(this, arguments));
	}

	_createClass(Auditing, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["andit"] },
				_react2.default.createElement(AuditingTitle, null),
				_react2.default.createElement(AuditingContent, this.props)
			);
		}
	}]);

	return Auditing;
}(_react.Component);

/*保险审核记录标题*/


var AuditingTitle = exports.AuditingTitle = function (_Component9) {
	_inherits(AuditingTitle, _Component9);

	function AuditingTitle() {
		_classCallCheck(this, AuditingTitle);

		return _possibleConstructorReturn(this, (AuditingTitle.__proto__ || Object.getPrototypeOf(AuditingTitle)).apply(this, arguments));
	}

	_createClass(AuditingTitle, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["andit-title"] },
				"\u4FDD\u9669\u5BA1\u6838\u8BB0\u5F55"
			);
		}
	}]);

	return AuditingTitle;
}(_react.Component);

/*保险审核记录内容组件*/


var AuditingContent = exports.AuditingContent = function (_Component10) {
	_inherits(AuditingContent, _Component10);

	function AuditingContent(props) {
		_classCallCheck(this, AuditingContent);

		var _this13 = _possibleConstructorReturn(this, (AuditingContent.__proto__ || Object.getPrototypeOf(AuditingContent)).call(this, props));

		_this13.state = {
			isOpenDialog: false,
			isOpenTokelog: false
		};
		return _this13;
	}

	_createClass(AuditingContent, [{
		key: "render",
		value: function render() {
			var _this14 = this;

			var ButtonStyle = {
				width: '90px',
				float: 'right',
				background: 'orange'
			};
			var insuranceApply = this.props.auditing && this.props.auditing.insuranceApply || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["audit-content"] },
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["audit-button"] },
					insuranceApply.is_approval ? _react2.default.createElement(_button2.default, {
						styleCss: ButtonStyle,
						text: "保险审核",
						onClick: function onClick(e) {
							return _this14.openReslog();
						} }) : ""
				),
				this.getTimeLine(insuranceApply),
				insuranceApply.more_data_num ? _react2.default.createElement(
					"div",
					{ className: _detail2.default["audit-more"] },
					_react2.default.createElement(
						"a",
						{ href: "javascript:;", onClick: function onClick(e) {
								return _this14.openTokeList();
							} },
						"\u66F4\u591A\u6295\u4FDD\u8BB0\u5F55(",
						insuranceApply.more_data_num,
						"\u6761)>>"
					)
				) : "",
				this.state.isOpenTokelog ? _react2.default.createElement(MoreTakeNode, { insuranceApply: this.props.insurList, closeMoreHandle: function closeMoreHandle(e) {
						return _this14.closeTokeList();
					} }) : '',
				this.state.isOpenDialog ? _react2.default.createElement(AuditingResult, _extends({}, this.props, {
					insurId: insuranceApply.is_approval,
					conserveHandle: function conserveHandle(action) {
						return _this14.closeReslog(action);
					},
					cancleHandle: function cancleHandle(action) {
						return _this14.closeReslog(action);
					} })) : ''
			);
		}

		//打开

	}, {
		key: "openTokeList",
		value: function openTokeList() {
			var _props4 = this.props,
			    insur_list = _props4.insur_list,
			    params = _props4.params;


			insur_list({
				effect_insuce_id: params.id,
				show_page: 2
			});
			this.setState({
				isOpenTokelog: true
			});
		}
		//关闭

	}, {
		key: "closeTokeList",
		value: function closeTokeList() {
			this.setState({
				isOpenTokelog: false
			});
		}
		// 打开弹出框

	}, {
		key: "openReslog",
		value: function openReslog() {
			this.setState({
				isOpenDialog: true
			});
		}
		// 关闭弹出框

	}, {
		key: "closeReslog",
		value: function closeReslog(action) {
			this.setState({
				isOpenDialog: false
			});
		}
		// 获取审核记录的时间轴

	}, {
		key: "getTimeLine",
		value: function getTimeLine() {
			var insuranceApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var list = insuranceApply.list || [];
			return list.map(function (l, key) {
				return _react2.default.createElement(
					"div",
					{ key: key },
					l.status != '1' ? _react2.default.createElement(AuditingContentInsur, { auditing: l }) : "",
					_react2.default.createElement(AuditingContentCompany, { auditing: l })
				);
			});
		}
	}]);

	return AuditingContent;
}(_react.Component);

/*保险审核记录保险审核人部分*/


var AuditingContentInsur = exports.AuditingContentInsur = function (_Component11) {
	_inherits(AuditingContentInsur, _Component11);

	function AuditingContentInsur() {
		_classCallCheck(this, AuditingContentInsur);

		return _possibleConstructorReturn(this, (AuditingContentInsur.__proto__ || Object.getPrototypeOf(AuditingContentInsur)).apply(this, arguments));
	}

	_createClass(AuditingContentInsur, [{
		key: "render",
		value: function render() {
			var _props$auditing = this.props.auditing,
			    auditing = _props$auditing === undefined ? {} : _props$auditing;

			var auditing_img = auditing.attachment || [];
			var type = {
				2: "拒绝投保",
				3: "同意投保"
			};

			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["audit-content--onelist"] },
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["circle"] },
					"\u4FDD"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["time"] },
					(0, _helpTools.getFormatData)(auditing.approval_at) + " " + (0, _helpTools.getHoursMinutes)(auditing.approval_at)
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["main"] },
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["information"] },
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u5BA1\u6838\u4EBA : ",
							_react2.default.createElement(
								"span",
								null,
								auditing.approval_user_name
							)
						),
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u5BA1\u6838\u7ED3\u679C : ",
							_react2.default.createElement(
								"span",
								null,
								type[auditing.status]
							)
						),
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u5907\u6CE8 :",
							_react2.default.createElement(
								"span",
								null,
								auditing.approval_remark,
								" "
							)
						),
						_react2.default.createElement(
							"ul",
							{ className: _detail2.default["name-img"] },
							this.auditingImg(auditing_img)
						)
					)
				)
			);
		}
	}, {
		key: "auditingImg",
		value: function auditingImg(auditing_img) {
			var _this16 = this;

			auditing_img = auditing_img || [];
			return auditing_img.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ className: _detail2.default["name-img_li"], key: key, onClick: function onClick(e) {
							return _this16.big_img(auditing_img, key);
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

	return AuditingContentInsur;
}(_react.Component);

/*保险审核记录 企业申请部分*/


var AuditingContentCompany = exports.AuditingContentCompany = function (_Component12) {
	_inherits(AuditingContentCompany, _Component12);

	function AuditingContentCompany() {
		_classCallCheck(this, AuditingContentCompany);

		return _possibleConstructorReturn(this, (AuditingContentCompany.__proto__ || Object.getPrototypeOf(AuditingContentCompany)).apply(this, arguments));
	}

	_createClass(AuditingContentCompany, [{
		key: "render",
		value: function render() {
			var _props$auditing2 = this.props.auditing,
			    auditing = _props$auditing2 === undefined ? {} : _props$auditing2;

			var auditing_img = auditing.attachment || [];
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["audit-content--onelist"] },
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["circle--enterprise"] },
					"\u4F01"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["time--enterprise"] },
					(0, _helpTools.getFormatData)(auditing.apply_at) + " " + (0, _helpTools.getHoursMinutes)(auditing.apply_at)
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["main"] },
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["information"] },
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u7533\u8BF7\u4EBA : ",
							_react2.default.createElement(
								"span",
								null,
								auditing.apply_user_name
							)
						),
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u8054\u7CFB\u65B9\u5F0F : ",
							_react2.default.createElement(
								"span",
								null,
								auditing.apply_phone
							)
						),
						_react2.default.createElement(
							"p",
							{ className: _detail2.default["name"] },
							"\u5907\u6CE8 :",
							_react2.default.createElement(
								"span",
								null,
								" ",
								auditing.apply_remark
							)
						)
					)
				)
			);
		}
	}]);

	return AuditingContentCompany;
}(_react.Component);

/**
 * 审核结果弹窗
 */


var AuditingResult = exports.AuditingResult = function (_Component13) {
	_inherits(AuditingResult, _Component13);

	function AuditingResult(props) {
		_classCallCheck(this, AuditingResult);

		var _this18 = _possibleConstructorReturn(this, (AuditingResult.__proto__ || Object.getPrototypeOf(AuditingResult)).call(this, props));

		_this18.state = {
			status: [{
				id: '2',
				name: "拒绝投保",
				params: "reject"
			}, {
				id: '3',
				name: "同意投保",
				params: "agree"
			}],
			create_insurance: 2
		};
		return _this18;
	}

	_createClass(AuditingResult, [{
		key: "render",
		value: function render() {
			var _this19 = this;

			var InputStyle = { width: '14px', height: '14px', border: '#46b0d7' };
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
				{ className: _detail2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _detail2.default["dialog--shade"] }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["auditingresult"] },
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["res--title"] },
						"\u5BA1\u6838\u7ED3\u679C"
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["res-select"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-selest_name"] },
							_react2.default.createElement("img", { src: require("../img/pic.png") }),
							"\u5BA1\u6838\u7ED3\u679C :"
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-selest_content"] },
							_react2.default.createElement(_select2.default, { ref: "approval_status", options: this.state.status })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["res--radio"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-selest_name"] },
							_react2.default.createElement("img", { src: require("../img/pic.png") }),
							"\u662F\u5426\u521B\u5EFA\u65B0\u4FDD\u5355 :"
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-selest_content"] },
							_react2.default.createElement(
								"span",
								{ onClick: function onClick(e) {
										return _this19.isCreateNewItem(1);
									},
									className: this.state.create_insurance == 1 ? _detail2.default["res--active"] : "" },
								"\u662F"
							),
							_react2.default.createElement(
								"span",
								{ onClick: function onClick(e) {
										return _this19.isCreateNewItem(2);
									},
									className: this.state.create_insurance == 2 ? _detail2.default["res--active"] : "" },
								"\u5426"
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["res--remark"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-remark_name"] },
							"\u5907\u6CE8 :"
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-remark_content"] },
							_react2.default.createElement(_textarea2.default, { ref: "approval_remark" })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["res--picture"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["res-picture_name"] },
							_react2.default.createElement(
								"p",
								null,
								"\u73B0\u573A\u56FE\u7247 :"
							),
							_react2.default.createElement(
								"p",
								null,
								"(",
								_react2.default.createElement(
									"span",
									null,
									this.props.attachList && this.props.attachList.length || 0
								),
								"/4)"
							)
						),
						_react2.default.createElement(
							"ul",
							{ className: _detail2.default["res-picture_pic"] },
							this.getListImg(),
							this.props.attachList && this.props.attachList.length < 4 ? _react2.default.createElement(
								"li",
								{ className: _detail2.default["res-remark--upload"] },
								_react2.default.createElement(_uploadFile.CommonUpload, {
									ref: "attach",
									accept: "image/jpeg,image/jpg,image/png,image/svg",
									onChange: function onChange(e) {
										return _this19.changeHandle();
									} })
							) : ""
						)
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["action--componnet"] },
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1.5", offset: "4.4" },
							_react2.default.createElement(_button2.default, { text: "取消",
								styleCss: cancelStyle,
								onClick: function onClick(e) {
									return _this19.cancleHandle();
								} })
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "0.2" },
							"\xA0"
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1.5" },
							_react2.default.createElement(_button2.default, { text: "确定",
								styleCss: buttonStyle,
								onClick: function onClick(e) {
									return _this19.conserveHandle();
								} })
						)
					)
				)
			);
		}
	}, {
		key: "getListImg",
		value: function getListImg() {
			var _this20 = this;

			var _props$attachList = this.props.attachList,
			    attachList = _props$attachList === undefined ? [] : _props$attachList;

			return attachList.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ key: key },
					_react2.default.createElement("img", { src: m.attachment_path }),
					_react2.default.createElement("span", { className: _detail2.default["delete_attach"], onClick: function onClick(e) {
							return _this20.deleteAttach(m);
						} })
				);
			});
		}
	}, {
		key: "isCreateNewItem",
		value: function isCreateNewItem(create_insurance) {
			this.setState({
				create_insurance: create_insurance
			});
		}
		// conserve

	}, {
		key: "conserveHandle",
		value: function conserveHandle() {
			var _props5 = this.props,
			    conserveHandle = _props5.conserveHandle,
			    approval = _props5.approval;

			var params = this.getValue();
			approval(params);
			conserveHandle && conserveHandle("cancle");
		}

		// cancle

	}, {
		key: "cancleHandle",
		value: function cancleHandle() {
			var cancleHandle = this.props.cancleHandle;

			cancleHandle && cancleHandle("cancle");
		}
		// 上传附件

	}, {
		key: "changeHandle",
		value: function changeHandle() {
			var upload_attach = this.props.upload_attach,
			    formdata = this.refs.attach.getValue();
			upload_attach(formdata);
		}
		// 删除附件

	}, {
		key: "deleteAttach",
		value: function deleteAttach(data) {
			var delete_attach = this.props.delete_attach;

			delete_attach(data);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {};
			result = {
				approval_status: refs.approval_status.getValue() == '2' ? "reject" : "agree",
				create_insurance: this.state.create_insurance,
				approval_remark: refs.approval_remark.getValue(),
				attachment_ids: this.getAttachIds(),
				id: this.props.insurId
			};

			return result;
		}
	}, {
		key: "getAttachIds",
		value: function getAttachIds() {
			var _props$attachList2 = this.props.attachList,
			    attachList = _props$attachList2 === undefined ? [] : _props$attachList2,
			    ids = [];

			attachList.map(function (l, key) {
				ids.push(l.attachment_id);
			});
			return ids.join(",");
		}
	}]);

	return AuditingResult;
}(_react.Component);

/**
 * 更多保单信息
 */


var MoreWarrantyList = exports.MoreWarrantyList = function (_Component14) {
	_inherits(MoreWarrantyList, _Component14);

	function MoreWarrantyList() {
		_classCallCheck(this, MoreWarrantyList);

		return _possibleConstructorReturn(this, (MoreWarrantyList.__proto__ || Object.getPrototypeOf(MoreWarrantyList)).apply(this, arguments));
	}

	_createClass(MoreWarrantyList, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _detail2.default["dialog--shade"], onClick: this.props.closeHandle }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["more-warrant-list"] },
					this.getDialogContent()
				)
			);
		}
	}, {
		key: "getDialogContent",
		value: function getDialogContent() {
			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;

			return lists.map(function (l, key) {
				return _react2.default.createElement(
					"div",
					{ key: key, className: _detail2.default["more--warranty--list"] },
					_react2.default.createElement(UlComponentInfo, { detail: l })
				);
			});
		}
	}]);

	return MoreWarrantyList;
}(_react.Component);

/**
 * 更多投保记录弹框(当前数据为测试数据)
 */


var MoreTakeNode = exports.MoreTakeNode = function (_Component15) {
	_inherits(MoreTakeNode, _Component15);

	function MoreTakeNode() {
		_classCallCheck(this, MoreTakeNode);

		return _possibleConstructorReturn(this, (MoreTakeNode.__proto__ || Object.getPrototypeOf(MoreTakeNode)).apply(this, arguments));
	}

	_createClass(MoreTakeNode, [{
		key: "render",
		value: function render() {
			var insuranceApply = this.props.insuranceApply || [];
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _detail2.default["dialog--shade"], onClick: this.props.closeMoreHandle }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["more-warrant-list"] },
					this.getTimeLine(insuranceApply)
				)
			);
		}
	}, {
		key: "getTimeLine",
		value: function getTimeLine() {
			var insuranceApply = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			var list = insuranceApply || [];
			return list.map(function (l, key) {
				return _react2.default.createElement(
					"div",
					{ key: key },
					l.status != '1' ? _react2.default.createElement(AuditingContentInsur, { auditing: l }) : "",
					_react2.default.createElement(AuditingContentCompany, { auditing: l })
				);
			});
		}
	}]);

	return MoreTakeNode;
}(_react.Component);
/**
 * 理赔详细信息
 */


var DetailRecord = exports.DetailRecord = function (_Component16) {
	_inherits(DetailRecord, _Component16);

	function DetailRecord() {
		_classCallCheck(this, DetailRecord);

		return _possibleConstructorReturn(this, (DetailRecord.__proto__ || Object.getPrototypeOf(DetailRecord)).apply(this, arguments));
	}

	_createClass(DetailRecord, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _detail2.default["dialog--shade"], onClick: this.props.closeClaimHandle }),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["more-warrant-list"] },
					this.getClaimlogContent()
				)
			);
		}
	}, {
		key: "getClaimlogContent",
		value: function getClaimlogContent() {
			var _props$claim2 = this.props.claim,
			    claim = _props$claim2 === undefined ? [] : _props$claim2;

			return claim.map(function (l, key) {
				return _react2.default.createElement(
					"div",
					{ key: key, className: _detail2.default["more--warranty--list"] },
					_react2.default.createElement(UlContentInfo, { claim: l })
				);
			});
		}
	}]);

	return DetailRecord;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.acceptInsurReducer.detail,
		attachList: state.insurUploadReducer.attachList,
		companys: state.acceptInsurReducer.companys,
		list: state.acceptInsurReducer.toexamine,
		insurList: state.acceptInsurReducer.insurList
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取投保申请
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		},
		// 上传附件
		upload_attach: function upload_attach(obj) {
			dispatch(_action4.default.upload(obj));
		},
		// 删除附件
		delete_attach: function delete_attach(obj) {
			dispatch(_action4.default.delete_attach(obj));
		},
		// 审核
		approval: function approval(obj) {
			dispatch(_action2.default.approval(obj));
		},
		//更多保障信息
		get_guarantee: function get_guarantee(obj) {
			dispatch(_action2.default.guarantee(obj));
		},
		//理赔信息
		get_toexamine: function get_toexamine(obj) {
			dispatch(_action2.default.toexamine(obj));
		},
		// 更多投保记录
		insur_list: function insur_list(obj) {
			dispatch(_action2.default.insur_list(obj));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InformationDetail);