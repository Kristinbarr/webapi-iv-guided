const express = require('express')

const Shoutouts = require('../data/shoutouts-model.js')

const router = express.Router()

// GET /api/
router.get('/', (req, res) => {
  Shoutouts.find()
    .then((shouts) => {
    console.log('shouts', shouts)
      res.status(200).json({ messageOfTheDay: process.env.MOTD, shouts })
    })
    .catch((error) => {
      console.error('\nERROR', error)
      res.status(500).json({ error: 'Cannot retrieve the shoutouts' })
    })
})

// POST /api/
router.post('/', async (req, res) => {
  console.log('req.body', req.body)
  try {
    const newShout = await Shoutouts.add(req.body)
    console.log('newShout', newShout)
    res.status(201).json(newShout)
  } catch (error) {
    console.error('\nERROR', error)
    res.status(500).json({ error: 'Cannot add the shoutout' })
  }
})

// router.use(errorHandler)

// function errorHandler(error, req, res, next) {
// }

module.exports = router

