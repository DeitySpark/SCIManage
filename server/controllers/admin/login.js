const Mock = require("mockjs");
const Random = Mock.Random;
const { loginInfo } = require("../../service/admin/login.js");

// 导出一个函数LoginInfo，用于接收post参数
const LoginInfo = (req, res) => {
    // 1. 接收post参数
    const {username, password} = req.body;
    console.log('username:' + username, 'password=' + password);

    // 2. 验证参数是否合法
    loginInfo(username, password).then(r => {
        // console.log(r);
        // 3. 返回数据
        if (r.length === 0) {
            res.json({
                code: "400",
                msg: "用户名或密码错误",
            });
        } else {
            res.json({
                code: "200",
                data: {
                    'user_id': r[0].id,
                    'name': r[0].username,
                    'token': r[0].token,
                    'role': r[0].role,
                    'email': r[0].email,
                    'phone': r[0].phone,
                    'image': "https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1660064400&t=6fe6057370cbe369654ff2e132d02a37",
                },
            });
        }
    //    抛出错误
    }).catch(err => {
        console.log(err);
        res.json({
            code: "500",
            msg: "服务器错误",
        });
    })
}




module.exports = { LoginInfo };
