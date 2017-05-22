"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AlertTips = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.openAlert = openAlert;
exports.closeAlert = closeAlert;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require("./index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertTips = exports.AlertTips = function (_Component) {
	_inherits(AlertTips, _Component);

	function AlertTips() {
		_classCallCheck(this, AlertTips);

		return _possibleConstructorReturn(this, (AlertTips.__proto__ || Object.getPrototypeOf(AlertTips)).apply(this, arguments));
	}

	_createClass(AlertTips, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    success = _props.success,
			    msg1 = _props.msg1,
			    msg2 = _props.msg2;


			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement("div", { className: _index2.default["shade"], onClick: function onClick(e) {
						return _this2.hideEvent(e);
					} }),
				success ? _react2.default.createElement(
					"div",
					{ className: _index2.default["alert--content"] },
					_react2.default.createElement(
						"p",
						{ className: _index2.default["tips-p"], style: { color: "#040404" } },
						msg1
					)
				) : _react2.default.createElement(
					"div",
					{ className: _index2.default["alert--false"] },
					_react2.default.createElement(
						"p",
						{ className: _index2.default["tips-f"], style: { color: "#e91212" } },
						msg1
					),
					_react2.default.createElement(
						"p",
						null,
						_react2.default.createElement(
							"button",
							{ type: "button", className: _index2.default["button"], onClick: function onClick(e) {
									return closeAlert();
								} },
							"\u786E\u8BA4"
						)
					)
				)
			);
		}
	}, {
		key: "hideEvent",
		value: function hideEvent(e) {
			var hideEvent = this.props.hideEvent;


			hideEvent && hideEvent();

			closeAlert(e);
		}
	}]);

	return AlertTips;
}(_react.Component);

/**
 * 显示弹窗
 * less
 * msg1 大标题 必须
 * msg2 小标题 必须
 * success 类型  成功 true  失败 false 默认false
 * callback 点击遮罩关闭弹层的回调函数 非必须
 */


function openAlert(success, msg1, msg2, callback) {
	var root = document.createElement('div');
	root.id = 'alertContainer';
	document.body.appendChild(root);

	return _reactDom2.default.render(_react2.default.createElement(AlertTips, { msg1: msg1, msg2: msg2, success: success, hideEvent: callback }), root);
}

/**
 * 关闭弹窗
 * @date   2017-04-27T11:04:53+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function closeAlert() {
	var alertContainer = document.querySelector('#alertContainer');
	if (alertContainer) {
		_reactDom2.default.unmountComponentAtNode(alertContainer);
		alertContainer.parentNode.removeChild(alertContainer);
	}
}

