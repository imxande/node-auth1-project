// importing express
const express = require('express');

// importing helmet
const helmet = require('helmet');

// importing cors
const cors = require('cors');

// importing expresss sessions
const session = require('express-session');

// importing connect session knex
const KnexSessionStore = require("connect-session-knex")(session);

// import db config here 
const dbConnection = require("../database/dbConfig.js");

// setting config for session
const sessionConfig = {
    // session storage
    name: 'cookie',
    // secret used for cookie encryption
    secret: process.env.SESSION_SECRET || 'this is a secret',
    cookie: {
        maxAge: 1000 * 60 * 10, // 10 minutes in ms validation time
        secure: false, // set to true in production, only send cookies over HTTPS
        httpOnly: true, // JS cannot access the cookies on the browser 
    },
    resave: false,
    saveUninitialized: true, // read about it for GDPR compliance
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 60000
    }),
}

module.exports = function(server){
    // invoke helmet here to protect my app
    server.use(helmet());
    
    // still need to teach the express how to read json
    server.use(express.json());

    // invoke cors for an extra layel of protection
    server.use(cors());

    // invoke session here
    server.use(session(sessionConfig));
}


