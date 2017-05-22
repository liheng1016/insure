'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('@stararc-component/button');

var _button2 = _interopRequireDefault(_button);

var _commonRequest = require('@stararc-insurance/common-request');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportTable = function (_Component) {
	_inherits(ExportTable, _Component);

	function ExportTable(props) {
		_classCallCheck(this, ExportTable);

		var _this = _possibleConstructorReturn(this, (ExportTable.__proto__ || Object.getPrototypeOf(ExportTable)).call(this, props));

		_this.state = {
			disabled: false
		};
		return _this;
	}

	_createClass(ExportTable, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_button2.default, {
				className: "blue-light",
				disabled: this.state.disabled,
				onClick: this.props.onClick,
				text: this.state.disabled ? "导出中..." : "导出表格" });
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var self = this;

			if (nextProps.exportData != this.props.exportData) {
				if (!nextProps.exportData.content.length) {
					alert("没有相关数据可导出！");
					return;
				}

				var path = '/Export/exportDataToCSV',
				    createFilePath = nextProps.createFilePath,
				    exportData = nextProps.exportData,
				    getFilePath = nextProps.getFilePath;


				var params = {
					title: JSON.stringify(exportData.title),
					content: JSON.stringify(exportData.content),
					filename: exportData.filename
				};

				self.setState({
					disabled: true
				});

				(0, _commonRequest2.default)(createFilePath, params, 'post').then(function (data) {
					var path = '';

					if (process.env.NODE_ENV != 'production') {
						path = LOCAL_DOMAIN;
					} else {
						path = "";
					}

					self.setState({
						disabled: false
					}, function () {
						location.href = path + getFilePath + "?path=" + data.data;
					});
				});
			}
		}
	}]);

	return ExportTable;
}(_react.Component);

exports.default = ExportTable;

