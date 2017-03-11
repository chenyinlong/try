
var express = require('express');
var userDao = require('../dao/dao');
var router = express.Router();
var path = require('path');
var multiparty = require('multiparty');
var fs = require("fs");
//只是上传文字内容
router.post('/addNews', function(req, res, next) {

    console.log("req:");
    var data=[req.body.newstitle,req.body.newscont,req.body.title_img];
    console.log(data);
    userDao.addNews(data,function (err, vals) {
        if(err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals)
            }
    });
});
//通过表单可以上传文字 图片内容
router.post('/addNews2', function(req, res, next) {
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
        console.log(fields);
        console.log(files);
        //同步重命名文件名
        // fs.renameSync(file.path,file.originalFilename);
        // res.send(path.basename(file.path));
        var data=[fields.newstitle[0],fields.newscont[0],"images/"+path.basename(file.path)];
        console.log(data);
        userDao.addNews(data,function (err, vals) {
            if(err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals)
            }
        });
    });

});
router.post('/allNews', function(req, res, next) {
    userDao.allNews(function (err, vals) {
        if(err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals)
            }
    });
});
router.post('/delNews', function(req, res, next) {
    userDao.delNews(req.body.id,function (err, vals) {
        if(err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals)
            }
    });
});
router.post('/updateNews', function(req, res, next) {
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
        console.log(fields);
        console.log(files);
        console.log(files.file);
        var data=null;
        if (files.file){
            var file=files.file[0];
            data=[fields.newstitle[0],fields.newscont[0],"images/"+path.basename(file.path),fields.id[0]];
        }else {
            data=[fields.newstitle[0],fields.newscont[0],fields.id[0]];
        }
        console.log(data);
        userDao.updateNews(data,function (err, vals) {
            if (err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals);
            }
        });
    });

});
router.post('/updateClick', function(req, res, next) {
    userDao.updateClick(req.body.id,function (err, vals) {
        if (err){
            res.render('error', {message:'连接数据库出错',error:err});
        }else {
            res.send(vals);
        }
    });
});
router.post('/selNewById', function(req, res, next) {
    userDao.selNewById(req.body.id,function (err, vals) {
        if(err){
                res.render('error', {message:'连接数据库出错',error:err});
            }else {
                res.send(vals)
            }
    });
});

module.exports = router;
