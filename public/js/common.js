function getData(url, type, params = null, callback) {
    $.ajax({
        url:url,
        type: type,
        data: params,
        dataType: 'json',
        success: function (data) {
            callback && callback(data)
        }
    })

    $('.toTop').on('click', function () {
        $('html,body').animate({scrollTop: '0px'}, 200)
    })
}