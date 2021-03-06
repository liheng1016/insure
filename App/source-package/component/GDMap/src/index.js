import React, {Component} from 'react';
import style from './GDMap.css';

// import {CLUSTER_IMG_PATH} from '../../config';

export default class GDMap extends Component {
    render() {
        return (
            <div className={style["map__container"]} ref="mapContainer"></div>
        );
    }

    componentDidMount() {
        let container = this.refs.mapContainer;
        let self = this;
        
        let map = initMap(container);

        let {mapEvent, polygons, polygonEvent} = self.props;

        self.map = map;
        
        bindMapEvent(map, mapEvent);

        if (self.props.markers) {
            self.markers = createMarkers(self.props.markers, self.props.markerEvent);
            let map = self.map;
            self.markers.map(function (m) {
                m.setMap(map);
            });
        }
    }
    componentWillReceiveProps(nextProps) {
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
                })
            }
            if (nextProps.markers) {
                this.markers = createMarkers(nextProps.markers, nextProps.markerEvent);
                let map = this.map;
                this.markers.map(function (m) {
                    m.setMap(map);
                });
            }
        }
    }
}

/**
 * @desc 初始化地图
 * @param  {[type]} container [description]
 * @param  {Object} options   [description]
 * @return {[type]}           [description]
 */
function initMap(container, options = {}) {
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
function bindMapEvent(map, mapEvent = []) {
    mapEvent.forEach(function (event) {
        map.on(event['type'], function (e) {
            event['eventHandle'](map, e);
        });
    })
}

/**
 * @desc 创建大量的marker点 用于聚合
 * @param  {Array}  cluster [description]
 * @return {[type]}         [description]
 */
function createMarkers(cluster = [], markerEvent = []) {
    let markers = cluster.map(function (m) {
        var marker = new AMap.Marker({
            position: new AMap.LngLat(m.geo_long, m.geo_lat),
            content: m.icon,
            size: new AMap.Size(32, 50),  //图标大小
            extData: m,
            title: m.name,
        });

        markerEvent.forEach(function (event) {
            marker.on(event['type'], function () {
                event['eventHandle'](marker);
            })
        });
        return marker;
    })
    return markers;
}

/**
 * @desc 在地图对象上添加一个maker
 * @param {obj} map      [地图对象]
 * @param {obj} position [位置对象{lng:'',lat:''}]
 */
function addMarker(map, position, markerEvent) {

}

/**
 * @desc 添加一个窗口对象
 * @param {[type]}  map               [description]
 * @param {Boolean} isCustom          [description]
 * @param {[type]}  autoMove          [description]
 * @param {[type]}  closeWhenClickMap [description]
 * @param {[type]}  content           [description]
 * @param {[type]}  position          [description]
 */
function addInfowin(map, content, position, infoEvents = []) {
    if (!position) {
        return false;
    }
    let infowin = new AMap.InfoWindow({
        isCustom: false,
        autoMove: true,
        closeWhenClickMap: true,
        content: content,
        position: new AMap.LngLat(position.geo_long, position.geo_lat),
        offset: new AMap.Pixel(0, -30),
        showShadow: false,
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
function addCluster(context, map, markers, clusterEvent = []) {
    map.plugin(['AMap.MarkerClusterer'], function () {
        if (context.cluster) {
            context.cluster.clearMarkers();
        } else {
            context.cluster = new AMap.MarkerClusterer(map);
            let styles = [{
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
    })
}
