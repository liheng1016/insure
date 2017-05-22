/**
 * Created by root on 17-3-29.
 */
// import { childRoutes as risk_warning_route} from  '@stararc-insurance_functional-module/risk-warning';

// import {childRoutes as insure_control_route} from "@stararc-insurance_functional-module/insur-control";

// import {childRoutes as base_setting_route} from "@stararc-insurance_functional-module/base-setting";

// import {childRoutes as claim_management_route} from "@stararc-insurance_functional-module/claim-management";

// import {childRoutes as home_statistic_route} from "@stararc-insurance_functional-module/home-statistic";


import {childRoutes} from "@stararc-insurance/pro";

export function create_route(conf){
    let route = {
        path:conf.path,
        getComponents:conf.module_path?function(state,callback){

            require.ensure([],(require)=>{
                callback(null,require(conf.module_path).default)
            })
        }:null,
        childRoutes:childRoutes
        /*childRoutes:[
            // risk_warning_route,
            // insure_control_route,
            // base_setting_route,
            // claim_management_route,
            // home_statistic_route
        ]*/
    }

    if(conf.indexRoute){
        route.indexRoute =  { onEnter: (nextState, replace) => replace(conf.indexRoute) }
    }

    return route;
   
}
