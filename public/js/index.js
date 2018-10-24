$(function () {
    getData('/api/masterInfo', 'get',null, function (res) {
        $('.avatar img').attr(res.avatar)
        $('.abname').text(res.net_name)
        $('.abposition').text(res.career)
        $('.abtext').text(res.introduce)
    })
    getData('/api/tags', 'get', null, function (res) {
        let tags = []
        res.forEach(function (item) {
            tags.push(item.article_tags)
        })
        tags = [...new Set(tags)]
        tags.forEach(function (item) {
            let a = $(`<a href='/main'>${item}</a>`)
            $('.cloud ul').append(a)
        })
    })
})