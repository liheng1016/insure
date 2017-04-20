/**
 * create by liheng at 2017.4.17
 */
import {combineReducers} from 'redux';
import riskwarningReducer from './riskWarning/model/riskwarning/reducer';
import mediaReducer from './riskWarning/model/media/reducer';
import gridReducer from './riskWarning/model/grid/reducer';

export const appReducer = combineReducers({
    riskwarningReducer,
    mediaReducer,
    gridReducer
})
