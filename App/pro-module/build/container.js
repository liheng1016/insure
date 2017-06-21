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

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _riskWarning = require("@stararc-insurance_functional-module/risk-warning");

var _insurControl = require("@stararc-insurance_functional-module/insur-control");

var _baseSetting = require("@stararc-insurance_functional-module/base-setting");

var _claimManagement = require("@stararc-insurance_functional-module/claim-management");

var _homeStatistic = require("@stararc-insurance_functional-module/home-statistic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 风险警示


// 承包管理


// 基础设置


// 理赔管理


// 首页统计


// 菜单
var menu = [].concat(_toConsumableArray(_homeStatistic.route.subs), _toConsumableArray(_riskWarning.route.subs), _toConsumableArray(_baseSetting.route.subs), _toConsumableArray(_insurControl.route.subs), _toConsumableArray(_claimManagement.route.subs));

var HomeComponnet = function (_Component) {
	_inherits(HomeComponnet, _Component);

	function HomeComponnet() {
		_classCallCheck(this, HomeComponnet);

		return _possibleConstructorReturn(this, (HomeComponnet.__proto__ || Object.getPrototypeOf(HomeComponnet)).apply(this, arguments));
	}

	_createClass(HomeComponnet, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_header2.default, { url: "/Login/loginout" }),
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
		key: "getMenu",
		value: function getMenu() {
			return menu;
		}
	}]);

	return HomeComponnet;
}(_react.Component);

exports.default = HomeComponnet;