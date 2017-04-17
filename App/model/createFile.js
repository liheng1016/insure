#! /usr/bin/env node
var fs = require("fs");
//获取命令行参数
var args = process.argv.splice(2);
var folderName="";

/**
 * 生成文件夹
 * @date   2017-01-17T17:35:58+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createFolder(){
	if (args.length < 1) {
	    console.log("传入的参数有误,请追加命令行参数！");
	    return ;
	}

	console.log(args);

	folderName = args[0];

	if (fs.existsSync(folderName)) {
	    console.log('已经创建过此目录了');

	    return false;
	} else {
	    fs.mkdirSync(folderName);

	    console.log('更新目录已创建成功\n');
	    return true;
	}
}

/**
 * 生成文件
 * @date   2017-01-17T17:35:48+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createFile(filepath){
	var fileType=["action","actiontype","reducer","request"];
	var COMMOM_PATH="./"+ filepath+"/";
	var fileCurrentPath = "",content="";

	for(var i=0;i<fileType.length;i++){

		switch(fileType[i]){
			case "action":
				content = createActionFile();
				break;
			case "actiontype":
				content = createActionTypeFile();
				break;
			case "request":
				content = createRequestFile();
				break;
			case "reducer":
				content = createReducerFile();
				break;
			default:
				break;	
		}

		fileCurrentPath = COMMOM_PATH + fileType[i]+".js";
		console.log(fileCurrentPath);

		fs.writeFile(fileCurrentPath,content,function(error){
			if(error){
				return console.error(error)
			}

			console.log("写入文件成功");
		});

	}
}

/**
 * 创建action
 * @date   2017-01-18T09:43:52+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createActionFile(){
	var actionString =""+  
	"import "+folderName.toUpperCase()+"_REQUEST from './request';\n"+
	"import ACTION_TYPE from './actiontype';\n"+
	"import {requestHandle} from '../../helper/actionHandle';\n"+
	"let "+folderName+"Action={\n"+
		"\tlist:(params={})=>{\n"+
	        "\t\treturn requestHandle(ACTION_TYPE.LIST,"+folderName.toUpperCase()+"_REQUEST.list,params);\n"+
	    "\t}\n"+
	"};\n"+
	"\r\n"+
	"export default "+folderName+"Action;\n";

	return actionString;
}

/**
 * 创建action对应的type
 * @date   2017-01-18T09:44:45+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createActionTypeFile(){
	var actionTypeString ="\n"+  
	"import ActionTypeHandle from '../../helper/ActionTypeHandle';\n"+
	"let handle=new ActionTypeHandle('"+folderName.toUpperCase()+"_ACTION_TYPE');\n"+
	"const "+folderName.toUpperCase()+"_ACTION_TYPE={\n"+
	    "\tLIST:handle.createRequestActionType('LIST'),\n"+
	"};\n"+
	"\r\n"+
	"export default "+folderName.toUpperCase()+"_ACTION_TYPE;"


	return actionTypeString;
}

/**
 * 创建请求数据接口
 * @date   2017-01-18T09:45:16+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createRequestFile(){
	var requestString ="\n"+  
	"import commonRequest from '../commonRequest';\n"+

	"let "+folderName+"Request={\n"+
		"\tlist: (params)=> {\n"+
	        "\t\treturn commonRequest('/"+getFirstUpperCase(folderName)+"/getList', params, 'get');\n"+
	    "\t}\n"+
	"};\n"+

	"export default "+folderName+"Request;\n"


	return requestString;
}

/**
 * 数据流创建部分
 * @date   2017-01-18T10:05:26+0800
 * @author liheng
 * @return {[type]}                 [description]
 */
function createReducerFile(){
	var reducerString ="\n"+  
	"import ACTION_TYPE from './actiontype';\n"+
	"let "+folderName+"ListState={\n"+
	    "\tList:[]\n"+
	"};\n"+
	"let defaultState={..."+folderName+"ListState};\n"+
	"export default function  "+folderName+"Reducer(state=defaultState,action) {\n"+
	    "\tswitch (action.type){\n"+
	        "\t\tcase ACTION_TYPE.LIST.RECEIVE_DATA:\n"+
	            "\t\t\treturn getList(state,action.data);    \n"+
	        "\t\tdefault:\n"+
	            "\t\t\treturn state;\n"+
	    "\t}\n"+
	"}\n"+
	"function getList(state,data){\n"+
	    "\treturn Object.assign({},state,{List:data});\n"+
	"}\n";


	return reducerString;
}

/**
 * 首字母大写
 * @date   2017-01-18T11:00:20+0800
 * @author liheng
 * @param  {[type]}                 name [description]
 * @return {[type]}                      [description]
 */
function getFirstUpperCase(name){
	var str = name.split("");
	var newName =str[0].toUpperCase()+str.splice(1).join("");

	return newName;
}

// 启动
if(createFolder()){
	createFile(folderName);
};

