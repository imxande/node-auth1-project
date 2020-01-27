// importing express
const express = require('express');

// importing helmet
const helmet = require('helmet');

// importing cors
const cors = require('cors');

module.exports = function(server){
    // invoke helmet here to protect my app
    server.use(helmet());
    
    // still need to teach the express how to read json
    server.use(express.json());

    // invoke cors for an extra layel of protection
    server.use(cors());
}


