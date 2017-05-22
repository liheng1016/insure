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

class MapForCompany extends Component{
	constructor(props) {
	    super(props);
	
	    this.state = {
	    	markers:[],
	    	infowin:{}
	    };
	}
	render() {
		return (
			<div className={style["map--content"]}>
                <div className={style["go_back"]}>
                    <GoBackButton></GoBackButton>
                </div>
				<GDMap 
					markers={this.state.markers} 
					infowin={this.state.infowin}
					markerEvent={this.setMarkerEvent()}/>
			</div>
		);
	}
	// 地图标志点击事件
    setMarkerEvent() {
        let _this = this;
        return [{
            type: 'click',
            eventHandle: function (context) {
                let extData = context.getExtData();
                let data = _this.state.markers;
                let mapWindowData = null, infowin = null;
                for(let i = 0 ; i < data.length;i++){
                    if(data[i].id == extData.id){
                        mapWindowData = data[i];
                        break;
                    }
                }
                if(mapWindowData){
                    infowin = {
                        content: _this.createInfoHtml(mapWindowData),
                        position: {geo_long: Number(mapWindowData.geo_long)||113.280637, geo_lat:Number(mapWindowData.geo_lat)||23.125178}
                    };
                    _this.setState({
                        infowin
                    });
                }
            }
        }]
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
            let markers = this.filterCompany(nextProps.complist);
            this.setState({
                markers:markers
            })
        }
    }
    filterCompany(complist=[]){
        let complists = [];
        complist.map((com,key)=>{
            com.geo_long = Number(com.geo_long||113.280637);
            com.geo_lat = Number(com.geo_lat||23.125178);

            complists.push(com);
        })

        return complists;
    }
    componentDidMount(){
        let {insureCompanyListForMap} = this.props;

        insureCompanyListForMap();
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

