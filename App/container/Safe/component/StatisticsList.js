import React,{ Component } from 'react';
import { Link } from 'react-router';
import style from './StatisticsList.css';
import SafeChar from './SafeChart.js';
import DatePicker from '@stararc-insurance/date-picker';
import GridLayout,{Row} from '@stararc-component/gridlayout';
import {getFormatDay,getFirstAndLastDay,limitLen} from '@stararc-insurance/help-tools';
/**
 * 投保企业 保费收入  排查风险
 */
export class  IBPRIList extends Component{
    render(){
        return(
            <div className={style["ibpri_content"]}>
                <Company {...this.props}/>
                <Income {...this.props}/>
                <Risk {...this.props}/>
            </div>
        )
    }
    componentDidMount(){
        let {getIBPRI}=this.props;
        getIBPRI&&getIBPRI();
    }
}

/**
 * 投保企业
 */
class Company extends Component{
    render(){
        let {IBPRIlist=[]}=this.props;
        return(
            <div className={style["company"]}>
                <span className={style["company_title"]}>投保企业 <i className={style["icon"]}></i> </span>
                <div className={style["content"]}>
                    <span className={style["reveal"]}>
                        <span>
                            <span className={style["reveal_tips"]} name={IBPRIlist.insure_total||'nothing'} data-tips={IBPRIlist.insure_total}>
                            </span>
                            {IBPRIlist.insure_total||0}
                        </span>
                        <span className={style["unit"]}>家</span>
                    </span>
                </div>
                <span className={style["bottom"]} onClick={e=>this.handeClick(1)}>本月新增{IBPRIlist.curr_month_total||0}家</span>
            </div>
        )
    }
    handeClick(type){
        this.context.router.push('/safe/safeTrends/'+type);
    }
}
Company.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

/**
 * 保费总额
 */
class Income extends Component{
    render(){
        let {IBPRIlist=[]}=this.props;
        return(
            <div className={style["income"]}>
                <span className={style["company_title"]}>保费总额<i className={style["icon"]}></i> </span>
                <div className={style["content"]}>
                    <span className={style["reveal"]}>
                        <span>
                            <span className={style["reveal_tips"]} name={IBPRIlist.insure_total||'nothing'} data-tips={IBPRIlist.insurance_money_total}>
                            </span>
                            {IBPRIlist.insurance_money_total||0}
                        </span>
                        <span  className={style["unit"]}>万元</span>
                    </span>
                </div>
                <span className={style["bottom"]} onClick={e=>this.handeClick(2)}>本月新增{IBPRIlist.curr_month_money_total||0}万</span>
            </div>
        )
    }
    handeClick(type){
        this.context.router.push('/safe/safeTrends/'+type);
    }
}

Income.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

/**
 * 排查风险
 */
