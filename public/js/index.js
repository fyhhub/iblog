$(function () {
    $('.del-btn').on('click', function () {
        if (confirm('你确定要删除吗？')) {
            let id = $(this).attr('data-id')
            $.ajax({
                url: '/admin/navDel?' + 'id=' + id,
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

    $('#add').on('click', function () {
        let val = $('.add-input').val()
        let url = $('.add-url').val()
        if (val == '' || url == '') {
            alert('输入不能为空')
            return
        }
        $.ajax({
            url: '/admin/navAddPost',
            type: 'post',
            data: {
                value: val,
                url: url
            },
            dataType: 'json',
            success: function (res) {
                if (res.success) {
                    $('.add-fail').removeClass('show').addClass('fade')
                    $('.add-success').removeClass('fade').addClass('show').html(res.message)
                    $('.add-input').val('')
                    $('.add-url').val('')
                    setTimeout(function () {
                        location.href = '/admin/nav'
                    }, 1000)
                } else {
                    $('.add-success').removeClass('show').addClass('fade')
                    $('.add-fail').removeClass('fade').addClass('show').html(res.message)
                    $('.add-url').val('')
                }
            }
        })
    })

    $('#update').on('click', function () {
        let val = $('.update-input').val()
        let url = $('.update-url').val()
        let id = location.search.slice(4)
        if (val == '' || url == '') {
            alert('输入不能为空')
            return
        }
        $.ajax({
            url: '/admin/navUpdatePost',
            type: 'post',
            data: {
                value: val,
                url: url,
                id:id
            },
            dataType: 'json',
            success: function (res) {
                console.log(res)
                if (res.success) {
                    $('.update-fail').removeClass('show').addClass('fade')
                    $('.update-success').removeClass('fade').addClass('show').html(res.message)
                    $('.update-input').val('')
                    $('.update-url').val('')
                    setTimeout(function () {
                        location.href = '/admin/nav'
                    }, 1000)
                } else {
                    $('.update-success').removeClass('show').addClass('fade')
                    $('.update-fail').removeClass('fade').addClass('show').html(res.message)
                    $('.update-url').val('')
                }
            }
        })
    })
})