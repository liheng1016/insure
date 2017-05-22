/**
 * Created by able on 17-4-10.
 */
import React,{Component,PropTypes} from 'react';
import style from './rank.css';
import {Link} from 'react-router';
class RankList extends Component{
    render(){
        return (
            <div className={style["rank-wrap--"+this.props.icon]}>
                <h3><span>{this.props.name}</span></h3>
                {this.props.children}
            </div>
        )
    }
}

export class YHRank extends Component{
    render(){
        let hidden_rank = this.props.hidden_rank || [];
        let trs=hidden_rank.map(function(item,index){
            return(
                <tr key={index}>
                    <td title={item.company_name}>{item.company_name}</td>
                    <td title={item.total}>{item.total}</td>
                </tr>
            )
        });
        return (
            <RankList name={"排查隐患分布一览"} icon="YH">
                <table>
                    <thead>
                        <tr>
                            <th width={"75%"}>企业名称</th>
                            <th width={"25%"}>隐患数</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}

                        {trs.length>3 ?
                            <tr>
                                <td></td>
                                <td>
                                    <Link className={style["link"]} to={"/company/list"}>查看更多</Link>
                                </td>
                            </tr> :null}
                    </tbody>
                </table>
            </RankList>
        )
    }
}


export class TBRank extends Component{
    render(){
        let companyTypeList= this.props.companyTypeList || [];
        let trs = companyTypeList.map(function(item,index){
            return(
                <tr key={index}>
                    <td title={item.name}>{item.name}</td>
                    <td title={item.total}>{item.total}</td>
                </tr>
            )
        });
        return (
            <RankList name={"投保企业行业分布"} icon={"QY"}>
            <table>
                <thead>
                <tr>
                    <th width={"75%"}>行业</th>
                    <th width={"25%"}>企业数</th>
                </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </RankList>
        )
    }
}

