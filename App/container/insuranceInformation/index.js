import insurInfoReducer from "./model/insurInfo/reducer";

import insurUploadReducer from "./model/media/reducer";

import childRoutes from "./route.js";

let route = require("./route/index.json");

export {
	insurInfoReducer,
	insurUploadReducer,
	route,
	childRoutes
}