const {saveSciInfo} = require("../../service/admin/sciinfo");

const SaveSciInfo = (req, res) => {
    // 1. 接收post参数
    console.log(req.body)
    saveSciInfo(req.body).then(r => {
        res.json({
            code: "200",
            msg: "更新成功",
        });
    })

}

    module.exports = {SaveSciInfo};
