const pool = require('../lib/db');

module.exports = {
    findUserName: (data, callback) => {
         pool.query(
             `select * from users where username = ?`,
             [data.username],
             (err, results) => {
                 if (err) {
                     callback(err);
                 }
                 return callback(null, results[0])
             }
         )
    },

    createUser: (data, callback) => {
        pool.query(
            `insert into users(username, password, role) values(?, ?, ?)`,
            [
                data.username,
                data.password,
                data.role
            ],
            (error, result) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, result)
            }
        )
    },

    getUserByName: (data, callback) => {
        pool.query(
            `select * from users where username = ?`,
            [data.username],
            (err, result) => {
                if (err) {
                    callback(err)
                }
                return callback(null, result[0])
            }
        )
    }
};