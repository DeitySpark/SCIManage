const {SciListInfo} = require("../../service/admin/scilist.js");

// 导出一个函数LoginInfo，用于接收post参数
const SciList = (req, res) => {
    // 2. 传入处理函数返回响应
    SciListInfo().then(r => {
        // console.log(r);
        // 3. 返回数据
        if (r.length === 0) {
            res.json({
                code: "400",
                msg: "数据为空",
            });
        } else {
            console.log(Object.keys(r).length,r[0])
            res.json({
                code: "200",
                data: {
                    total:Object.keys(r).length,
                    list: r
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


module.exports = {SciList};
