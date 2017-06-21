"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Daily = exports.Cover = exports.Claim = exports.MiddleContent = exports.Maint = exports.Information = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _maintenance = require("../maintenance.css");

var _maintenance2 = _interopRequireDefault(_maintenance);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _action = require("../../model/basesetting/action");

var _action2 = _interopRequireDefault(_action);

var _uploadFile = require("@stararc-insurance/upload-file");

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 基础信息编辑页面
 */
var MainTenance = function (_Component) {
	_inherits(MainTenance, _Component);

	function MainTenance() {
		_classCallCheck(this, MainTenance);

		return _possibleConstructorReturn(this, (MainTenance.__proto__ || Object.getPrototypeOf(MainTenance)).apply(this, arguments));
	}

	_createClass(MainTenance, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(ActionBar, null)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50 } },
					_react2.default.createElement(Maint, _extends({ ref: "maint" }, this.props)),
					_react2.default.createElement(Claim, _extends({ ref: "claim" }, this.props)),
					_react2.default.createElement(Cover, _extends({ ref: "cover" }, this.props)),
					_react2.default.createElement(Daily, _extends({ ref: "daily" }, this.props))
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(SubmitBar, { onClick: function onClick(e) {
							return _this2.submitHandle();
						} })
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var get_detail = this.props.get_detail;


			get_detail();
		}
	}, {
		key: "submitHandle",
		value: function submitHandle() {
			var modify = this.props.modify;

			var refs = this.refs;
			// one
			var claimIsRight = refs.claim.getValue()["isRight"];
			var coverIsRight = refs.cover.getValue()["isRight"];
			var dailyIsRight = refs.daily.getValue()["isRight"];

			if (!claimIsRight || !coverIsRight || !dailyIsRight) {
				return;
			}

			var params = _extends({}, refs.maint.getValue(), refs.claim.getValue()["value"], refs.cover.getValue()["value"], refs.daily.getValue()["value"]);

			modify(params);
		}
	}]);

	return MainTenance;
}(_react.Component);

/**
 * 操作栏
 */


var ActionBar = function (_Component2) {
	_inherits(ActionBar, _Component2);

	function ActionBar() {
		_classCallCheck(this, ActionBar);

		return _possibleConstructorReturn(this, (ActionBar.__proto__ || Object.getPrototypeOf(ActionBar)).apply(this, arguments));
	}

	_createClass(ActionBar, [{
		key: "render",
		value: function render() {
			var ButtonStyle = {
				background: 'orange',
				width: '60px',
				float: 'right'
			};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default['clear'] },
				_react2.default.createElement(_button2.default, {
					styleCss: ButtonStyle,
					text: "返回",
					onClick: function onClick(e) {
						return history.go(-1);
					} })
			);
		}
	}]);

	return ActionBar;
}(_react.Component);

/**
 * 提交按钮
 */


var SubmitBar = function (_Component3) {
	_inherits(SubmitBar, _Component3);

	function SubmitBar() {
		_classCallCheck(this, SubmitBar);

		return _possibleConstructorReturn(this, (SubmitBar.__proto__ || Object.getPrototypeOf(SubmitBar)).apply(this, arguments));
	}

	_createClass(SubmitBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["base--submit"] },
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: "1", offset: "5.5" },
					_react2.default.createElement(_button2.default, { text: "保存", type: "button", onClick: this.props.onClick })
				)
			);
		}
	}]);

	return SubmitBar;
}(_react.Component);

/**
 * 保险基础信息组件
 */


var Information = exports.Information = function (_Component4) {
	_inherits(Information, _Component4);

	function Information() {
		_classCallCheck(this, Information);

		return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
	}

	_createClass(Information, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["company"] },
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["company--name"] },
					this.props.LableName
				),
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["company--name--title"] },
					this.props.children
				)
			);
		}
	}]);

	return Information;
}(_react.Component);

/**
 * 保险基础信息
 */


