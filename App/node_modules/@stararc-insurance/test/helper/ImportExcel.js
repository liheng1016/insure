'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let $ = require('jquery');

var ReadExcel = function () {
    function ReadExcel() {
        _classCallCheck(this, ReadExcel);

        this.X = {};
    }

    //根据上传文件的扩展名调用不同xls对象


    _createClass(ReadExcel, [{
        key: 'setX',
        value: function setX(ext) {
            this.X = ext === 'xlsx' ? XLSX : XLS;
        }

        /**
         *  获取文件
         *  data = { 
                ext:'xlsx',文件类型
                url:filePath 文件路径
            }
            opt excel头部字段对应的数组
            callback 请求成功后的回调方法
         * @date   2016-09-22T14:22:15+0800
         * @author liheng
         */

    }, {
        key: 'get_file',
        value: function get_file(data, opt, callback) {
            var self = this,
                options = {
                header: opt || []
            };

            this.setX(data.ext);

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    // 4 = "loaded"
                    if (xhr.status == 200) {
                        // 200 = OK
                        var result = self.deal_xls(xhr.response, options);
                        result.splice(0, 1);

                        callback && callback(result);
                    } else {
                        alert("Problem retrieving XML data");
                    }
                }
            };
            xhr.open('GET', data.url, true);
            xhr.responseType = 'arraybuffer';

            xhr.onload = function (e) {
                var responseArray = new Uint8Array(this.response);
            };

            xhr.send();
        }

        /**
        * @param opt  opt={header:[name,age...]},header里的字段对应excel头
        * @returns {Array}
        */

    }, {
        key: 'deal_xls',
        value: function deal_xls(r, opt) {
            // convert data to binary string
            var data,
                arr = [],
                i,
                bstr,
                workbook,
                json_data,
                json_data_arr = [],
                k;

            data = new Uint8Array(r);

            for (i = 0; i < data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }

            bstr = arr.join("");

            // Call XLS or XLSX
            workbook = this.X.read(bstr, {
                type: "binary"
            });

            json_data = this.to_json(workbook, opt);

            for (k in json_data) {
                json_data_arr = json_data_arr.concat(json_data[k]);
            }

            return json_data_arr;
        }
    }, {
        key: 'to_json',
        value: function to_json(workbook, opt) {
            var result = {},
                self = this;
            // 读取excel文件中第一个主sheet
            var ReadTheFirstSheet = workbook.SheetNames.slice(0, 1);

            ReadTheFirstSheet.forEach(function (sheetName) {
                var roa = self.X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName], opt);
                if (roa.length > 0) {
                    result[sheetName] = roa;
                }
            });

            return result;
        }
    }]);

    return ReadExcel;
}();

exports.default = ReadExcel;