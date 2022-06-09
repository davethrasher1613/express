const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

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

router.delete('/:id', async(req,res)=>{
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})
module.exports = router
