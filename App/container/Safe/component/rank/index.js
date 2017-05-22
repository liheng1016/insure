/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import style from './rank.css';
import {YHRank,TBRank} from './rank';
export default class StatisticRank extends Component{
    render(){
        return (
            <div className={style["rank__main"]}>
                <YHRank {...this.props}/>
                <TBRank {...this.props}/>
            </div>
        )
    }
}