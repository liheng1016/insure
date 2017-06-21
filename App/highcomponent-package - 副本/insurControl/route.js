'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create_route = create_route;

var _index = require('./route/index.json');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create_route(conf) {
    var route = {
        path: conf.path,
        getComponents: conf.module_path ? function (state, callback) {
            require.ensure([], function (require) {
                callback(null, require('.' + conf.module_path).default);
            });
        } : null,

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
exports.default = create_route(_index2.default);