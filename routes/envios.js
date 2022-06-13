// responsabilidades unicas
const express= require('express');

const Enviosservice= require('./../services/envios.services')
const validatorHandler =require('./../middlewares/validator.handler')
const{createEnvioSchema,updateEnvioSchema,getEnvioSchema}=require('./../schemas/envios.schema')


const router = express.Router()

const service= new Enviosservice()
 //query param
router.get('/',async(req,res)=>{

  const envios= await service.find()

      res.json(envios);

      })

  // ejecucion http://localhost:7000/productos?size=10

  //endpoint get


  //filter
  router.get('/filter',(req,res)=>{


    res.send('soy un filter')


    })
    //cierre endpoint get filter

// llamar por  id a un producto

router.get('/:id',
validatorHandler(getEnvioSchema, 'params'),
async(req,res,next)=>{

  try{

    const{id}=req.params
    const envios=await service.findone(id)
    res.json(envios)

  }catch(error){
    next(error)
  }
}


)

//cierre de llamra por  id a un producto

//metodo post
router.post('/',

validatorHandler(createEnvioSchema,'body'),
async(req,res)=>{

  const body= req.body;
const newEnvio= await service.create(body)
  res.status(201).json(newEnvio)


  }
  )



  //cierre metodo post

  //metodo patch
router.patch('/:id',
validatorHandler(createEnvioSchema, 'params')  ,
validatorHandler(updateEnvioSchema, 'body')  ,
async(req,res,next)=>{

  try {
    const{id}=req.params
    const body= req.body;
  const envios= await service.update(id,body)
    res.json(envios)

  }catch(error){
  next(error)
  }
   }
  )
  //cierre de metodo path

  // metodo delete

  router.delete('/:id',async(req,res)=>{
    const{id}=req.params
    const rta= await service.delete(id)


      res.json(rta)

      })
  //cierre metodo delete
module.exports = router
