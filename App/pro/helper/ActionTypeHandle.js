'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by able on 2016/12/9 0009.
 */
var ActionTypeHandle = function () {
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

exports.default = ActionTypeHandle;