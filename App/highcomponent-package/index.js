"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("@stararc-component/header");

var _header2 = _interopRequireDefault(_header);

var _slidemenu = require("@stararc-component/slidemenu");

var _slidemenu2 = _interopRequireDefault(_slidemenu);

var _Gloable = require("./Gloable.css");

var _Gloable2 = _interopRequireDefault(_Gloable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menu = require('../routes/insur.json');

/**
 * the biggest container
 */

var Container = function (_Component) {
	_inherits(Container, _Component);

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	_createClass(Container, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_header2.default, _extends({}, this.props, { loginOut: function loginOut(e) {
						return _this2.loginOut();
					} })),
				_react2.default.createElement(
					"div",
					{ className: _Gloable2.default["content"] },
					_react2.default.createElement(_slidemenu2.default, _extends({ menu: this.getMenu() }, this.props)),
					_react2.default.createElement(
						"div",
						{ className: _Gloable2.default["content__main"] },
						this.props.children
					)
				)
			);
		}
	}, {
		key: "loginOut",
		value: function loginOut() {
			console.log("loginOut");
			clearCookie();

			this.context.router.push("/");
		}
	}, {
		key: "getMenu",
		value: function getMenu() {
			return menu.subs;
		}
	}]);

	return Container;
}(_react.Component);

exports.default = Container;


Container.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

function clearCookie() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--;) {
			document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
		}
	}
}