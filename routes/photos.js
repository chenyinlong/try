/**
 * Created by Administrator on 2017/2/24.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


var multiparty = require('multiparty');
var fs = require("fs");
router.post("/t",function (req, res, next) {
    console.log(" 图片上传模块启动");
    // 解析一个文件上传
    var form = new multiparty.Form();
    //设置编辑
    // form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = "public/images/";
    //设置单文件大小限制
    form.maxFilesSize = 5 * 1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和

    form.parse(req, function(err, fields, files) {
        var file=files.file[0];
        console.log(files.file[0]);
        console.log(file.originalFilename);
        console.log(file.path);

        //同步重命名文件名
        // fs.renameSync(file.path,file.originalFilename);
        res.send(path.basename(file.path));
    });
    console.log(" 图片上传模块结束");

});

module.exports = router;