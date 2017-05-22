'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TaskListBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _CompanyList = require('./CompanyList');

var _pagination = require('@stararc-component/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _TaskList = require('./TaskList.css');

var _TaskList2 = _interopRequireDefault(_TaskList);

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

var _helpTools = require('@stararc-insurance/help-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskList = function (_Component) {
	_inherits(TaskList, _Component);

	function TaskList() {
		_classCallCheck(this, TaskList);

		return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(this, arguments));
	}

	_createClass(TaskList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_CompanyList.SearchPie, {
					ref: 'q',
					defaultValue: this.props.condition.q,
					onClick: function onClick(e) {
						return _this2.onClick();
					} }),
				_react2.default.createElement(
					_CompanyList.ContainerArea,
					null,
					_react2.default.createElement(TaskListBlock, { lists: this.props.tasklist })
				),
				this.props.tasklist && this.props.tasklist.length ? _react2.default.createElement(
					_pagination.PaginationBox,
					null,
					_react2.default.createElement(_pagination2.default, {
						currentPage: this.props.condition.page,
						totalPage: this.props.condition.totalPage,
						position: "right",
						pageGoTo: function pageGoTo(page) {
							return _this2.pageGoTo(page);
						} })
				) : ''
			);
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			var params = this.getOps();

			this.getList(params);
		}
	}, {
		key: 'pageGoTo',
		value: function pageGoTo(page) {
			var params = this.getOps(page);

			this.getList(params);
		}
	}, {
		key: 'getOps',
		value: function getOps() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";

			return {
				q: this.refs.q.getValue(),
				count: 10,
				page: page
			};
		}
	}, {
		key: 'getList',
		value: function getList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var insureTaskList = this.props.insureTaskList;


			insureTaskList(params);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getList(this.getOps());
		}
	}]);

	return TaskList;
}(_react.Component);

var TaskListBlock = exports.TaskListBlock = function (_Component2) {
	_inherits(TaskListBlock, _Component2);

	function TaskListBlock() {
		_classCallCheck(this, TaskListBlock);

		return _possibleConstructorReturn(this, (TaskListBlock.__proto__ || Object.getPrototypeOf(TaskListBlock)).apply(this, arguments));
	}

	_createClass(TaskListBlock, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ className: _TaskList2.default["clear"] },
				this.getContent()
			);
		}
	}, {
		key: 'getContent',
		value: function getContent(listArr) {
			var _this4 = this;

			var _props$lists = this.props.lists,
			    lists = _props$lists === undefined ? [] : _props$lists;


			return lists.map(function (item, key) {
				return _react2.default.createElement(
					'li',
					{ className: _TaskList2.default["inspect__li"], key: key, onClick: function onClick(e) {
							return _this4.go_to_detail(item);
						} },
					_react2.default.createElement(
						'dl',
						null,
						_react2.default.createElement(
							'dt',
							{ className: _TaskList2.default["inspect__title"] },
							item.task_name
						),
						_react2.default.createElement(
							'dd',
							{ className: _TaskList2.default["inspect__mark"] + " " + _TaskList2.default["clear"] },
							_react2.default.createElement(
								'span',
								null,
								_react2.default.createElement('img', { src: require("./img/map_marker.png"), alt: '' }),
								item.address
							)
						),
						_react2.default.createElement(
							'dd',
							{ className: _TaskList2.default["inspect__time"] },
							'\u68C0\u67E5\u65F6\u95F4\uFF1A',
							_react2.default.createElement(
								'span',
								null,
								(0, _helpTools.getFormatData)(item.changed_at, "-")
							)
						),
						_react2.default.createElement(
							'dd',
							{ className: _TaskList2.default["inspect__man"] },
							'\u68C0\u67E5\u4EBA\uFF1A',
							_react2.default.createElement(
								'span',
								null,
								item.user_name
							)
						),
						item.status && item.status == "1" ? _react2.default.createElement(
							'div',
							{ className: _TaskList2.default["inspect__img"] },
							_react2.default.createElement('img', { src: require("./img/hidden.png"), alt: '' })
						) : ''
					)
				);
			});
		}
	}, {
		key: 'go_to_detail',
		value: function go_to_detail(item) {
			this.context.router.push("/riskSurvey/detail/" + item.task_id);
		}
	}]);

	return TaskListBlock;
}(_react.Component);

/**
 * state数据集合
 */


var stateMaps = function stateMaps(state) {
	return {
		condition: state.safeReducer.insureTaskCondition,
		tasklist: state.safeReducer.insureTaskList
	};
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
	return {
		insureTaskList: function insureTaskList(params) {
			dispatch(_safe2.default.insure_task_list(params));
		}
	};
};

TaskListBlock.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(TaskList);