const connection = require('../db.config.js')


const loginInfo = (username, password) => {
    // 从数据库中查询用户信息
    var sql = `select * from user where username='${username}' and password='${password}'`
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


module.exports = {loginInfo};
