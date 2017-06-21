"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AreaDialog = exports.ActionComponent = exports.AuthorizedArea = exports.ClauseContent = exports.LiClauseContent = exports.DeductibleExcess = exports.LiDeductible = exports.LiMustComponent = exports.EssentialInformation = exports.ManagementEditButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _index = require("./index.css");

var _index2 = _interopRequireDefault(_index);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _textarea = require("@stararc-component/textarea");

var _textarea2 = _interopRequireDefault(_textarea);

var _helpTools = require("@stararc-insurance/help-tools");

var _uploadFile = require("@stararc-insurance/upload-file");

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*返回按钮*/
var ManagementEditButton = exports.ManagementEditButton = function (_Component) {
	_inherits(ManagementEditButton, _Component);

	function ManagementEditButton() {
		_classCallCheck(this, ManagementEditButton);

		return _possibleConstructorReturn(this, (ManagementEditButton.__proto__ || Object.getPrototypeOf(ManagementEditButton)).apply(this, arguments));
	}

	_createClass(ManagementEditButton, [{
		key: "render",
		value: function render() {
			var ButtonStyle = { width: "60px", background: '#f9d865', color: 'white', marginLeft: '10px' };
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["list_button"] },
				_react2.default.createElement(_button2.default, {
					styleCss: ButtonStyle,
					text: "返回",
					onClick: function onClick(e) {
						return history.go(-1);
					} })
			);
		}
	}]);

	return ManagementEditButton;
}(_react.Component);

/*保险产品基本信息组件*/


var EssentialInformation = exports.EssentialInformation = function (_Component2) {
	_inherits(EssentialInformation, _Component2);

	function EssentialInformation(props) {
		_classCallCheck(this, EssentialInformation);

		var _this2 = _possibleConstructorReturn(this, (EssentialInformation.__proto__ || Object.getPrototypeOf(EssentialInformation)).call(this, props));

		_this2.state = {};
		return _this2;
	}

	_createClass(EssentialInformation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u4FDD\u9669\u4EA7\u54C1\u57FA\u672C\u4FE1\u606F"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "保险产品名称", errorTips: this.state.name_error },
						_react2.default.createElement(_input2.default, { ref: "name" })
					),
					_react2.default.createElement(
						LiMustComponent,
						{ LabelName: "保险经纪公司", errorTips: this.state.borker_name_error },
						_react2.default.createElement(_select2.default, {
							ref: "borker_name",
							options: this.props.insurCompany })
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    result = {},
			    errorTips = {},
			    isVerify = true;
			for (var r in refs) {
				var value = refs[r].getValue();
				result[r] = refs[r].getValue();
				result[r] = value;
				isVerify = isVerify && !!value;
				if (!value) {
					errorTips[r + "_error"] = "该项是必填项";
				} else {
					errorTips[r + "_error"] = "";
				}
			}
			this.setState(_extends({}, errorTips));
			return _extends({}, result, {
				isVerify: isVerify
			});
		}
	}]);

	return EssentialInformation;
}(_react.Component);
/**
 * LiMustComponent组件
 */


var LiMustComponent = exports.LiMustComponent = function (_Component3) {
	_inherits(LiMustComponent, _Component3);

	function LiMustComponent() {
		_classCallCheck(this, LiMustComponent);

		return _possibleConstructorReturn(this, (LiMustComponent.__proto__ || Object.getPrototypeOf(LiMustComponent)).apply(this, arguments));
	}

	_createClass(LiMustComponent, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["content--li"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelname"] },
					_react2.default.createElement("img", { src: require("../img/pic.png") }),
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["labelinput"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["prompt"] },
						this.props.errorTips
					)
				)
			);
		}
	}]);

	return LiMustComponent;
}(_react.Component);

/**
 * 免赔额条例组件
 */


