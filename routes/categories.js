const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

<<<<<<< HEAD
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
=======
const categoriesService = require('./../services/categories.service')
const service = new categoriesService()

router.get('/',async (req,res)=>{

  const categories = await service.find()
  res.send(categories)
})

router.get('/filter',(req,res)=>{
  res.send("Soy un filter")
})

router.get('/:id',async (req,res)=>{
  const {id} = req.params
  const categories = await service.findOne(id)

  res.json(categories)
})

router.post('/',async (req,res)=>{
  const body = req.body
  const newCategories = await service.create(body)
  res.status(200).json(newCategories)
})

router.patch('/:id',async (req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const categories = await service.update(id,body)
    res.json(categories)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})
>>>>>>> b4a03771c0bec835499dbd84a0695677a4a7b9b6

router.delete('/:id', async(req,res)=>{
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})
module.exports = router
