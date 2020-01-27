// importing express
const express = require('express');

// import config
const configMiddleware = require('./configure-middleware.js');

// creating server
const server = express();

// invoking confi passing server
configMiddleware(server);

server.get('/', (req, res) =>{
    res.send('Hello from server');
});

module.exports = server;
