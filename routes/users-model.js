const db = require('../migrations/dbConfig');

module.exports = {
    find,
    findBy,
    add
};


function find() {
    return db('users')
}

function findBy(users) {
    return db('users')
    .insert(users, 'id')
}

function add(users) {
    return db('users')
    .insert(users, 'id')
}