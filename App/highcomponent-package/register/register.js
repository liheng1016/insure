"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PeopleContent = exports.EnterpriseContent = exports.Nav = exports.PeopleRegister = exports.EnterpriseRegister = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _register = require("./register.css");

var _register2 = _interopRequireDefault(_register);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
	_inherits(Register, _Component);

	function Register(props) {
		_classCallCheck(this, Register);

		var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

		_this.state = {
			hasDone: false
		};
		return _this;
	}

	_createClass(Register, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _register2.default["wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _register2.default["close"] },
					_react2.default.createElement("img", { src: "img/delete.png" })
				),
				!this.state.hasDone ? _react2.default.createElement(EnterpriseRegister, { clickHandle: function clickHandle(type) {
						return _this2.clickHandle(type);
					} }) : _react2.default.createElement(PeopleRegister, { clickHandle: function clickHandle(type) {
						return _this2.clickHandle(type);
					} })
			);
		}
	}, {
		key: "clickHandle",
		value: function clickHandle(type) {
			var hasDone = type == "done" ? true : false;
			this.setState({
				hasDone: hasDone
			});
		}
	}]);

	return Register;
}(_react.Component);

/*企业注册*/


var EnterpriseRegister = exports.EnterpriseRegister = function (_Component2) {
	_inherits(EnterpriseRegister, _Component2);

	function EnterpriseRegister() {
		_classCallCheck(this, EnterpriseRegister);

		return _possibleConstructorReturn(this, (EnterpriseRegister.__proto__ || Object.getPrototypeOf(EnterpriseRegister)).apply(this, arguments));
	}

	_createClass(EnterpriseRegister, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				"div",
				{ className: _register2.default["enterprise"] },
				_react2.default.createElement(Nav, { onClick: function onClick(type) {
						return _this4.props.clickHandle(type);
					}, hasDone: "not" }),
				_react2.default.createElement(EnterpriseContent, null)
			);
		}
	}]);

	return EnterpriseRegister;
}(_react.Component);

/*个人注册*/


var PeopleRegister = exports.PeopleRegister = function (_Component3) {
	_inherits(PeopleRegister, _Component3);

	function PeopleRegister() {
		_classCallCheck(this, PeopleRegister);

		return _possibleConstructorReturn(this, (PeopleRegister.__proto__ || Object.getPrototypeOf(PeopleRegister)).apply(this, arguments));
	}

	_createClass(PeopleRegister, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			return _react2.default.createElement(
				"div",
				{ className: _register2.default["people"] },
				_react2.default.createElement(Nav, { onClick: function onClick(type) {
						return _this6.props.clickHandle(type);
					}, hasDone: "done" }),
				_react2.default.createElement(PeopleContent, null)
			);
		}
	}]);

	return PeopleRegister;
}(_react.Component);
/*nav标题*/


var Nav = exports.Nav = function (_Component4) {
	_inherits(Nav, _Component4);

	function Nav(props) {
		_classCallCheck(this, Nav);

		var _this7 = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this7.state = {
			hasDone: true
		};
		return _this7;
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			var _this8 = this;

			return _react2.default.createElement(
				"ul",
				{ className: _register2.default["nav"] },
				_react2.default.createElement(
					"li",
					{ className: this.props.hasDone == "not" ? _register2.default["en_pointer"] : _register2.default["enterprise_nav"],
						onClick: function onClick(e) {
							return _this8.props.onClick("not");
						} },
					"\u4F01\u4E1A\u6CE8\u518C"
				),
				_react2.default.createElement(
					"li",
					{ className: this.props.hasDone == "done" ? _register2.default["pe_pointer"] : _register2.default["enterprise_nav"], onClick: function onClick(e) {
							return _this8.props.onClick("done");
						} },
					"\u4E2A\u4EBA\u6CE8\u518C"
				)
			);
		}
	}, {
		key: "clickHandle",
		value: function clickHandle(value) {
			var onClick = this.props.onClick;

			this.setState({
				hasDone: value == "not"
			}, function () {
				onClick && onClick(value);
			});
		}
	}]);

	return Nav;
}(_react.Component);

/*企业注册内容*/


var EnterpriseContent = exports.EnterpriseContent = function (_Component5) {
	_inherits(EnterpriseContent, _Component5);

	function EnterpriseContent() {
		_classCallCheck(this, EnterpriseContent);

		return _possibleConstructorReturn(this, (EnterpriseContent.__proto__ || Object.getPrototypeOf(EnterpriseContent)).apply(this, arguments));
	}

	_createClass(EnterpriseContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _register2.default["enterprise_content"] },
				"1234567"
			);
		}
	}]);

	return EnterpriseContent;
}(_react.Component);

/*个人注册内容*/


var PeopleContent = exports.PeopleContent = function (_Component6) {
	_inherits(PeopleContent, _Component6);

	function PeopleContent() {
		_classCallCheck(this, PeopleContent);

		return _possibleConstructorReturn(this, (PeopleContent.__proto__ || Object.getPrototypeOf(PeopleContent)).apply(this, arguments));
	}

	_createClass(PeopleContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _register2.default["enterprise_content"] },
				"\u4E2A\u4EBA\u6CE8\u518C"
			);
		}
	}]);

	return PeopleContent;
}(_react.Component);

exports.default = Register;