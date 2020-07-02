$(function () {
    // 立即向服务器发送请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        success: function (res) {
            // console.log(res);
            // 将请求回来的数据渲染到页面上
            if (res.code == 200) {
                // 显示登录的用户名
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                // 显示登录的头像
                $('.user_info img').attr('src', res.data.userPic)
                // 个人中心旁的头像也要更换
                $('.header_bar img').attr('src', res.data.userPic)

            }
        }
    })
})