const express = require('express')
const res = require('express/lib/response')
const VehiculoService = require('../services/vehiculo.services')

const router = express.Router()
const service = new VehiculoService()

router.get('/',async(req,res)=>{
    const vehiculo = await service.find()
    res.send (vehiculo)
})

router.get('/:id',async (req,res)=>{
    const {id} = req.params
    const vehiculo = await service.findOne(id)
    res.json(vehiculo)
})

router.post('/',async(req,res)=>{
    const body = req.body
    const newVehiculo = await service.create(body)
    res.status(200).json(newVehiculo)
})

router.patch('/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const body = req.params
        const vehiculos = await service.update(id,body)
        res.json(vehiculos)
    } catch (error) {
        res.status(404)({
            message: error.message
        })
    }
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params
    const rta = await service.delete(id)
    res.json(rta)
})

module.exports = router