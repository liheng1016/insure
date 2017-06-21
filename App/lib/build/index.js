"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.kindeditor_init = kindeditor_init;
require("../kindeditor/kindeditor.min");
require("../kindeditor/lang/zh_CN");

function kindeditor_init(contianer, callback) {
    var basePath = '../kindeditor/';

    KindEditor.ready(function (K) {
        this.K = K;
        var editor = K.create(contianer, {
            basePath: basePath,
            // uploadJson: uploadUrl,
            allowImageUpload: false,
            afterUpload: function afterUpload(url) {},
            afterChange: callback
        });

        return editor;
    });
}

