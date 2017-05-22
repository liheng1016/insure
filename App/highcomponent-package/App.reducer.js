'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appReducer = undefined;

var _redux = require('redux');

var _reducer = require('./riskWarning/model/riskwarning/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./riskWarning/model/grid/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./baseSetting/model/basesetting/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./insurControl/model/acceptInsur/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./insurControl/model/media/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = require('./insurControl/model/insurInfo/reducer');

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = require('./claimManagement/model/claim/reducer');

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = require('./riskSurvey/model/survey/reducer');

var _reducer16 = _interopRequireDefault(_reducer15);

var _safe = require('./Safe/model/safe/safe.reducer');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * create by liheng at 2017.4.17
 */
var appReducer = exports.appReducer = (0, _redux.combineReducers)({
    riskWarningReducer: _reducer2.default,
    gridReducer: _reducer4.default,
    baseSettingReducer: _reducer6.default,
    acceptInsurReducer: _reducer8.default,
    insurUploadReducer: _reducer10.default,
    insurInfoReducer: _reducer12.default,
    claimReducer: _reducer14.default,
    surveyReducer: _reducer16.default,
    safeReducer: _safe2.default
});