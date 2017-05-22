import commonRequest from '@stararc-insurance/common-request';
let safeRequest={
    companyTypelist: (params) => {
       return commonRequest('/Company/getCompanyTypeList', params, 'get');
    },
    IBPRIlist: (params) => {
        return commonRequest('/Safe/getIBPRIList', params, 'get');
    },
    companyTrendsList: (params) => {
        return commonRequest('/Safe/companyTrends', params, 'get');
    },
    riskTrendsList: (params) => {
        return commonRequest('/Safe/riskTrends', params, 'get');
    },
    hiddenDangerTrendsList: (params) => {
        return commonRequest('/Safe/dangerTrends', params, 'get');
    },
    windControlTrendsList: (params) => {
        return commonRequest('/Safe/windControlCoverageTrends', params, 'get');
    },
    incomeTrendsList: (params) => {
        return commonRequest('/Safe/incomeTrends', params, 'get');
    },
    // 获取保险企业列表
    insure_company_list: (params) => {
        return commonRequest('/Company/insureCompanyList', params, 'get');
    },
    // 获取投保企业列表
    insure_company_list_formoney: (params) => {
        return commonRequest('/Company/insureCompanyListFormoney', params, 'get');
    },
    // 保险任务列表
    insure_task_list: (params) => {
        return commonRequest('/Task/insureTaskList', params, 'get');
    },

    riskTrendsList: (params) => {
        return commonRequest('/Safe/riskTrends', params, 'get');
    },
    get_card_data:(params)=>{
        return commonRequest('/Safe/get_card_data',params,'get');
    },
    get_hidden_rank_by_insure:(params)=>{
        return commonRequest('/Hidden/get_hidden_rank_by_insure',params,'get');
    },
    get_hidden_by_insure:(params)=>{
        return commonRequest('/Hidden/get_hidden_by_insure',params,'get');
    },
    insure_company_list_formap:(params)=>{
        return commonRequest('/Company/insureCompanyListForMap',params,'get');
    }
}
export default safeRequest;