"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = insurInfoReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _alertTips = require("@stararc-insurance/alert-tips");

var _function = require("../../../../helper/function");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insurInfoListState = {
	condition: {},
	List: [],
	// 待导出承保信息列表
	exportList: [],
	gridList: [],
	industryList: [],
	detail: {},
	companyList: [],
	acceptCompany: [],
	insurProductList: [],
	applyNumber: "",
	// 承保保单附件上传
	insureAcctach: {
		business: {},
		full: {},
		social: {},
		seal: {},
		people: {},
		other: {}
	}
};

var defaultState = _extends({}, insurInfoListState);

function insurInfoReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actiontype2.default.LIST.RECEIVE_DATA:
			return getList(state, action.data, action.condition);
		case _actiontype2.default.GRID_LIST.RECEIVE_DATA:
			return get_grid_list(state, action.data, action.condition);
		case _actiontype2.default.INDUSTRY_LIST.RECEIVE_DATA:
			return get_industry_list(state, action.data, action.condition);
		case _actiontype2.default.DETAIL.RECEIVE_DATA:
			return get_detail(state, action.data);
		case _actiontype2.default.COMPANY_LIST.RECEIVE_DATA:
			return get_company_list(state, action.data, action.condition);
		case _actiontype2.default.GET_ACCEPT_COMPANY.RECEIVE_DATA:
			return get_accept_company(state, action.data);
		case _actiontype2.default.GET_APPLY_NUMBER.RECEIVE_DATA:
			return get_apply_number(state, action.data);
		case _actiontype2.default.GET_INSUR_PRODUCT.RECEIVE_DATA:
			return get_insur_product(state, action.data);
		case _actiontype2.default.CREATE_INSUR.RECEIVE_DATA:
			return create_insur(state, action.data);
		case _actiontype2.default.UPDATE_INSUR.RECEIVE_DATA:
			return update_insur(state, action.data);
		case _actiontype2.default.UPLOAD_INSUR.RECEIVE_DATA:
			return upload_insur(state, action.data, action);
		case _actiontype2.default.UNMOUT_UPLOAD_INSUR.RECEIVE_DATA:
			return unmout_upload_insur(state, action);
		default:
			return state;
	}
}

function getList(state, data, condition) {
	// 不分页为了导出数据
	if (condition.show_page && condition.show_page == '2') {
		return Object.assign({}, state, { exportList: data.companys || [] });
	} else {
		return Object.assign({}, state, { List: data.companys || [],
			condition: _extends({}, condition, {
				totalPage: data.total_pages || 1
			})
		});
	}
}

function get_grid_list(state, data) {
	var lists = [];

	if (data) {
		data.map(function (d, key) {
			lists.push({
				id: d.gridID,
				name: d.gridName
			});
		});
	}

	return Object.assign({}, state, { gridList: lists });
}

function get_industry_list(state, data) {
	var lists = [];

	if (data && data.list) {
		data.list.map(function (d) {
			lists.push({
				id: d.typeID,
				name: d.typeName
			});
		});
	}

	return Object.assign({}, state, { industryList: lists });
}

function get_detail(state, data) {
	var insureAcctach = state.insureAcctach;


	insureAcctach = (0, _function.deepCopy)(insureAcctach);

	for (var key in insureAcctach) {
		insureAcctach[key] = data[key + "Attachment"] && data[key + "Attachment"][0] || [];
	}

	return Object.assign({}, state, {
		detail: data,
		insureAcctach: insureAcctach
	});
}

function get_company_list(state, data, condition) {
	return Object.assign({}, state, { companyList: data.list || [],
		companyCondition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function get_accept_company(state, data) {
	var filterLists = [];

	if (data && data.list) {
		data.list.map(function (d) {
			filterLists.push({
				id: d.organID,
				name: d.organName
			});
		});
	}

	return Object.assign({}, state, { acceptCompany: filterLists });
}

function get_apply_number(state, data) {
	return Object.assign({}, state, { applyNumber: data });
}

function get_insur_product(state, data) {
	var filterLists = [];

	if (data && data.list) {
		data.list.map(function (d) {
			filterLists.push({
				id: d.insurance_product_id,
				name: d.name,
				practitioners: d.practitioners,
				third_party: d.third_party,
				attachment: d.attachment && d.attachment[0] || {}
			});
		});
	}
	return Object.assign({}, state, { insurProductList: filterLists });
}

function create_insur(state, data) {
	if (data && data.id) {
		(0, _alertTips.openAlert)(true, "创建成功！");
		setTimeout(function () {
			(0, _alertTips.closeAlert)();
			window.location.href = "#/acceptInsurance";
		}, 2000);
	}

	return Object.assign({}, state);
}

function update_insur(state, data) {

	if (data && data.id) {
		(0, _alertTips.openAlert)(true, "编辑成功！");
	}

	return Object.assign({}, state);
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
	var type = condition.fileType,
	    insureAcctach = state.insureAcctach;

	// insureAcctach = Immutable.Map(insureAcctach)

	insureAcctach = (0, _function.deepCopy)(insureAcctach);

	// const newRecord = Immutable.Record(insureAcctach);


	insureAcctach[type] = data[0];

	return Object.assign({}, state, { insureAcctach: insureAcctach });
}

// 清除附件的参数
function unmout_upload_insur(state, data) {
	return Object.assign({}, state, {
		insureAcctach: {
			business: {},
			full: {},
			social: {},
			seal: {},
			people: {},
			other: {}
		}
	});
}