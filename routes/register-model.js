const db = require('../migrations/dbConfig');

module.exports = {
    add 
};

const add = users => {
    db('users')
    .insert(users, id)
}