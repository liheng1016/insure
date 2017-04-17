/**
 * Created by able on 2016/12/9 0009.
 */
export function dispatchHandle(type, params = {}, others) {
    let action = {
        type: type,
        ...params,
    };
    if (others) {
        others.forEach(function (item) {
            action = {...action, ...item}
        })
    }
    return action;
}
export function requestHandle(ACTION_TYPE, requestFunc, params, ...others) {
    return dispatch => {
        console.log(666666)
        dispatch(dispatchHandle(ACTION_TYPE.FETCH_START, {condition: params}));
        requestFunc(params).then(function (result) {
            //fetch success
            let data = (result && result.data) || "";
            dispatch(dispatchHandle(ACTION_TYPE.RECEIVE_DATA, {data: data, condition: params}, others));
        }, function () {
            // fetch fail
            dispatch(dispatchHandle(ACTION_TYPE.FETCH_FAIL));
        });
    };
}

export function actionHandle(ACTION_TYPE, requestFunc, params, onSuccess, onFail) {
    return (dispatch, getState) => {
        dispatch(dispatchHandle(ACTION_TYPE.FETCH_START, {condition: params}));
        requestFunc(params).then(function (result) {
            let actionTypeHandle = '';
            //fetch success
            if (result && result.ret === '0') {
                actionTypeHandle = ACTION_TYPE.ACTION_SUCCESS;
                onSuccess && onSuccess(result, dispatch, getState);
            } else {
                actionTypeHandle = ACTION_TYPE.ACTION_FAIL;
                onFail && onFail(result, dispatch, getState);
            }

            dispatch(dispatchHandle(actionTypeHandle, {data: result, condition: params}));
        }, function () {
            // fetch fail
            dispatch(dispatchHandle(ACTION_TYPE.FETCH_FAIL));
        });
    };
}