var LiDeductible = exports.LiDeductible = function (_Component4) {
	_inherits(LiDeductible, _Component4);

	function LiDeductible() {
		_classCallCheck(this, LiDeductible);

		return _possibleConstructorReturn(this, (LiDeductible.__proto__ || Object.getPrototypeOf(LiDeductible)).apply(this, arguments));
	}

	_createClass(LiDeductible, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["deductible"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["deductible--name"] },
					_react2.default.createElement("img", { src: require("../img/pic.png") }),
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["deductible--content"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["prompt"] },
						this.props.errorTips
					)
				)
			);
		}
	}]);

	return LiDeductible;
}(_react.Component);
/**
 * 免赔额条例
 */


var DeductibleExcess = exports.DeductibleExcess = function (_Component5) {
	_inherits(DeductibleExcess, _Component5);

	function DeductibleExcess(props) {
		_classCallCheck(this, DeductibleExcess);

		var _this5 = _possibleConstructorReturn(this, (DeductibleExcess.__proto__ || Object.getPrototypeOf(DeductibleExcess)).call(this, props));

		_this5.state = {};
		return _this5;
	}

	_createClass(DeductibleExcess, [{
		key: "render",
		value: function render() {
			var _props$deductibleExce = this.props.deductibleExcess,
			    deductibleExcess = _props$deductibleExce === undefined ? {} : _props$deductibleExce;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u8D54\u507F\u9650\u989D\u548C\u514D\u9650\u989D\u6761\u4F8B"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["content"] },
					_react2.default.createElement(
						LiDeductible,
						{ LabelName: "从业人员", errorTips: this.state.practitioners_error },
						_react2.default.createElement(_textarea2.default, {
							ref: "practitioners",
							defaultValue: deductibleExcess.practitioners })
					),
					_react2.default.createElement(
						LiDeductible,
						{ LabelName: "第三者责任", errorTips: this.state.third_party_error },
						_react2.default.createElement(_textarea2.default, {
							ref: "third_party",
							defaultValue: deductibleExcess.third_party })
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			// return{
			// 	practitioners:this.refs.practitioners.getValue(),
			// 	third_party:this.refs.third_party.getValue()
			// }
			var refs = this.refs,
			    result = {},
			    errorTips = {},
			    isVerifyExcess = true;
			for (var r in refs) {
				var value = refs[r].getValue();
				result[r] = refs[r].getValue();
				result[r] = value;
				isVerifyExcess = isVerifyExcess && !!value;
				if (!value) {
					errorTips[r + "_error"] = "该项是必填项";
				} else {
					errorTips[r + "_error"] = "";
				}
			}
			this.setState(_extends({}, errorTips));
			return _extends({}, result, {
				isVerifyExcess: isVerifyExcess
			});
		}
	}]);

	return DeductibleExcess;
}(_react.Component);

/**
 * 条款内容LiUpLoad组件
 */


var LiClauseContent = exports.LiClauseContent = function (_Component6) {
	_inherits(LiClauseContent, _Component6);

	function LiClauseContent() {
		_classCallCheck(this, LiClauseContent);

		return _possibleConstructorReturn(this, (LiClauseContent.__proto__ || Object.getPrototypeOf(LiClauseContent)).apply(this, arguments));
	}

	_createClass(LiClauseContent, [{
		key: "render",
		value: function render() {
			var ButtonStyle = { width: '80px', background: 'white', color: 'black', border: '1px solid orange' };
			return _react2.default.createElement(
				"li",
				{ className: _index2.default["upload"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["upload--name"] },
					_react2.default.createElement("img", { src: require("../img/pic.png") }),
					this.props.LabelName
				),
				_react2.default.createElement(
					"span",
					{ className: _index2.default["upload--button"] },
					this.props.children,
					_react2.default.createElement(
						"span",
						{ className: _index2.default["prompt"] },
						this.props.errorTips
					)
				)
			);
		}
	}]);

	return LiClauseContent;
}(_react.Component);
/**
 * 条款内容
 */


var ClauseContent = exports.ClauseContent = function (_Component7) {
	_inherits(ClauseContent, _Component7);

	function ClauseContent(props) {
		_classCallCheck(this, ClauseContent);

		var _this7 = _possibleConstructorReturn(this, (ClauseContent.__proto__ || Object.getPrototypeOf(ClauseContent)).call(this, props));

		_this7.state = {
			isValue: true
		};
		return _this7;
	}

	_createClass(ClauseContent, [{
		key: "render",
		value: function render() {
			var _this8 = this;

			var ButtonStyle = {
				width: "90px",
				background: "white",
				color: "orange",
				border: "1px solid orange",
				position: "absolute",
				top: "0",
				left: "0"
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u6761\u6B3E\u5185\u5BB9"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["applicant-mustcontent"] },
					_react2.default.createElement(
						LiClauseContent,
						{ LabelName: '保险条款' },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["file--upload"] },
							_react2.default.createElement(_uploadFile.CommonUpload, {
								ref: "attachment_id",
								accept: ".pdf,.doc,.docx",
								onChange: function onChange(e) {
									return _this8.uploadChangeHandle();
								} }),
							_react2.default.createElement(_button2.default, { styleCss: ButtonStyle, text: "添加文件" })
						),
						_react2.default.createElement(
							"span",
							{ className: _index2.default["upload--limit"] },
							"\u8BF7\u4E0A\u4F20pdf\u3001doc\u3001docx\u683C\u5F0F\u9644\u4EF6"
						),
						_react2.default.createElement(
							"a",
							{ href: this.props.uploadClausecontent.attachment_path, className: _index2.default["upload_path"] },
							this.props.uploadClausecontent.name
						),
						!this.state.isValue ? _react2.default.createElement(
							"p",
							{ className: _index2.default["must_p"] },
							"\u8BE5\u9879\u662F\u5FC5\u586B\u9879"
						) : ''
					)
				)
			);
		}
	}, {
		key: "uploadChangeHandle",
		value: function uploadChangeHandle() {
			var upload_clausecontent = this.props.upload_clausecontent;

			var fileValue = this.refs.attachment_id.getValue();
			upload_clausecontent(fileValue);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var attachment_id = this.props.uploadClausecontent.attachment_id;
			var value = attachment_id;
			value = attachment_id;
			var isValue = true;
			if (!value) {
				isValue = false;
			}
			this.setState({
				isValue: isValue
			});
			return {
				attachment_id: attachment_id,
				isValue: isValue
			};
		}
	}]);

	return ClauseContent;
}(_react.Component);

