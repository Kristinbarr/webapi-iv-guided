const express = require('express');
const helmet = require('helmet');

const Shoutouts = require('../data/shoutouts-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  Shoutouts.find()
  .then(shouts => {
    res.status(200).json({messageOfTheDay: process.env.MOTD, shouts});
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  });
});

server.post('/', (req, res) => {
  Shoutouts.add(req.body)
  .then(shoutout => {
    res.status(201).json(shoutout);
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shoutout' });
  });
});

module.exports = server;
