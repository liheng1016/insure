"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NotFilling = exports.DangerQualified = exports.DangderP = exports.DangerConter = exports.DangerTitle = exports.Danger = exports.LiScoreDiv = exports.ScoreDiv = exports.ContentGeneral = exports.LiGeneral = exports.RiskServeyContent = exports.HeaderButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _detail = require("./detail.css");

var _detail2 = _interopRequireDefault(_detail);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _action = require("../../model/survey/action");

var _action2 = _interopRequireDefault(_action);

var _helpTools = require("@stararc-insurance/help-tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 主体框架
 */

var RiskServeyDetail = function (_Component) {
	_inherits(RiskServeyDetail, _Component);

	function RiskServeyDetail() {
		_classCallCheck(this, RiskServeyDetail);

		return _possibleConstructorReturn(this, (RiskServeyDetail.__proto__ || Object.getPrototypeOf(RiskServeyDetail)).apply(this, arguments));
	}

	_createClass(RiskServeyDetail, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["riskserveywrap"] },
				_react2.default.createElement(HeaderButton, null),
				_react2.default.createElement(RiskServeyContent, _extends({}, this.props, { risk: this.props.getdetail }))
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    get_detail = _props.get_detail,
			    params = _props.params;


			get_detail({
				id: params.id
			});
		}
	}]);

	return RiskServeyDetail;
}(_react.Component);

/**
 * 顶部button
 */


var HeaderButton = exports.HeaderButton = function (_Component2) {
	_inherits(HeaderButton, _Component2);

	function HeaderButton() {
		_classCallCheck(this, HeaderButton);

		return _possibleConstructorReturn(this, (HeaderButton.__proto__ || Object.getPrototypeOf(HeaderButton)).apply(this, arguments));
	}

	_createClass(HeaderButton, [{
		key: "render",
		value: function render() {
			var ButtonStyle = { width: '62px', background: 'orange', float: 'right' };
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["header-button"] },
				_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: '返回', onClick: function onClick(e) {
						return history.go(-1);
					} })
			);
		}
	}]);

	return HeaderButton;
}(_react.Component);

/**
 * 内容组件
 */


var RiskServeyContent = exports.RiskServeyContent = function (_Component3) {
	_inherits(RiskServeyContent, _Component3);

	function RiskServeyContent() {
		_classCallCheck(this, RiskServeyContent);

		return _possibleConstructorReturn(this, (RiskServeyContent.__proto__ || Object.getPrototypeOf(RiskServeyContent)).apply(this, arguments));
	}

	_createClass(RiskServeyContent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["content"] },
				_react2.default.createElement(ContentGeneral, this.props),
				_react2.default.createElement(Danger, this.props),
				_react2.default.createElement(DangerQualified, this.props),
				_react2.default.createElement(NotFilling, this.props)
			);
		}
	}]);

	return RiskServeyContent;
}(_react.Component);

var LiGeneral = exports.LiGeneral = function (_Component4) {
	_inherits(LiGeneral, _Component4);

	function LiGeneral() {
		_classCallCheck(this, LiGeneral);

		return _possibleConstructorReturn(this, (LiGeneral.__proto__ || Object.getPrototypeOf(LiGeneral)).apply(this, arguments));
	}

	_createClass(LiGeneral, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["general-li"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["general-li--name"] },
					this.props.LableName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["general-li--content"] },
					this.props.Content
				)
			);
		}
	}]);

	return LiGeneral;
}(_react.Component);

/**
 * general
 */


var ContentGeneral = exports.ContentGeneral = function (_Component5) {
	_inherits(ContentGeneral, _Component5);

	function ContentGeneral(props) {
		_classCallCheck(this, ContentGeneral);

		var _this5 = _possibleConstructorReturn(this, (ContentGeneral.__proto__ || Object.getPrototypeOf(ContentGeneral)).call(this, props));

		_this5.state = {
			isopenMoreList: false
		};
		return _this5;
	}

	_createClass(ContentGeneral, [{
		key: "render",
		value: function render() {
			var _this6 = this;

			var risk = this.props.risk || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["general"] },
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["general-title"] },
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["general-company"] },
						risk.company_name
					),
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["general-score"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["score"] },
							risk.final_score,
							"\u5206"
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["general-img"] },
							_react2.default.createElement("img", { src: require("../img/score.png"), onClick: function onClick(e) {
									return _this6.openMoreList();
								} })
						),
						this.state.isopenMoreList ? _react2.default.createElement(ScoreDiv, this.props) : ''
					)
				),
				_react2.default.createElement(LiGeneral, { LableName: "排查表 : ",
					Content: risk.form_name }),
				_react2.default.createElement(LiGeneral, { LableName: "任务描述 : ",
					Content: risk.task_context }),
				_react2.default.createElement(LiGeneral, { LableName: "排查人 : ",
					Content: risk.user_name }),
				_react2.default.createElement(LiGeneral, { LableName: "排查时间 : ",
					Content: risk.changed_at ? (0, _helpTools.getFormatData)(risk.changed_at) : "" }),
				_react2.default.createElement(LiGeneral, { LableName: "整改建议 : ",
					Content: risk.remark })
			);
		}
	}, {
		key: "openMoreList",
		value: function openMoreList() {
			var isopenMoreList = this.state.isopenMoreList;


			this.setState({
				isopenMoreList: !isopenMoreList
			});
		}
	}]);

	return ContentGeneral;
}(_react.Component);
/**
 * 9.6评分显示隐藏
 */


