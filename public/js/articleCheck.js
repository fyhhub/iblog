$(function () {
    $('.check').on('click', function () {

    })
    $('.update').on('click', function () {

    })
    $('.read').on('click', function () {

    })
    $('.del').on('click', function () {
        console.log('sss')
        if (confirm('你确定要删除吗?')) {
            $.ajax({
                url: '/admin/delArticle/?id=' + $(this).parent().attr('data-id'),
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    if (res.success) {
                        alert(res.message)
                        location.reload()
                    } else {
                        alert(res.message)
                    }
                }
            })
        }

    })
    $('#upload').on('click', function () {

    })
    function upload() {
        var path = document.getElementById("uploadImg").value;
        var result_msg = "";
        $.ajax({
            url: '/file/uploadImg',  //这里是服务器处理的代码
            type: 'post',
            secureuri: false, //一般设置为false
            fileElementId: 'uploadImg', // 上传文件的id、name属性名
            dataType: 'json', //返回值类型，一般设置为json、application/json
            data: {}, //传递参数到服务器
            success: function (data, status) {
                if (data.Result) {
                    alert("文件成功处理完成!" + data.FileName);
                } else {
                    alert("文件成功处理出错！原因：" + data.ErrorMessage);
                }
            },
            error: function (data, status, e) {
                alert("错误：上传组件错误，请检察网络!");
            }
        });
    }
})