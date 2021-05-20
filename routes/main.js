const express = require('express')
const router = express.Router()
const scoresController = require('../controllers/scores') 
router.get('/', scoresController.getScores)
module.exports = router