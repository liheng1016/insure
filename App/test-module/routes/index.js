import {create_route} from './create_route';

import Home from "../home.js";


export const appRoute = {
	path:'/',
	component:Home,
	indexRoute:{ onEnter: (nextState, replace) => replace('/home/statistic') },
	childRoutes:[create_route({
		path:'/home/statistic',
		module_path:"",
		indexRoute:'/home',
		subs:[]
	})]
}