/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import {FKCard,YHCard,BXCard} from './card';
import style from './card.css';
export default class StatisticCard extends Component{
    render(){
        return (
            <div className={style["card-box"]}>
                <FKCard {...this.props}/>
                <YHCard {...this.props}/>
                <BXCard {...this.props}/>
            </div>
        )
    }
}