var ScoreDiv = exports.ScoreDiv = function (_Component6) {
	_inherits(ScoreDiv, _Component6);

	function ScoreDiv() {
		_classCallCheck(this, ScoreDiv);

		return _possibleConstructorReturn(this, (ScoreDiv.__proto__ || Object.getPrototypeOf(ScoreDiv)).apply(this, arguments));
	}

	_createClass(ScoreDiv, [{
		key: "render",
		value: function render() {
			var score = this.props.risk || {};
			return _react2.default.createElement(
				"ul",
				{ className: _detail2.default["scorediv"] },
				this.getScoreContent(score.score)
			);
		}
	}, {
		key: "getScoreContent",
		value: function getScoreContent(scoreArr) {
			scoreArr = scoreArr || [];

			return scoreArr.map(function (score, key) {
				return _react2.default.createElement(LiScoreDiv, {
					key: key,
					LableName: score.rule_description + " ：",
					content: score.score });
			});
		}
	}]);

	return ScoreDiv;
}(_react.Component);

/**
 * 评分显示隐藏快Li组件
 */


var LiScoreDiv = exports.LiScoreDiv = function (_Component7) {
	_inherits(LiScoreDiv, _Component7);

	function LiScoreDiv() {
		_classCallCheck(this, LiScoreDiv);

		return _possibleConstructorReturn(this, (LiScoreDiv.__proto__ || Object.getPrototypeOf(LiScoreDiv)).apply(this, arguments));
	}

	_createClass(LiScoreDiv, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _detail2.default["scorediv-li"] },
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["score-header--name"] },
					this.props.LableName
				),
				_react2.default.createElement(
					"span",
					{ className: _detail2.default["score-header--res"] },
					this.props.content
				)
			);
		}
	}]);

	return LiScoreDiv;
}(_react.Component);

/**
 * 风险组件
 */


var Danger = exports.Danger = function (_Component8) {
	_inherits(Danger, _Component8);

	function Danger() {
		_classCallCheck(this, Danger);

		return _possibleConstructorReturn(this, (Danger.__proto__ || Object.getPrototypeOf(Danger)).apply(this, arguments));
	}

	_createClass(Danger, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["dangerdiv"] },
				_react2.default.createElement(DangerTitle, this.props),
				_react2.default.createElement(DangerConter, this.props)
			);
		}
	}]);

	return Danger;
}(_react.Component);

/*风险标题组件*/


var DangerTitle = exports.DangerTitle = function (_Component9) {
	_inherits(DangerTitle, _Component9);

	function DangerTitle() {
		_classCallCheck(this, DangerTitle);

		return _possibleConstructorReturn(this, (DangerTitle.__proto__ || Object.getPrototypeOf(DangerTitle)).apply(this, arguments));
	}

	_createClass(DangerTitle, [{
		key: "render",
		value: function render() {
			var risk = this.props.risk || {};
			return _react2.default.createElement(
				"div",
				{ className: _detail2.default["danger-title"] },
				"\u98CE\u9669",
				_react2.default.createElement(
					"a",
					{ href: "javascript:;" },
					"(\u5171",
					risk.items && risk.items.rectify && risk.items.rectify.total || 0,
					"\u6761)"
				)
			);
		}
	}]);

	return DangerTitle;
}(_react.Component);

/*风险内容组件*/


