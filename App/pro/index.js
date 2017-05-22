"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.appReducer = exports.router = exports.claim = exports.insur = exports.base = exports.risk = exports.safe = undefined;

var _SafeStatistics = require("./container/Safe/SafeStatistics.js");

var _SafeStatistics2 = _interopRequireDefault(_SafeStatistics);

var _index = require("./container/riskWarning/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./container/baseSetting/index.js");

var _index4 = _interopRequireDefault(_index3);

var _insuranceInformation = require("./container/insurControl/insuranceInformation/insuranceInformation.js");

var _insuranceInformation2 = _interopRequireDefault(_insuranceInformation);

var _claimmanagement = require("./container/claimManagement/claimmanagement.js");

var _claimmanagement2 = _interopRequireDefault(_claimmanagement);

var _AppReducer = require("./container/App.reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 保险模块总路由
var router = require("./routes/insur.json");

// 首页统计

// 风险警示

// 基础设置

// 承保管理

// 理赔管理
exports.safe = _SafeStatistics2.default;
exports.risk = _index2.default;
exports.base = _index4.default;
exports.insur = _insuranceInformation2.default;
exports.claim = _claimmanagement2.default;
exports.router = router;
exports.appReducer = _AppReducer.appReducer;

