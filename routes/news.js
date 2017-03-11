/**
 * Created by Administrator on 2017/2/27.
 */
var express = require('express');
var router = express.Router();
var userDao = require('../dao/dao');
router.get('/', function(req, res, next) {

    userDao.allNews(function (err, vals) {
        if(err){
            res.render('error', {message:'出错',error:err});
        }else {
            res.render('news',{newslist:vals});
        }
    });
});
router.get('/content', function(req, res, next) {
    userDao.selNewById([req.query.id],function (err, vals) {
        if(err){
            res.render('error', {message:'连接数据库出错',error:err});
        }else {
            console.log(vals)
            res.render('content', {news:vals});
        }
    });
});

module.exports = router;