"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = basesettingReducer;

var _actiontype = require("./actiontype");

var _actiontype2 = _interopRequireDefault(_actiontype);

var _helpTools = require("@stararc-insurance/help-tools");

var _reactRouter = require("react-router");

var _alertTips = require("@stararc-insurance/alert-tips");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basesettingListState = {
	detail: {},
	logoImg: []
};

// 保险产品
var productState = {
	productList: [],
	productCondition: {},
	productDetail: {},
	productAdd: [],
	insurCompany: [],
	list: [],
	uploadClausecontent: []
};

var defaultState = _extends({}, basesettingListState, productState);

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
		//以下是保险产品数据处理部分 
		case _actiontype2.default.PRODUCT_LIST.RECEIVE_DATA:
			return product_list(state, action.data, action.condition);
		case _actiontype2.default.PRODUCT_ADD.RECEIVE_DATA:
			return product_add(state, action.data);
		case _actiontype2.default.PRODUCT_DETAIL.RECEIVE_DATA:
			return product_detail(state, action.data);
		case _actiontype2.default.PRODUCT_FORBIDDEN.RECEIVE_DATA:
			return product_forbidden(state, action.data);
		case _actiontype2.default.GET_INSUR_COMPANY.RECEIVE_DATA:
			return get_insur_company(state, action.data);
		case _actiontype2.default.GET_AUTHORIZED_AREA.RECEIVE_DATA:
			return get_authorized_area(state, action.data);
		case _actiontype2.default.UPLOAD_CLAUSECONTENT.RECEIVE_DATA:
			return upload_clausecontent(state, action.data);

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

function product_add(state, data) {
	if (data && data.insurance_product_id) {
		(0, _alertTips.openAlert)(true, "创建成功！");
		setTimeout(function () {
			(0, _alertTips.closeAlert)();
			if (process.env.NODE_ENV != 'production') {
				location.href = "/insuranceProduct";
			} else {
				_reactRouter.browserHistory.push("/insuranceProduct");
			}
		}, 1500);
	} else {
		(0, _alertTips.openAlert)(false, "创建失败！");
	}

	return Object.assign({}, state, {
		uploadClausecontent: []
	});
}

function product_list(state, data, condition) {
	return Object.assign({}, state, { productList: data.list || [],
		productCondition: _extends({}, condition, {
			totalPage: data.total_pages || 1
		})
	});
}

function product_detail(state, data) {

	return Object.assign({}, state, { productDetail: data || {} });
}

function product_forbidden(state, data) {
	if (data && data.insurance_product_id) {
		(0, _alertTips.openAlert)(true, "操作成功！");

		var productDetail = state.productDetail;


		var newProductDetail = (0, _helpTools.deepCopy)(productDetail);
		newProductDetail.status = 2;

		return Object.assign({}, state, {
			productDetail: newProductDetail
		});
	} else {
		(0, _alertTips.openAlert)(false, "操作失败！");

		return Object.assign({}, state);
	}
}

function get_insur_company(state, data) {
	var list = data.list || [],
	    result = [];
	list.map(function (l) {
		result.push({
			id: l.organID,
			name: l.organName
		});
	});

	return Object.assign({}, state, { insurCompany: result

	});
}

function get_authorized_area(state, data) {
	var list = data || [],
	    result = [];
	list.map(function (l) {
		result.push({
			id: l.gridID,
			name: l.gridName
		});
	});
	return Object.assign({}, state, { list: data });
}

function upload_clausecontent(state, data) {
	console.log(data, "data");
	return Object.assign({}, state, { uploadClausecontent: data && data[0] || {} });
}