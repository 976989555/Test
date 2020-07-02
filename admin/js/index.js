$(function () {
    // 立即向服务器发送请求
    $.ajax({
        type: 'get',
        // url: 'http://localhost:8080/api/v1/admin/user/info',
        url: BigEvents.user_info,
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

    // 退出功能
    $('.header_bar .logout').on('click', function () {
        // 退出要删除本地存储的token
        localStorage.removeItem('token');
        // 跳到登录页面
        window.location.href = './login.html';
    })

    // 主页面左侧按钮高亮显示
    // 给左侧按钮的每一个div注册事件，每个div都有一个共同的类level01
    $('.menu .level01').on('click', function () {
        // 点击当前的div添加active类，其余兄弟要移除active类
        $(this).addClass('active').siblings().removeClass('active');
        // 当点击文章管理的时候，要实现一个合并与展开的切换
        if ($(this).index() === 1) {
            // 实现切换
            $('.menu .level02').slideToggle();
            // 右侧小三角也要进行切换
            $(this).find('b').toggleClass('rotate0')
            // 只要展开或是合并文章管理，就要让第一个li标签高亮显示
            $('.menu .level02 li:eq(0)').trigger('click')
        }
    })
    // 文章管理中的li标签被点击的时候，高亮显示 
    // 给每一个li标签注册事件
    $('.menu .level02 li').on('click', function () {
        // 
        $(this).addClass('active').siblings().removeClass('active')
    })


})