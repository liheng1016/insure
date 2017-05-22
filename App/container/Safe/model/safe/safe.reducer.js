import ACTION_TYPE from './safe.actionType';
let statisticsListState={
    companyTypeList:[],
    IBPRIlist:[],
    hiddenDangerTrendsList:[],
    windControlTrendsList:[],
    incomeTrendslist:[],
    riskTrendslist:[],
    card_data:{},
    companyTrendslist:[],
    riskTrendslist:[],
    hidden_rank:[],
    sub_hidden_list:[],
    sub_hidden_page:{
        now_page:1,
        total_pages:1
    }
};

// 保险相关企业列表
let insureCompanyListState={
    insureCondition:{},
    insureCompanyList:[],
    insureConditionForMoney:{},
    insureCompanyListForMoney:[],
    insureTaskCondition:{},
    insureTaskList:[],
    insureCompanyListForMap:[],

}

let defaultState = { 
    ...statisticsListState,
    ...insureCompanyListState
};



export default function safeReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TYPE.COMPANYTYPELIST.RECEIVE_DATA:
            return getCompanyTypeList(state,action.data,action.condition);
        case ACTION_TYPE.IBPRILIST.RECEIVE_DATA:
            return getIBPRIList(state,action.data,action.condition);
        case ACTION_TYPE.DANGERLIST.RECEIVE_DATA:
            return getDangerTrends(state,action.data,action.condition);
        case ACTION_TYPE.INCOMETRENDSLIST.RECEIVE_DATA:
            return getIncomeTrends(state,action.data,action.condition);
        case ACTION_TYPE.WINDCONTROLLIST.RECEIVE_DATA:
            return getWindControlCoverageTrends(state,action.data,action.condition);
        case ACTION_TYPE.COMPANYTRENDSLIST.RECEIVE_DATA:
            return getCompanyTrends(state,action.data,action.condition);
        case ACTION_TYPE.RISKTRENDSLIST.RECEIVE_DATA:
            return getRiskTrends(state,action.data,action.condition);
        //保险相关
        case ACTION_TYPE.INSURE_COMPANY_LIST.RECEIVE_DATA:
            return getInsureCompanyList(state,action.data,action.condition);
        case ACTION_TYPE.INSURE_COMPANY_LIST_FORMONEY.RECEIVE_DATA:
            return getInsureCompanyListForMoney(state,action.data,action.condition); 
        case ACTION_TYPE.INSURE_TASK_LIST.RECEIVE_DATA:
            return getInsureTaskList(state,action.data,action.condition); 
        case ACTION_TYPE.CARD_DATA.RECEIVE_DATA:
            return on_receive_card_data(state,action.data);
        case ACTION_TYPE.GET_HIDDEN_RANK_BY_INSURE.RECEIVE_DATA:
            return on_receive_hidden_rank(state,action.data);
        case ACTION_TYPE.GET_HIDDEN_BY_INSURE.RECEIVE_DATA:
            return on_receive_hidden_list(state,action.data);
        case ACTION_TYPE.INSURE_COMPANY_LIST_FORMAP.RECEIVE_DATA:
            return insureCompanyListForMap(state,action.data);
        default:
            return state;
    }
};

/**
 *获取行业类型统计企业数
 */
function getCompanyTypeList(state,data,condition) {
    return Object.assign({},state,{companyTypeList:data});
}

/**
 *获取企业积分前十排行
 */

/**
 * 获取投保企业，保费，统计
 */
function getIBPRIList(state,data,condition) {
    return Object.assign({},state,{IBPRIlist:data});
}


/**
 * 获取隐患趋势图
 */
function getDangerTrends(state,data,condition) {
    return Object.assign({},state,{hiddenDangerTrendsList:data});
}

/**
 * 获取风控覆盖趋势
 */
function getWindControlCoverageTrends(state,data,condition) {
    return Object.assign({},state,{windControlTrendsList:data});
}

/**
 * 获取 保费趋势图
 */
function getIncomeTrends(state,data,condition) {
    return Object.assign({},state,{incomeTrendslist:data});
}


function getCompanyTrends(state,data,condition) {
    return Object.assign({},state,{companyTrendslist:data});
}

function getRiskTrends(state,data,condition) {
    return Object.assign({},state,{riskTrendslist:data});
}

/**
<<<<<<< HEAD
 * 获取企业列表
 * @date   2017-04-11T15:49:54+0800
 * @author liheng
 * @param  {[type]}                 state     [description]
 * @param  {[type]}                 data      [description]
 */
function getInsureCompanyList(state,data,condition){
    console.log(data,condition);

    return Object.assign({},state,{insureCompanyList:data.list||[],
        insureCondition:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });
}

/**
 * 获取投保企业的列表
 * @date   2017-04-11T15:50:55+0800
 * @author liheng
 * @param  {[type]}                 state     [description]
 * @param  {[type]}                 data      [description]
 */
function getInsureCompanyListForMoney(state,data,condition){
    return Object.assign({},state,{insureCompanyListForMoney:data.list||[],
        insureConditionForMoney:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });   
}

/**
 * 获取任务列表
 * @date   2017-04-11T17:55:35+0800
 * @author liheng
 * @param  {[type]}                 state     [description]
 * @param  {[type]}                 data      [description]
 */
function getInsureTaskList(state,data,condition){
    return Object.assign({},state,{insureTaskList:data.list||[],
        insureTaskCondition:{
            ...condition,
            totalPage:data.total_pages || 1
        }    
    });  
}     
 /* 接收卡片数据
 * @param state
 * @param data
 */
function on_receive_card_data(state,data){
    return Object.assign({},state,{card_data:data});
}

/**
 * 保险排查隐患排行
 * @param state
 * @param data
 * @returns {*}
 */
function on_receive_hidden_rank(state,data){
    return Object.assign({},state,{hidden_rank:data});
}

/**
 * 获取保险的排查隐患列表
 * @param state
 * @param data
 * @returns {*}
 */
function on_receive_hidden_list(state,data){
    let sub_hidden_page = {
        now_page:data.now_page,
        total_pages:data.total_pages
    };
    return Object.assign({},state,{sub_hidden_list:data.list,sub_hidden_page})
}

/**
 * 地图企业列表
 * @date   2017-04-12T11:52:43+0800
 * @author liheng
 * @param  {[type]}                 state [description]
 */
function insureCompanyListForMap(state,data){
    return Object.assign({},state,{insureCompanyListForMap:data});
}