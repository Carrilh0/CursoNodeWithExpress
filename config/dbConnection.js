var mysql = require('mysql');

var connMySQL = () => {
    return mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '',
                database : 'node'
            });
}
module.exports = (app) =>
    {
        return connMySQL;
    }