
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const carritoCsService = require('../services/carritoCs.services')
const service = new carritoCsService()

router.get('/',async (req,res)=>{

  const carritoCs = await service.find()
  res.send(carritoCs)
})

router.get('/filter',(req,res)=>{
  res.send("Soy un filter")
})

router.get('/:id',async (req,res)=>{
  const {id} = req.params
  const carritoCs = await service.findOne(id)

  res.json(carritoCs)
})

router.post('/',async (req,res)=>{
  const body = req.body
  const newcarrito = await service.create(body)
  res.status(200).json(newcarrito)
})

router.patch('/:id',async (req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const carritoCs = await service.update(id,body)
    res.json(carritoCs)
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