var DangerConter = exports.DangerConter = function (_Component10) {
	_inherits(DangerConter, _Component10);

	function DangerConter() {
		_classCallCheck(this, DangerConter);

		return _possibleConstructorReturn(this, (DangerConter.__proto__ || Object.getPrototypeOf(DangerConter)).apply(this, arguments));
	}

	_createClass(DangerConter, [{
		key: "render",
		value: function render() {
			var risk = this.props.risk;
			var ButtonStyle = { width: '92px', background: '#0493df', float: 'right', position: 'absolute', top: '70%', right: '3%' };
			return _react2.default.createElement(
				"div",
				null,
				this.getContent()
			);
		}
	}, {
		key: "getContent",
		value: function getContent() {
			var _this12 = this;

			var items = this.props.risk && this.props.risk.items && this.props.risk.items.rectify && this.props.risk.items.rectify.list || [];

			return items.map(function (item, key) {
				return _react2.default.createElement(
					"div",
					{ className: _detail2.default["dangercontent"], key: key },
					_react2.default.createElement(DangderP, { LableName: item.classify, content: item.question }),
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["outcome"] },
						item.answer
					),
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["record-on-spot"] },
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["spot-name"] },
							"\u73B0\u573A\u8BB0\u5F55 : "
						),
						_react2.default.createElement(
							"span",
							{ className: _detail2.default["spot-name"] },
							item.result
						)
					),
					_react2.default.createElement(
						"ul",
						{ className: _detail2.default["danger-picture"] },
						_this12.getDangerPicture(item.attachments)
					),
					_react2.default.createElement(
						"div",
						{ className: _detail2.default["solve-picture"] },
						item.hidden_danger_status == 1 ? _react2.default.createElement("img", { src: require("../img/clear_not.png") }) : _react2.default.createElement("img", { src: require("../img/clear.png") })
					)
				);
			});
		}
	}, {
		key: "getDangerPicture",
		value: function getDangerPicture() {
			var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			img = img || [];

			return img.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ className: _detail2.default["pic--li"], key: key },
					_react2.default.createElement("img", { src: m.attachment_path })
				);
			});
		}
	}]);

	return DangerConter;
}(_react.Component);

/**
 * B05-场所环境组件
 */


var DangderP = exports.DangderP = function (_Component11) {
	_inherits(DangderP, _Component11);

	function DangderP() {
		_classCallCheck(this, DangderP);

		return _possibleConstructorReturn(this, (DangderP.__proto__ || Object.getPrototypeOf(DangderP)).apply(this, arguments));
	}

	_createClass(DangderP, [{
		key: "render",
		value: function render() {
			var risk = this.props.risk;
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"p",
					{ className: _detail2.default["danger-content--line"] },
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["line-identifying"] },
						"[",
						this.props.LableName,
						"]"
					),
					_react2.default.createElement(
						"span",
						{ className: _detail2.default["line-question"] },
						this.props.content
					)
				)
			);
		}
	}]);

	return DangderP;
}(_react.Component);
/**
 * 合格组件
 */


var DangerQualified = exports.DangerQualified = function (_Component12) {
	_inherits(DangerQualified, _Component12);

	function DangerQualified() {
		_classCallCheck(this, DangerQualified);

		return _possibleConstructorReturn(this, (DangerQualified.__proto__ || Object.getPrototypeOf(DangerQualified)).apply(this, arguments));
	}

	_createClass(DangerQualified, [{
		key: "render",
		value: function render() {
			var items = this.props.risk && this.props.risk.items && this.props.risk.items.finish || {};

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["danger-title"] },
					"\u5408\u683C",
					_react2.default.createElement(
						"a",
						{ href: "javascript:;" },
						"  (\u5171",
						items.total || 0,
						"\u6761)"
					)
				),
				this.getContent(items.list)
			);
		}
	}, {
		key: "getContent",
		value: function getContent(items) {
			items = items || [];

			return items.map(function (item, key) {
				return _react2.default.createElement(
					"div",
					{ className: _detail2.default["qualified"], key: key },
					_react2.default.createElement(DangderP, { LableName: item.classify, content: item.question }),
					_react2.default.createElement(
						"p",
						{ className: _detail2.default["outcome"] },
						item.answer
					)
				);
			});
		}
	}]);

	return DangerQualified;
}(_react.Component);

/**
 * 未填组件
 */


var NotFilling = exports.NotFilling = function (_Component13) {
	_inherits(NotFilling, _Component13);

	function NotFilling() {
		_classCallCheck(this, NotFilling);

		return _possibleConstructorReturn(this, (NotFilling.__proto__ || Object.getPrototypeOf(NotFilling)).apply(this, arguments));
	}

	_createClass(NotFilling, [{
		key: "render",
		value: function render() {
			var items = this.props.risk && this.props.risk.items && this.props.risk.items.non || {};

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: _detail2.default["danger-title"] },
					"\u672A\u586B",
					_react2.default.createElement(
						"a",
						{ href: "#" },
						"  (\u5171",
						items.total || 0,
						"\u6761)"
					)
				),
				this.getContent(items.list)
			);
		}
	}, {
		key: "getContent",
		value: function getContent(items) {
			items = items || [];

			return items.map(function (item, key) {
				return _react2.default.createElement(
					"div",
					{ className: _detail2.default["qualified"] },
					_react2.default.createElement(DangderP, { LableName: item.classify, content: item.question })
				);
			});
		}
	}]);

	return NotFilling;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		getdetail: state.surveyReducer.getdetail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.getdetail(obj));
		}
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RiskServeyDetail);