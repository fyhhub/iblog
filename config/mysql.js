var wrapper = require('co-mysql'),
    mysql = require('mysql'),
    co = require('co');

var pool = mysql.createPool({
    host : 'localhost',
    port : 3306,
    database : 'mysite',
    user: 'root',
    password : '!Fyh138199183828'
}), p = wrapper(pool);
module.exports = p
