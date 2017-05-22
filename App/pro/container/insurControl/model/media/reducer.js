"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = insurUploadReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

var _function = require("../../../../helper/function");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaListState = {
	attachList: [],
	insureAcctach: {
		business: {},
		full: {},
		social: {},
		seal: {},
		people: {},
		other: {}
	}
};

var defaultState = _extends({}, mediaListState);

function insurUploadReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.UPLOAD.RECEIVE_DATA:
			return upload_result(state, action.data);
		case _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state, action.data);
		case _actiontype2.default.UPLOAD_INSUR.RECEIVE_DATA:
			return upload_insur(state, action.data, action);
		default:
			return state;
	}
}

// 现场图片附件
function upload_result(state, data) {
	var _state$attachList = state.attachList,
	    attachList = _state$attachList === undefined ? [] : _state$attachList,
	    newAttach = [];


	newAttach = attachList.slice(0);

	newAttach.push(data[0]);

	return Object.assign({}, state, { attachList: newAttach });
}

// 删除附件
function delete_attach(state, data) {
	var _state$attachList2 = state.attachList,
	    attachList = _state$attachList2 === undefined ? [] : _state$attachList2,
	    newMediaList = [];


	newMediaList = attachList.slice(0);

	newMediaList.map(function (n, key) {
		if (n.attachment_id == data.attachment_id) {
			newMediaList.splice(key, 1);
		}
	});

	return Object.assign({}, state, {
		attachList: newMediaList
	});
}

/**
 * 此处是由页面中上传文件的时候传递了一个fileType
 * 用来区分上传是的是哪个文件
 * 此处为了省略部分代码，雇用相同的参数当成key值保存相应附件
 * 所以insureAcctach中的属性不能随便修改
 * @date   2017-05-05T16:59:02+0800
 * @author liheng
 */
function upload_insur(state, data, condition) {
	console.log(data, condition);

	var type = condition.fileType,
	    insureAcctach = state.insureAcctach;

	// insureAcctach = Immutable.Map(insureAcctach)

	insureAcctach = (0, _function.deepCopy)(insureAcctach);

	insureAcctach[type] = data[0];

	return Object.assign({}, state, { insureAcctach: insureAcctach });
}