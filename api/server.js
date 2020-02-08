// importing express
const express = require('express');

// import config
const configMiddleware = require('./configure-middleware.js');

// import apiRouter
const apiRouter = require('./api-router.js');

// creating server
const server = express();

// invoking confi passing server
configMiddleware(server);

// api end point
server.use('/api', apiRouter);

// checking if server is working
server.get('/', (req, res) =>{
    res.send('Hello from server');
});

// exporting server
module.exports = server;
