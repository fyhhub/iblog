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
            let ids = []
            $('.checkmany:checked').each(function (item) {
                ids.push($(this).parent().next().text())
            })
            $.ajax({
                url: '/admin/delArticle/?ids=' + ids.join('-'),
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    if (res.success) {
                        alert(res.message)
                        $('tr').each(function (item) {
                            if (ids.includes($(this).attr('data-id'))) {
                                $(this).remove()
                            }
                        })
                    } else {
                        alert(res.message)
                    }
                }
            })

        }
    })

    $('#checkmany').on('click', function () {
        if (confirm('确定审核？')){
            let ids = []
            $('.checkmany:checked').each(function (item) {
                ids.push($(this).parent().next().text())
            })
            $.ajax({
                url: '/admin/articleCheck/changeStatus?ids=' + ids.join('-'),
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    if (res.success) {
                        alert(res.message)
                        $('.check').each(function () {
                            if (ids.includes($(this).parent().attr('data-id'))) {
                                $(this).attr("disabled",true)
                            }
                        })
                    } else {
                        alert(res.message)
                    }
                }
            })

        }
    })

})