/*授权地区*/


var AuthorizedArea = exports.AuthorizedArea = function (_Component8) {
	_inherits(AuthorizedArea, _Component8);

	function AuthorizedArea(props) {
		_classCallCheck(this, AuthorizedArea);

		var _this9 = _possibleConstructorReturn(this, (AuthorizedArea.__proto__ || Object.getPrototypeOf(AuthorizedArea)).call(this, props));

		_this9.state = {
			isOpenDialog: false,
			grids: [],
			isValueArea: true

		};
		return _this9;
	}

	_createClass(AuthorizedArea, [{
		key: "render",
		value: function render() {
			var _this10 = this;

			var buttonStyle = {
				border: "1px solid #f6a811",
				background: "white",
				color: "#f6a811",
				width: '120px'
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["applicant-wrap"] },
				_react2.default.createElement(
					"span",
					{ className: _index2.default["title"] },
					"\u6388\u6743\u5730\u533A"
				),
				_react2.default.createElement(
					"ul",
					{ className: _index2.default["applicant-mustcontent"] },
					_react2.default.createElement(
						LiClauseContent,
						{ LabelName: '授权地区' },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["file--upload"] },
							_react2.default.createElement(_button2.default, {
								styleCss: buttonStyle,
								text: "选择授权地区",
								onClick: function onClick(e) {
									return _this10.openDialog();
								} })
						),
						!this.state.isValueArea ? _react2.default.createElement(
							"p",
							{ className: _index2.default["must_p"] },
							"\u8BE5\u9879\u662F\u5FC5\u586B\u9879"
						) : '',
						_react2.default.createElement(
							"ol",
							null,
							this.getSelectedArea()
						),
						this.state.isOpenDialog ? _react2.default.createElement(AreaDialog, {
							ensureHandle: function ensureHandle(action, data) {
								return _this10.closeDialog(action, data);
							},
							cancleHandle: function cancleHandle(action, data) {
								return _this10.closeDialog(action, data);
							},
							grids: this.state.grids }) : ''
					)
				)
			);
		}
	}, {
		key: "getSelectedArea",
		value: function getSelectedArea() {
			var _state$grids = this.state.grids,
			    grids = _state$grids === undefined ? [] : _state$grids;

			return grids.map(function (g, key) {
				if (!g.isSelected) {
					return;
				}
				return _react2.default.createElement(
					"li",
					{ className: _index2.default["attachment--li"], key: key },
					g.name
				);
			});
		}
		// 打开弹出框

	}, {
		key: "openDialog",
		value: function openDialog() {
			this.setState({
				isOpenDialog: true
			});
		}
		// 关闭弹出框

	}, {
		key: "closeDialog",
		value: function closeDialog(action, grids) {
			this.setState({
				isOpenDialog: false,
				grids: grids
			});
		}
		// 过滤数据

	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.lists != this.props.lists) {
				var _nextProps$lists = nextProps.lists,
				    lists = _nextProps$lists === undefined ? [] : _nextProps$lists,
				    newList = [];

				lists.map(function (l, key) {
					newList.push({
						id: l.gridID,
						name: l.gridName
					});
				});
				this.setState({
					grids: newList
				});
			}
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _state$grids2 = this.state.grids,
			    grids = _state$grids2 === undefined ? [] : _state$grids2,
			    gridsId = [],
			    isValueArea = true;


			grids.map(function (g, key) {
				if (g.isSelected) {
					gridsId.push(g.id);
				}
			});

			if (!gridsId.length) {
				isValueArea = false;
			}
			this.setState({
				isValueArea: isValueArea
			});
			return {
				gridsId: gridsId,
				isValueArea: isValueArea
			};
		}
	}]);

	return AuthorizedArea;
}(_react.Component);

