import {obj} from "@stararc-insurance/pro";

export const appRoute = {
	path:'/',
	indexRoute:{ onEnter: (nextState, replace) => replace('/insure_beta') },
	childRoutes:[obj.proRoute]
}