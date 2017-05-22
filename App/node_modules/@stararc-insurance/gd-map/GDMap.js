'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GDMap = require('./GDMap.css');

var _GDMap2 = _interopRequireDefault(_GDMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {CLUSTER_IMG_PATH} from '../../config';

var GDMap = function (_Component) {
    _inherits(GDMap, _Component);

    function GDMap() {
        _classCallCheck(this, GDMap);

        return _possibleConstructorReturn(this, (GDMap.__proto__ || Object.getPrototypeOf(GDMap)).apply(this, arguments));
    }

    _createClass(GDMap, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: _GDMap2.default["map__container"], ref: 'mapContainer' });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var container = this.refs.mapContainer;
            var map = initMap(container);
            var _props = this.props,
                mapEvent = _props.mapEvent,
                polygons = _props.polygons,
                polygonEvent = _props.polygonEvent;


            this.map = map;
            bindMapEvent(map, mapEvent);

            if (this.props.markers) {
                this.markers = createMarkers(this.props.markers, this.props.markerEvent);
                var _map = this.map;
                this.markers.map(function (m) {
                    m.setMap(_map);
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.infowin != this.props.infowin) {
                if (this.infowin) {
                    this.infowin.close();
                }
                if (nextProps.infowin) {
                    this.infowin = addInfowin(this.map, nextProps.infowin.content, nextProps.infowin.position, nextProps.infowinEvent);
                }
            }
            if (nextProps.markers != this.props.markers) {
                if (this.markers) {
                    this.markers.map(function (m) {
                        m.setMap(null);
                    });
                }
                if (nextProps.markers) {
                    this.markers = createMarkers(nextProps.markers, nextProps.markerEvent);
                    var map = this.map;
                    this.markers.map(function (m) {
                        m.setMap(map);
                    });
                }
            }
        }
    }]);

    return GDMap;
}(_react.Component);

/**
 * @desc 初始化地图
 * @param  {[type]} container [description]
 * @param  {Object} options   [description]
 * @return {[type]}           [description]
 */


exports.default = GDMap;
function initMap(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new AMap.Map(container, {
        features: ['bg', 'building', 'point'],
        center: [113.280637, 23.125178]
    });
}

/**
 * @desc 地图对象绑定事件
 * @param  {obj} map      [地图对象]
 * @param  {Array}  mapEvent [事件数组]
 */
function bindMapEvent(map) {
    var mapEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    mapEvent.forEach(function (event) {
        map.on(event['type'], function (e) {
            event['eventHandle'](map, e);
        });
    });
}

/**
 * @desc 创建大量的marker点 用于聚合
 * @param  {Array}  cluster [description]
 * @return {[type]}         [description]
 */
function createMarkers() {
    var cluster = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var markerEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var markers = cluster.map(function (m) {
        var marker = new AMap.Marker({
            position: new AMap.LngLat(m.geo_long, m.geo_lat),
            content: m.icon,
            size: new AMap.Size(32, 50), //图标大小
            extData: m,
            title: m.name
        });

        markerEvent.forEach(function (event) {
            marker.on(event['type'], function () {
                event['eventHandle'](marker);
            });
        });
        return marker;
    });
    return markers;
}

/**
 * @desc 在地图对象上添加一个maker
 * @param {obj} map      [地图对象]
 * @param {obj} position [位置对象{lng:'',lat:''}]
 */
function addMarker(map, position, markerEvent) {}

/**
 * @desc 添加一个窗口对象
 * @param {[type]}  map               [description]
 * @param {Boolean} isCustom          [description]
 * @param {[type]}  autoMove          [description]
 * @param {[type]}  closeWhenClickMap [description]
 * @param {[type]}  content           [description]
 * @param {[type]}  position          [description]
 */
function addInfowin(map, content, position) {
    var infoEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    if (!position) {
        return false;
    }
    var infowin = new AMap.InfoWindow({
        isCustom: false,
        autoMove: true,
        closeWhenClickMap: true,
        content: content,
        position: new AMap.LngLat(position.geo_long, position.geo_lat),
        offset: new AMap.Pixel(0, -30),
        showShadow: false
    });
    infoEvents.forEach(function (event) {
        infowin.on(event.type, function (e) {
            event.eventHandle(e, infowin);
        });
    });
    infowin.open(map);
    return infowin;
}

/**
 * @desc 添加聚合到地图上
 * @param {obj} context [上下文对象,用于绑定聚合对象,避免多次初始化聚合对象]
 * @param {obj} map     [地图对象]
 * @param {Array} markers [marker点数组]
 */
function addCluster(context, map, markers) {
    var clusterEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    map.plugin(['AMap.MarkerClusterer'], function () {
        if (context.cluster) {
            context.cluster.clearMarkers();
        } else {
            context.cluster = new AMap.MarkerClusterer(map);
            var styles = [{
                // url: CLUSTER_IMG_PATH,
                size: new AMap.Size(47, 47),
                offset: new AMap.Pixel(-16, -30),
                textColor: '#fff'
            }];
            context.cluster.setStyles(styles);
            clusterEvent.forEach(function (event) {
                context.cluster.on(event['type'], function (currentObj) {
                    event['eventHandle'](this, currentObj);
                });
            });
        }
        context.cluster.addMarkers(markers);
    });
}

