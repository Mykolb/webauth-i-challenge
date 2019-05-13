const db = require('../migrations/dbConfig');

module.exports = {
    find
};


function find() {
    return db('users')
}