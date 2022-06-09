const express = require('express')
const VehiculoService = require('../services/vehiculo.services')

const router = express.Router()
const service = new VehiculoService()

router.get('/',async(req,res)=>{
    const vehiculo = await service.find()
    res.send (vehiculo)
})

router.get('/:id',(req,res)=>{
    const {id} = req.params
    const vehiculo = await service.find(id)
    res.json(vehiculo)
})

module.exports = router