/**
 * 保存操作
 */


var ActionComponent = exports.ActionComponent = function (_Component9) {
	_inherits(ActionComponent, _Component9);

	function ActionComponent() {
		_classCallCheck(this, ActionComponent);

		return _possibleConstructorReturn(this, (ActionComponent.__proto__ || Object.getPrototypeOf(ActionComponent)).apply(this, arguments));
	}

	_createClass(ActionComponent, [{
		key: "render",
		value: function render() {
			var buttonStyle = {
				border: "1px solid #f6a811",
				background: "#f6a811"
			};
			return _react2.default.createElement(
				"div",
				{ className: _index2.default["action--componnet"] },
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: "1", offset: "5.5" },
					_react2.default.createElement(_button2.default, { text: "保存", styleCss: buttonStyle, onClick: this.props.onClick })
				)
			);
		}
	}]);

	return ActionComponent;
}(_react.Component);

;

/*选择地区弹框*/

var AreaDialog = exports.AreaDialog = function (_Component10) {
	_inherits(AreaDialog, _Component10);

	function AreaDialog(props) {
		_classCallCheck(this, AreaDialog);

		var _this12 = _possibleConstructorReturn(this, (AreaDialog.__proto__ || Object.getPrototypeOf(AreaDialog)).call(this, props));

		_this12.state = {
			grids: (0, _helpTools.deepCopy)(props.grids) || [],
			backupGrid: (0, _helpTools.deepCopy)(props.grids) || [],
			isSelectedAll: false,
			cancleStyle: {
				background: "white",
				border: "1px solid #f6a811",
				color: "black"
			},
			ensureStyle: {
				background: "#f6a811",
				border: "1px solid #f6a811"
			}
		};
		return _this12;
	}

	_createClass(AreaDialog, [{
		key: "render",
		value: function render() {
			var _this13 = this;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _index2.default["dialog--shade"] }),
				_react2.default.createElement(
					"div",
					{ className: _index2.default["dialog--content"] },
					_react2.default.createElement(
						"p",
						{ className: _index2.default["dialog--title"] },
						"\u8BF7\u9009\u62E9\u53D1\u9001\u5730\u533A"
					),
					_react2.default.createElement(
						"p",
						null,
						_react2.default.createElement(
							"span",
							{
								className: this.state.isSelectedAll ? _index2.default["selected--all"] : _index2.default["selected"],
								onClick: function onClick(e) {
									return _this13.selectedAll();
								} },
							"\u5168\u9009"
						)
					),
					_react2.default.createElement(
						"ul",
						null,
						this.getAreaContent()
					),
					_react2.default.createElement(
						"div",
						{ className: _index2.default["dialog-action"] },
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1.5", offset: "4" },
							_react2.default.createElement(_button2.default, {
								text: "取消",
								onClick: function onClick(e) {
									return _this13.cancleHandle();
								},
								styleCss: this.state.cancleStyle })
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1" },
							"\xA0"
						),
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1.5" },
							_react2.default.createElement(_button2.default, {
								text: "确认",
								onClick: function onClick(e) {
									return _this13.ensureHandle();
								},
								styleCss: this.state.ensureStyle })
						)
					)
				)
			);
		}
		// 全选

	}, {
		key: "selectedAll",
		value: function selectedAll() {
			var _state = this.state,
			    isSelectedAll = _state.isSelectedAll,
			    _state$backupGrid = _state.backupGrid,
			    backupGrid = _state$backupGrid === undefined ? [] : _state$backupGrid;

			backupGrid.map(function (b) {
				b.isSelected = !isSelectedAll;
			});
			this.setState({
				isSelectedAll: !isSelectedAll,
				backupGrid: backupGrid
			});
		}

		// 获取地区

	}, {
		key: "getAreaContent",
		value: function getAreaContent() {
			var _this14 = this;

			var _state$backupGrid2 = this.state.backupGrid,
			    backupGrid = _state$backupGrid2 === undefined ? [] : _state$backupGrid2;

			return backupGrid.map(function (g, key) {
				var classname = g.isSelected ? _index2.default["li-active"] : _index2.default["li-com"];
				return _react2.default.createElement(
					"li",
					{ key: key, className: classname, onClick: function onClick(e) {
							return _this14.clickHandle(key);
						} },
					g.name
				);
			});
		}
		// 点击li

	}, {
		key: "clickHandle",
		value: function clickHandle(index) {
			var _state2 = this.state,
			    _state2$backupGrid = _state2.backupGrid,
			    backupGrid = _state2$backupGrid === undefined ? [] : _state2$backupGrid,
			    isSelectedAll = _state2.isSelectedAll;

			backupGrid[index].isSelected = !backupGrid[index].isSelected;
			if (!backupGrid[index].isSelected) {
				isSelectedAll = false;
			}

			this.setState({
				backupGrid: backupGrid,
				isSelectedAll: isSelectedAll
			});
		}
		// cancle

	}, {
		key: "cancleHandle",
		value: function cancleHandle() {
			var cancleHandle = this.props.cancleHandle;

			cancleHandle && cancleHandle("cancle", this.state.grids);
		}
		// ensure

	}, {
		key: "ensureHandle",
		value: function ensureHandle() {
			var ensureHandle = this.props.ensureHandle;

			ensureHandle && ensureHandle("ensure", this.state.backupGrid);
		}
	}]);

	return AreaDialog;
}(_react.Component);