"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Daily = exports.Cover = exports.Claim = exports.ClaimP = exports.Maint = exports.ClaimDiv = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _bigImg = require("@stararc-component/big-img");

var _bigImg2 = _interopRequireDefault(_bigImg);

var _maintenance = require("./maintenance.css");

var _maintenance2 = _interopRequireDefault(_maintenance);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _action = require("../model/basesetting/action");

var _action2 = _interopRequireDefault(_action);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 基础设置基础信息
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
			var ButtonStyle = {
				background: 'orange',
				width: '60px',
				float: 'right'
			};
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
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(Maint, { maint: this.props.detail }),
					_react2.default.createElement(Claim, { claim: this.props.detail }),
					_react2.default.createElement(Cover, { cover: this.props.detail }),
					_react2.default.createElement(Daily, { daily: this.props.detail })
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var get_detail = this.props.get_detail;


			get_detail();
		}
	}]);

	return MainTenance;
}(_react.Component);

/**
 * 编辑操作按钮
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
			var _this3 = this;

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
					text: "编辑",
					onClick: function onClick(e) {
						return _this3.clickHandle();
					} })
			);
		}
	}, {
		key: "clickHandle",
		value: function clickHandle() {
			this.context.router.push("/baseSetting/edit");
		}
	}]);

	return ActionBar;
}(_react.Component);

/*顶部company信息组件*/


var ClaimDiv = exports.ClaimDiv = function (_Component3) {
	_inherits(ClaimDiv, _Component3);

	function ClaimDiv() {
		_classCallCheck(this, ClaimDiv);

		return _possibleConstructorReturn(this, (ClaimDiv.__proto__ || Object.getPrototypeOf(ClaimDiv)).apply(this, arguments));
	}

	_createClass(ClaimDiv, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["company"] },
				_react2.default.createElement(
					"p",
					{ className: _maintenance2.default["company--name"] },
					this.props.ClaimName
				),
				_react2.default.createElement(
					"p",
					{ className: _maintenance2.default["company--name--title"] },
					this.props.ClaimContent
				)
			);
		}
	}]);

	return ClaimDiv;
}(_react.Component);

/*顶部company*/


var Maint = exports.Maint = function (_Component4) {
	_inherits(Maint, _Component4);

	function Maint() {
		_classCallCheck(this, Maint);

		return _possibleConstructorReturn(this, (Maint.__proto__ || Object.getPrototypeOf(Maint)).apply(this, arguments));
	}

	_createClass(Maint, [{
		key: "render",
		value: function render() {
			var _props$maint = this.props.maint,
			    maint = _props$maint === undefined ? {} : _props$maint;

			var ButtonStyle = { background: "orange", width: '60px' };

			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["maint--container"] },
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["wrap--img"] },
					_react2.default.createElement(
						"div",
						{ className: _maintenance2.default["information--login"] },
						_react2.default.createElement("img", { src: maint.addon && maint.addon.imagePath || require("../img/logo.png"),
							alt: "",
							onClick: function onClick(e) {
								return (0, _bigImg2.default)([{ path: maint.addon && maint.addon.imagePath || require("../img/logo.png") }], 0);
							} })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["wrap--right"] },
					_react2.default.createElement(
						"div",
						{ className: _maintenance2.default["information--title"] },
						_react2.default.createElement(ClaimDiv, { ClaimName: "公司名称 : ",
							ClaimContent: maint.organName }),
						_react2.default.createElement(ClaimDiv, { ClaimName: "公司地址 : ",
							ClaimContent: maint.addon && maint.addon.address })
					)
				)
			);
		}
	}]);

	return Maint;
}(_react.Component);

/*联系人组件*/


var ClaimP = exports.ClaimP = function (_Component5) {
	_inherits(ClaimP, _Component5);

	function ClaimP() {
		_classCallCheck(this, ClaimP);

		return _possibleConstructorReturn(this, (ClaimP.__proto__ || Object.getPrototypeOf(ClaimP)).apply(this, arguments));
	}

	_createClass(ClaimP, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"p",
				{ className: _maintenance2.default["claim--person"] },
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["name"] },
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _maintenance2.default["content"] },
					this.props.LabelContent
				)
			);
		}
	}]);

	return ClaimP;
}(_react.Component);
/*理赔联系人组件*/


var Claim = exports.Claim = function (_Component6) {
	_inherits(Claim, _Component6);

	function Claim() {
		_classCallCheck(this, Claim);

		return _possibleConstructorReturn(this, (Claim.__proto__ || Object.getPrototypeOf(Claim)).apply(this, arguments));
	}

	_createClass(Claim, [{
		key: "render",
		value: function render() {
			var claim = this.props.claim && this.props.claim.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["information"] },
					_react2.default.createElement(ClaimP, { LabelName: '理赔联系人 : ',
						LabelContent: claim.socPerson }),
					_react2.default.createElement(ClaimP, { LabelName: '联系方式 : ',
						LabelContent: claim.socContact }),
					_react2.default.createElement(ClaimP, { LabelName: '邮箱 : ',
						LabelContent: claim.socEmail })
				)
			);
		}
	}]);

	return Claim;
}(_react.Component);

/*投保联系人组件*/


var Cover = exports.Cover = function (_Component7) {
	_inherits(Cover, _Component7);

	function Cover() {
		_classCallCheck(this, Cover);

		return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
	}

	_createClass(Cover, [{
		key: "render",
		value: function render() {
			var cover = this.props.cover && this.props.cover.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["information"] },
					_react2.default.createElement(ClaimP, { LabelName: '投保联系人 : ',
						LabelContent: cover.insurePerson }),
					_react2.default.createElement(ClaimP, { LabelName: '联系方式 : ',
						LabelContent: cover.insureContact }),
					_react2.default.createElement(ClaimP, { LabelName: '邮箱 : ',
						LabelContent: cover.insureEmail })
				)
			);
		}
	}]);

	return Cover;
}(_react.Component);

/*日常联系人组件*/


var Daily = exports.Daily = function (_Component8) {
	_inherits(Daily, _Component8);

	function Daily() {
		_classCallCheck(this, Daily);

		return _possibleConstructorReturn(this, (Daily.__proto__ || Object.getPrototypeOf(Daily)).apply(this, arguments));
	}

	_createClass(Daily, [{
		key: "render",
		value: function render() {
			var daily = this.props.daily && this.props.daily.addon || {};
			return _react2.default.createElement(
				"div",
				{ className: _maintenance2.default["claim--container"] },
				_react2.default.createElement(
					"div",
					{ className: _maintenance2.default["information"] },
					_react2.default.createElement(ClaimP, { LabelName: '日常联系人 : ',
						LabelContent: daily.dailyPerson }),
					_react2.default.createElement(ClaimP, { LabelName: '联系方式 : ',
						LabelContent: daily.dailyContact }),
					_react2.default.createElement(ClaimP, { LabelName: '邮箱 : ',
						LabelContent: daily.dailyEmail })
				)
			);
		}
	}]);

	return Daily;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.baseSettingReducer.detail
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainTenance);