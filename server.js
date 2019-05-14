const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
//session imports
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session); //imports db from dbConfig



//session configuration 
const sessionConfig = {
    name: 'vague', //choose name that won't reveal stack
    secret: 'mind your business', //encrypt/decrypt cookie
    cookie: {
        maxAge: 1000 * 60 * 2, // how long session is valid in ms 
        secure: false, //security measure so JS can't access it, flip to true for production
    },
    httpOnly: true, //can't access cookie from JS, keep true unless a good reason comes up 
    resave: false, //avoids recreating sessions that haven't changed 
    saveUninitialized: false, // european laws against setting cookies auto 
}
//****** add this config so sessions are stored in db ********* */
store: new KnexSessionStore({
    knex: require('./migrations/dbConfig'), //points to db Config files
    tablename: 'session', //table name is foo bar name 
    sidfieldname: 'sid', // column that holds session id, banana name 
    createtable: true, //will auto create table if it doesn't exist 
    clearInterval: 100 * 60 * 2, //time it takes to check/remove old session from db 
})


//routers
const protectedRouter = require('./routes/protected-router');
const usersRouter = require('./routes/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(session(sessionConfig));

//endpoints and routes 
server.use('/api/protected', protectedRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send(`
    <h1>Show up data<h1>
    <p>Wait where is it...?</p>
    `)
});

module.exports = server;