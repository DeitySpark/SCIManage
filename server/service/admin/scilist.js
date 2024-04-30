const connection = require('../db.config.js')


// 返回所有数据
const SciListInfo = () => {
    // 从数据库中查询用户信息
    const sql = `select *
                 from sci`
    // console.log(sql);
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log("查询失败");
                reject(err);
            } else {
                console.log("查询成功");
                resolve(result);
            }
        })
    })
}


module.exports = { SciListInfo};
