'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CommonUpload = exports.UploadMedia = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 上传
 */
var Upload = function (_Component) {
	_inherits(Upload, _Component);

	function Upload(props) {
		_classCallCheck(this, Upload);

		var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

		_this.state = {
			accept: props.accept || '*/*',
			multiple: props.multiple || ''
		};
		return _this;
	}

	_createClass(Upload, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var className = this.props.className ? this.props.className : 'uploader__input';
			return _react2.default.createElement(
				'div',
				{ className: _index2.default["uploader__box"] },
				_react2.default.createElement(
					'form',
					{ action: '#', method: 'post', ref: 'uploadform', encType: 'multipart/form-data' },
					_react2.default.createElement('input', {
						multiple: this.state.multiple,
						ref: 'uploadInput',
						name: 'uploadInput',
						disabled: this.props.disabled,
						className: _index2.default[className],
						accept: this.state.accept,
						onChange: function onChange(e) {
							return _this2.changeHandle(e);
						},
						type: 'file' }),
					_react2.default.createElement(
						'button',
						{ type: 'button', disabled: this.props.disabled, className: _index2.default["uploader__button"] },
						this.props.buttonName
					)
				)
			);
		}
	}, {
		key: 'changeHandle',
		value: function changeHandle(e) {
			var value = this.refs.uploadInput;
			var onChange = this.props.onChange;


			onChange && onChange();
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			var formEle = this.refs.uploadform;
			var data = new FormData(formEle);

			return data;
		}
	}]);

	return Upload;
}(_react.Component);

/**
 * 上传多媒体附件
 */


exports.default = Upload;

var UploadMedia = exports.UploadMedia = function (_Component2) {
	_inherits(UploadMedia, _Component2);

	function UploadMedia(props) {
		_classCallCheck(this, UploadMedia);

		var _this3 = _possibleConstructorReturn(this, (UploadMedia.__proto__ || Object.getPrototypeOf(UploadMedia)).call(this, props));

		_this3.state = {
			accept: props.accept,
			multiple: props.multiple || ''
		};
		return _this3;
	}

	_createClass(UploadMedia, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'div',
				{ className: _index2.default["uploader__img--box"] },
				_react2.default.createElement(
					'form',
					{ action: '#', method: 'post', ref: 'uploadform', encType: 'multipart/form-data' },
					_react2.default.createElement('input', {
						multiple: this.state.multiple,
						ref: 'uploadInput',
						name: 'uploadInput',
						disabled: this.props.disabled,
						className: _index2.default["upload__img"],
						accept: this.state.accept,
						onChange: function onChange(e) {
							return _this4.changeHandle(e);
						},
						type: 'file' }),
					_react2.default.createElement(
						'button',
						{ type: 'button',
							disabled: this.props.disabled,
							className: _index2.default["uploader__img--button"] },
						this.props.buttonName
					)
				)
			);
		}
	}, {
		key: 'changeHandle',
		value: function changeHandle(e) {
			var value = this.refs.uploadInput;
			var onChange = this.props.onChange;


			onChange && onChange();
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			var formEle = this.refs.uploadform;
			var data = new FormData(formEle);

			return data;
		}
	}]);

	return UploadMedia;
}(_react.Component);

/**
 * 通用的上传
 * 使用是需要在外部控制样式
 * 该组件width,height都为100%，继承父节点
 * eg；
 * <div>
 * 	 <CommonUpload />
 * </div>
 */


var CommonUpload = exports.CommonUpload = function (_Component3) {
	_inherits(CommonUpload, _Component3);

	function CommonUpload(props) {
		_classCallCheck(this, CommonUpload);

		var _this5 = _possibleConstructorReturn(this, (CommonUpload.__proto__ || Object.getPrototypeOf(CommonUpload)).call(this, props));

		_this5.state = {
			accept: props.accept || '*/*',
			multiple: props.multiple || ''
		};
		return _this5;
	}

	_createClass(CommonUpload, [{
		key: 'render',
		value: function render() {
			var _this6 = this;

			var styleCss = {
				width: "100%",
				height: "100%"
			};
			// let {styleCss={}} = this.props;
			return _react2.default.createElement(
				'form',
				{ action: '#', style: styleCss, method: 'post', ref: 'uploadform', encType: 'multipart/form-data' },
				_react2.default.createElement('input', {
					multiple: this.state.multiple,
					ref: 'uploadInput',
					name: 'uploadInput',
					disabled: this.props.disabled,
					style: styleCss,
					accept: this.state.accept,
					onChange: function onChange(e) {
						return _this6.changeHandle(e);
					},
					type: 'file' })
			);
		}
	}, {
		key: 'changeHandle',
		value: function changeHandle(e) {
			var value = this.refs.uploadInput;
			var onChange = this.props.onChange;


			onChange && onChange();
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			var formEle = this.refs.uploadform;
			var data = new FormData(formEle);

			return data;
		}
	}]);

	return CommonUpload;
}(_react.Component);

