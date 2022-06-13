const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const CategoriesService= require('./../services/categories.services')
const validatorHandler =require('./../middlewares/validator.handler')
const{createCategorieSchema,updateCategorieSchema,getCategorieSchema}=require('./../schemas/categories.schema')
const service = new CategoriesService()

router.get('/',async (req,res)=>{

  const categories = await service.find()
  res.send(categories)
})

router.get('/filter',(req,res)=>{
  res.send("Soy un filter")
})

router.get('/:id',
validatorHandler(getCategorieSchema, 'params'),
async(req,res,next)=>{

  try{

    const{id}=req.params
    const categories=await service.findone(id)
    res.json(categories)

  }catch(error){
    next(error)
  }
}


)

router.post('/',

validatorHandler(createCategorieSchema,'body'),
async(req,res)=>{

  const body= req.body;
const newCategorie= await service.create(body)
  res.status(201).json(newCategorie)


  }
  )

  router.patch('/:id',
  validatorHandler(createCategorieSchema, 'params')  ,
  validatorHandler(updateCategorieSchema, 'body')  ,
  async(req,res,next)=>{

    try {
      const{id}=req.params
      const body= req.body;
    const categories= await service.update(id,body)
      res.json(categories)

    }catch(error){
    next(error)
    }
     }
    )

router.delete('/:id', async(req,res)=>{
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})
module.exports = router
