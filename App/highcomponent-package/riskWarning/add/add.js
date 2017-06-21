"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AlertContainer = exports.PassWordVerify = exports.AreaDialog = exports.ActionComponent = exports.SendType = exports.SendArea = exports.Attachment = exports.MultiMedia = exports.MainBody = exports.Title = exports.ContentBody = exports.GoBack = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _bigImg = require("@stararc-component/big-img");

var _bigImg2 = _interopRequireDefault(_bigImg);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _uploadFile = require("@stararc-insurance/upload-file");

var _uploadFile2 = _interopRequireDefault(_uploadFile);

var _helpTools = require("@stararc-insurance/help-tools");

var _action = require("../model/grid/action");

var _action2 = _interopRequireDefault(_action);

var _action3 = require("../model/riskwarning/action");

var _action4 = _interopRequireDefault(_action3);

var _add = require("./add.css");

var _add2 = _interopRequireDefault(_add);

var _reactQuill = require("react-quill");

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Quill from "quill";

require("quill/dist/quill.snow.css");

/**
 * 添加风险警示
 */
var AddWarning = function (_Component) {
	_inherits(AddWarning, _Component);

	function AddWarning() {
		_classCallCheck(this, AddWarning);

		return _possibleConstructorReturn(this, (AddWarning.__proto__ || Object.getPrototypeOf(AddWarning)).apply(this, arguments));
	}

	_createClass(AddWarning, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(GoBack, { goBack: function goBack(e) {
						return _this2.goBack();
					} }),
				_react2.default.createElement(ContentBody, _extends({ ref: "argv" }, this.props))
			);
		}
		// 判断页面是有有变动

	}, {
		key: "goBack",
		value: function goBack() {
			var _refs$argv$getValue = this.refs.argv.getValue(),
			    formdata = _refs$argv$getValue.formdata,
			    flag = false;

			for (var key in formdata) {

				flag = flag || !!formdata[key];
			}

			if (flag) {
				if (!confirm("确定要放弃已修改的部分吗？")) {
					return;
				}
			}

			history.go(-1);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var unmount_attachment = this.props.unmount_attachment;


			unmount_attachment();
		}
	}]);

	return AddWarning;
}(_react.Component);

/**
 * 返回按钮
 */


var GoBack = exports.GoBack = function (_Component2) {
	_inherits(GoBack, _Component2);

	function GoBack() {
		_classCallCheck(this, GoBack);

		return _possibleConstructorReturn(this, (GoBack.__proto__ || Object.getPrototypeOf(GoBack)).apply(this, arguments));
	}

	_createClass(GoBack, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				_layout.LayoutHeader,
				{ styleCss: { height: 50 } },
				_react2.default.createElement(
					"div",
					{ className: _add2.default["go_back"] },
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: "1", offset: "11" },
						_react2.default.createElement(_button2.default, { text: "\u8FD4\u56DE", onClick: this.props.goBack })
					)
				)
			);
		}
	}]);

	return GoBack;
}(_react.Component);

/**
 * 添加警示内容区
 */


var ContentBody = exports.ContentBody = function (_Component3) {
	_inherits(ContentBody, _Component3);

	function ContentBody(props) {
		_classCallCheck(this, ContentBody);

		var _this4 = _possibleConstructorReturn(this, (ContentBody.__proto__ || Object.getPrototypeOf(ContentBody)).call(this, props));

		_this4.state = {
			alertFlag: false
		};
		return _this4;
	}

	_createClass(ContentBody, [{
		key: "render",
		value: function render() {
			var _this5 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50 } },
					_react2.default.createElement(Title, { ref: "title" }),
					_react2.default.createElement(MainBody, { ref: "content" }),
					_react2.default.createElement(MultiMedia, _extends({ ref: "media" }, this.props)),
					_react2.default.createElement(Attachment, _extends({ ref: "attach" }, this.props)),
					_react2.default.createElement(SendArea, { lists: this.props.lists, ref: "grid_ids" }),
					_react2.default.createElement(SendType, { ref: "send_type" })
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(ActionComponent, { onClick: function onClick(e) {
							return _this5.verify_password(true);
						} })
				),
				this.state.alertFlag ? _react2.default.createElement(PassWordVerify, _extends({}, this.props, {
					ref: "password",
					onClick: function onClick(e) {
						return _this5.verify_password(false);
					} })) : ''
			);
		}
	}, {
		key: "submitHandle",
		value: function submitHandle() {
			var _getValue = this.getValue(),
			    isValid = _getValue.isValid,
			    formdata = _getValue.formdata;

			// 暂时先关闭发布按钮


			if (isValid) {
				var add = this.props.add;


				add(formdata);
			}

			/*return {
   	isValid,
   	formdata
   }*/
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var refs = this.refs,
			    isValid = true;
			var title = refs.title.getValue();
			var content = refs.content.getValue();
			var grid_ids = refs.grid_ids.getValue();
			var send_type = refs.send_type.getValue();

			if (!title.isValid || !content.isValid || !grid_ids.isValid || !send_type.isValid) {
				isValid = false;
			}
			var formdata = _extends({
				title: title.value,
				content: content.value,
				editorHtml: content.editorHtml,
				grid_ids: refs.grid_ids.getValue()["gridsId"].join(","),
				media_attachment_ids: refs.media.getValue().join(","),
				attachment_ids: refs.attach.getValue().join(",")
			}, refs.send_type.getValue()["typeId"]);

			return {
				isValid: isValid,
				formdata: formdata
			};
		}
	}, {
		key: "verify_password",
		value: function verify_password(flag) {
			var result = this.submitHandle();
			// this.setState({
			// 	alertFlag:flag && result.isValid
			// })
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var add = this.props.add;

			var self = this;
			if (nextProps.isRight != this.props.isRight && nextProps.isRight) {
				this.setState({
					alertFlag: false
				}, function () {
					var data = self.submitHandle();

					add(_extends({}, data.formdata));
				});
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var getGridsList = this.props.getGridsList;

			getGridsList();
		}
	}]);

	return ContentBody;
}(_react.Component);

/**
 * 警示标题
 */


var Title = exports.Title = function (_Component4) {
	_inherits(Title, _Component4);

	function Title(props) {
		_classCallCheck(this, Title);

		var _this6 = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

		_this6.state = {
			isValid: true
		};
		return _this6;
	}

	_createClass(Title, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label_required"] },
					"\u8B66\u793A\u6807\u9898\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(
						"div",
						{ className: _add2.default["warning--title"] },
						_react2.default.createElement(_input2.default, { ref: "input", maxLength: 50 }),
						!this.state.isValid ? _react2.default.createElement(
							"span",
							{ className: _add2.default["error--tips"] },
							"\u8BF7\u586B\u5199\u6807\u9898\uFF01"
						) : ''
					),
					_react2.default.createElement(
						"span",
						{ className: _add2.default["tip-block"] },
						"50\u5B57\u4EE5\u5185"
					)
				)
			);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var value = this.refs.input.getValue(),
			    self = this;
			var isValid = true;

			if (!value) {
				isValid = false;
			}

			this.setState({
				isValid: isValid
			}, function () {
				self.clearTime = setTimeout(function () {
					self.setState({
						isValid: true
					});
				}, 2000);
			});

			return { value: value, isValid: isValid };
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearTimeout(this.clearTime);
		}
	}]);

	return Title;
}(_react.Component);

/**
 * 警示正文
 */


var MainBody = exports.MainBody = function (_Component5) {
	_inherits(MainBody, _Component5);

	function MainBody(props) {
		_classCallCheck(this, MainBody);

		var _this7 = _possibleConstructorReturn(this, (MainBody.__proto__ || Object.getPrototypeOf(MainBody)).call(this, props));

		_this7.state = {
			isValid: true
		};
		return _this7;
	}

	_createClass(MainBody, [{
		key: "render",
		value: function render() {
			var _this8 = this;

			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label_required"] },
					"\u8B66\u793A\u6B63\u6587\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(_reactQuill2.default, {
						ref: "container",
						theme: "snow",
						modules: this.getToobar(),
						value: this.state.editorHtml,
						onChange: function onChange(val) {
							return _this8.changeHandle(val);
						} }),
					this.state.isValid === false ? _react2.default.createElement(
						"span",
						{ className: _add2.default["error--tips"] },
						"\u8BF7\u586B\u5199\u8B66\u793A\u6B63\u6587\u5185\u5BB9"
					) : ''
				)
			);
		}
	}, {
		key: "getToobar",
		value: function getToobar() {
			return {
				toolbar: [['bold', 'italic', 'underline'], // toggled buttons
				['blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], // custom button values
				[{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
				[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
				[{ 'direction': 'rtl' }], // text direction
				[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
				[{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
				[{ 'font': [] }], [{ 'align': [] }], ['clean']] };
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var editorHtml = this.state.editorHtml,
			    self = this;

			var value = editorHtml ? encodeURIComponent(editorHtml) : "";

			var isValid = true;

			if (!editorHtml) {
				isValid = false;
				this.setState({ isValid: isValid }, function () {
					self.clearTime = setTimeout(function () {
						self.setState({
							isValid: true
						});
					}, 2000);
				});
			}
			return { value: value, isValid: isValid, editorHtml: editorHtml };
		}
	}, {
		key: "changeHandle",
		value: function changeHandle(html) {
			this.setState({
				editorHtml: html
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearTimeout(this.clearTime);
		}
	}]);

	return MainBody;
}(_react.Component);

/**
 * 多媒体信息
 */


var MultiMedia = exports.MultiMedia = function (_Component6) {
	_inherits(MultiMedia, _Component6);

	function MultiMedia(props) {
		_classCallCheck(this, MultiMedia);

		var _this9 = _possibleConstructorReturn(this, (MultiMedia.__proto__ || Object.getPrototypeOf(MultiMedia)).call(this, props));

		_this9.state = {
			maxLength: 4
		};
		return _this9;
	}

	_createClass(MultiMedia, [{
		key: "render",
		value: function render() {
			var _this10 = this;

			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label"] },
					"\u591A\u5A92\u4F53\u4FE1\u606F\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(
						"ul",
						{ className: _add2.default["media--ul"] },
						this.createMultiMedia()
					),
					_react2.default.createElement(
						"div",
						{ className: _add2.default["media"] },
						_react2.default.createElement(_uploadFile.UploadMedia, {
							ref: "upload_img",
							accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
							disabled: this.getIsDisabled(),
							onChange: function onChange(e) {
								return _this10.changeHandle();
							} }),
						_react2.default.createElement(
							"span",
							{ className: _add2.default["help--line"] },
							"\u5DF2\u4E0A\u4F20",
							this.getMediaLength(),
							"\u4E2A\uFF0C\u8FD8\u53EF\u4E0A\u4F20",
							this.state.maxLength - this.getMediaLength(),
							"\u4E2A"
						)
					)
				)
			);
		}
	}, {
		key: "changeHandle",
		value: function changeHandle() {
			var uploadMedia = this.props.uploadMedia;

			var attachment = this.refs.upload_img.getValue();
			uploadMedia(attachment);
		}
	}, {
		key: "getIsDisabled",
		value: function getIsDisabled() {
			var hasUploadLenth = this.getMediaLength();
			return hasUploadLenth >= this.state.maxLength ? true : false;
		}
		// 获取上传的个数

	}, {
		key: "getMediaLength",
		value: function getMediaLength() {
			var _props$mediaList = this.props.mediaList,
			    mediaList = _props$mediaList === undefined ? [] : _props$mediaList;

			return mediaList && mediaList.length ? mediaList.length : 0;
		}
		// 生成附件

	}, {
		key: "createMultiMedia",
		value: function createMultiMedia() {
			var _this11 = this;

			var _props$mediaList2 = this.props.mediaList,
			    mediaList = _props$mediaList2 === undefined ? [] : _props$mediaList2;

			return mediaList.map(function (m, key) {
				return _react2.default.createElement(
					"li",
					{ key: key, className: _add2.default["media--li"] },
					_react2.default.createElement("img", { src: m.attachment_path, alt: "" }),
					_react2.default.createElement("span", { className: _add2.default["delete__img"], onClick: function onClick(e) {
							return _this11.deleteMedia(m.attachment_id);
						} })
				);
			});
		}
		// 删除附件

	}, {
		key: "deleteMedia",
		value: function deleteMedia(attach_id) {
			var delete_media = this.props.delete_media;

			delete_media({
				attachment_id: attach_id
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _props$mediaList3 = this.props.mediaList,
			    mediaList = _props$mediaList3 === undefined ? [] : _props$mediaList3,
			    attachmentIds = [];

			mediaList.map(function (attach, key) {
				attachmentIds.push(attach.attachment_id);
			});
			return attachmentIds;
		}
	}]);

	return MultiMedia;
}(_react.Component);

/**
 * 附件
 */


var Attachment = exports.Attachment = function (_Component7) {
	_inherits(Attachment, _Component7);

	function Attachment(props) {
		_classCallCheck(this, Attachment);

		var _this12 = _possibleConstructorReturn(this, (Attachment.__proto__ || Object.getPrototypeOf(Attachment)).call(this, props));

		_this12.state = {
			attachmentList: [],
			maxLength: 4
		};
		return _this12;
	}

	_createClass(Attachment, [{
		key: "render",
		value: function render() {
			var _this13 = this;

			var buttonstyle = { width: '90px' };
			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label"] },
					"\u9644\u4EF6\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(
						"div",
						{ className: _add2.default["upload--button"] },
						_react2.default.createElement(_uploadFile2.default, { ref: "attachment",
							styleCss: buttonstyle,
							disabled: this.getIsDisabled(),
							accept: ".doc,.xls,.pdf,.ppt,.docx,.xlsx,.pptx",
							buttonName: "选择文件",
							onChange: function onChange(e) {
								return _this13.changeHandle();
							} })
					),
					_react2.default.createElement(
						"span",
						{ className: _add2.default["help--line"] },
						"\u5DF2\u4E0A\u4F20",
						this.getMediaLength(),
						"\u4E2A\uFF0C\u8FD8\u53EF\u4E0A\u4F20",
						this.state.maxLength - this.getMediaLength(),
						"\u4E2A"
					),
					_react2.default.createElement(
						"div",
						{ className: _add2.default["attachment--area"] },
						_react2.default.createElement(
							"ul",
							null,
							this.createAttachment()
						)
					)
				)
			);
		}
	}, {
		key: "changeHandle",
		value: function changeHandle() {
			var upload = this.props.upload;

			var attachment = this.refs.attachment.getValue();

			upload(attachment);
		}
	}, {
		key: "createAttachment",
		value: function createAttachment() {
			var _this14 = this;

			var _props$attachmentList = this.props.attachmentList,
			    attachmentList = _props$attachmentList === undefined ? [] : _props$attachmentList;

			return attachmentList.map(function (f, key) {
				return _react2.default.createElement(
					"li",
					{ className: _add2.default["attachment--li"], key: key },
					_react2.default.createElement(
						"a",
						{ href: f.attachment_path, download: "" },
						f.name
					),
					_react2.default.createElement("span", { className: _add2.default["attachment--delete"], onClick: function onClick(e) {
							return _this14.delete_attach(f.attachment_id);
						} })
				);
			});
		}
		// 判断

	}, {
		key: "getIsDisabled",
		value: function getIsDisabled() {
			var hasUploadLenth = this.getMediaLength();
			return hasUploadLenth >= this.state.maxLength ? true : false;
		}
		// 获取上传的个数

	}, {
		key: "getMediaLength",
		value: function getMediaLength() {
			var _props$attachmentList2 = this.props.attachmentList,
			    attachmentList = _props$attachmentList2 === undefined ? [] : _props$attachmentList2;

			return attachmentList && attachmentList.length ? attachmentList.length : 0;
		}
		// 删除附件

	}, {
		key: "delete_attach",
		value: function delete_attach(media_id) {
			var delete_attach = this.props.delete_attach;

			delete_attach({
				attachment_id: media_id
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _props$attachmentList3 = this.props.attachmentList,
			    attachmentList = _props$attachmentList3 === undefined ? [] : _props$attachmentList3,
			    attachmentIds = [];

			attachmentList.map(function (attach, key) {
				attachmentIds.push(attach.attachment_id);
			});
			return attachmentIds;
		}
	}]);

	return Attachment;
}(_react.Component);

/**
 * 发送地区
 */


var SendArea = exports.SendArea = function (_Component8) {
	_inherits(SendArea, _Component8);

	function SendArea(props) {
		_classCallCheck(this, SendArea);

		var _this15 = _possibleConstructorReturn(this, (SendArea.__proto__ || Object.getPrototypeOf(SendArea)).call(this, props));

		_this15.state = {
			isOpenDialog: false,
			grids: [],
			isValid: true,
			buttonStyle: {
				border: "1px solid #f6a811",
				background: "white",
				color: "#f6a811"
			}
		};
		return _this15;
	}

	_createClass(SendArea, [{
		key: "render",
		value: function render() {
			var _this16 = this;

			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label_required"] },
					"\u53D1\u9001\u5730\u533A\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(
						_gridlayout2.default,
						{ width: "1" },
						_react2.default.createElement(_button2.default, {
							styleCss: this.state.buttonStyle,
							text: "选择",
							onClick: function onClick(e) {
								return _this16.openDialog();
							} })
					),
					!this.state.isValid ? _react2.default.createElement(
						"span",
						{ className: _add2.default["error--tips"], style: { clear: "both", display: "block" } },
						"\u8BF7\u9009\u62E9\u53D1\u9001\u5730\u533A\uFF01"
					) : "",
					_react2.default.createElement(
						"div",
						{ className: _add2.default["attachment--area"] },
						_react2.default.createElement(
							"ul",
							null,
							this.getSelectedArea()
						)
					),
					this.state.isOpenDialog ? _react2.default.createElement(AreaDialog, {
						ensureHandle: function ensureHandle(action, data) {
							return _this16.closeDialog(action, data);
						},
						cancleHandle: function cancleHandle(action, data) {
							return _this16.closeDialog(action, data);
						},
						grids: this.state.grids }) : ''
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
					{ className: _add2.default["attachment--li"], key: key },
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
			    isValid = true,
			    self = this;

			grids.map(function (g, key) {
				if (g.isSelected) {
					gridsId.push(g.id);
				}
			});

			if (gridsId && !gridsId.length) {
				isValid = false;
			}

			this.setState({
				isValid: isValid
			}, function () {
				self.clearTime = setTimeout(function () {
					self.setState({
						isValid: true
					});
				}, 2000);
			});

			return {
				isValid: isValid,
				gridsId: gridsId
			};
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearTimeout(this.clearTime);
		}
	}]);

	return SendArea;
}(_react.Component);

/**
 * 发送对象
 */


var SendType = exports.SendType = function (_Component9) {
	_inherits(SendType, _Component9);

	function SendType(props) {
		_classCallCheck(this, SendType);

		var _this17 = _possibleConstructorReturn(this, (SendType.__proto__ || Object.getPrototypeOf(SendType)).call(this, props));

		_this17.state = {
			isValid: true,
			types: [{
				id: 1,
				param: "effect_insuce_ids",
				type_name: '投保企业'
			}, {
				id: 2,
				param: "potial_cusmers_ids",
				type_name: '潜在客户'
			}]
		};
		return _this17;
	}

	_createClass(SendType, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _add2.default["form-pie"] },
				_react2.default.createElement(
					"label",
					{ className: _add2.default["label_required"] },
					"\u53D1\u9001\u5BF9\u8C61\uFF1A"
				),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["context"] },
					_react2.default.createElement(
						"ul",
						{ className: _add2.default["type--ul"] },
						this.getLiContent()
					),
					!this.state.isValid ? _react2.default.createElement(
						"span",
						{ className: _add2.default["error--tips"] },
						"\u8BF7\u9009\u62E9\u53D1\u9001\u5BF9\u8C61\uFF01"
					) : ""
				)
			);
		}
	}, {
		key: "getLiContent",
		value: function getLiContent() {
			var _this18 = this;

			var _state$types = this.state.types,
			    types = _state$types === undefined ? [] : _state$types;

			return types.map(function (t, key) {
				var classname = t.isSelected ? _add2.default["selected-obj"] : _add2.default["not-selected"];
				return _react2.default.createElement(
					"li",
					{ key: key, className: classname, onClick: function onClick(e) {
							return _this18.clickHandle(key);
						} },
					t.type_name
				);
			});
		}
	}, {
		key: "clickHandle",
		value: function clickHandle(index) {
			var _state$types2 = this.state.types,
			    types = _state$types2 === undefined ? [] : _state$types2;

			types[index].isSelected = !types[index].isSelected;
			this.setState({
				types: types
			});
		}
	}, {
		key: "getValue",
		value: function getValue() {
			var _state$types3 = this.state.types,
			    types = _state$types3 === undefined ? [] : _state$types3,
			    typeId = {},
			    isValid = false,
			    self = this;

			types.map(function (t, key) {
				typeId[t.param] = !!t.isSelected ? 1 : 0;
				isValid = !!t.isSelected || isValid;
			});

			this.setState({
				isValid: isValid
			}, function () {
				self.clearTime = setTimeout(function () {
					self.setState({
						isValid: true
					});
				}, 2000);
			});

			return {
				isValid: isValid,
				typeId: typeId
			};
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearTimeout(this.clearTime);
		}
	}]);

	return SendType;
}(_react.Component);

/**
 * 发布操作
 */


var ActionComponent = exports.ActionComponent = function (_Component10) {
	_inherits(ActionComponent, _Component10);

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
				{ className: _add2.default["action--componnet"] },
				_react2.default.createElement(
					_gridlayout2.default,
					{ width: "1", offset: "5.5" },
					_react2.default.createElement(_button2.default, { text: "发布", styleCss: buttonStyle, onClick: this.props.onClick })
				)
			);
		}
	}]);

	return ActionComponent;
}(_react.Component);

;

/**
 * 选择地区弹出框
 */

var AreaDialog = exports.AreaDialog = function (_Component11) {
	_inherits(AreaDialog, _Component11);

	function AreaDialog(props) {
		_classCallCheck(this, AreaDialog);

		var _this20 = _possibleConstructorReturn(this, (AreaDialog.__proto__ || Object.getPrototypeOf(AreaDialog)).call(this, props));

		_this20.state = {
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
		return _this20;
	}

	_createClass(AreaDialog, [{
		key: "render",
		value: function render() {
			var _this21 = this;

			return _react2.default.createElement(
				"div",
				{ className: _add2.default["area--dialog"] },
				_react2.default.createElement("div", { className: _add2.default["dialog--shade"] }),
				_react2.default.createElement(
					"div",
					{ className: _add2.default["dialog--content"] },
					_react2.default.createElement(
						"p",
						{ className: _add2.default["dialog--title"] },
						"\u8BF7\u9009\u62E9\u53D1\u9001\u5730\u533A"
					),
					_react2.default.createElement(
						"p",
						null,
						_react2.default.createElement(
							"span",
							{
								className: this.state.isSelectedAll ? _add2.default["selected--all"] : _add2.default["selected"],
								onClick: function onClick(e) {
									return _this21.selectedAll();
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
						{ className: _add2.default["dialog-action"] },
						_react2.default.createElement(
							_gridlayout2.default,
							{ width: "1.5", offset: "4" },
							_react2.default.createElement(_button2.default, {
								text: "取消",
								onClick: function onClick(e) {
									return _this21.cancleHandle();
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
									return _this21.ensureHandle();
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
			var _this22 = this;

			var _state$backupGrid2 = this.state.backupGrid,
			    backupGrid = _state$backupGrid2 === undefined ? [] : _state$backupGrid2;

			return backupGrid.map(function (g, key) {
				var classname = g.isSelected ? _add2.default["li-active"] : _add2.default["li-com"];
				return _react2.default.createElement(
					"li",
					{ key: key, className: classname, onClick: function onClick(e) {
							return _this22.clickHandle(key);
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

/**
 * 校验发布密码
 */


var PassWordVerify = exports.PassWordVerify = function (_Component12) {
	_inherits(PassWordVerify, _Component12);

	function PassWordVerify(props) {
		_classCallCheck(this, PassWordVerify);

		var _this23 = _possibleConstructorReturn(this, (PassWordVerify.__proto__ || Object.getPrototypeOf(PassWordVerify)).call(this, props));

		_this23.state = {
			isRight: true
		};
		return _this23;
	}

	_createClass(PassWordVerify, [{
		key: "render",
		value: function render() {
			var _this24 = this;

			var buttonStyle = {
				cancle: {
					background: "white",
					border: "1px solid #ffd63f",
					color: "black",
					float: "left"
				},
				ensure: {
					background: "#ffd63f",
					border: "1px solid #ffd63f",
					color: "black",
					float: "right"
				}
			};
			return _react2.default.createElement(
				AlertContainer,
				null,
				_react2.default.createElement(
					"div",
					{ className: _add2.default["verify--box"] },
					_react2.default.createElement(
						"p",
						null,
						"\u53D1\u5E03\u5BC6\u7801"
					),
					_react2.default.createElement(
						"div",
						{ className: _add2.default["password--group"] },
						_react2.default.createElement(_input2.default, { ref: "password", type: "password" }),
						this.state.isRight === false ? _react2.default.createElement(
							"span",
							{ className: _add2.default["error--tips"] },
							"\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01"
						) : ""
					),
					_react2.default.createElement(
						"div",
						{ className: _add2.default["action--button"] },
						_react2.default.createElement(_button2.default, {
							text: "取消",
							type: "button",
							styleCss: buttonStyle.cancle,
							onClick: function onClick(e) {
								return _this24.props.onClick();
							} }),
						_react2.default.createElement(_button2.default, {
							text: "确认",
							type: "button",
							styleCss: buttonStyle.ensure,
							onClick: function onClick(e) {
								return _this24.publishHandle();
							} })
					)
				)
			);
		}
		// 校验发布密码

	}, {
		key: "publishHandle",
		value: function publishHandle() {
			var params = {
				push_pwd: this.refs.password.getValue()
			},
			    publish_verify = this.props.publish_verify;

			publish_verify(params);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var self = this;

			if (nextProps.isRight === false) {
				self.setState({
					isRight: false
				}, function () {
					setTimeout(function () {
						self.setState({
							isRight: true
						});
					}, 2000);
				});
			}
		}
	}]);

	return PassWordVerify;
}(_react.Component);

/**
 * 弹出框的外层
 */


var AlertContainer = exports.AlertContainer = function (_Component13) {
	_inherits(AlertContainer, _Component13);

	function AlertContainer() {
		_classCallCheck(this, AlertContainer);

		return _possibleConstructorReturn(this, (AlertContainer.__proto__ || Object.getPrototypeOf(AlertContainer)).apply(this, arguments));
	}

	_createClass(AlertContainer, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _add2.default["alert--container"] },
				_react2.default.createElement("div", { className: _add2.default["alert--shade"] }),
				this.props.children
			);
		}
	}]);

	return AlertContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return _extends({}, state.riskWarningReducer, {
		lists: state.gridReducer.List
	});
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 上传附件
		upload: function upload(obj) {
			dispatch(_action4.default.upload(obj));
		},
		// 上传多媒体
		uploadMedia: function uploadMedia(obj) {
			dispatch(_action4.default.media(obj));
		},
		// 删除多媒体
		delete_media: function delete_media(obj) {
			dispatch(_action4.default.delete_media(obj));
		},
		// 删除附件
		delete_attach: function delete_attach(obj) {
			dispatch(_action4.default.delete_attach(obj));
		},
		// 获取授权区域
		getGridsList: function getGridsList() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			dispatch(_action2.default.list(params));
		},
		// 添加风险警示
		add: function add() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			dispatch(_action4.default.add(params));
		},
		// 校验发布密码
		publish_verify: function publish_verify(params) {
			dispatch(_action4.default.verify_password(params));
		},
		// 清除附件数据
		unmount_attachment: function unmount_attachment(params) {
			dispatch(_action4.default.unmount_attachment(params));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddWarning);