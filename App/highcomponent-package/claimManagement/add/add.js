"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _index = require("../component/index.css");

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

var _uploadFile = require("@stararc-insurance/upload-file");

var _action = require("../model/claim/action");

var _action2 = _interopRequireDefault(_action);

var _component = require("../component");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 理赔管理创建主体
 */
var SettleAddWrap = function (_Component) {
	_inherits(SettleAddWrap, _Component);

	function SettleAddWrap(props) {
		_classCallCheck(this, SettleAddWrap);

		var _this = _possibleConstructorReturn(this, (SettleAddWrap.__proto__ || Object.getPrototypeOf(SettleAddWrap)).call(this, props));

		_this.state = {
			detaillist: {},
			selectValue: {}
		};
		return _this;
	}

	_createClass(SettleAddWrap, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var ButtonStyle = {
				background: 'orange',
				width: '60px',
				float: 'right',
				marginLeft: '10px'
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["settleeditwrap"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(
						"div",
						{ className: _index2.default["back_button"] },
						_react2.default.createElement(_button2.default, {
							styleCss: ButtonStyle,
							text: "返回",
							onClick: function onClick(e) {
								return history.go(-1);
							} })
					)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50 } },
					_react2.default.createElement(_component.ApplicantInformation, _extends({
						ref: "applicant"
					}, this.props, {
						selectValue: this.state.selectValue,
						conserveHandle: function conserveHandle(selectValue) {
							return _this2.conserveHandle(selectValue);
						} })),
					_react2.default.createElement(_component.SecurityInformation, _extends({}, this.props, {
						selectValue: this.state.selectValue })),
					_react2.default.createElement(_component.InformantInformation, _extends({
						ref: "info"
					}, this.props, {
						selectValue: this.state.selectValue })),
					_react2.default.createElement(_component.HearingCases, _extends({
						ref: "hear"
					}, this.props)),
					_react2.default.createElement(_component.AccidentDetails, _extends({
						ref: "accident"
					}, this.props)),
					_react2.default.createElement(_component.Upload, _extends({
						ref: "upload"
					}, this.props)),
					_react2.default.createElement(_component.PaymentTime, _extends({
						ref: "pay"
					}, this.props))
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(_component.FooterButton, _extends({}, this.props, {
						onClick: function onClick(e) {
							return _this2.submitHandle();
						} }))
				)
			);
		}
		// 选择投保人信息

	}, {
		key: "conserveHandle",
		value: function conserveHandle(selectValue) {
			this.setState({
				selectValue: selectValue
			});
		}
	}, {
		key: "submitHandle",
		value: function submitHandle() {
			var create_compensate = this.props.create_compensate;

			var refs = this.refs,
			    paramsFeild = {};

			for (var r in refs) {
				paramsFeild = Object.assign(paramsFeild, paramsFeild, _extends({}, refs[r].getValue()));
			}

			// 报案人信息，案件受理信息 必填字段不通过不发送请求
			if (!paramsFeild["hearVerify"] || !paramsFeild["infoVerify"]) {
				return;
			}
			create_compensate(paramsFeild);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    get_insur_company = _props.get_insur_company,
			    get_accident_types = _props.get_accident_types;

			get_insur_company({
				count: 8,
				status: 2 //在保
			});
			get_accident_types();
		}
	}]);

	return SettleAddWrap;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		condition: state.claimReducer.insurCompanyCondition,
		lists: state.claimReducer.insurCompanyList,
		accidentTypes: state.claimReducer.accidentTypes,
		sceneAttachment: state.claimReducer.sceneAttachment,
		accidentAttachment: state.claimReducer.accidentAttachment,
		thingsAttachment: state.claimReducer.thingsAttachment
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		create_compensate: function create_compensate(obj) {
			dispatch(_action2.default.create(obj));
		},
		get_insur_company: function get_insur_company(obj) {
			dispatch(_action2.default.get_insur_company(obj));
		},
		get_accident_types: function get_accident_types(obj) {
			dispatch(_action2.default.get_accident_types(obj));
		},
		// 上传附件
		upload_claim: function upload_claim(obj, type) {
			dispatch(_action2.default.upload_claim(obj, {
				fileType: type
			}));
		},
		// 删除现场附件
		delete_claim: function delete_claim(index) {
			dispatch(_action2.default.delete_claim({ index: index }));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SettleAddWrap);