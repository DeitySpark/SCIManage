const connection = require('../db.config.js')



const saveSciInfo = (data) => {
//    // 1. 接收post参数
    let sql = `update sci set title = '${data.title}', srcDatabase = '${data.srcDatabase}', author = '${data.author}', organ = '${data.organ}', source = '${data.source}', summary = '${data.summary}', publish_time = '${data.publish_time}' where title = '${data.title}' and author = '${data.author}' `
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log("更新失败");
                reject(err);
            } else {
                console.log("更新成功");
                resolve(result);
            }
        })
    })
}


const addSciInfo = (data) => {
    let sql = `insert into sci (title, srcDatabase, author, organ, source ,summary, publish_time) values ('${data.title}', '${data.srcDatabase}', '${data.author}', '${data.organ}', '${data.source}', '${data.summary}', '${data.publish_time}')`

    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log("添加失败");
                reject(err);
            } else {
                console.log("添加成功");
                resolve(result);
            }
        })
    })
}


module.exports = {saveSciInfo, addSciInfo}
