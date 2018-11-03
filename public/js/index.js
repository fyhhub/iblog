$(function () {
    getData('/api/masterInfo', 'get',null, function (res) {
        console.log(res)
        $('.avatar img').attr('src',res.avatar)
        $('.abname').text(res.net_name)
        $('.abposition').text(res.career)
        $('.abtext').text(res.introduce)
        $('.qqemail').text(res.email)
    })

    getData('/api/tags', 'get', null, function (res) {
        let tags = []
        res.forEach(function (item) {
            tags.push(item.article_tags)
        })
        tags = [...new Set(tags)]
        tags.forEach(function (item) {
            let a = $(`<a href='/tag/${item}'>${item}</a>`)
            $('.cloud ul').append(a)
            if ($('.navbor-subs')) {
                let b = $(`<li><a href="/tag/${item}">${item}</a></li>`)
                $('.navbor-subs').append(b)
            }
        })
    })

})