/**
 * Created by Administrator on 2017/3/1.
 */
function NewsAjax() {
    this.name="NewsAjax";
}
NewsAjax.prototype.upload=function(url,data,callback) {
    $.ajax({
        type: 'post',
        data: data,
        // contentType:'multipart/form-data',
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        url: url,
        processData : false,
        async: false,
        cache: false,
        success: function (data) {
            callback(data);
        },
        error: function (err) {
            callback(err);
        }
    });
};
// NewsAjax.prototype.updataNews=function (data,callback){
//     console.log("selOneNews");
//     var url = "/news_api/updateNews";
//     this.ajax_f(url, data, function (data) {
//         callback(data);
//     }, function (err) {
//         alert("ajax失败！");
//         console.log(err)
//     })
// };
NewsAjax.prototype.selOneNews=function (data,callback){
    console.log("selOneNews");
    var url = "/news_api/selNewById";
    this.ajax_f(url, data, function (data) {
        // console.log(data);
        callback(data);
    }, function (err) {
        alert("ajax失败！");
        console.log(err)
    })
};
NewsAjax.prototype.delOneNews=function (data,callback) {
    console.log("delOneNews");
    var url = "/news_api/delNews";
    this.ajax_f(url, data, function (data) {
        console.log(data);
        // alert("新闻删除成功")
        callback();
    }, function (err) {
        alert("ajax失败！");
        console.log(err);
        callback();
    })
};
// NewsAjax.prototype.addOneNews = function (data,callback) {
//     console.log("addOneNews");
//     var url = "/news_api/addNews";
//     this.ajax_f(url, data, function (data) {
//         alert("新闻添加成功")
//         callback(data);
//     }, function (err) {
//         callback(err);
//     })
// };
NewsAjax.prototype.getAllNews = function (callback) {
    var url = "/news_api/allNews";

    this.ajax_f(url, null, function (data) {
        console.log(data);
        callback(data);
    }, function () {
        alert("ajax失败！");
    })
};
NewsAjax.prototype.ajax_f = function (url, data, succallback, errcallback) {
    $.ajax({
        type: 'post',
        data: data,
        dataType: 'json',
        url: url,
        success: function (data) {
            succallback(data)
        },
        error: function (err) {
            errcallback(err);
        }
    });
};