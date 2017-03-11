/**
 * Created by Administrator on 2017/2/21.
 */
module.exports = {
    mysql: {
        connectionLimit:10,//连接池最多可以创建连接数
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database:'news', // 前面建的user表位于这个数据库中
        port: 3306,
        queueLimit:8 ,// 队伍中等待连接的最大数量，0为不限制。
        dateStrings:true //强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)
    }
};