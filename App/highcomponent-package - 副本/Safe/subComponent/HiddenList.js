'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HiddenPie = exports.HLists = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _HiddenList = require('./HiddenList.css');

var _HiddenList2 = _interopRequireDefault(_HiddenList);

var _CompanyList = require('./CompanyList');

var _pagination = require('@stararc-component/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

var _bigImg = require('@stararc-component/big-img');

var _bigImg2 = _interopRequireDefault(_bigImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 一下路径为了测试暂时定死，以后要调整
var ATTACHMENT_PATH = "http://insurance.csgrid.cn";

var HiddenList = function (_Component) {
	_inherits(HiddenList, _Component);

	function HiddenList() {
		_classCallCheck(this, HiddenList);

		return _possibleConstructorReturn(this, (HiddenList.__proto__ || Object.getPrototypeOf(HiddenList)).apply(this, arguments));
	}

	_createClass(HiddenList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.pageGoTo(1);
		}
	}, {
		key: 'getOps',
		value: function getOps() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";
			var location = this.props.location;


			return {
				q: this.refs.search.getValue(),
				count: 10,
				page: page,
				status: location.state ? location.state.status : ''
			};
		}
	}, {
		key: 'pageGoTo',
		value: function pageGoTo(page) {
			var params = this.getOps(page);

			this.props.get_hidden_list(params);
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			var q = this.refs.search.getValue();

			this.props.get_hidden_list({ q: q });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_CompanyList.SearchPie, {
					ref: "search",
					onClick: function onClick(e) {
						return _this2.onClick();
					} }),
				_react2.default.createElement(
					_CompanyList.ContainerArea,
					null,
					_react2.default.createElement(HLists, this.props)
				),
				_react2.default.createElement(
					_pagination.PaginationBox,
					null,
					_react2.default.createElement(_pagination2.default, {
						currentPage: this.props.page_obj.now_page,
						totalPage: this.props.page_obj.total_pages,
						position: "right",
						pageGoTo: function pageGoTo(page) {
							return _this2.pageGoTo(page);
						} })
				)
			);
		}
	}]);

	return HiddenList;
}(_react.Component);

var map_dispatch = function map_dispatch(dispatch) {
	return {
		get_hidden_list: function get_hidden_list(params) {
			dispatch(_safe2.default.get_hidden_by_insure(params));
		}
	};
};
var map_state = function map_state(state) {
	return {
		list: state.safeReducer.sub_hidden_list,
		page_obj: state.safeReducer.sub_hidden_page
	};
};
exports.default = (0, _reactRedux.connect)(map_state, map_dispatch)(HiddenList);
/**
 * 隐患列表块
 */

var HLists = exports.HLists = function (_Component2) {
	_inherits(HLists, _Component2);

	function HLists() {
		_classCallCheck(this, HLists);

		return _possibleConstructorReturn(this, (HLists.__proto__ || Object.getPrototypeOf(HLists)).apply(this, arguments));
	}

	_createClass(HLists, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ className: _HiddenList2.default["farm__ul"] + " " + _HiddenList2.default["clear"] },
				this.getHiddenPies()
			);
		}
	}, {
		key: 'getHiddenPies',
		value: function getHiddenPies() {
			var _props$list = this.props.list,
			    list = _props$list === undefined ? [] : _props$list;

			return list.map(function (l, key) {
				return _react2.default.createElement(HiddenPie, { key: key, item: l });
			});
		}
	}]);

	return HLists;
}(_react.Component);

/**
 * 列表单条
 */


var HiddenPie = exports.HiddenPie = function (_Component3) {
	_inherits(HiddenPie, _Component3);

	function HiddenPie() {
		_classCallCheck(this, HiddenPie);

		return _possibleConstructorReturn(this, (HiddenPie.__proto__ || Object.getPrototypeOf(HiddenPie)).apply(this, arguments));
	}

	_createClass(HiddenPie, [{
		key: 'render',
		value: function render() {
			var _props$item = this.props.item,
			    item = _props$item === undefined ? {} : _props$item;

			var attach = {
				"1": "./img/clear_not.png", //未消除
				"2": "./img/clear.png" //已消除
			};

			/*<li>
   	<div className={style["panger_centent_left"]}>
   		<h1>{item.company_name}</h1>
   		<span><a href="javascript:;">[{item.classify}]</a>{item.hidden_danger_name}</span>
   		<span>{item.final_result}</span>
   		<span>{item.description}</span>
   	</div>
   	
   	<div className={style["panger_centent_Img"]}>
   		<ol>
   			{this.getAttachment(item.attachment||[])}
   		</ol>
   		<span><img src={require(attach[item.hidden_danger_status||1])}/></span>
   	</div>
   </li>*/
			return _react2.default.createElement(
				'li',
				{ className: _HiddenList2.default["farm__li"] },
				_react2.default.createElement(
					'dl',
					null,
					_react2.default.createElement(
						'dt',
						{ className: _HiddenList2.default["farm__title"] },
						item.company_name
					),
					_react2.default.createElement(
						'dd',
						{ className: _HiddenList2.default["farm__list"] + " " + _HiddenList2.default["farm__list__site"] },
						_react2.default.createElement(
							'span',
							null,
							'[',
							item.classify,
							']'
						),
						item.hidden_danger_name
					),
					_react2.default.createElement(
						'dd',
						{ className: _HiddenList2.default["farm__list"] },
						item.final_result
					),
					_react2.default.createElement(
						'dd',
						{ className: _HiddenList2.default["farm__list"] },
						_react2.default.createElement(
							'span',
							null,
							'\u73B0\u573A\u8BB0\u5F55\uFF1A'
						),
						item.description
					),
					_react2.default.createElement(
						'dd',
						null,
						_react2.default.createElement(
							'div',
							{ className: _HiddenList2.default["farm__img-left"] + " " + _HiddenList2.default["clear"] },
							this.getAttachment(item.attachment || [])
						),
						_react2.default.createElement(
							'div',
							{ className: _HiddenList2.default["farm__img-right"] },
							_react2.default.createElement('img', { src: require(attach[item.hidden_danger_status || 1]) })
						)
					)
				)
			);
		}
	}, {
		key: 'showImg',
		value: function showImg(imgArr, index) {
			var img = imgArr.slice(0),
			    newImg = [];

			img.map(function (item, key) {
				newImg.push({
					path: ATTACHMENT_PATH + item.attachment_path,
					id: key
				});
			});

			(0, _bigImg2.default)(newImg, index);
		}
	}, {
		key: 'getAttachment',
		value: function getAttachment() {
			var _this5 = this;

			var imgArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


			if (imgArr.length) {
				return imgArr.map(function (item, key) {
					var path = ATTACHMENT_PATH + item.attachment_path;
					return _react2.default.createElement('img', { src: path, key: key, onClick: function onClick(e) {
							return _this5.showImg(imgArr, key);
						} });
				});
			} else {
				return _react2.default.createElement(
					'div',
					{ className: _HiddenList2.default["attach_empty"] },
					'\u8BE5\u9690\u60A3\u65E0\u56FE\u7247\u9644\u4EF6'
				);
			}
		}
	}]);

	return HiddenPie;
}(_react.Component);