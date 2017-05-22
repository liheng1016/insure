/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import style from './card.css';
class Card extends Component{
    render(){
        return(
            <div className={style["card"]}>
                <div className={style["card-title--"+this.props.icon]}>
                    {this.props.name}
                </div>
                {this.props.children}
            </div>
        )
    }
}

/**
 * 1.出动人次->点击数字进入任务列表
 * 2.排查企业->点击数字进入企业列表
 */
export class FKCard extends Component{
    render(){
        return (
            <Card name={"风控工作"} icon={"FK"}>
                <ol className={style["dangerpage-list-mainone"]}>
                 <li>
                    <p>
                        <img src={require('../img/user.png')} alt=""/>
                        <Link className ={style["number--blue"]} to={"/task/list"}>
                            {this.props.card_data.user_total?this.props.card_data.user_total:0}
                        </Link>
                    </p>
                    <p className={style["dangerpage-p-bottom"]}>出动人次</p>
                 </li>

                 <li>
                     <p>
                         <img src={require('../img/danger03.png')} alt=""/>
                         <Link className={style["number"]} to={"/company/list"}>
                             {this.props.card_data.company_total?this.props.card_data.company_total:0}
                         </Link>
                     </p>
                     <p className={style["dangerpage-p-bottom"]}>排查企业</p>
                 </li>
                 </ol>
            </Card>
        );
    }
}

/**
 * 隐患状况:
 * 1.隐患总数
 * 2.消除隐患数
 * 点击数字进入隐患列表
 */
export class YHCard extends Component{

    /**
     * 通过设置左半圆的旋转弧度来控制
     */
    get_left_style(){
        let degree = this.get_degree();
        let style={};
        if(degree>180){
            style.backgroundColor='#fff';
            style.left='-1px';
            style.top='-1px';
        }else{
            style.transform='rotate('+(-degree)+'deg)';
        }
        return style;
    }
    get_right_style(){
        let degree = this.get_degree();
        let style = {};
        if(degree>180){
            degree = degree-180;
            style.transform='rotate('+(-degree)+'deg)'
        }
        return style;
    }
    get_degree(){
        let {solve_risk_total,n_solve_risk_total}=this.props.card_data;
        return (1-(parseInt(n_solve_risk_total)/parseInt(solve_risk_total)))*360;
    }
    render(){
        let rate = (parseInt(this.props.card_data.n_solve_risk_total)/parseInt(this.props.card_data.solve_risk_total))*100;
        return (
            <Card name={"隐患状况"} icon={"YH"}>
                <div className={style["circle-wrap"]}>
                    <div className={style["circle__text"]} title={rate.toFixed(2)+'%'}>
                        <span>隐患总数</span>
                        <span>
                            <Link className={style["number"]}  to={"/hidden/list"} >{this.props.card_data.solve_risk_total?this.props.card_data.solve_risk_total:0}</Link>
                        </span>    
                    </div>
                    <div className={style["half-circle--left"]} style={this.get_left_style()}></div>
                    <div className={style["half-circle--right"]} style={this.get_right_style()}></div>
                </div>
                <p className={style["text--center"]}>消除隐患数
                    <Link className={style["link"]} to={"/hidden/list"} state={{status:2}}>{this.props.card_data.n_solve_risk_total? parseInt(this.props.card_data.n_solve_risk_total):0}</Link>
                    处</p>
            </Card>
        )
    }
}

/**
 * 1.投保企业->点击数字进入地图分布
 * 2.保费->点击数字进入保单列表
 */
export class BXCard extends Component{
    render(){
        return(
            <Card name={"保险概况"} icon={"BX"}>
                <ol className={style["dangerpage-list-mainone"]}>
                    <li>
                        <p>
                            <img src={require('../img/icon--map.png')} alt=""/>
                            <Link className={style["number--blue"]} to={"/map/company"}>{this.props.IBPRIlist.insure_total || 0}</Link>
                        </p>
                        <p className={style["dangerpage-p-bottom"]}>投保企业(家)</p>
                    </li>

                    <li>
                        <p>
                            <img src={require('../img/money.png')} alt=""/>
                            <Link className={style["number"]} to={"/insureCompany/list"}>
                                {this.props.IBPRIlist.insurance_money_total ?
                                    parseFloat(this.props.IBPRIlist.insurance_money_total/10000).toFixed(2) : 0}
                            </Link>
                        </p>
                        <p className={style["dangerpage-p-bottom"]}>保费(万元)</p>
                    </li>
                </ol>
            </Card>
        )

    }
}

