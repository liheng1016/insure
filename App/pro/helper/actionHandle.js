'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchHandle = dispatchHandle;
exports.requestHandle = requestHandle;
exports.actionHandle = actionHandle;
/**
 * Created by able on 2016/12/9 0009.
 */
function dispatchHandle(type) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var others = arguments[2];

    var action = _extends({
        type: type
    }, params);
    if (others) {
        others.forEach(function (item) {
            action = _extends({}, action, item);
        });
    }
    return action;
}

function requestHandle(ACTION_TYPE, requestFunc, params) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
    }

    return function (dispatch) {
        dispatch(dispatchHandle(ACTION_TYPE.FETCH_START, { condition: params }));
        requestFunc(params).then(function (result) {
            //fetch success
            var data = result && result.data || "";
            dispatch(dispatchHandle(ACTION_TYPE.RECEIVE_DATA, { data: data, condition: params }, others));
        }, function () {
            // fetch fail
            dispatch(dispatchHandle(ACTION_TYPE.FETCH_FAIL));
        });
    };
}

function actionHandle(ACTION_TYPE, requestFunc, params, onSuccess, onFail) {
    return function (dispatch, getState) {
        dispatch(dispatchHandle(ACTION_TYPE.FETCH_START, { condition: params }));
        requestFunc(params).then(function (result) {
            var actionTypeHandle = '';
            //fetch success
            if (result && result.ret == '0') {
                actionTypeHandle = ACTION_TYPE.ACTION_SUCCESS;
                onSuccess && onSuccess(result, dispatch, getState);
            } else {
                actionTypeHandle = ACTION_TYPE.ACTION_FAIL;
                onFail && onFail(result, dispatch, getState);
            }

            dispatch(dispatchHandle(actionTypeHandle, { data: result, condition: params }));
        }, function () {
            // fetch fail
            dispatch(dispatchHandle(ACTION_TYPE.FETCH_FAIL));
        });
    };
}