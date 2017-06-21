'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxBuildTools = require('@stararc-insurance/redux-build-tools');

var handle = new _reduxBuildTools.ActionTypeHandle('GRID_ACTION_TYPE');
var GRID_ACTION_TYPE = {
	LIST: handle.createRequestActionType('LIST')
};

exports.default = GRID_ACTION_TYPE;