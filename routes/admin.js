/**
 * Created by Administrator on 2017/2/22.
 */
var express = require('express');
var userDao = require('../dao/dao');
var router = express.Router();
router.get('/', function(req, res, next) {

        userDao.allNews(function (err, vals) {
            if(err){
                res.render('error', {message:'出错',error:err});
            }else {
                res.render('admin', {newslist:vals});
            }
        });

});

module.exports = router;
