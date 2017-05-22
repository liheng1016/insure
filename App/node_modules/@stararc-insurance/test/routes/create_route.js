'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create_route = create_route;
/**
 * Created by root on 17-3-29.
 */
function create_route(conf) {
    var route = {
        path: conf.path,
        component: conf.module_path ? require('../container' + conf.module_path).default : null,
        childRoutes: get_child_routes(conf.subs)
    };

    if (conf.indexRoute) {
        route.indexRoute = { onEnter: function onEnter(nextState, replace) {
                return replace(conf.indexRoute);
            } };
    }

    return route;

    function get_child_routes() {
        var subs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var results = [];
        if (subs && subs.length) {
            subs.forEach(function (sub) {
                results.push(create_route(sub));
            });
        }
        return results;
    }
}