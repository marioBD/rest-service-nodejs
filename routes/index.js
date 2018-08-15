'use strict'

const express = require('express')
const opinionCtrl = require('../controllers/opinion')



const api = express.Router()




api.get('/opinion/:opinionId', opinionCtrl.getOpinion)
api.get('/opinion/', opinionCtrl.getAllOpinion)



module.exports = api