var Maint = exports.Maint = function (_Component5) {
	_inherits(Maint, _Component5);

	function Maint(props) {
		_classCallCheck(this, Maint);

		var _this6 = _possibleConstructorReturn(this, (Maint.__proto__ || Object.getPrototypeOf(Maint)).call(this, props));

		var detail = _this6.props.detail && _this6.props.detail.addon || {};

		_this6.state = {
			imagePath: detail.imagePath || require("../../img/logo.png"),
			showTips: false
		};
		return _this6;
	}

	_createClass(Maint, [{
		key: "render",
		value: function render() {
			var _this7 = this;

			var ButtonStyle = { background: "orange", width: '60px', marginLeft: '60%', marginTop: '3%' };
			var _props$detail = this.props.detail,
			    detail = _props$detail === undefined ? {} : _props$detail;

			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["maint--container"] },
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["wrap--img"] },
					_react2.default.createElement(
						"div",
						{ className: _maintenance2.default["information--login"] },
						_react2.default.createElement("img", { src: this.state.imagePath, alt: "" })
					),
					_react2.default.createElement(
						"div",
						{ className: _maintenance2.default["common--upload"], onMouseOver: function onMouseOver(e) {
								return _this7.mouseOverHadnle(true);
							}, onMouseOut: function onMouseOut(e) {
								return _this7.mouseOverHadnle(false);
							} },
						_react2.default.createElement(_uploadFile.CommonUpload, {
							ref: "logo",
							accept: "image/jpeg,image/jpg,image/png,image/svg",
							onChange: function onChange(e) {
								return _this7.onChangeHandle();
							} })
					),
					this.state.showTips ? _react2.default.createElement(
						"div",
						{ className: _maintenance2.default["logo--tips"] },
						_react2.default.createElement(
							"p",
							null,
							"\u70B9\u51FB\u66F4\u6362LOGO"
						)
					) : ""
				),
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["wrap--right"] },
					_react2.default.createElement(
						"div",
						{ className: _maintenance2.default["information--title"] },
						_react2.default.createElement(
							Information,
							{ LableName: "公司名称 :" },
							_react2.default.createElement(_input2.default, { disabled: true, defaultValue: detail.organName })
						),
						_react2.default.createElement(
							Information,
							{ LableName: "公司地址 :" },
							_react2.default.createElement(_input2.default, { ref: "address", defaultValue: detail.addon && detail.addon.address })
						)
					)
				)
			);
		}
		// 鼠标移动到logo上面出现提示

	}, {
		key: "mouseOverHadnle",
		value: function mouseOverHadnle(flag) {
			this.setState({
				showTips: flag
			});
		}
		// 点击logo触发事件

	}, {
		key: "onChangeHandle",
		value: function onChangeHandle() {
			var formdata = this.refs.logo.getValue();
			var upload = this.props.upload;


			upload(formdata);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.detail != this.props.detail) {
				var detail = nextProps.detail && nextProps.detail.addon || {};
				if (detail.imagePath) {
					this.setState({
						imagePath: detail.imagePath
					});
				}
			}

			if (nextProps.logoImg != this.props.logoImg) {
				var logoImg = nextProps.logoImg;
				this.setState({
					imagePath: logoImg.attachment_path
				});
			}
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var address = this.refs.address.getValue();
			var imagePath = this.state.imagePath;

			return {
				address: address,
				imagePath: imagePath
			};
		}
	}]);

	return Maint;
}(_react.Component);

/*MiddleContent组件*/


var MiddleContent = exports.MiddleContent = function (_Component6) {
	_inherits(MiddleContent, _Component6);

	function MiddleContent(props) {
		_classCallCheck(this, MiddleContent);

		var _this8 = _possibleConstructorReturn(this, (MiddleContent.__proto__ || Object.getPrototypeOf(MiddleContent)).call(this, props));

		_this8.state = {
			errorTips: ""
		};
		return _this8;
	}

	_createClass(MiddleContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--person"] },
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["person--name"] },
					this.props.LableName
				),
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["person--input"] },
					_react2.default.createElement(_input2.default, { ref: "input", defaultValue: this.props.defaultValue }),
					_react2.default.createElement(
						"span",
						{ className: _maintenance2.default["prompt"] },
						this.state.errorTips
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _props$type = this.props.type,
			    type = _props$type === undefined ? "" : _props$type,
			    result = "",
			    value = this.refs.input.getValue();

			switch (type) {
				case "phone":
					result = this.RegExpPhoneFeild(value);
					break;
				case "email":
					result = this.RegExpEmailFeild(value);
					break;
				default:
					result = this.RegExpCommonFeild(value);
					break;
			}
			this.setState({
				errorTips: result.msg
			});
			return {
				isRight: result.isRight,
				value: value
			};
		}
		//校验手机号

	}, {
		key: "RegExpPhoneFeild",
		value: function RegExpPhoneFeild() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			var regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			var isRight = regExp.test(value);
			return {
				isRight: isRight,
				msg: value ? isRight ? "" : "手机号格式不正确" : "该项为必填项"
			};
		}
		// 校验邮箱

	}, {
		key: "RegExpEmailFeild",
		value: function RegExpEmailFeild() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			var regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var isRight = regExp.test(value);
			return {
				isRight: isRight,
				msg: value ? isRight ? "" : "邮箱格式不正确" : "该项为必填项"
			};
		}
		// 校验是非为空

	}, {
		key: "RegExpCommonFeild",
		value: function RegExpCommonFeild() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

			var isRight = !!value;
			return {
				isRight: isRight,
				msg: isRight ? "" : "该项为必填项"
			};
		}
	}]);

	return MiddleContent;
}(_react.Component);