class Risk extends Component{
    constructor(props){
        super(props);
        this.state = {
            Y:false,
            N:false,
            since_at:getFormatDay(new Date(),'m'),
        }
    }
    render(){
        let {riskList=[]}=this.props;
        let total=parseInt(riskList.y_solve_risk_total)+parseInt(riskList.n_solve_risk_total);
        let y_percentage=Math.round(riskList.y_solve_risk_total / total * 10000) / 100.00;
        let className={
            Y:{contexClass:'risk_progress_bar_tips',icon:'risk_progress_bar_tips-icon',text:'已解决'+riskList.y_solve_risk_total+'处'},
            N:{contexClass:'risk_progress_tips',icon:'risk_progress_tips-icon',text:'未解决'+riskList.n_solve_risk_total+'处'}
        };
        let pro=document.getElementById("progressID");
        if(pro){
            document.getElementById("progressID").style='width:'+y_percentage+'%';
        }
        return(
            <div className={style["risk"]}>
                <span className={style["company_title"]}>
                    <GridLayout width="7">
                        保险排查风险
                    </GridLayout>
                    <GridLayout width="5">
                        <DatePicker ref="since_at" onChange={e=>this.submitFom(e)} conf={{type:'month'}} defaultValue={this.state.since_at}/>
                    </GridLayout>
                </span>
                <div className={style["risk_investigation"]}>
                    <div className={style["investigation_number"]}>
                        <div className={style["people"]}>
                            <span  className={style["people_number"]}>{riskList.user_total||0}</span>
                        </div>
                        <span className={style["investigation_bottom"]}>出动人次</span>
                    </div>
                    <span className={style["investigation_line"]}></span>
                    <div className={style["investigation_company"]}>
                        <div className={style["investigation_company_show"]}>
                            <span className={style["investigation_company_show_number"]}>{riskList.task_total||0}</span>
                        </div>
                        <span className={style["investigation_bottom"]}>排查企业</span>
                    </div>
                </div>
                <div className={style["content"]}>
                        <span className={style["risk_solved"]} onClick={e=>this.handeClick(3)}>
                            已解决<span className={style["number"]}>{riskList.y_solve_risk_total||0}</span>处
                        </span>
                    <div className={style["risk_progress_bar"]} onMouseOver={e=>this.handelNOver(e,riskList.n_solve_risk_total)} onMouseOut={e=>this.handelNOut(e)}>
                        {this.state.N?<RiskProgress text={className.N} className={className.N}/>:''}
                        <div className={style["percentage"]} id="progressID" onMouseOver={e=>this.handelYOver(e)} onMouseOut={e=>this.handelYOut(e)}>
                            {this.state.Y?<RiskProgress text={className.Y} className={className.Y}/>:''}
                        </div>
                    </div>
                    <span className={style["risk_unsolved"]} onClick={e=>this.handeClick(3)}>未解决<span className={style["number"]}>{riskList.n_solve_risk_total||0}</span>处</span>
                </div>
            </div>
        )
    }
    handelNOver(e,number){
        e.stopPropagation();
        this.setState({
            N:number!=0?true:false,
            Y:false,
        });
    }
    handelYOver(e){
        e.stopPropagation();
        this.setState({
            Y:true,
            N:false,
        });
    }
    handelNOut(e){
        e.stopPropagation();
        this.setState({
            N:false,
        });
    }
    handelYOut(e){
        e.stopPropagation();
        this.setState({
            Y:false,
        });
    }
    handeClick(type){
        this.context.router.push('/safe/safeTrends/'+type);
    }
    getOptions(){
        return{
            since_at:getFirstAndLastDay(this.refs.since_at.state.value).since_at?getFirstAndLastDay(this.refs.since_at.state.value).since_at:getFormatDay(new Date(),'f'),
            max_at:getFirstAndLastDay(this.refs.since_at.state.value).max_at?getFirstAndLastDay(this.refs.since_at.state.value).max_at:getFormatDay(new Date(),'l')
        }
    }
    submitFom(){
        let {getRisk}=this.props;
        getRisk&&getRisk(this.getOptions());
    }
    componentDidMount(){
        let {getRisk}=this.props;
        getRisk&&getRisk(this.getOptions());
    }
}

class RiskProgress extends Component{
    render(){
        return(
            <div className={style[this.props.className.contexClass]}>
                {this.props.className.text}
                <div className={style[this.props.className.icon]}></div>
            </div>
        )
    }
}

Risk.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

/**
 *  投保企业行业分布
 */
export  class CompanyTypeList extends Component{
    render(){
        return(
            <div className={style["company_type_content"]}>
                <div className={style["type_content_title"]}>
                    <span className={style["title_content"]}>
                        <i className={style["icon"]}></i>
                        投保企业行业分布</span>
                </div>
                <div className={style["type_content"]}>
                    <SafeChar isTurnPage={false} title="投保企业行业分布" list={this.getList()}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let {getCompanyType}=this.props;
        getCompanyType&&getCompanyType();
    }
    getList(){
        let {companyTypeList={}}=this.props;
        return companyTypeList.length==0?[]:this.dataFiltering(companyTypeList);
    }
    dataFiltering(obj){
        let data=['KS','WXHXP','YHBZ','JTYS','JZSG','MYBZWP','JSYL','YYSC','QT'],
            dataObj={categories:[],data:[]};
        data.map(function (item,index) {
            dataObj.categories.push(obj[item].name)
            dataObj.data.push(parseInt(obj[item].total))
        });
        return dataObj;
    }
}

/**
 * 企业积分排行榜
 */
export class RenkingList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style["ranking"]}>
                <span className={style["ranking_title"]}><i className={style["icon"]}></i>企业积分排行榜</span>
                <RenkingCompany {...this.props}/>
            </div>
        )
    }
}
/**
 * 排行榜列表
 */
class RenkingCompany extends Component{
    render(){
        return(
            <ul className={style["renking_content"]}>
                {this.getDataList().length>0?this.getDataList():<li className={style["not_renking__tips"]}>暂无企业积分排行！</li>}
            </ul>
        )
    }
    componentDidMount(){
        let {getCenking}=this.props;
        getCenking&&getCenking();
    }
    getDataList(){
        let renkingList=this.props.renkingList||[];
        let renkingString=renkingList.map(function (item,index) {
            return(
                <li className={style["renking__tips"]} name={item.company_name||'nothing'} data-tips={item.company_name} key={index}>{index+1}{limitLen(item.company_name,8)}<span>{item.score_num}</span></li>
            )
        });
        return renkingString;
    }
}
