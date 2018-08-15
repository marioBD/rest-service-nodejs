'use strict'

const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const OpinionSchema = Schema({
	source : String,
	idioma : String,
	nombre_sitio : String,
	direccion_sitio : String,
	direccion_sitio_ext : String,
	localidad_sitio : String,
	pais_sitio : String,
	user_review : String,
	rating_review : String,
	date_review : String,
	location_review : String,
	review : String
})

module.exports = mongoose.model('Opinion', OpinionSchema, 'TAOpinions')
