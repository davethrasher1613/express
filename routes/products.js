const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const ProductsService = require('./../services/product.service')
const service = new ProductsService()

router.get('/',async (req,res)=>{

  const products = await service.find()
  res.send(products)
})

router.get('/filter',(req,res)=>{
  res.send("Soy un filter")
})

router.get('/:id',async (req,res)=>{
  const {id} = req.params
  const products = await service.findOne(id)

  res.json(products)
})

router.post('/',async (req,res)=>{
  const body = req.body
  const newProduct = await service.create(body)
  res.status(200).json(newProduct)
})

router.patch('/:id',async (req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const product = await service.update(id,body)
    res.json(product)
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
