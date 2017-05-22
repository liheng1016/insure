import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, hashHistory} from 'react-router';
import {appRoute} from './routes';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {appReducer} from './App.reducer.js';

import createLogger from 'redux-logger';

let createStoreWithMiddleware;

if (process.env.NODE_ENV != 'production') {
    const loggMiddleware = createLogger();
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggMiddleware)(createStore);
} else {
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}


// createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// let history = process.env.NODE_ENV === 'production' ? browserHistory : hashHistory;
let history=hashHistory;
let store = createStoreWithMiddleware(appReducer);
let root = document.getElementById('root');
const app = (
    <Provider store={store}>
        <Router routes={appRoute} history={history}/>
    </Provider>
);

render(app, root);
