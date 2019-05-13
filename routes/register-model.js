const db = require('../migrations/dbConfig');

module.exports = {
    add
};


function add(users) {
    return db('users')
    .insert(users, 'id')
}