'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Detailcontent = exports.Detail = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _action = require('../model/riskwarning/action');

var _action2 = _interopRequireDefault(_action);

var _detail = require('./detail.css');

var _detail2 = _interopRequireDefault(_detail);

var _button = require('@stararc-component/button');

var _button2 = _interopRequireDefault(_button);

var _bigImg = require('@stararc-component/big-img');

var _bigImg2 = _interopRequireDefault(_bigImg);

var _helpTools = require('@stararc-insurance/help-tools');

var _layout = require('@stararc-insurance/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 详情
 */
var Detailing = function (_Component) {
	_inherits(Detailing, _Component);

	function Detailing() {
		_classCallCheck(this, Detailing);

		return _possibleConstructorReturn(this, (Detailing.__proto__ || Object.getPrototypeOf(Detailing)).apply(this, arguments));
	}

	_createClass(Detailing, [{
		key: 'render',
		value: function render() {
			var ButtonStyle = {
				background: 'orange',
				width: '60px',
				float: 'right'
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(
						'div',
						{ className: _detail2.default['de--clear'] },
						_react2.default.createElement(_button2.default, {
							styleCss: ButtonStyle,
							text: "返回",
							onClick: function onClick(e) {
								return history.go(-1);
							} })
					)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50, bottom: 0 } },
					_react2.default.createElement(Detail, this.props),
					_react2.default.createElement(Detailcontent, this.props)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    get_detail = _props.get_detail,
			    params = _props.params;

			get_detail({
				id: params.id,
				api_path: 1 //是否添加api路径，1：是，2否，默认不添加
			});
		}
	}]);

	return Detailing;
}(_react.Component);

var Detail = exports.Detail = function (_Component2) {
	_inherits(Detail, _Component2);

	function Detail() {
		_classCallCheck(this, Detail);

		return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
	}

	_createClass(Detail, [{
		key: 'render',
		value: function render() {
			var _props$detail = this.props.detail,
			    detail = _props$detail === undefined ? {} : _props$detail;

			return _react2.default.createElement(
				'div',
				{ className: _detail2.default["detail"] },
				_react2.default.createElement(
					'div',
					{ className: _detail2.default["detail--main"] },
					_react2.default.createElement(
						'h1',
						{ className: _detail2.default["detail--main--h1"] },
						detail.title
					),
					_react2.default.createElement(
						'div',
						{ className: _detail2.default["detail_new"] },
						_react2.default.createElement(
							'p',
							{ className: _detail2.default["detail_new--title"] },
							'\u6765\u6E90 : ',
							_react2.default.createElement(
								'span',
								null,
								detail.insurance_com_name
							)
						),
						_react2.default.createElement(
							'p',
							{ className: _detail2.default["detail_new--time"] },
							'\u53D1\u5E03\u4EBA : ',
							_react2.default.createElement(
								'span',
								null,
								detail.insurance_user_name
							)
						),
						_react2.default.createElement(
							'p',
							{ className: _detail2.default["detail_new--title"] },
							'\u53D1\u5E03\u65F6\u95F4 : ',
							_react2.default.createElement(
								'span',
								null,
								(0, _helpTools.getFormatData)(detail.create_at) + " " + (0, _helpTools.getHoursMinutes)(detail.create_at)
							)
						)
					)
				)
			);
		}
	}]);

	return Detail;
}(_react.Component);

var Detailcontent = exports.Detailcontent = function (_Component3) {
	_inherits(Detailcontent, _Component3);

	function Detailcontent() {
		_classCallCheck(this, Detailcontent);

		return _possibleConstructorReturn(this, (Detailcontent.__proto__ || Object.getPrototypeOf(Detailcontent)).apply(this, arguments));
	}

	_createClass(Detailcontent, [{
		key: 'render',
		value: function render() {
			var _props$detail2 = this.props.detail,
			    detail = _props$detail2 === undefined ? {} : _props$detail2;

			return _react2.default.createElement(
				'div',
				{ className: _detail2.default["detail"] },
				_react2.default.createElement(
					'div',
					{ className: _detail2.default["detail--main"] },
					_react2.default.createElement('div', { className: _detail2.default["detail-content--word"], dangerouslySetInnerHTML: { __html: detail.content } }),
					_react2.default.createElement('div', { className: _detail2.default["clear"] }),
					_react2.default.createElement(
						'ul',
						{ className: _detail2.default["detail-content--img"] },
						_react2.default.createElement(
							'li',
							null,
							this.getDetailImg(detail.media_attachment)
						)
					),
					_react2.default.createElement(
						'p',
						{ className: _detail2.default["detail--accessory"] },
						'\u9644\u4EF6 :',
						this.getMedia(detail.attachment)
					),
					_react2.default.createElement(
						'p',
						{ className: _detail2.default["detail--dress"] },
						'\u53D1\u9001\u5730\u533A :',
						this.getArea(detail.grid_name)
					),
					_react2.default.createElement(
						'p',
						{ className: _detail2.default["detail--dress"] },
						'\u53D1\u9001\u5BF9\u8C61 : ',
						_react2.default.createElement(
							'span',
							null,
							detail.send_object
						)
					)
				)
			);
		}
		// 发送地区

	}, {
		key: 'getArea',
		value: function getArea(grids) {
			grids = grids || [];
			return grids.map(function (g, key) {
				return _react2.default.createElement(
					'span',
					{ key: key },
					g
				);
			});
		}
		// 详情附件

	}, {
		key: 'getDetailImg',
		value: function getDetailImg(media_attachment) {
			var _this4 = this;

			media_attachment = media_attachment || [];
			return media_attachment.map(function (m, key) {
				return _react2.default.createElement('img', { src: m.attachment_path, className: _detail2.default["img"], key: key, onClick: function onClick(e) {
						return _this4.big_img(media_attachment, key);
					} });
			});
		}
		// 点击小图看大图

	}, {
		key: 'big_img',
		value: function big_img() {
			var imgArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var index = arguments[1];

			var newImgArr = [];

			imgArr.map(function (img) {
				newImgArr.push({
					id: img.attachment_id,
					path: img.attachment_path
				});
			});

			(0, _bigImg2.default)(newImgArr, index);
		}
		// 附件

	}, {
		key: 'getMedia',
		value: function getMedia(attachment) {
			attachment = attachment || [];
			return attachment.map(function (m, key) {
				return _react2.default.createElement(
					'a',
					{ key: key, href: m.attachment_path, className: _detail2.default["attachment--media"], download: '' },
					m.name
				);
			});
		}
	}]);

	return Detailcontent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		detail: state.riskWarningReducer.detail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Detailing);