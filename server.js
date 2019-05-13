const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//routers
const loginRouter = require('./routes/login-router');
const registerRouter = require('./routes/register-router');
const usersRouter = require('./routes/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

//endpoints and routes 
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send(`
    <h1>Show up data<h1>
    <p>Wait where is it...?</p>
    `)
});

module.exports = server;