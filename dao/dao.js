/**
 * Created by Administrator on 2017/2/21.
 */
var $config=require('../conf/congfig');
var mysql = require('mysql');
// var $util = require('../util/util');
var $sql = require('./userSql');

// 使用连接池，提升性能
var pool  = mysql.createPool($config.mysql);


module.exports={
    addNews:function (data,callback) {
        // console.log("addnews");
        // console.log("addnews-data:"+data);
        pool.getConnection(function(err,conn){
            if(err){
                console.log("dao err"+err);
                // callback(err);
            }else{
                conn.query($sql.insert,data,function(err,vals){
                    //释放连接
                    callback(err,vals);
                    conn.release();
                });
            }
        });
    },
    //全部新闻查询
    allNews:function (callback) {
        console.log("allNews");
        pool.getConnection(function(err,conn){
            if(err){
                console.log("dao err"+err);
                callback(err);
            }else{
                conn.query($sql.queryAll,function(err,vals){
                    //释放连接
                    conn.release();
                    callback(err,vals);
                });
            }
        });
    },

    delNews:function (data,callback) {
        console.log("delNews");
        // console.log($config);
        pool.getConnection(function(err,conn){
            if(err){
                console.log("dao err"+err);
                callback(err);
            }else{
                conn.query($sql.delete,data,function(err,vals){
                    console.log(err);
                    console.log(vals);
                    //释放连接
                    conn.release();
                    callback(err,vals);
                });
            }
        });
    },

    updateNews:function (data,callback) {
        console.log("updateNews");
        pool.getConnection(function(err,conn){
            if(err){
                console.log("dao err"+err);
                callback(err);
            }else{
                console.log("data.length"+data.length);
                var sql=data.length==3?$sql.update_m:$sql.update;
                conn.query(sql,data,function(err,vals){
                    console.log(err);
                    console.log(vals);
                    //释放连接
                    conn.release();
                    callback(err,vals);
                });
            }
        });
    },
    updateClick:function (data,callback) {
        console.log("updateNews");
        // console.log($config);
        pool.getConnection(function(err,conn){
            if(err){
                console.log("dao err"+err);
                callback(err);
            }else{
                conn.query($sql.update_click,data,function(err,vals){
                    //释放连接
                    conn.release();
                    callback(err,vals);
                });
            }
        });
    },

    selNewById:function (data,callback) {
        console.log("selNewById");
        pool.getConnection(function(err,conn){
            if(err){
                console.error("dao err"+err);
                callback(err);
            }else{
                conn.query($sql.queryById,data,function(err,vals){
                    //释放连接
                    conn.release();
                    callback(err,vals);
                });
            }
        });
    }

};
