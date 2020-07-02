// 入口函数
$(function () {
    // 给form表单注册submit事件
    $('.login_form').on('submit', function (e) {
        // 阻止提交默认行为
        e.preventDefault();
        //获取用户名和密码
        var username = $('.input_txt').val().trim(); //去除前后空格
        var password = $('.input_pass').val().trim();

        //非空判断
        if (username === '' || password === '') {
            $('#myModal').modal('show');
            var timeId = setTimeout(function () {
                $('#myModal').modal('hide');
                clearTimeout(timeId);
            }, 2000);
            $('#myModal .modal-body p').text('用户名或密码不能为空');
            return;
        }

        // 发送ajax请求
        $.ajax({
            type: 'post',
            // url: 'http://localhost:8080/api/v1/admin/user/login',
            url: BigEvents.user_login,
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                $('#myModal').modal('show');
                $('.modal-body p').text(res.msg);
                if (res.code == 200) {
                    // 将服务器端响应回来的token字符串，存储到本地存储当中
                    localStorage.setItem('token', res.token);
                    // 此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html';
                    });
                }
            }
        });
    });
});