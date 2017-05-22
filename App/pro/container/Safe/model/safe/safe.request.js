'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _safeRequest;

var _commonRequest = require('../../../../helper/commonRequest');

var _commonRequest2 = _interopRequireDefault(_commonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var safeRequest = (_safeRequest = {
    companyTypelist: function companyTypelist(params) {
        return (0, _commonRequest2.default)('/Company/getCompanyTypeList', params, 'get');
    },
    IBPRIlist: function IBPRIlist(params) {
        return (0, _commonRequest2.default)('/Safe/getIBPRIList', params, 'get');
    },
    companyTrendsList: function companyTrendsList(params) {
        return (0, _commonRequest2.default)('/Safe/companyTrends', params, 'get');
    },
    riskTrendsList: function riskTrendsList(params) {
        return (0, _commonRequest2.default)('/Safe/riskTrends', params, 'get');
    },
    hiddenDangerTrendsList: function hiddenDangerTrendsList(params) {
        return (0, _commonRequest2.default)('/Safe/dangerTrends', params, 'get');
    },
    windControlTrendsList: function windControlTrendsList(params) {
        return (0, _commonRequest2.default)('/Safe/windControlCoverageTrends', params, 'get');
    },
    incomeTrendsList: function incomeTrendsList(params) {
        return (0, _commonRequest2.default)('/Safe/incomeTrends', params, 'get');
    },
    // 获取保险企业列表
    insure_company_list: function insure_company_list(params) {
        return (0, _commonRequest2.default)('/Company/insureCompanyList', params, 'get');
    },
    // 获取投保企业列表
    insure_company_list_formoney: function insure_company_list_formoney(params) {
        return (0, _commonRequest2.default)('/Company/insureCompanyListFormoney', params, 'get');
    },
    // 保险任务列表
    insure_task_list: function insure_task_list(params) {
        return (0, _commonRequest2.default)('/Task/insureTaskList', params, 'get');
    }

}, _defineProperty(_safeRequest, 'riskTrendsList', function riskTrendsList(params) {
    return (0, _commonRequest2.default)('/Safe/riskTrends', params, 'get');
}), _defineProperty(_safeRequest, 'get_card_data', function get_card_data(params) {
    return (0, _commonRequest2.default)('/Safe/get_card_data', params, 'get');
}), _defineProperty(_safeRequest, 'get_hidden_rank_by_insure', function get_hidden_rank_by_insure(params) {
    return (0, _commonRequest2.default)('/Hidden/get_hidden_rank_by_insure', params, 'get');
}), _defineProperty(_safeRequest, 'get_hidden_by_insure', function get_hidden_by_insure(params) {
    return (0, _commonRequest2.default)('/Hidden/get_hidden_by_insure', params, 'get');
}), _defineProperty(_safeRequest, 'insure_company_list_formap', function insure_company_list_formap(params) {
    return (0, _commonRequest2.default)('/Company/insureCompanyListForMap', params, 'get');
}), _safeRequest);
exports.default = safeRequest;