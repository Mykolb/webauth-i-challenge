const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//routers
const protectedRouter = require('./routes/protected-router');
const usersRouter = require('./routes/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

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