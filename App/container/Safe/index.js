import safeReducer from "./model/safe/safe.reducer";

import surveyReducer from "./model/survey/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
	safeReducer,
	surveyReducer,
	route,
	childRoutes
}