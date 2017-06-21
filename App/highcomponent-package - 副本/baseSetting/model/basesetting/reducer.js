"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = basesettingReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _alertTips = require("@stararc-insurance/alert-tips");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basesettingListState = {
	detail: {},
	logoImg: []
};

var defaultState = _extends({}, basesettingListState);

function basesettingReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.DETAIL.RECEIVE_DATA:
			return get_detail(state, action.data);
		case _actiontype2.default.MODIFY.RECEIVE_DATA:
			return modify(state, action.data);
		case _actiontype2.default.UPLOAD.RECEIVE_DATA:
			return upload_result(state, action.data);
		default:
			return state;
	}
}

// 获取单条成功
function get_detail(state, data) {
	return Object.assign({}, state, { detail: data && data[0] || {} });
}

// 修改成功
function modify(state, data) {
	if (data) {
		(0, _alertTips.openAlert)(true, "编辑成功！");
	} else {
		(0, _alertTips.openAlert)(false, "编辑失败！");
	};

	return state;
}

// logo附件
function upload_result(state, data) {
	return Object.assign({}, state, { logoImg: data && data[0] || [] });
}