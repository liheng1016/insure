import conf from './route/index.json';

export function create_route(conf){
    let route = {
        path:conf.path,
        getComponents:conf.module_path?function(state,callback){
            require.ensure([],(require)=>{
                callback(null,require('.'+conf.module_path).default)
            })
        }:null,

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
export default create_route(conf)