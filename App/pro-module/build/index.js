"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.obj = undefined;

var _riskWarning = require("@stararc-insurance_functional-module/risk-warning");

var _insurControl = require("@stararc-insurance_functional-module/insur-control");

var _baseSetting = require("@stararc-insurance_functional-module/base-setting");

var _claimManagement = require("@stararc-insurance_functional-module/claim-management");

var _homeStatistic = require("@stararc-insurance_functional-module/home-statistic");

var _container = require("./container");

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * create by liheng at 2017.5.19
                                                                                                                                                                                                     */

// 风险警示


// 承包管理


// 基础设置


// 理赔管理


// 首页统计


// 菜单
var menu = [].concat(_toConsumableArray(_homeStatistic.route.subs), _toConsumableArray(_riskWarning.route.subs), _toConsumableArray(_baseSetting.route.subs), _toConsumableArray(_insurControl.route.subs), _toConsumableArray(_claimManagement.route.subs));

// 子路由
var childRoutes = [_riskWarning.childRoutes, _insurControl.childRoutes, _baseSetting.childRoutes, _claimManagement.childRoutes, _homeStatistic.childRoutes];

var reducer = {
	riskWarningReducer: _riskWarning.riskWarningReducer,
	gridReducer: _riskWarning.gridReducer,
	//承保
	acceptInsurReducer: _insurControl.acceptInsurReducer,
	insurInfoReducer: _insurControl.insurInfoReducer,
	insurUploadReducer: _insurControl.insurUploadReducer,
	//基础设置 
	basesettingReducer: _baseSetting.basesettingReducer,
	// 理赔管理
	claimReducer: _claimManagement.claimReducer,
	// 首页
	safeReducer: _homeStatistic.safeReducer,
	surveyReducer: _homeStatistic.surveyReducer
};

var proRoute = {
	path: '/insure_beta',
	component: _container2.default,
	indexRoute: { onEnter: function onEnter(nextState, replace) {
			return replace('/home');
		} },
	childRoutes: childRoutes
};

var obj = exports.obj = {
	proRoute: proRoute,
	reducer: reducer,
	name: "insurance-pro"
};