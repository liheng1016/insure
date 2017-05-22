
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchHandle = dispatchHandle;
exports.requestHandle = requestHandle;
exports.actionHandle = actionHandle;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/**
 * Created by able on 2016/12/9 0009.
 */

var ActionTypeHandle = exports.ActionTypeHandle = function () {
    function ActionTypeHandle(prefix) {
        _classCallCheck(this, ActionTypeHandle);

        if (typeof prefix === 'undefined') {
            new Error('需要一个唯一的变量名称');
        }
        this.prefix = prefix;
    }

    _createClass(ActionTypeHandle, [{
        key: 'request',
        value: function request() {
            return {
                FETCH_START: 'FETCH_START',
                FETCH_FAIL: 'FETCH_FAIL',
                RECEIVE_DATA: 'RECEIVE_DATA'
            };
        }
    }, {
        key: 'action',
        value: function action() {
            return {
                FETCH_START: 'FETCH_START',
                FETCH_FAIL: 'FETCH_FAIL',
                ACTION_SUCCESS: 'ACTION_SUCCESS',
                ACTION_FAIL: 'ACTION_FAIL'
            };
        }
    }, {
        key: 'createRequestActionType',
        value: function createRequestActionType() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            return this.actionTypeHandle(name, this.request());
        }
    }, {
        key: 'createActionActionType',
        value: function createActionActionType() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            return this.actionTypeHandle(name, this.action());
        }
    }, {
        key: 'actionTypeHandle',
        value: function actionTypeHandle(name, actionType) {
            for (var key in actionType) {
                if (actionType.hasOwnProperty(key)) {
                    actionType[key] = this.prefix + '.' + name + '.' + actionType[key];
                }
            }
            return actionType;
        }
    }]);

    return ActionTypeHandle;
}();

