const mysql = require('mysql')
const pool = mysql.createPool({ //数据库连接池
    host: process.env.default_yun_ip,
    user: 'root',
    password: process.env.default_yun_pwd,
    database: 'tdemo_dev'
});
console.log("ddddddddddddd")
let query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {//如果数据库连接失败，就把错误信息返回给callback
            callback(err, null);
        }
        else {//如果连接成功，就执行sql语句，并且把执行的结果返回时callback
            conn.query(sql, (err, result) => {
                conn.release();//释放资源
                callback(err, result);
            })
        }
    })
}
module.exports=query;
