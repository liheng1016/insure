/**
 * Created by able on 2016/12/9 0009.
 */
export default class ActionTypeHandle {
    constructor(prefix) {
        if (typeof prefix === 'undefined') {
            new Error('需要一个唯一的变量名称');
        }
        this.prefix = prefix;
    }

    request() {
        return {
            FETCH_START: 'FETCH_START',
            FETCH_FAIL: 'FETCH_FAIL',
            RECEIVE_DATA: 'RECEIVE_DATA',
        };
    }

    action() {
        return {
            FETCH_START: 'FETCH_START',
            FETCH_FAIL: 'FETCH_FAIL',
            ACTION_SUCCESS: 'ACTION_SUCCESS',
            ACTION_FAIL: 'ACTION_FAIL',
        }
    }

    createRequestActionType(name = '') {
        return this.actionTypeHandle(name, this.request());
    }

    createActionActionType(name = '') {
        return this.actionTypeHandle(name, this.action());
    }

    actionTypeHandle(name, actionType) {
        for (let key in actionType) {
            if (actionType.hasOwnProperty(key)) {
                actionType[key] = this.prefix + '.' + name + '.' + actionType[key];
            }
        }
        return actionType;
    }
}
