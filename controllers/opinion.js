'use strict'

const Opinion = require('../models/opinion')
var bodyParser = require('body-parser')

//console.log('********* Req query' + req)

function getOpinion(req, res){
  console.log('Req query' + JSON.stringify(req.params.opinionId))
  let opinionId = req.params.opinionId

  Opinion.find({"rating_review":opinionId}, (err,opinion) => {
     if (err) return res.status(500).send({message : `Error al realizar la petición: ${err}`})
     if (!opinion) return res.status(404).send({message : `La opinion no existe`})

     res.status(200).send({opinion})
  })
}

function getAllOpinion(req, res){
  Opinion.find({},(err,opinion) => {
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!opinion) return res.status(404).send({message : `No existen opniones`})

    res.send(200, { opinion })
  })
}

module.exports = {
  getOpinion,
  getAllOpinion
}
