const joi=require('joi')


const id= joi.string().uuid()
const name=joi.string().min(3).max(15)


const createCategorieSchema=joi.object({

name: name.required(),


})

const updateCategorieSchema=joi.object({

name: name,



  })

  const getCategorieSchema=joi.object({

    id: id.required(),

    })

    module.exports={createCategorieSchema,updateCategorieSchema,getCategorieSchema}

