'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _safe = require('./safe.request');

var _safe2 = _interopRequireDefault(_safe);

var _safe3 = require('./safe.actionType');

var _safe4 = _interopRequireDefault(_safe3);

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeAction = {
    companyTypelist: function companyTypelist() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.COMPANYTYPELIST, _safe2.default.companyTypelist, params);
    },
    IBPRIlist: function IBPRIlist() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.IBPRILIST, _safe2.default.IBPRIlist, params);
    },
    dangerTrendsList: function dangerTrendsList() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.DANGERLIST, _safe2.default.hiddenDangerTrendsList, params);
    },
    incomeTrendsList: function incomeTrendsList() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.INCOMETRENDSLIST, _safe2.default.incomeTrendsList, params);
    },
    windControlCoverageList: function windControlCoverageList() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.WINDCONTROLLIST, _safe2.default.windControlTrendsList, params);
    },
    companyTrendsList: function companyTrendsList() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.COMPANYTRENDSLIST, _safe2.default.companyTrendsList, params);
    },
    riskTrendsList: function riskTrendsList() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.RISKTRENDSLIST, _safe2.default.riskTrendsList, params);
    },
    card_data: function card_data() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.CARD_DATA, _safe2.default.get_card_data, params);
    },
    hidden_rank: function hidden_rank() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.GET_HIDDEN_RANK_BY_INSURE, _safe2.default.get_hidden_rank_by_insure, params);
    },
    get_hidden_by_insure: function get_hidden_by_insure() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.GET_HIDDEN_BY_INSURE, _safe2.default.get_hidden_by_insure, params);
    }
};

/**
 * 保险部分的企业列表
 * @type {Object}
 */
var insureCompanyList = {
    // 保险排查企业
    insure_company_list: function insure_company_list() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.INSURE_COMPANY_LIST, _safe2.default.insure_company_list, params);
    },
    // 投保费的企业
    insure_company_list_formoney: function insure_company_list_formoney() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.INSURE_COMPANY_LIST_FORMONEY, _safe2.default.insure_company_list_formoney, params);
    },
    // 任务列表
    insure_task_list: function insure_task_list() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.INSURE_TASK_LIST, _safe2.default.insure_task_list, params);
    },
    // 地图企业列表
    insure_company_list_formap: function insure_company_list_formap() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _reduxBuildTools.requestHandle)(_safe4.default.INSURE_COMPANY_LIST_FORMAP, _safe2.default.insure_company_list_formap, params);
    }
};

exports.default = _extends({}, safeAction, insureCompanyList);