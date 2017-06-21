'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = surveyReducer;

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surveyListState = {
	List: [],
	condition: {},
	detail: {},
	getdetail: {}
};
var defaultState = _extends({}, surveyListState);
function surveyReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.LIST.RECEIVE_DATA:
			return getList(state, action.data, action.condition);
		case _actiontype2.default.GETDETAIL.RECEIVE_DATA:
			return one_detail(state, action.data);
		default:
			return state;
	}
}
function getList(state, data, condition) {
	console.log(data, 'data');
	return Object.assign({}, state, {
		List: data.tasks,
		condition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function one_detail(state, data) {
	console.log(data, '企业安全详情');
	return Object.assign({}, state, { getdetail: data });
}