'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = claimReducer;

var _actiontype = require('./actiontype');

var _actiontype2 = _interopRequireDefault(_actiontype);

var _alertTips = require('@stararc-insurance/alert-tips');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var claimListState = {
	List: [],
	condition: {},
	detail: {},
	insurCompanyList: [],
	insurCompanyCondition: {},
	accidentTypes: [],
	sceneAttachment: [],
	accidentAttachment: {},
	thingsAttachment: {}
};

var defaultState = _extends({}, claimListState);
function claimReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.LIST.RECEIVE_DATA:
			return getList(state, action.data, action.condition);
		case _actiontype2.default.DETAIL.RECEIVE_DATA:
			return one_detail(state, action.data);
		case _actiontype2.default.CREATE.RECEIVE_DATA:
			return create_suc(state, action.data);
		case _actiontype2.default.UPDATE.RECEIVE_DATA:
			return update_suc(state, action.data);
		case _actiontype2.default.GET_INSUR_COMPANY.RECEIVE_DATA:
			return get_insur_company(state, action.data, action.condition);
		case _actiontype2.default.GET_ACCIDENT_TYPES.RECEIVE_DATA:
			return get_accident_types(state, action.data);
		case _actiontype2.default.UPLOAD_CLAIM.RECEIVE_DATA:
			return upload_claim(state, action.data, action);
		case _actiontype2.default.DELETE_ATTACH.RECEIVE_DATA:
			return delete_attach(state, action.data);
		default:
			return state;
	}
}

function getList(state, data, condition) {
	console.log(data, 'data');
	return Object.assign({}, state, {
		List: data.list,
		condition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function one_detail(state, data) {
	var attach = {
		sceneAttachment: [],
		accidentAttachment: {},
		thingsAttachment: {}
	};

	if (data && data.id) {
		attach.sceneAttachment = data.attachment || [];
		attach.accidentAttachment = data.accidentAttachment && data.accidentAttachment[0] || {};
		attach.thingsAttachment = data.thingsAttachment && data.thingsAttachment[0] || {};
	}

	return Object.assign({}, state, _extends({
		detail: data
	}, attach));
}

function create_suc(state, data) {

	if (data && data.id) {
		(0, _alertTips.openAlert)(true, "创建成功！");
		setTimeout(function () {
			(0, _alertTips.closeAlert)();
			window.location.href = "#/claimManagement";
		}, 2000);
	} else {
		(0, _alertTips.openAlert)(false, "创建失败！");
	}

	return Object.assign({}, state);
}

function update_suc(state, data) {

	if (data && data.id) {
		(0, _alertTips.openAlert)(true, "编辑成功！");
	}

	return Object.assign({}, state);
}

function get_insur_company(state, data, condition) {
	return Object.assign({}, state, {
		insurCompanyList: data.companys,
		insurCompanyCondition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function get_accident_types(state, data) {
	var list = data && data.list || [],
	    result = [];

	list.map(function (l) {
		result.push({
			id: l.id,
			name: l.dictValue
		});
	});

	return Object.assign({}, state, { accidentTypes: result });
}

function upload_claim(state, data, condition) {
	var type = condition.fileType;

	var newAttachment = [];

	if (data && data[0]) {

		switch (type) {
			case "scene":
				var _state$sceneAttachmen = state.sceneAttachment,
				    sceneAttachment = _state$sceneAttachmen === undefined ? [] : _state$sceneAttachmen;


				newAttachment = sceneAttachment.slice(0);

				newAttachment.push(data[0]);

				return Object.assign({}, state, {
					sceneAttachment: newAttachment
				});
				break;
			case "accident":
				newAttachment = data && data[0] || {};

				return Object.assign({}, state, {
					accidentAttachment: newAttachment
				});
				break;

			case "things":

				newAttachment = data && data[0] || {};

				return Object.assign({}, state, {
					thingsAttachment: newAttachment
				});

				break;
		}
	} else {
		return state;
	}
}

// 删除附件
function delete_attach(state, data) {

	console.log(data, 5555555555);
	var _state$sceneAttachmen2 = state.sceneAttachment,
	    sceneAttachment = _state$sceneAttachmen2 === undefined ? [] : _state$sceneAttachmen2,
	    newMediaList = [];


	newMediaList = sceneAttachment.slice(0);

	// newMediaList.map((n,key)=>{
	// if(n.attachment_id == data.attachment_id){
	newMediaList.splice(data.index, 1);
	// }
	// });

	return Object.assign({}, state, {
		sceneAttachment: newMediaList
	});
}