const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'scimanage'
}

// 创建连接对象
const connection = mysql.createConnection(config)

connection.connect((err) => {
        if (err) {
            console.error('数据库连接失败\n', err)
        } else {
            console.log('数据库连接成功')
        }
    })


module.exports = connection;
