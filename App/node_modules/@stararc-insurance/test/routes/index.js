/**
 * Created by liheng at 2017.4.17 
 */
import {create_route} from './create_route';

const statistic_conf  = require('./insur.json');


export const appRoute = {
    path:'/',
    indexRoute:{onEnter:(nextState,replace)=>replace(statistic_conf.path)},
    childRoutes:[
    	create_route(statistic_conf)
    ]
}


