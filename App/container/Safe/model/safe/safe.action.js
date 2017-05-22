import SAFE_REQUEST from './safe.request';
import ACTION_TYPE from './safe.actionType';
import { requestHandle, actionHandle } from '@stararc-insurance/redux-build-tools';

let safeAction = {
    companyTypelist: (params = {}) => {
       return requestHandle(ACTION_TYPE.COMPANYTYPELIST, SAFE_REQUEST.companyTypelist, params);
    },
    IBPRIlist:(params={})=>{
        return requestHandle(ACTION_TYPE.IBPRILIST,SAFE_REQUEST.IBPRIlist,params);
    },
    dangerTrendsList:(params={})=>{
        return requestHandle(ACTION_TYPE.DANGERLIST,SAFE_REQUEST.hiddenDangerTrendsList,params);
    },
    incomeTrendsList:(params={})=>{
        return requestHandle(ACTION_TYPE.INCOMETRENDSLIST,SAFE_REQUEST.incomeTrendsList,params);
    },
    windControlCoverageList:(params={})=>{
        return requestHandle(ACTION_TYPE.WINDCONTROLLIST,SAFE_REQUEST.windControlTrendsList,params)
    },
    companyTrendsList:(params={})=>{
        return requestHandle(ACTION_TYPE.COMPANYTRENDSLIST,SAFE_REQUEST.companyTrendsList,params);
    },
    riskTrendsList:(params={})=>{
        return requestHandle(ACTION_TYPE.RISKTRENDSLIST,SAFE_REQUEST.riskTrendsList,params);
    },
    card_data:(params={})=>{
        return requestHandle(ACTION_TYPE.CARD_DATA,SAFE_REQUEST.get_card_data,params);
    },
    hidden_rank:(params={})=>{
        return requestHandle(ACTION_TYPE.GET_HIDDEN_RANK_BY_INSURE,SAFE_REQUEST.get_hidden_rank_by_insure,params);
    },
    get_hidden_by_insure:(params={})=>{
        return requestHandle(ACTION_TYPE.GET_HIDDEN_BY_INSURE,SAFE_REQUEST.get_hidden_by_insure,params);
    }
};

/**
 * 保险部分的企业列表
 * @type {Object}
 */
let insureCompanyList={
    // 保险排查企业
    insure_company_list:(params={})=>{
        return requestHandle(ACTION_TYPE.INSURE_COMPANY_LIST,SAFE_REQUEST.insure_company_list,params);
    },
    // 投保费的企业
    insure_company_list_formoney:(params={})=>{
        return requestHandle(ACTION_TYPE.INSURE_COMPANY_LIST_FORMONEY,SAFE_REQUEST.insure_company_list_formoney,params);
    },
    // 任务列表
    insure_task_list:(params={})=>{
        return requestHandle(ACTION_TYPE.INSURE_TASK_LIST,SAFE_REQUEST.insure_task_list,params);
    },
    // 地图企业列表
    insure_company_list_formap:(params={})=>{
        return requestHandle(ACTION_TYPE.INSURE_COMPANY_LIST_FORMAP,SAFE_REQUEST.insure_company_list_formap,params);
    }
};

export default {
    ...safeAction,
    ...insureCompanyList
};