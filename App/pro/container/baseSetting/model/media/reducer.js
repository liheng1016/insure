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
	logoImg: []

};

var defaultState = _extends({}, mediaListState);

function mediaReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.UPLOAD.RECEIVE_DATA:
			return upload_result(state, action.data);

		default:
			return state;
	}
}

// logo附件
function upload_result(state, data) {
	return Object.assign({}, state, { logoImg: data[0] });
}