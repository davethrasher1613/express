const joi=require('joi')


const id= joi.string().uuid()
const nombres=joi.string().min(3).max(15)
const ciudad=joi.string().min(3).max(15)
const preciodeenvio=joi.number().integer().min(10)
const direccion=joi.string().min(3).max(45)
const telefono=joi.string().min(3).max(45)
const image=joi.string().uri()

const createEnvioSchema=joi.object({

nombres: nombres.required(),
ciudad: ciudad.required(),
preciodeenvio: preciodeenvio.required(),
direccion: direccion.required(),
telefono: telefono.required(),

image: image.required()


})

const updateEnvioSchema=joi.object({

  nombres: nombres,
  ciudad:ciudad,
 preciodeenvio: preciodeenvio,
 direccion:direccion,
 telefono:telefono,
 image: image


  })

  const getEnvioSchema=joi.object({

    id: id.required(),

    })

    module.exports={createEnvioSchema,updateEnvioSchema,getEnvioSchema}

