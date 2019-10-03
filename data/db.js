const knex = require('knex');

const secrets = require('../config/secrets')

const config = require('../knexfile.js').development;

module.exports = knex(config);
