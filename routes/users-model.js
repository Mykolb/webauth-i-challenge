const db = require('../migrations/dbConfig');

module.exports = {
    find
};


const find = () =>  {
 db('users')
}


