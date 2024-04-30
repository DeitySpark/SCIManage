const {addSciInfo} = require("../../service/admin/sciinfo.js");
const AddSciInfo = (req, res) => {
    // 1. 接收post参数,传入service处理函数处理
    console.log(req.body)
    addSciInfo(req.body).then(r => {
        res.json({
            code: "200",
            msg: "保存成功",
        });
})
}


module.exports = {AddSciInfo}
