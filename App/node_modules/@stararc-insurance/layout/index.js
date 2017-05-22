"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LayoutFooter = exports.LayoutContent = exports.LayoutHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("./index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 内容区头部
 * des；一般用来显示过滤筛选条件，不随这滚动条滚动
 */
var LayoutHeader = exports.LayoutHeader = function (_Component) {
	_inherits(LayoutHeader, _Component);

	function LayoutHeader() {
		_classCallCheck(this, LayoutHeader);

		return _possibleConstructorReturn(this, (LayoutHeader.__proto__ || Object.getPrototypeOf(LayoutHeader)).apply(this, arguments));
	}

	_createClass(LayoutHeader, [{
		key: "render",
		value: function render() {
			var _props$styleCss = this.props.styleCss,
			    styleCss = _props$styleCss === undefined ? {} : _props$styleCss;


			return _react2.default.createElement(
				"div",
				{ className: _index2.default["layout-header"], style: styleCss },
				this.props.children
			);
		}
	}]);

	return LayoutHeader;
}(_react.Component);

/**
 * 内容区 中部
 *
 * des:一般用来列表页的中间部分，超出高度在内容区滚动
 */


var LayoutContent = exports.LayoutContent = function (_Component2) {
	_inherits(LayoutContent, _Component2);

	function LayoutContent() {
		_classCallCheck(this, LayoutContent);

		return _possibleConstructorReturn(this, (LayoutContent.__proto__ || Object.getPrototypeOf(LayoutContent)).apply(this, arguments));
	}

	_createClass(LayoutContent, [{
		key: "render",
		value: function render() {
			var _props$styleCss2 = this.props.styleCss,
			    styleCss = _props$styleCss2 === undefined ? {} : _props$styleCss2;


			return _react2.default.createElement(
				"div",
				{ className: _index2.default["layout-content"], style: styleCss },
				this.props.children
			);
		}
	}]);

	return LayoutContent;
}(_react.Component);

/**
 * 内容区底部
 * des:一般用来列表页的翻页固定
 */


var LayoutFooter = exports.LayoutFooter = function (_Component3) {
	_inherits(LayoutFooter, _Component3);

	function LayoutFooter() {
		_classCallCheck(this, LayoutFooter);

		return _possibleConstructorReturn(this, (LayoutFooter.__proto__ || Object.getPrototypeOf(LayoutFooter)).apply(this, arguments));
	}

	_createClass(LayoutFooter, [{
		key: "render",
		value: function render() {
			var _props$styleCss3 = this.props.styleCss,
			    styleCss = _props$styleCss3 === undefined ? {} : _props$styleCss3;


			return _react2.default.createElement(
				"div",
				{ className: _index2.default["layout-footer"], style: styleCss },
				this.props.children
			);
		}
	}]);

	return LayoutFooter;
}(_react.Component);

