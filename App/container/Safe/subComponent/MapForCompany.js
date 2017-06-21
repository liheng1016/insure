import React,{ Component } from 'react';
import {connect} from 'react-redux';

import GDMap from '@stararc-insurance/gd-map';

import style from './MapForCompany.css';
import{
    timeToString,
    getFormatData
} from '@stararc-insurance/help-tools';

import {GoBackButton} from '@stararc-component/button';

import safeAction from '../model/safe/safe.action'

import {load_script} from "@stararc-insurance/help-tools";

import * as Map from "@stararc-plugin/map";


class MapForCompany extends Component{
	constructor(props) {
	    super(props);
	
	    this.state = {
	    	markers:[],
	    	infowin:{},
            showMap:false
	    };
	}
	render() {
        let mapStyle = {
                width:'100%',
                height:'100%'
            };
		return (
			<div className={style["map--content"]}>
                <div className={style["go_back"]}>
                    <GoBackButton></GoBackButton>
                </div>
                <div ref="container" style={mapStyle}></div>
			</div>
		);
	}
	
    // 创建地图窗口标签
    createInfoHtml(data = {}) {
        let html = '<div class="dgMapInfowin">';
        html += '<p><h3>' + data.company_name + '</h3></p>';
        html += '<p class="infowin_p">行业类型：<span class="bold">' + data.type_name + '</span></p>';
        html += '<p class="infowin_p">投保金额：<span class="bold">' + data.insure_money + '万元</span></p>';
        html += '<p class="infowin_p">保险起期：<span class="bold">' + getFormatData(data.insure_date,"-") + '</span></p>';
        html += '<p class="infowin_p">保险止期：<span class="bold">' + getFormatData(data.done_at,"-") + '</span></p>';
        html += '<p class="infowin_p">保险排查：<span class="bold">' + data.task_total + '次</span></p>';
        html += '<p class="infowin_p">隐患数量：<span class="bold">' + data.danger_total + '处</span></p>';
        html += '</div>';
        return html;
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.complist != this.props.complist){
            let self = this;

            let markers = this.filterCompany(nextProps.complist);
            
            const marker_events = [{
                type:'click',
                handle:function(context){
                    let marker = this;

                    let position = marker.getPosition();
                    let info_config = {
                        content:self.createInfoHtml(marker.G)
                    };
                    // 点击点标记时设置信息窗体
                    Map.open_info_win(info_config,position,self.map);
                }
            }];

            // 标注点标记
            Map.set_marker(markers,marker_events,self.map);
        }
    }
    filterCompany(complist=[]){
        let complists = [];
        complist.map((com,key)=>{
            com.lng = Number(com.geo_long||116.280637);
            com.lat = Number(com.geo_lat||23.125178);

            complists.push(com);
        })

        return complists;
    }
    componentDidMount(){
        let {insureCompanyListForMap} = this.props,self = this;

        const url = 'http://webapi.amap.com/maps?v=1.3&key=57263d2a64c3e10d5fc13819ed372b00';

        load_script(url,function(){
            insureCompanyListForMap();

            let container = self.refs.container;
            let map_config = {
                resizeEnable: true,
                zoom: 9,
                center: [113.280637, 23.125178]
            };
            const map_obj = Map.init(container,map_config);

            self.map = map_obj;
        });
    }

} 

/**
 * state数据集合
 */
let stateMaps=(state)=>{
    return{
        complist:state.safeReducer.insureCompanyListForMap
    }
};

/**
 * action方法集合
 */
let actionMaps=(dispatch)=>{
    return{
        insureCompanyListForMap:(params)=>{
            dispatch(safeAction.insure_company_list_formap(params));
        }
    }
};

export default connect(stateMaps,actionMaps)(MapForCompany)

