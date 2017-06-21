"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AuthorizedArea = exports.Clause = exports.LiDeductible = exports.DeductibleExcess = exports.EssentialInformation = exports.ManagementDetailContent = exports.ManagementButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _detail = require("./detail.css");

var _detail2 = _interopRequireDefault(_detail);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _action = require("../../model/basesetting/action");

var _action2 = _interopRequireDefault(_action);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*主体*/
var ManagementDetail = function (_Component) {
	_inherits(ManagementDetail, _Component);

	function ManagementDetail() {
		_classCallCheck(this, ManagementDetail);

		return _possibleConstructorReturn(this, (ManagementDetail.__proto__ || Object.getPrototypeOf(ManagementDetail)).apply(this, arguments));
	}

	_createClass(ManagementDetail, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(ManagementButton, this.props)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(ManagementDetailContent, this.props)
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

	return ManagementDetail;
}(_react.Component);

/*顶部按钮*/


var ManagementButton = exports.ManagementButton = function (_Component2) {
	_inherits(ManagementButton, _Component2);

	function ManagementButton() {
		_classCallCheck(this, ManagementButton);

		return _possibleConstructorReturn(this, (ManagementButton.__proto__ || Object.getPrototypeOf(ManagementButton)).apply(this, arguments));
	}

	_createClass(ManagementButton, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			var ButtonStyle = { width: "60px", background: '#fa6b49', color: 'white', marginLeft: '10px' };
			var BackStyle = { width: "60px", background: '#f9d865', color: 'white' };
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["list_button"] },
				_react2.default.createElement(_button2.default, {
					styleCss: BackStyle,
					text: "返回",
					onClick: function onClick(e) {
						return history.go(-1);
					} }),
				this.props.detail.status == 1 ? _react2.default.createElement(_button2.default, {
					onClick: function onClick(e) {
						return _this3.product_forbidden();
					},
					styleCss: ButtonStyle,
					text: "停售" }) : ""
			);
		}
	}, {
		key: "product_forbidden",
		value: function product_forbidden() {
			var _props2 = this.props,
			    product_forbidden = _props2.product_forbidden,
			    params = _props2.params;


			if (!confirm("确定要停售该保险产品？")) {
				return;
			}

			product_forbidden({
				id: params.id,
				status: 2
			});
		}
	}]);

	return ManagementButton;
}(_react.Component);

/*主体内容*/


var ManagementDetailContent = exports.ManagementDetailContent = function (_Component3) {
	_inherits(ManagementDetailContent, _Component3);

	function ManagementDetailContent() {
		_classCallCheck(this, ManagementDetailContent);

		return _possibleConstructorReturn(this, (ManagementDetailContent.__proto__ || Object.getPrototypeOf(ManagementDetailContent)).apply(this, arguments));
	}

	_createClass(ManagementDetailContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["content_wrap"] },
				_react2.default.createElement(EssentialInformation, this.props),
				_react2.default.createElement(DeductibleExcess, this.props),
				_react2.default.createElement(Clause, this.props),
				_react2.default.createElement(AuthorizedArea, this.props)
			);
		}
	}]);

	return ManagementDetailContent;
}(_react.Component);

/*保险产品基本信息*/


var EssentialInformation = exports.EssentialInformation = function (_Component4) {
	_inherits(EssentialInformation, _Component4);

	function EssentialInformation() {
		_classCallCheck(this, EssentialInformation);

		return _possibleConstructorReturn(this, (EssentialInformation.__proto__ || Object.getPrototypeOf(EssentialInformation)).apply(this, arguments));
	}

	_createClass(EssentialInformation, [{
		key: "render",
		value: function render() {
			var detailcontent = this.props.detail;
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["essential"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["essential_title"] },
					"\u4FDD\u9669\u4EA7\u54C1\u57FA\u672C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["essential_content"] },
					_react2.default.createElement(
						"li",
						{ className: _detail2.default["essential_content--li"] },
						"\u4FDD\u9669\u4EA7\u54C1\u540D\u79F0\uFF1A",
						detailcontent.name
					),
					_react2.default.createElement(
						"li",
						{ className: _detail2.default["essential_content--li"] },
						"\u4FDD\u9669\u516C\u53F8\uFF1A",
						detailcontent.organ_name
					),
					_react2.default.createElement(
						"li",
						{ className: _detail2.default["essential_content--li"] },
						"\u4FDD\u9669\u7ECF\u7EAA\u516C\u53F8\uFF1A",
						detailcontent.broker_name
					)
				)
			);
		}
	}]);

	return EssentialInformation;
}(_react.Component);

