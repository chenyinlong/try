$(function () {
    console.log("JQ");
    //富文本编辑器启动
    var editor = new wangEditor('newscont');
    editor.create();
    var newsAjax = new NewsAjax();
    // newsAjax.getAllNews()
    //添加一条新闻
    // $("#addnews").on("click", function () {
    //
    //     var formData = new FormData();
    //
    //     formData.append('file', $('#title_img')[0].files[0]);
    //
    //     console.log(formData);
    //
    //     uploadphotos(formData,function (data) {
    //         alert(data);
    //
    //         $(".showimg").attr("src","images/"+data);
    //         newsAjax.addOneNews({
    //             newstitle: $("#newstitle").val(),
    //             newscont: editor.$txt.html(),
    //             title_img: "images/"+data
    //
    //         },function (data) {
    //             console.log(data);
    //             refList();
    //         });
    //
    //     })
    // });
    $("#addnews").on("click", function () {

        var formData = new FormData();
        formData.append('newstitle', $("#newstitle").val());
        formData.append('newscont', editor.$txt.html());

        formData.append('file', $('#title_img')[0].files[0]);

        newsAjax.upload('news_api/addNews2',formData,function (data) {
            // alert(data);
            $("#newstitle").val("");
            editor.$txt.html('<p><br></p>');
            var obj=$('#title_img')[0];
            obj.outerHTML=obj.outerHTML;
            refList();
        })
    });
    //通过按钮删除一条新闻
    $("tbody").on("click",".delOneNews",function () {
        confirm("确认删除？")?(newsAjax.delOneNews({id:$(this).parent().parent().find("th").text()},function () {
            refList();
        })):null;
    }).on("click",".updataNews",function () { //修改
        var ids=$(this).parent().parent().find("th").text();
        $("#updatenews").removeClass("hidden").data("id",ids);
        $("#qupdatenews").removeClass("hidden");
        $("#addnews").addClass("hidden");
        newsAjax.selOneNews({id:ids},function (data) {
            console.log(data);
            $("#newstitle").val(data[0].title);
            // $("#newscont").val(data[0].content);
            editor.$txt.html('<p><br></p>');
            editor.$txt.append(data[0].content);
            $("#title_img").data("title_img",data[0].title_img);
        });
    });
    //取消更新
    $("#qupdatenews").on("click",function () {
        $("#newstitle").val("");
        editor.$txt.html('<p><br></p>');
        $("#updatenews").addClass("hidden");
        $("#qupdatenews").addClass("hidden");
        $("#addnews").removeClass("hidden");
    });

    //更新新闻
    $("#updatenews").on("click",function () {

        var formData = new FormData();
        formData.append('newstitle', $("#newstitle").val());
        formData.append('newscont', editor.$txt.html());
        formData.append('file', $('#title_img')[0].files[0]);
        formData.append('id', $(this).data("id"));
        console.log(formData);
        var url = "/news_api/updateNews";
        newsAjax.upload(url,formData,function (data) {
            // alert(data);
            //清空
            $("#newstitle").val("");
            editor.$txt.html('<p><br></p>');
            var obj=$('#title_img')[0];
            obj.select();
            document.selection.clear();
            $("#updatenews").addClass("hidden");
            $("#qupdatenews").addClass("hidden");
            $("#addnews").removeClass("hidden");
            refList();
        });

    });

    //每次修改时 刷新列表
    function refList() {
        // alert("刷新列表");
        $("tbody").empty();
        newsAjax.getAllNews(function (data) {
            for(var obj of data){
                var but1=$('<button></button>').addClass('btn btn-primary btn-xs updataNews').text('点击查看详情');
                var but2=$('<button></button>').addClass('btn btn-danger btn-xs delOneNews').text('删除');
                var tr=$('<tr></tr>').append($('<th></th>').text(obj.id)).append($('<td></td>').text(obj.title)).append($('<td></td>').text(obj.CreateTime)).append($('<td></td>').append(but1).append(but2));
                $("tbody").append(tr);
            }
        });
    }
});


function NewsAjax() {

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
