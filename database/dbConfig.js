// importing knex
const knex = require('knex');

// importing knexfil
const knexfile = require('../knexfile.js');

const environment = process.env.NODE_ENV || 'development';

//exporting knex
module.exports = knex(knexfile[environment]);
