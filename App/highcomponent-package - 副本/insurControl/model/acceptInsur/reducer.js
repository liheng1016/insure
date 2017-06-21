"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = acceptInsurReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _alertTips = require("@stararc-insurance/alert-tips");

var _helpTools = require("@stararc-insurance/help-tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var acceptInsurListState = {
	List: [],
	condition: {},
	doneList: [],
	doneCondition: {},
	detail: {},
	companys: [],
	toexamine: [],
	insurList: []

};

var defaultState = _extends({}, acceptInsurListState);

function acceptInsurReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.LIST.RECEIVE_DATA:
			return getList(state, action.data, action.condition);
		case _actiontype2.default.DETAIL.RECEIVE_DATA:
			return get_detail(state, action.data);
		case _actiontype2.default.APPROVAL.RECEIVE_DATA:
			return approval_suc(state, action.data);
		case _actiontype2.default.GUARANTEE.RECEIVE_DATA:
			return guarantee_suc(state, action.data);
		case _actiontype2.default.TOEXAMINE.RECEIVE_DATA:
			return toexamine_suc(state, action.data);
		case _actiontype2.default.INSUR_LIST.RECEIVE_DATA:
			return insur_list(state, action.data);
		default:
			return state;
	}
}

function getList(state, data, condition) {
	//flag 用来区分未操作和已操作部分

	if (condition.flag == 'not') {

		return Object.assign({}, state, { List: data.compang_list || [],
			condition: _extends({}, condition, {
				totalPage: data.total_pages || 1
			})
		});
	} else {
		return Object.assign({}, state, { doneList: data.compang_list || [],
			doneCondition: _extends({}, condition, {
				totalPage: data.total_pages || 1
			})
		});
	}
}

function get_detail(state, data) {
	return Object.assign({}, state, { detail: data });
}

function approval_suc(state, data) {
	var detail = state.detail,
	    newDetail = (0, _helpTools.deepCopy)(detail);

	if (data && data.id) {
		(0, _alertTips.openAlert)(true, "操作成功！");

		newDetail.insuranceApply.list.unshift(data);
		newDetail.insuranceApply.is_approval = "";
	} else {
		(0, _alertTips.openAlert)(false, "审核失败！");
	}

	return Object.assign({}, state, { detail: newDetail });
}

function guarantee_suc(state, data) {
	data.companys.splice(0, 1);

	return Object.assign({}, state, { companys: data.companys });
}

function toexamine_suc(state, data) {
	data.list.splice(0, 1);

	return Object.assign({}, state, { toexamine: data.list });
}

function insur_list(state, data) {
	data.list.splice(0, 2);

	return Object.assign({}, state, { insurList: data.list });
}