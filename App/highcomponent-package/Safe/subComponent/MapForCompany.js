'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _gdMap = require('@stararc-insurance/gd-map');

var _gdMap2 = _interopRequireDefault(_gdMap);

var _MapForCompany = require('./MapForCompany.css');

var _MapForCompany2 = _interopRequireDefault(_MapForCompany);

var _helpTools = require('@stararc-insurance/help-tools');

var _button = require('@stararc-component/button');

var _safe = require('../model/safe/safe.action');

var _safe2 = _interopRequireDefault(_safe);

var _map = require('@stararc-plugin/map');

var Map = _interopRequireWildcard(_map);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapForCompany = function (_Component) {
    _inherits(MapForCompany, _Component);

    function MapForCompany(props) {
        _classCallCheck(this, MapForCompany);

        var _this = _possibleConstructorReturn(this, (MapForCompany.__proto__ || Object.getPrototypeOf(MapForCompany)).call(this, props));

        _this.state = {
            markers: [],
            infowin: {},
            showMap: false
        };
        return _this;
    }

    _createClass(MapForCompany, [{
        key: 'render',
        value: function render() {
            var mapStyle = {
                width: '100%',
                height: '100%'
            };
            return _react2.default.createElement(
                'div',
                { className: _MapForCompany2.default["map--content"] },
                _react2.default.createElement(
                    'div',
                    { className: _MapForCompany2.default["go_back"] },
                    _react2.default.createElement(_button.GoBackButton, null)
                ),
                _react2.default.createElement('div', { ref: 'container', style: mapStyle })
            );
        }

        // 创建地图窗口标签

    }, {
        key: 'createInfoHtml',
        value: function createInfoHtml() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var html = '<div class="dgMapInfowin">';
            html += '<p><h3>' + data.company_name + '</h3></p>';
            html += '<p class="infowin_p">行业类型：<span class="bold">' + data.type_name + '</span></p>';
            html += '<p class="infowin_p">投保金额：<span class="bold">' + data.insure_money + '万元</span></p>';
            html += '<p class="infowin_p">保险起期：<span class="bold">' + (0, _helpTools.getFormatData)(data.insure_date, "-") + '</span></p>';
            html += '<p class="infowin_p">保险止期：<span class="bold">' + (0, _helpTools.getFormatData)(data.done_at, "-") + '</span></p>';
            html += '<p class="infowin_p">保险排查：<span class="bold">' + data.task_total + '次</span></p>';
            html += '<p class="infowin_p">隐患数量：<span class="bold">' + data.danger_total + '处</span></p>';
            html += '</div>';
            return html;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.complist != this.props.complist) {
                var self = this;

                var markers = this.filterCompany(nextProps.complist);

                var marker_events = [{
                    type: 'click',
                    handle: function handle(context) {
                        var marker = this;

                        var position = marker.getPosition();
                        var info_config = {
                            content: self.createInfoHtml(marker.G)
                        };
                        // 点击点标记时设置信息窗体
                        Map.open_info_win(info_config, position, self.map);
                    }
                }];

                // 标注点标记
                Map.set_marker(markers, marker_events, self.map);
            }
        }
    }, {
        key: 'filterCompany',
        value: function filterCompany() {
            var complist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var complists = [];
            complist.map(function (com, key) {
                com.lng = Number(com.geo_long || 116.280637);
                com.lat = Number(com.geo_lat || 23.125178);

                complists.push(com);
            });

            return complists;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var insureCompanyListForMap = this.props.insureCompanyListForMap,
                self = this;

            var url = 'http://webapi.amap.com/maps?v=1.3&key=57263d2a64c3e10d5fc13819ed372b00';

            (0, _helpTools.load_script)(url, function () {
                insureCompanyListForMap();

                var container = self.refs.container;
                var map_config = {
                    resizeEnable: true,
                    zoom: 9,
                    center: [113.280637, 23.125178]
                };
                var map_obj = Map.init(container, map_config);

                self.map = map_obj;
            });
        }
    }]);

    return MapForCompany;
}(_react.Component);

/**
 * state数据集合
 */


var stateMaps = function stateMaps(state) {
    return {
        complist: state.safeReducer.insureCompanyListForMap
    };
};

/**
 * action方法集合
 */
var actionMaps = function actionMaps(dispatch) {
    return {
        insureCompanyListForMap: function insureCompanyListForMap(params) {
            dispatch(_safe2.default.insure_company_list_formap(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateMaps, actionMaps)(MapForCompany);