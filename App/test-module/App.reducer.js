/**
 * create by liheng at 2017.4.17
 */
import {combineReducers} from 'redux';

import {obj} from "@stararc-insurance/pro";

export const appReducer = combineReducers({
	...obj.reducer
})
