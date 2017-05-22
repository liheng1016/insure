/**
 * create by liheng at 2017.4.17
 */
import {combineReducers} from 'redux';
import riskWarningReducer from './riskWarning/model/riskwarning/reducer';
import gridReducer from './riskWarning/model/grid/reducer';
import baseSettingReducer from './baseSetting/model/basesetting/reducer';
import acceptInsurReducer from "./insurControl/model/acceptInsur/reducer";
import insurUploadReducer from "./insurControl/model/media/reducer";
import insurInfoReducer from "./insurControl/model/insurInfo/reducer";
import claimReducer from "./claimManagement/model/claim/reducer";
import surveyReducer from "./riskSurvey/model/survey/reducer";
import safeReducer from "./Safe/model/safe/safe.reducer";

export const appReducer = combineReducers({
    riskWarningReducer,
    gridReducer,
    baseSettingReducer,
    acceptInsurReducer,
    insurUploadReducer,
    insurInfoReducer,
    claimReducer,
    surveyReducer,
    safeReducer
})
