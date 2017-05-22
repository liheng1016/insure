import {ActionTypeHandle} from '@stararc-insurance/redux-build-tools';
let handle = new ActionTypeHandle('SAFE_ACTION_TYPE');
const SAFE_ACTION_TYPE={
    COMPANYTYPELIST: handle.createRequestActionType('COMPANYTYPELIST'),
    RENKINGLIST:handle.createRequestActionType('RENKINGLIST'),
    IBPRILIST:handle.createRequestActionType('IBPRILIST'),
    RISKLIST:handle.createRequestActionType('RISKLIST'),
    DANGERLIST:handle.createRequestActionType('DANGERLIST'),
    WINDCONTROLLIST:handle.createRequestActionType('WINDCONTROLLIST'),
    INCOMETRENDSLIST:handle.createRequestActionType('INCOMETRENDSLIST'),
    COMPANYTRENDSLIST:handle.createRequestActionType('COMPANYTRENDSLIST'),
    RISKTRENDSLIST:handle.createRequestActionType('RISKTRENDSLIST'),
    // 保险部分
    INSURE_COMPANY_LIST:handle.createRequestActionType('INSURE_COMPANY_LIST'),
    INSURE_COMPANY_LIST_FORMONEY:handle.createRequestActionType('INSURE_COMPANY_LIST_FORMONEY'),
    INSURE_TASK_LIST:handle.createRequestActionType('INSURE_TASK_LIST'),
    RISKTRENDSLIST:handle.createRequestActionType('RISKTRENDSLIST'),
    CARD_DATA:handle.createRequestActionType('CARD_DATA'),
    GET_HIDDEN_RANK_BY_INSURE:handle.createRequestActionType('GET_HIDDEN_RANK_BY_INSURE'),
    GET_HIDDEN_BY_INSURE:handle.createRequestActionType('GET_HIDDEN_BY_INSURE'),
    INSURE_COMPANY_LIST_FORMAP:handle.createRequestActionType('INSURE_COMPANY_LIST_FORMAP')

    
};
export default SAFE_ACTION_TYPE;