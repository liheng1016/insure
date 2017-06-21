/**
 * create by liheng at 2017.4.17
 */
import {combineReducers} from 'redux';
import riskWarningReducer from './riskWarning/model/riskwarning/reducer';
import gridReducer from './riskWarning/model/grid/reducer';
import basesettingReducer from './baseSetting/model/reducer';
import productReducer from  './insuranceProduct/model/reducer';
import acceptInsurReducer from "./acceptInsurance/model/acceptInsur/reducer";
import insurUploadReducer from "./insuranceInformation/model/media/reducer";
import insurInfoReducer from "./insuranceInformation/model/insurInfo/reducer";
import claimReducer from "./claimManagement/model/claim/reducer";
import surveyReducer from "./riskSurvey/model/survey/reducer";
import safeReducer from "./Safe/model/safe/safe.reducer";

import detailedListReducer  from "./riskDetailedList/model/detailedList/reducer";

import registerReducer from "./register/model/reducer.js";

export const appReducer = combineReducers({
    riskWarningReducer,
    gridReducer,
    basesettingReducer,
    acceptInsurReducer,
    insurUploadReducer,
    insurInfoReducer,
    claimReducer,
    surveyReducer,
    safeReducer,
    registerReducer,
    detailedListReducer,
    productReducer
})
