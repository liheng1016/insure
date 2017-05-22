### 保险产品 导出组件

>导出excel文件组件,具体方法看如下code

>源码位置：@stararc-insurance/core/Export

```
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

            let path = '/Export/exportDataToCSV',
                {createFilePath,exportData,getFilePath}=nextProps;

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

                self.setState({
                    disabled:false
                },()=>{
                    location.href=path+getFilePath+"?path="+data.data;
                })
            });
        }
    }
}

```
###使用说明

`createFilePath`    生成文件的对应的方法路径

`getFilePath`        获取生成文件的方法路径

`exportData`        导出excel需要的数据结构如下

###机构

``` 
<ExportComponent 
    createFilePath={"/Export/exportDataToCSV"}
    getFilePath={"/Export/getFile"}
    onClick={this.props.getExportData} 
    exportData={this.props.exportData}>
</ExportComponent>

```
exportData = {
    filename:filename,//文件名称,eg:"test"
    title:title,//文件内容的表头，eg:["第一列","第二列"]
    content:content//文件内容，eg:["data1","data2"]
}
