const express = require('express')
const helmet = require('helmet')

// const secrets = require('../config/secrets')

const apiRouter = require('./api-router.js')

const server = express()

server.use(express.json())
server.use(helmet())

server.use('/api', apiRouter)

module.exports = server
