import React,{Component} from 'react';
import Button from '@stararc-component/button';
import commonRequest from "@stararc-insurance/common-request";

export default class ExportTable extends Component{
    constructor(props){
        super(props);
        this.state={
            disabled:false,
        }
    }

    render() {
        return (
            <Button 
                className={"blue-light"}  
                disabled={this.state.disabled}
                onClick={this.props.onClick}
                text={this.state.disabled?"导出中...":"导出表格"}>
            </Button>
        );
    }

    componentWillReceiveProps(nextProps){
        let self = this;

        if(nextProps.exportData !=this.props.exportData){
            if(!nextProps.exportData.content.length){
                alert("没有相关数据可导出！")
                return;
            }

            let  {createFilePath,exportData,getFilePath}=nextProps;

            let params={
                title:JSON.stringify(exportData.title),
                content:JSON.stringify(exportData.content),
                filename:exportData.filename
            };

            self.setState({
                disabled:true
            });

            commonRequest(createFilePath, params, 'post').then(function(data){
                let path = '';

                if (process.env.NODE_ENV != 'production') {
                    path = LOCAL_DOMAIN;
                }else{
                    path="";
                }

	    		path = PATH_PREFIX + path;

                self.setState({
                    disabled:false
                },()=>{
                    location.href=path+getFilePath+"?path="+data.data;
                })
            });
        }
    }
}