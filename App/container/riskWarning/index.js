import gridReducer from "./model/grid/reducer";

import riskWarningReducer from "./model/riskwarning/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
	gridReducer,
	riskWarningReducer,
	route,
	childRoutes
}