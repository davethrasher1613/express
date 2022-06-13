const Joi = require('joi');

const id = Joi.string().uuid();
const image = Joi.image();
const name= Joi.string().alphanum().min(5).max(10);
const priceTotal= Joi.number().integer().min(10);
const priceIva= Joi.number().integer().min(19);

const createCarritoSchema = Joi.object({
  name: name.required(),
  priceTotal: priceTotal.required(),
  priceIva: priceIva.required(),
});

const updateCarritoSchema = Joi.object({
  name: name.required(),
  priceTotal: priceTotal.required(),
  priceIva: priceIva.required(),
});

const getCarritoSchema = Joi.object({
  id: id.required(),
  image: image.required(),
});

module.exports ={ createCarritoSchema,updateCarritoSchema,getCarritoSchema}