/*免限额条例 */


var DeductibleExcess = exports.DeductibleExcess = function (_Component5) {
	_inherits(DeductibleExcess, _Component5);

	function DeductibleExcess() {
		_classCallCheck(this, DeductibleExcess);

		return _possibleConstructorReturn(this, (DeductibleExcess.__proto__ || Object.getPrototypeOf(DeductibleExcess)).apply(this, arguments));
	}

	_createClass(DeductibleExcess, [{
		key: "render",
		value: function render() {
			var detailcontent = this.props.detail;
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["essential"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["essential_title"] },
					"\u8D54\u6B3E\u9650\u989D\u548C\u514D\u9650\u989D\u6761\u4F8B"
				),
				_react2.default.createElement(
					"ul",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(LiDeductible, {
						DeductibleName: "从业人员 : ",
						DeductibleContent: detailcontent.practitioners }),
					_react2.default.createElement(LiDeductible, {
						DeductibleName: "第三者责任 : ",
						DeductibleContent: detailcontent.third_party })
				)
			);
		}
	}]);

	return DeductibleExcess;
}(_react.Component);

/*免限额条例中li组件*/


var LiDeductible = exports.LiDeductible = function (_Component6) {
	_inherits(LiDeductible, _Component6);

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

/*条款内容*/


var Clause = exports.Clause = function (_Component7) {
	_inherits(Clause, _Component7);

	function Clause() {
		_classCallCheck(this, Clause);

		return _possibleConstructorReturn(this, (Clause.__proto__ || Object.getPrototypeOf(Clause)).apply(this, arguments));
	}

	_createClass(Clause, [{
		key: "render",
		value: function render() {
			var detailcontent = this.props.detail && this.props.detail.attachment && this.props.detail.attachment[0] || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["essential"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["essential_title"] },
					"\u6761\u6B3E\u5185\u5BB9"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["content"] },
					"\u4FDD\u9669\u6761\u6B3E\uFF1A",
					_react2.default.createElement(
						"a",
						{ href: detailcontent.attachment_path, download: detailcontent.attachment_path },
						detailcontent.name
					)
				)
			);
		}
	}]);

	return Clause;
}(_react.Component);

/*授权地区*/


var AuthorizedArea = exports.AuthorizedArea = function (_Component8) {
	_inherits(AuthorizedArea, _Component8);

	function AuthorizedArea() {
		_classCallCheck(this, AuthorizedArea);

		return _possibleConstructorReturn(this, (AuthorizedArea.__proto__ || Object.getPrototypeOf(AuthorizedArea)).apply(this, arguments));
	}

	_createClass(AuthorizedArea, [{
		key: "render",
		value: function render() {
			var detailcontent = this.props.detail;
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["essential"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["essential_title"] },
					"\u6388\u6743\u5730\u533A"
				),
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["content"] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["clause--title"] },
						"\u6388\u6743\u5730\u533A : "
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["clause--content"] },
						detailcontent.grid_name
					)
				)
			);
		}
	}, {
		key: "get_grids",
		value: function get_grids() {
			var detail = this.props.detail;

			if (detail.grid_name && detail.grid_name.length) {
				return detail.grid_name.join(" / ");
			} else {
				return;
			}
		}
	}]);

	return AuthorizedArea;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.basesettingReducer.productDetail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取保险产品详情
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.product_detail(obj));
		},
		// 停售产品
		product_forbidden: function product_forbidden(obj) {
			dispatch(_action2.default.product_forbidden(obj));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManagementDetail);