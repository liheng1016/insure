require("../kindeditor/kindeditor.min");
require("../kindeditor/lang/zh_CN");
// require('imports?define=>false!../kindeditor/kindeditor.min');
// require('imports?define=>false!../kindeditor/lang/zh_CN');



export  function kindeditor_init(contianer,callback){
    let basePath = '../kindeditor/';
    let  editor = "";

	 KindEditor.ready(function (K) {
        // self.K = K;
        editor = K.create(contianer, {
           basePath: basePath,
            // uploadJson: uploadUrl,
            allowImageUpload: false,
            afterUpload: function (url) {

            },
            afterChange: callback
        });

    });

    return editor;
}