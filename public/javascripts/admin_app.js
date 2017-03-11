/**
 * Created by Administrator on 2017/3/1.
 */
require.config({

    paths: {
        jquery:"//cdn.bootcss.com/jquery/3.1.1/jquery.min",
        bootstrap:'//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min',
        wangEditor:'/wangeditor/js/wangEditor.min',
        NewsAjax: '/javascripts/modules/NewsAjax'
    },
    shim: {
        wangEditor: {
            deps: ['jquery'],
            exports: 'wangEditor'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        NewsAjax: {
            deps: ['jquery'],
            exports: 'NewsAjax'
        }
    },
    waitSeconds: 0
});
// require(['wangEditor'], function(){
//     $(function(){
//         var editor = new wangEditor('newscont');
//         editor.create();
//     });
// });
require(['jquery','bootstrap','NewsAjax','wangEditor'], function($,bootstrap,NewsAjax) {
        $(function () {
            console.log("JQ");
            // 富文本编辑器启动
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
                // obj.select();
                // document.selection.clear();
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
});