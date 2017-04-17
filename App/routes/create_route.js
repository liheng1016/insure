/**
 * Created by root on 17-3-29.
 */
export function create_route(conf){
    let route = {
        path:conf.path,
        component:conf.module_path? require('../container'+conf.module_path).default :null,
        childRoutes:get_child_routes(conf.subs)
    }

    if(conf.indexRoute){
        route.indexRoute =  { onEnter: (nextState, replace) => replace(conf.indexRoute) }
    }

    return route;


    function  get_child_routes(subs=[]){
        let results = [];
        if(subs&&subs.length){
            subs.forEach(function(sub){
                results.push(create_route(sub));
            })
        }
        return results;
    }
}