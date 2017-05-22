'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mediaReducer;

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaListState = {
	attachmentList: []

};
var defaultState = _extends({}, mediaListState);
function mediaReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.UPLOAD.RECEIVE_DATA:
			return upload_result(state, action.data);
		case _actiontype2.default.MEDIA.RECEIVE_DATA:
			return upload_media_result(state, action.data);
		case _actiontype2.default.DELETE_MEDIA.RECEIVE_DATA:
			return delete_media(state, action.data);
		case _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state, action.data);
		default:
			return state;
	}
}

// 附件上传
function upload_result(state, data) {
	var _state$attachmentList = state.attachmentList,
	    attachmentList = _state$attachmentList === undefined ? [] : _state$attachmentList,
	    newAttach = [];


	newAttach = attachmentList.slice(0);

	newAttach.push(data[0]);

	return Object.assign({}, state, { attachmentList: newAttach });
}

// 多媒体上传
function upload_media_result(state, data) {
	var _state$mediaList = state.mediaList,
	    mediaList = _state$mediaList === undefined ? [] : _state$mediaList,
	    newAttach = [];


	newAttach = mediaList.slice(0);

	newAttach.push(data[0]);

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