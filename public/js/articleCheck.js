$(function () {
    $('.check').on('click', function () {
        let that = $(this)
        $.ajax({
            url: '/admin/articleCheck/changeStatus?id=' + $(this).parent().attr('data-id'),
            type:'get',
            dataType: 'json',
            success: function (res) {
                if (res.success) {
                    that.parent().prev().html(res.message)
                    that.attr("disabled",true)
                } else {
                    that.parent().prev().html(res.message)
                }
            }
        })
    })
    $('.update').on('click', function () {

    })
    $('.del').on('click', function () {
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
    $('.upload').on('click', function () {
        let tr = $(this).parent()
        let uploadImg = $(this).prev()[0].files[0]
        if (uploadImg === undefined) {
            alert('上传的文件不存在!')
            return
        }
        let fd = new FormData()
        fd.append('uploadImg', uploadImg)
        $.ajax({
            url: '/admin/file/uploadImg?id=' + $(this).parent().attr('data-id'),
            type:'post',
            data: fd,
            processData:false,
            contentType: false,
            success: function (res) {
                if (res.success) {
                    tr.html(res.message)
                } else {
                    alert(res.message)
                }
            }
        })
    })
    $('#delmany').on('click', function () {
        if (confirm('你确定要删除吗？')){
            $('.checkmany:checked').parent().find('.del').trigger('click')
        }
    })

})