/**
 * 理赔联系人
 */


var Claim = exports.Claim = function (_Component7) {
	_inherits(Claim, _Component7);

	function Claim() {
		_classCallCheck(this, Claim);

		return _possibleConstructorReturn(this, (Claim.__proto__ || Object.getPrototypeOf(Claim)).apply(this, arguments));
	}

	_createClass(Claim, [{
		key: "render",
		value: function render() {
			var detail = this.props.detail && this.props.detail.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(MiddleContent, {
					ref: "socPerson",
					defaultValue: detail.socPerson,
					LableName: "理赔联系人" }),
				_react2.default.createElement(MiddleContent, {
					ref: "socContact",
					type: "phone",
					defaultValue: detail.socContact,
					LableName: "联系方式" }),
				_react2.default.createElement(MiddleContent, {
					ref: "socEmail",
					type: "email",
					defaultValue: detail.socEmail,
					errorTips: "",
					LableName: "邮箱" })
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var socPerson = this.refs.socPerson.getValue();
			var socContact = this.refs.socContact.getValue();
			var socEmail = this.refs.socEmail.getValue();
			return {
				isRight: socPerson.isRight && socContact.isRight && socEmail.isRight,
				value: {
					socPerson: socPerson.value,
					socContact: socContact.value,
					socEmail: socEmail.value
				}
			};
		}
	}]);

	return Claim;
}(_react.Component);

/**
 * 投保联系人
 */


var Cover = exports.Cover = function (_Component8) {
	_inherits(Cover, _Component8);

	function Cover() {
		_classCallCheck(this, Cover);

		return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
	}

	_createClass(Cover, [{
		key: "render",
		value: function render() {
			var detail = this.props.detail && this.props.detail.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(MiddleContent, {
					ref: "insurePerson",
					defaultValue: detail.insurePerson,
					LableName: "投保联系人" }),
				_react2.default.createElement(MiddleContent, {
					ref: "insureContact",
					type: "phone",
					defaultValue: detail.insureContact,
					LableName: "联系方式" }),
				_react2.default.createElement(MiddleContent, {
					ref: "insureEmail",
					type: "email",
					defaultValue: detail.insureEmail,
					LableName: "邮箱" })
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var insurePerson = this.refs.insurePerson.getValue();
			var insureContact = this.refs.insureContact.getValue();
			var insureEmail = this.refs.insureEmail.getValue();
			return {
				isRight: insurePerson.isRight && insureContact.isRight && insureEmail.isRight,
				value: {
					insurePerson: insurePerson.value,
					insureContact: insureContact.value,
					insureEmail: insureEmail.value
				}
			};
		}
	}]);

	return Cover;
}(_react.Component);

/**
 * 日常联系人
 */


var Daily = exports.Daily = function (_Component9) {
	_inherits(Daily, _Component9);

	function Daily() {
		_classCallCheck(this, Daily);

		return _possibleConstructorReturn(this, (Daily.__proto__ || Object.getPrototypeOf(Daily)).apply(this, arguments));
	}

	_createClass(Daily, [{
		key: "render",
		value: function render() {
			var detail = this.props.detail && this.props.detail.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(MiddleContent, {
					ref: "dailyPerson",
					defaultValue: detail.dailyPerson,
					LableName: "日常联系人" }),
				_react2.default.createElement(MiddleContent, {
					ref: "dailyContact",
					type: "phone",
					defaultValue: detail.dailyContact,
					LableName: "联系方式" }),
				_react2.default.createElement(MiddleContent, {
					ref: "dailyEmail",
					type: "email",
					defaultValue: detail.dailyEmail,
					LableName: "邮箱" })
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var dailyPerson = this.refs.dailyPerson.getValue();
			var dailyContact = this.refs.dailyContact.getValue();
			var dailyEmail = this.refs.dailyEmail.getValue();

			return {
				isRight: dailyPerson.isRight && dailyContact.isRight && dailyEmail.isRight,
				value: {
					dailyPerson: dailyPerson.value,
					dailyContact: dailyContact.value,
					dailyEmail: dailyEmail.value
				}
			};
		}
	}]);

	return Daily;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.basesettingReducer.detail,
		logoImg: state.basesettingReducer.logoImg
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		},
		modify: function modify(obj) {
			dispatch(_action2.default.modify(obj));
		},
		upload: function upload(obj) {
			dispatch(_action2.default.upload(obj));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainTenance);