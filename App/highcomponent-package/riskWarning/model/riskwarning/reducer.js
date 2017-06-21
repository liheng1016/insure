"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = riskWarningReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _reactRouter = require("react-router");

var _alertTips = require("@stararc-insurance/alert-tips");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var riskwarningListState = {
	List: [],
	detail: [],
	condition: {},
	isRight: ""
};

var defaultState = _extends({}, riskwarningListState);

function riskWarningReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.LIST.RECEIVE_DATA:
			return getList(state, action.data, action.condition);
		case _actiontype2.default.ADD.RECEIVE_DATA:
			return add_risk(state, action.data);
		case _actiontype2.default.DETAIL.RECEIVE_DATA:
			return one_detail(state, action.data);
		case _actiontype2.default.VERIFY_PASSWORD.RECEIVE_DATA:
			return verify_success(state, action.data);
		//附件部分
		case _actiontype2.default.UPLOAD.RECEIVE_DATA:
			return upload_result(state, action.data);
		case _actiontype2.default.MEDIA.RECEIVE_DATA:
			return upload_media_result(state, action.data);
		case _actiontype2.default.DELETE_MEDIA.RECEIVE_DATA:
			return delete_media(state, action.data);
		case _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state, action.data);
		case _actiontype2.default.UNMOUNT_ATTACHMENT.RECEIVE_DATA:
			return unmount_attachment(state, action);
		default:
			return state;
	}
}

function getList(state, data, condition) {
	return Object.assign({}, state, { List: data.list || [],
		condition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function add_risk(state, data) {
	if (data.id) {
		(0, _alertTips.openAlert)(true, "添加成功");
		setTimeout(function () {
			(0, _alertTips.closeAlert)();

			if (process.env.NODE_ENV != 'production') {
				location.href = "/riskwarning";
			} else {
				_reactRouter.browserHistory.push("/riskwarning");
			}
		}, 1500);
	} else {
		(0, _alertTips.openAlert)(false, "创建失败");
	}
	return Object.assign({}, state, {
		isRight: ""
	});
}

function one_detail(state, data) {

	return Object.assign({}, state, { detail: data || {} });
}

// 密码校验成功后设置成功状态，然后
function verify_success(state, data) {
	var isRight = "";

	isRight = data == "ok" ? true : false;

	return Object.assign({}, state, { isRight: isRight });
}

// 附件上传
function upload_result(state, data) {
	var _state$attachmentList = state.attachmentList,
	    attachmentList = _state$attachmentList === undefined ? [] : _state$attachmentList,
	    newAttach = [];


	newAttach = attachmentList.slice(0);

	if (data && data[0]) {
		newAttach.push(data[0]);
	}

	return Object.assign({}, state, { attachmentList: newAttach });
}

// 多媒体上传
function upload_media_result(state, data) {
	var _state$mediaList = state.mediaList,
	    mediaList = _state$mediaList === undefined ? [] : _state$mediaList,
	    newAttach = [];


	newAttach = mediaList.slice(0);

	if (data && data[0]) {
		newAttach.push(data[0]);
	}

	return Object.assign({}, state, { mediaList: newAttach });
}

// 删除多媒体
function delete_media(state, data) {
	var _state$mediaList2 = state.mediaList,
	    mediaList = _state$mediaList2 === undefined ? [] : _state$mediaList2,
	    newMediaList = [];


	newMediaList = mediaList.slice(0);

	newMediaList.map(function (n, key) {
		if (n.attachment_id == data.attachment_id) {
			newMediaList.splice(key, 1);
		}
	});

	return Object.assign({}, state, {
		mediaList: newMediaList
	});
}

// 删除附件
function delete_attach(state, data) {
	var _state$attachmentList2 = state.attachmentList,
	    attachmentList = _state$attachmentList2 === undefined ? [] : _state$attachmentList2,
	    newMediaList = [];


	newMediaList = attachmentList.slice(0);

	newMediaList.map(function (n, key) {
		if (n.attachment_id == data.attachment_id) {
			newMediaList.splice(key, 1);
		}
	});

	return Object.assign({}, state, {
		attachmentList: newMediaList
	});
}

// 卸载附件
function unmount_attachment(state, data) {
	return Object.assign({}, state, {
		attachmentList: [],
		mediaList: []
	});
}