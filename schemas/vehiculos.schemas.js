const Joi = require('joi')

const id = Joi.string().uuid();
const marca = Joi.string().marca();
const modelo = Joi.string().modelo();
const año = Joi.date().año();
const image = Joi.image.image();
const price = Joi.number().integer(1000000);

const createVehiculoSchema = Joi.object({
    marca: marca.required(),
    modelo: modelo.required(),
    año: año.required(),
    price: price.required(),

})

const updateVehiculoSchema = Joi.object({
    marca: marca.required(),
    modelo: modelo.required(),
    año: año.required(),
    price: price.required(),

})

const getVehiculoSchema = Joi.object({
    id: id.required(),
})

module.exports = {createVehiculoSchema,updateVehiculoSchema, getVehiculoSchema}