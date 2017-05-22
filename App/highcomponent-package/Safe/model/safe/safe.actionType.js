'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SAFE_ACTION_TYPE;

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handle = new _reduxBuildTools.ActionTypeHandle('SAFE_ACTION_TYPE');
var SAFE_ACTION_TYPE = (_SAFE_ACTION_TYPE = {
    COMPANYTYPELIST: handle.createRequestActionType('COMPANYTYPELIST'),
    RENKINGLIST: handle.createRequestActionType('RENKINGLIST'),
    IBPRILIST: handle.createRequestActionType('IBPRILIST'),
    RISKLIST: handle.createRequestActionType('RISKLIST'),
    DANGERLIST: handle.createRequestActionType('DANGERLIST'),
    WINDCONTROLLIST: handle.createRequestActionType('WINDCONTROLLIST'),
    INCOMETRENDSLIST: handle.createRequestActionType('INCOMETRENDSLIST'),
    COMPANYTRENDSLIST: handle.createRequestActionType('COMPANYTRENDSLIST'),
    RISKTRENDSLIST: handle.createRequestActionType('RISKTRENDSLIST'),
    // 保险部分
    INSURE_COMPANY_LIST: handle.createRequestActionType('INSURE_COMPANY_LIST'),
    INSURE_COMPANY_LIST_FORMONEY: handle.createRequestActionType('INSURE_COMPANY_LIST_FORMONEY'),
    INSURE_TASK_LIST: handle.createRequestActionType('INSURE_TASK_LIST')
}, _defineProperty(_SAFE_ACTION_TYPE, 'RISKTRENDSLIST', handle.createRequestActionType('RISKTRENDSLIST')), _defineProperty(_SAFE_ACTION_TYPE, 'CARD_DATA', handle.createRequestActionType('CARD_DATA')), _defineProperty(_SAFE_ACTION_TYPE, 'GET_HIDDEN_RANK_BY_INSURE', handle.createRequestActionType('GET_HIDDEN_RANK_BY_INSURE')), _defineProperty(_SAFE_ACTION_TYPE, 'GET_HIDDEN_BY_INSURE', handle.createRequestActionType('GET_HIDDEN_BY_INSURE')), _defineProperty(_SAFE_ACTION_TYPE, 'INSURE_COMPANY_LIST_FORMAP', handle.createRequestActionType('INSURE_COMPANY_LIST_FORMAP')), _SAFE_ACTION_TYPE);
exports.default = SAFE_ACTION_TYPE;